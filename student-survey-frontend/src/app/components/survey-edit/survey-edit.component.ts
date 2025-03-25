import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Survey } from '../../models/survey';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './survey-edit.component.html',
  styleUrl: './survey-edit.component.css'
})
export class SurveyEditComponent implements OnInit {
  surveyForm!: FormGroup;
  surveyId!: number;
  loading = true;
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
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.initForm();
    
    this.route.params.subscribe(params => {
      this.surveyId = +params['id'];
      this.loadSurvey();
    });
  }

  initForm(): void {
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

  loadSurvey(): void {
    this.surveyService.getSurveyById(this.surveyId).subscribe({
      next: (survey) => {
        // Clear the previous form array
        while (this.likedMostFormArray.length) {
          this.likedMostFormArray.removeAt(0);
        }
        
        // Add the liked items to the form array
        if (survey.likedMost && Array.isArray(survey.likedMost)) {
          survey.likedMost.forEach(item => {
            this.likedMostFormArray.push(new FormControl(item));
          });
        }
        
        // Update form values (except likedMost which is handled above)
        this.surveyForm.patchValue({
          firstName: survey.firstName,
          lastName: survey.lastName,
          streetAddress: survey.streetAddress,
          city: survey.city,
          state: survey.state,
          zip: survey.zip,
          telephone: survey.telephone,
          email: survey.email,
          dateOfSurvey: survey.dateOfSurvey,
          interestSource: survey.interestSource,
          likelihood: survey.likelihood,
          comments: survey.comments
        });
        
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading survey:', error);
        alert('Failed to load survey details');
        this.router.navigate(['/surveys']);
      }
    });
  }

  isLiked(option: string): boolean {
    return this.likedMostFormArray.value.includes(option);
  }

  onCheckboxChange(event: any): void {
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

  onSubmit(): void {
    this.submitted = true;
    
    if (this.surveyForm.invalid) {
      return;
    }
    
    const surveyData: Survey = this.surveyForm.value;
    
    this.surveyService.updateSurvey(this.surveyId, surveyData).subscribe({
      next: () => {
        alert('Survey updated successfully!');
        this.router.navigate(['/surveys']);
      },
      error: (error) => {
        console.error('Error updating survey:', error);
        alert('Failed to update survey');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/surveys']);
  }
}