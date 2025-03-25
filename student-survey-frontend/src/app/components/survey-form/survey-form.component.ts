import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent implements OnInit {
  surveyForm!: FormGroup;
  submitted = false;
  
  campusLikes = [
    { id: 'students', name: 'Students' },
    { id: 'location', name: 'Location' },
    { id: 'campus', name: 'Campus' },
    { id: 'atmosphere', name: 'Atmosphere' },
    { id: 'dormRooms', name: 'Dorm Rooms' },
    { id: 'sports', name: 'Sports' }
  ];
  
  interestSources = ['Friends', 'Television', 'Internet', 'Other'];
  recommendOptions = ['Very Likely', 'Likely', 'Unlikely'];

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      dateOfSurvey: ['', Validators.required],
      likedMost: this.fb.array([]),
      interestSource: ['', Validators.required],
      likelihood: ['', Validators.required],
      comments: ['']
    });
  }

  get likedMostFormArray() {
    return this.surveyForm.get('likedMost') as FormArray;
  }

  onCheckboxChange(event: any) {
    const likedMostArray = this.likedMostFormArray;
    
    if (event.target.checked) {
      likedMostArray.push(new FormControl(event.target.value));
    } else {
      const index = likedMostArray.controls.findIndex(control => control.value === event.target.value);
      if (index !== -1) {
        likedMostArray.removeAt(index);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.surveyForm.invalid) {
      return;
    }
    
    const surveyData: Survey = this.surveyForm.value;
    
    this.surveyService.createSurvey(surveyData).subscribe({
      next: () => {
        alert('Survey submitted successfully!');
        this.router.navigate(['/surveys']);
      },
      error: (error) => {
        console.error('Error submitting survey:', error);
        alert('Failed to submit survey. Please try again.');
      }
    });
  }

  onCancel() {
    this.surveyForm.reset();
    this.submitted = false;
    this.router.navigate(['/']);
  }
}