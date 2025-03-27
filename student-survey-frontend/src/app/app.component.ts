// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" [routerLink]="['/']">Student Survey App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/']" routerLinkActive="active" 
                 [routerLinkActiveOptions]="{exact: true}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/survey']" routerLinkActive="active">New Survey</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/surveys']" routerLinkActive="active">All Surveys</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
    <footer class="bg-light text-center text-lg-start mt-5">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2025 SWE 642 - Assignment 3 - Student Survey Frontend
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Student Survey Frontend';
}