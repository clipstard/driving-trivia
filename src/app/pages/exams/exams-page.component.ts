import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-exams-page',
    templateUrl: 'exams-page.component.html',
    styleUrls: ['exams-page.component.scss'],
})
export class ExamsPageComponent implements OnInit {
    isDark = false;

    constructor(
    ) {
    }

    ngOnInit() {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDark = media.matches;
        media.addEventListener('change', (e) => {
            this.isDark = e.matches;
        });
    }
}
