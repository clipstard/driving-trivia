import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@app/services/language.service';
import { NavigationEnd, Router } from '@angular/router'


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() title;
    selectedLangRo: boolean;
    selectedLangRu: boolean;
    currentUrl: string

    constructor(
        private translate: TranslateService,
        private languageService: LanguageService,
        private router: Router,
    ) {
        this.currentUrl = router.url
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.url
                if (url) {
                    this.currentUrl = url
                }
            }
        })

        const lan = this.languageService.getOnlyOne();
        this.selectedLangRo = lan === 'ro';
        this.selectedLangRu = lan === 'ru';

        this.flagSelected(lan);
    }

    flagSelected(lang: 'ro'|'ru') {
        if (!this.selectedLangRo && !this.selectedLangRu) {
            if (lang === 'ro') {
                this.selectedLangRu = true;
            } else {
                this.selectedLangRo = true;
            }
        }

        if (this.selectedLangRo && this.selectedLangRu) {
            if (lang === 'ro') {
                this.selectedLangRu = false;
            } else {
                this.selectedLangRo = false;
            }
        }

        if (lang === 'ro' && this.selectedLangRo) {
            this.translate.use('ro');
            this.languageService.setOnlyOne('ro');
        }

        if (lang === 'ru' && this.selectedLangRu) {
            this.translate.use('ru');
            this.languageService.setOnlyOne('ru');
        }
    }
}
