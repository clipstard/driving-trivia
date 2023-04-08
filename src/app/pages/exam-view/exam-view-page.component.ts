import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ExamsService, ExamsStatsInterface } from '@app/services/exams.service';
import { noop } from 'rxjs';
import { AB, BE } from '@constants/exams-categories.const';
import { EXAMS_SETTINGS, ExamsSettingsConst } from '@constants/exams-settings.const';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-exams-page',
    templateUrl: 'exam-view-page.component.html',
    styleUrls: ['exam-view-page.component.scss'],
})
export class ExamViewPage implements OnInit {
    @Input() settings: ExamsSettingsConst;
    stats: ExamsStatsInterface[] = [];
    loaded = false;
    currentCategory = 'B'

    constructor(
        private examsService: ExamsService,
        private activatedRoute: ActivatedRoute,
    ) {
        console.log(this.activatedRoute.snapshot.data);
        console.log(this.activatedRoute.snapshot.params);
        this.currentCategory = this.activatedRoute.snapshot.params['category'] ?? ''
    }

    test() {
        console.log('clicked');
    }

    ngOnInit() {
        const media = window.matchMedia('(prefers-color-scheme: dark)');

        // this.initStats().then(noop);
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
