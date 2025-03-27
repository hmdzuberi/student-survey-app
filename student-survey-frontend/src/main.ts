// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { SurveyComponent } from './app/components/survey/survey.component';
import { SurveyListComponent } from './app/components/survey-list/survey-list.component';
import { SurveyEditComponent } from './app/components/survey-edit/survey-edit.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id/edit', component: SurveyEditComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));