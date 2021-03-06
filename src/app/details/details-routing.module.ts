import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsPage } from './details.page';

const routes: Routes = [
    {
        path: '',
        component: DetailsPage,
    },
    {
        path: 'view-page',
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/exam-view/exam-view.module').then(m => m.ExamViewModule),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '',
            }
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
    exports: [RouterModule],
})
export class DetailsPageRoutingModule {
}
