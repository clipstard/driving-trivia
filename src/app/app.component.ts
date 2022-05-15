import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '@app/services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(
        private translate: TranslateService,
        private storage: StorageService,
    ) {
        translate.setDefaultLang('ro');
        translate.addLangs(['ru', 'ro']);
        translate.use('ro');
        translate.use('ru');
        storage.init();
    }
}
