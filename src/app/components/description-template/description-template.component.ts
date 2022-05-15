import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-description-template',
    templateUrl: 'description-template.component.html',
    styleUrls: ['description-template.component.scss'],
})
export class DescriptionTemplateComponent implements OnInit {

    @Input() title;
    selectedLangRo: string|boolean = true;
    selectedLangRu: string|boolean = false;

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
