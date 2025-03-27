// src/app/components/survey/survey.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    this.surveyForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      telephone: ['', [Validators.required, Validators.pattern('^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$')]],
      email: ['', [Validators.required, Validators.email]],
      surveyDate: [today, [Validators.required]],
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

  onSubmit(): void {
    this.submitted = true;
    
    // Stop if form is invalid
    if (this.surveyForm.invalid) {
      return;
    }

    this.surveyService.createSurvey(this.surveyForm.value)
      .subscribe({
        next: () => {
          alert('Survey submitted successfully!');
          this.router.navigate(['/surveys']);
        },
        error: (error) => {
          console.error('Error submitting survey:', error);
          alert('Error submitting survey. Please try again.');
        }
      });
  }

  onCancel(): void {
    this.surveyForm.reset();
    this.submitted = false;
    this.router.navigate(['/']);
  }

  // Helper method to check for form control errors
  get f() { return this.surveyForm.controls; }
}