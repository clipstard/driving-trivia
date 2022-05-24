import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamsSettingsConst } from '@constants/exams-settings.const';


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
    ) {
    }

    ngOnInit() {
        console.log(this.route.snapshot);

    }
}
