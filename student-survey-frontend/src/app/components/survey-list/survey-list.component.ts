// src/app/components/survey-list/survey-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Survey } from '../../models/survey.model';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  loading = true;
  error = false;

  constructor(
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.loading = true;
    this.surveyService.getAllSurveys()
      .subscribe({
        next: (data) => {
          this.surveys = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading surveys:', error);
          this.error = true;
          this.loading = false;
        }
      });
  }

  editSurvey(id: number): void {
    this.router.navigate(['/surveys', id, 'edit']);
  }

  deleteSurvey(id: number): void {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id)
        .subscribe({
          next: () => {
            this.surveys = this.surveys.filter(survey => survey.id !== id);
            alert('Survey deleted successfully');
          },
          error: (error) => {
            console.error('Error deleting survey:', error);
            alert('Error deleting survey. Please try again.');
          }
        });
    }
  }
}