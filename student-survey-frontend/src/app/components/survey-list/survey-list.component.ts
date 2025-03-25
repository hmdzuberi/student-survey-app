import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];
  loading = true;
  error = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.loading = true;
    this.surveyService.getAllSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching surveys:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  deleteSurvey(id: number): void {
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe({
        next: () => {
          this.surveys = this.surveys.filter(survey => survey.id !== id);
          alert('Survey deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting survey:', error);
          alert('Failed to delete survey');
        }
      });
    }
  }
}