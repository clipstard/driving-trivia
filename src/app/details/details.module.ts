import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '@components/components.module';

@NgModule({
    imports: [CommonModule, IonicModule, DetailsPageRoutingModule, TranslateModule, ComponentsModule],
    declarations: [DetailsPage],
    exports: [DetailsPage],
})
export class DetailsPageModule {}
