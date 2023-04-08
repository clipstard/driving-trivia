import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '@app/components/components.module'
import { ExamsRoutingModule } from '@pages/exams/exams-routing.module'
import { ExamsListComponent } from '@pages/exams/exams-list/exams-list.component'
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component'
import { ExamsModuleWrapperComponent } from '@pages/exams/exams-module-wrapper.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ComponentsModule,
        ExamsRoutingModule,
    ],
    declarations: [
        ExamsModuleWrapperComponent,
        ExamsListComponent,
        ExamViewPage,
    ],
    exports: [
        ExamsModuleWrapperComponent,
    ],
})
export class ExamsModule {
}
