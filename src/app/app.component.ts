import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '@app/services/storage.service';
import { ExamsService } from '@app/services/exams.service';
import { LoadingController } from '@ionic/angular';
import { fromPromise } from 'rxjs/internal-compatibility';
import { bufferTime, debounceTime, delay, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    loading = true;
    constructor(
        private translate: TranslateService,
        private storage: StorageService,
        private examsService: ExamsService,
        private loadingController: LoadingController,
    ) {
        translate.setDefaultLang('ro');
        translate.addLangs(['ru', 'ro']);
        translate.use('ro');
        translate.use('ru');
    }

    async ngOnInit() {
        const date1 = new Date().getTime();
        const loading = await this.presentLoadingWithOptions();
        await this.storage.init();
        await fromPromise(this.examsService.initStats()).pipe(delay(750)).toPromise();
        this.loading = false;
        await loading.dismiss();
        console.log(new Date().getTime() - date1);
    }

    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
            spinner: 'circular',
            duration: 0,
            message: 'Loading...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            backdropDismiss: false
        });
        await loading.present();
        return loading;
    }
}
