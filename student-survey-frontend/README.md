# Student Survey

## SWE 642 Assignment 3

- Hamaad Zuberi
- G01413525

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) for the frontend and Spring Boot for the backend REST API.

This application allows prospective students to fill out a survey form to provide feedback about their campus visit. It also allows users to view all surveys recorded to date and update or delete individual surveys.

## Features

- Welcome homepage with navigation links
- Student Survey form with validation
- List All Surveys page with options to view, edit, and delete surveys
- Full CRUD operations through REST API
- Responsive design using Bootstrap

## Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)
- Java 8 or higher (for backend)
- MySQL database (for backend)

## Setup and Installation

### Frontend Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`

### Running the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### API Configuration

The application is configured to connect to a backend API at `http://localhost:8080/api/surveys`. If your backend is running on a different URL, update the `baseUrl` in `src/app/services/survey.service.ts`.

## Project Structure

- `src/app/models` - Data models
- `src/app/services` - Service layer for API communication
- `src/app/components` - Angular components
- Home component
- Survey component (for creating surveys)
- Survey List component (for viewing all surveys)
- Survey Edit component (for editing existing surveys)

## Form Validation

The application implements validation for:

- Required fields (first name, last name, address, etc.)
- Email format
- Zip code format (12345 or 12345-6789)
- Phone number format ((123) 456-7890 or other common formats)