import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesPageComponent } from '@app/pages/themes/themes-page.component';
import { StatsPageComponent } from '@app/pages/stats/stats-page.component';
import { SettingsPageComponent } from '@app/pages/settings/settings-page.component';

const routes: Routes = [
    {
        path: '',
        component: ThemesPageComponent,
    },
    {
        path: 'stats',
        component: StatsPageComponent,
    },
    {
        path: 'settings',
        component: SettingsPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
