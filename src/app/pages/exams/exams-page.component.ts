import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamsService, ExamsStatsInterface } from '@app/services/exams.service';
import { noop } from 'rxjs';
import { AB, BE } from '@constants/exams-categories.const';
import { EXAMS_SETTINGS } from '@constants/exams-settings.const';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-exams-page',
    templateUrl: 'exams-page.component.html',
    styleUrls: ['exams-page.component.scss'],
})
export class ExamsPageComponent implements OnInit {
    settings = EXAMS_SETTINGS;
    isDark = false;
    stats: ExamsStatsInterface[] = [];
    loaded = false;

    constructor(
        private examsService: ExamsService,
        private navController: NavController,
        private router: Router,
    ) {
    }

    test() {
        console.log('clicked');
        // this.router.navigate(['details']).then(() => console.log('navigate'));
        this.navController.navigateForward(['/exams/details']);
    }

    ngOnInit() {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDark = media.matches;
        media.addEventListener('change', (e) => {
            this.isDark = e.matches;
        });

        this.initStats().then(noop);
    }

    public async initStats() {
        for (const category of [AB, BE]) {
            await this.mapSettings(category);
        }
        this.loaded = true;
    }

    public async mapSettings(category: string) {
        const { total, success } = await this.examsService.getByCategory(category);
        this.settings[category] = {
            ...this.settings[category],
            total,
            success,
        };
    }
}
