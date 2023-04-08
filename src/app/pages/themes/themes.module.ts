import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@app/components/components.module';
import { ThemesPageComponent } from '@pages/themes/themes-page.component'
import { ThemesRoutingModule } from '@pages/themes/themes-routing.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ComponentsModule,
        ThemesRoutingModule,
    ],
    declarations: [
        ThemesPageComponent,
    ],
    exports: [
        ThemesPageComponent,
    ],
})
export class ThemesModule {
}
