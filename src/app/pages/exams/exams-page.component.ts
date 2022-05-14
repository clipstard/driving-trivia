import { Component, ViewChild } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
    selector: 'app-exams-page',
    templateUrl: 'exams-page.component.html',
    styleUrls: ['exams-page.component.scss'],
})
export class ExamsPageComponent {

    @ViewChild('flagRo', { read: IonToggle }) flagRo: IonToggle;
    @ViewChild('flagRu', { read: IonToggle }) flagRu: IonToggle;
    selectedLangRo: string|boolean = true;
    selectedLangRu: string|boolean = false;

    constructor(
    ) {
    }

    flagSelected(lang: 'ro'|'ru') {
        if (!this.selectedLangRo && !this.selectedLangRu) {
            if (lang === 'ro') {
                this.selectedLangRu = 'on';
            } else {
                this.selectedLangRo = 'on';
            }
        }

        if (this.selectedLangRo && this.selectedLangRu) {
            if (lang === 'ro') {
                this.selectedLangRu = false;
            } else {
                this.selectedLangRo = false;
            }
        }
    }
}
