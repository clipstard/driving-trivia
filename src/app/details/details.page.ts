import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamsSettingsConst } from '@constants/exams-settings.const';
import { NavController } from '@ionic/angular';
import { LanguageService } from '@app/services/language.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    @Input() settings: ExamsSettingsConst = {
        success: 0,
        total: 0,
        permittedFails: 0,
        questions: 0,
        time: 0,
    };

    constructor(
        private route: ActivatedRoute,
        private navController: NavController,
        private languageService: LanguageService,
        private translate: TranslateService,
    ) {
    }

    ngOnInit() {
        console.log(this.route.snapshot);
    }

    ionViewDidEnter() {
        this.translate.use(this.languageService.getOnlyOne());
    }

    navigate() {
        this.navController.navigateForward('/details/view-page');
        console.log(this.navController.consumeTransition());
    }
}
