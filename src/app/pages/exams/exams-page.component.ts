import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamsService, ExamsStatsInterface } from '@app/services/exams.service';
import { noop } from 'rxjs';

@Component({
    selector: 'app-exams-page',
    templateUrl: 'exams-page.component.html',
    styleUrls: ['exams-page.component.scss'],
})
export class ExamsPageComponent implements OnInit {
    isDark = false;
    stats: ExamsStatsInterface[] = [];
    loaded = false;

    constructor(
        private examsService: ExamsService,
    ) {
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
        this.stats = await this.examsService.getAll();
        console.log(this.stats);
        this.stats = this.stats.sort((a: ExamsStatsInterface, b: ExamsStatsInterface) => {

            if (a.category < b.category) {
                return -1;
            }

            if (a.category > b.category) {
                return 1;
            }

            return 0;
        });

        this.loaded = true;
    }
}
