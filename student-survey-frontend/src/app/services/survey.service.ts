// src/app/services/survey.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  // Hardcoded API URL - replace with your actual backend URL
  private baseUrl = 'http://localhost:8080/api/surveys';

  constructor(private http: HttpClient) {}

  getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseUrl);
  }

  getSurveyById(id: number): Observable<Survey> {
    return this.http.get<Survey>(`${this.baseUrl}/${id}`);
  }

  createSurvey(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.baseUrl, survey);
  }

  updateSurvey(id: number, survey: Survey): Observable<Survey> {
    return this.http.put<Survey>(`${this.baseUrl}/${id}`, survey);
  }

  deleteSurvey(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}