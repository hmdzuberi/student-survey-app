import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'survey',
    loadComponent: () => import('./components/survey-form/survey-form.component').then(m => m.SurveyFormComponent)
  },
  {
    path: 'surveys',
    loadComponent: () => import('./components/survey-list/survey-list.component').then(m => m.SurveyListComponent)
  },
  {
    path: 'surveys/edit/:id',
    loadComponent: () => import('./components/survey-edit/survey-edit.component').then(m => m.SurveyEditComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];