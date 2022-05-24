import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsPageComponent } from './exams/exams-page.component';
import { ThemesPageComponent } from '@app/pages/themes/themes-page.component';
import { StatsPageComponent } from '@app/pages/stats/stats-page.component';
import { SettingsPageComponent } from '@app/pages/settings/settings-page.component';
import { ExamViewPage } from '@pages/exam-view/exam-view-page.component';

const routes: Routes = [
    {
        path: 'exams',
        component: ExamsPageComponent,
    },
    {
        path: 'themes',
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
        path: 'view-page',
        component: ExamViewPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
