import { HeaderComponent } from './header/header.component';
import { Type } from '@angular/core';
import { DrivingListItemComponent } from '@components/driving-list-item/driving-list-item.component';
import { DescriptionTemplateComponent } from '@components/description-template/description-template.component';

export * from './header/header.component';

export const components: Type<any>[] = [
    HeaderComponent,
    DrivingListItemComponent,
    DescriptionTemplateComponent,
];
