import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from '@pages/themes/themes-page.component'

const routes: Routes = [
    {
        path: '',
        component: ThemesPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemesRoutingModule {
}
