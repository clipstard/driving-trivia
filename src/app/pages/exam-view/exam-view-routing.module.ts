import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component';

const routes: Routes = [
    {
        path: '',
        component: ExamViewPage,
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
export class ExamViewRoutingModule {
}
