import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../pages/exams/exams.module').then(m => m.ExamsModule),
                    },
                ],
            },
            {
                path: 'pages',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule),
                    },
                ],
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
