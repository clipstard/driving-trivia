import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamsPageComponent } from './exams-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/components/components.module';
import { ExamsRoutingModule } from '@pages/exams/exams-routing.module';

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
        ExamsPageComponent,
    ],
    exports: [
        ExamsPageComponent,
    ],
})
export class ExamsModule {
}
