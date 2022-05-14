import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamsPageComponent } from './exams/exams-page.component';
import { PagesRoutingModule } from '@app/pages/pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsPageComponent } from '@app/pages/settings/settings-page.component';
import { StatsPageComponent } from '@app/pages/stats/stats-page.component';
import { ThemesPageComponent } from '@app/pages/themes/themes-page.component';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PagesRoutingModule,
        TranslateModule,
        ComponentsModule,
    ],
    declarations: [
        ExamsPageComponent,
        SettingsPageComponent,
        StatsPageComponent,
        ThemesPageComponent,
    ],
    exports: [
        ExamsPageComponent,
        SettingsPageComponent,
        StatsPageComponent,
        ThemesPageComponent,
    ],
})
export class PagesModule {
}
