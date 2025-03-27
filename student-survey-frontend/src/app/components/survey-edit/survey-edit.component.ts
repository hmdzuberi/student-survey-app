// src/app/components/survey-edit/survey-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
  surveyForm!: FormGroup;
  submitted = false;
  loading = true;
  error = false;
  surveyId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.surveyId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSurvey();
  }

  initializeForm(): void {
    this.surveyForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      telephone: ['', [Validators.required, Validators.pattern('^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$')]],
      email: ['', [Validators.required, Validators.email]],
      surveyDate: ['', [Validators.required]],
      likedStudents: [false],
      likedLocation: [false],
      likedCampus: [false],
      likedAtmosphere: [false],
      likedDormRooms: [false],
      likedSports: [false],
      interestSource: ['', [Validators.required]],
      recommendationLikelihood: ['', [Validators.required]],
      additionalComments: ['']
    });
  }

  loadSurvey(): void {
    this.loading = true;
    this.surveyService.getSurveyById(this.surveyId)
      .subscribe({
        next: (survey) => {
          this.surveyForm.patchValue(survey);
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading survey:', error);
          this.error = true;
          this.loading = false;
        }
      });
  }

  onSubmit(): void {
    this.submitted = true;
    
    // Stop if form is invalid
    if (this.surveyForm.invalid) {
      return;
    }

    this.surveyService.updateSurvey(this.surveyId, this.surveyForm.value)
      .subscribe({
        next: () => {
          alert('Survey updated successfully!');
          this.router.navigate(['/surveys']);
        },
        error: (error) => {
          console.error('Error updating survey:', error);
          alert('Error updating survey. Please try again.');
        }
      });
  }

  onCancel(): void {
    this.router.navigate(['/surveys']);
  }

  // Helper method to check for form control errors
  get f() { return this.surveyForm.controls; }
}