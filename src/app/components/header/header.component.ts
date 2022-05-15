import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() title;
    selectedLangRo: string|boolean = true;
    selectedLangRu: string|boolean = false;

    constructor(
        private translate: TranslateService,
    ) {
    }

    ngOnInit() {
        this.flagSelected('ro');
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

        if (this.selectedLangRo) {
            this.translate.use('ro');
        }

        if (this.selectedLangRu) {
            this.translate.use('ru');
        }
    }
}
