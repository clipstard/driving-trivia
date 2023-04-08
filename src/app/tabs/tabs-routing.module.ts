import { inject, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CanDeactivateGuard } from '@app/guards/can-deactivate.guard'

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'exams',
                loadChildren: () => import('../pages/exams/exams.module').then(m => m.ExamsModule),
            },
            {
                path: 'stats',
                loadChildren: () => import('../pages/stats/stats.module').then(m => m.StatsModule),
            },
            {
                path: 'themes',
                loadChildren: () => import('../pages/themes/themes.module').then(m => m.ThemesModule),
            },
            {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsModule),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'exams',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
