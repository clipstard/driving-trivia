import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/components/components.module';
import { StatsPageComponent } from '@pages/stats/stats-page.component'
import { StatsRoutingModule } from '@pages/stats/stats-routing.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ComponentsModule,
        StatsRoutingModule,
    ],
    declarations: [
        StatsPageComponent,
    ],
    exports: [
        StatsPageComponent,
    ],
})
export class StatsModule {
}
