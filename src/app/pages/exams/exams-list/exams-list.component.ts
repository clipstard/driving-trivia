import { Component, OnInit } from '@angular/core'
import { EXAMS_SETTINGS } from '@constants/exams-settings.const'
import { ExamsService, ExamsStatsInterface } from '@app/services'
import { NavController } from '@ionic/angular'
import { ActivatedRoute, Router } from '@angular/router'
import { noop } from 'rxjs'
import { AB, BE } from '@constants/exams-categories.const'
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component'

@Component({
    selector: 'app-exams-list',
    templateUrl: './exams-list.component.html',
    styleUrls: ['./exams-list.component.scss'],
})
export class ExamsListComponent implements OnInit {
    viewDetailsComponent = ExamViewPage
    settings = EXAMS_SETTINGS
    isDark = false
    stats: ExamsStatsInterface[] = []
    loaded = false

    constructor(
        private examsService: ExamsService,
        private navController: NavController,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    test() {
        console.log('clicked')
        // this.router.navigate(['details']).then(() => console.log('navigate'));
        // this.router.navigateByUrl('/exams/category/ab')
        this.navController.navigateForward([ '/exams/category/ab'], /*{ relativeTo: this.route }*/)
    }

    ngOnInit() {
        console.log(this.router.url)

        console.log('i init list')
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        this.isDark = media.matches
        media.addEventListener('change', (e) => {
            this.isDark = e.matches
        })

        this.initStats().then(noop)
    }

    public async initStats() {
        for (const category of [AB, BE]) {
            await this.mapSettings(category)
        }
        this.loaded = true
    }

    public async mapSettings(category: string) {
        const { total, success } = await this.examsService.getByCategory(category)
        this.settings[category] = {
            ...this.settings[category],
            total,
            success,
        }
    }
}
