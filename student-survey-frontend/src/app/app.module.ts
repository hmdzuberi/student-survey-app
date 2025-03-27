// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyEditComponent } from './components/survey-edit/survey-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id/edit', component: SurveyEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // Import the standalone components here instead of declaring them
    AppComponent,
    HomeComponent,
    SurveyComponent,
    SurveyListComponent,
    SurveyEditComponent
  ],
  // Remove the declarations array, or keep it empty if needed for other non-standalone components
  declarations: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }