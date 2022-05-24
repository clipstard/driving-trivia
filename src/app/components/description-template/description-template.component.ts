import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-description-template',
    templateUrl: 'description-template.component.html',
    styleUrls: ['description-template.component.scss'],
})
export class DescriptionTemplateComponent implements OnInit {

    @Input() questions: number;
    @Input() time = 30;
    @Input() total = 0;
    @Input() permittedFails = 2;
    @Input() success = 0;
    @Input() title;

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
