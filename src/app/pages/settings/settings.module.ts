import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/components/components.module';
import { SettingsPageComponent } from '@pages/settings/settings-page.component'
import { SettingsRoutingModule } from '@pages/settings/settings-routing.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ComponentsModule,
        SettingsRoutingModule,
    ],
    declarations: [
        SettingsPageComponent,
    ],
    exports: [
        SettingsPageComponent,
    ],
})
export class SettingsModule {
}
