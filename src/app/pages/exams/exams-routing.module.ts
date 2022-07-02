import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsPageComponent } from './exams-page.component';

const routes: Routes = [
    {
        path: '',
        component: ExamsPageComponent,
    },
    {
        path: 'details',
        children: [
            {
                path: '',
                loadChildren: () => import('../../details/details.module').then(m => m.DetailsPageModule),
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamsRoutingModule {
}
