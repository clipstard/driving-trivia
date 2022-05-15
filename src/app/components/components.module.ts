import { NgModule } from '@angular/core';
import { components } from '@components/index';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        TranslateModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        ...components,
    ],
    exports: [
        ...components,
    ],
})
export class ComponentsModule {
}
