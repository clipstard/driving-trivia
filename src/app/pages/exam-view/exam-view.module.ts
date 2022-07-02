import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/components/components.module';
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component';
import { ExamViewRoutingModule } from '@pages/exam-view/exam-view-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ComponentsModule,
        ExamViewRoutingModule,
    ],
    declarations: [
        ExamViewPage,
    ],
    exports: [
        ExamViewPage,
    ],
})
export class ExamViewModule {
}
