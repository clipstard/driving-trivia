import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsListComponent } from '@pages/exams/exams-list/exams-list.component'
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component'
import { ExamsModuleWrapperComponent } from '@pages/exams/exams-module-wrapper.component'

const routes: Routes = [
    {
        path: '',
        component: ExamsModuleWrapperComponent,
        children: [
            {
                path: '',
                component: ExamsListComponent,
            },
            {
                path: 'category/:category',
                component: ExamViewPage,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamsRoutingModule {
}
