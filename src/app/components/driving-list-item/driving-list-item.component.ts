import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-driving-list-item',
    templateUrl: 'driving-list-item.component.html',
    styleUrls: ['driving-list-item.component.scss'],
})
export class DrivingListItemComponent implements  OnInit {

    @Input() title: string;
    @Input() imgSrc: string;
    @Input() description: TemplateRef<any>;
    @Input() categories: string[] = [];
    @Input() minutes = 0;

    isDark = false;
    src: string;

    constructor(
    ) {
    }

    ngOnInit() {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        this.setPreferredColor(media);
        media.addEventListener('change', (event) => {
            this.setPreferredColor(event);
        });
    }

    setPreferredColor(media: MediaQueryListEvent|MediaQueryList) {
        this.isDark = media.matches;
        this.src = this.imgSrc + (this.isDark ? '-dark' : '') + '.png';
    }
}
