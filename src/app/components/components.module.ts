import { NgModule } from '@angular/core';
import { components } from '@app/components/index';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        IonicModule,
        TranslateModule,
        FormsModule,
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
