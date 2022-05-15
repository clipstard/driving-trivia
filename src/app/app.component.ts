import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '@app/services/storage.service';
import { ExamsService } from '@app/services/exams.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private storage: StorageService,
        private examsService: ExamsService,
    ) {
        translate.setDefaultLang('ro');
        translate.addLangs(['ru', 'ro']);
        translate.use('ro');
        translate.use('ru');
        storage.init();
    }

    async ngOnInit() {
        await this.storage.init();
        await this.examsService.ensureCategoriesExists();
    }
}
