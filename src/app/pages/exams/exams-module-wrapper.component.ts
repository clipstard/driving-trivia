import { Component } from '@angular/core'


@Component({
    selector: 'app-exams-module-wrapper',
    templateUrl: 'exams-module-wrapper.component.html',
    styleUrls: ['exams-module-wrapper.component.scss'],
})
export class ExamsModuleWrapperComponent {
    constructor() {
        console.log('i am module wrapper page')
    }
}
