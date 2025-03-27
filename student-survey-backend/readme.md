# Student Survey - SWE 642 Assignment 3

- Hamaad Zuberi
- G01413525

This is the backend application for the Student Survey system built with Spring Boot.

## Features

- REST endpoints to perform CRUD operations on survey data  
- Integration with MySQL database using Spring Data JPA  
- Validation of survey submissions  

## Prerequisites

- Java 17 or higher  
- Maven  
- MySQL Database

## Setup

1. Clone the repository.
2. Update the database configuration in [application.properties](src/main/resources/application.properties) as needed.
3. Build the project with Maven: `mvn clean install`
4. Run the application: `mvn spring-boot:run`

## API Endpoints

- `GET /api/surveys` - Retrieve all surveys
- `GET /api/surveys/{id}` - Retrieve a survey by ID
- `POST /api/surveys` - Create a new survey
- `PUT /api/surveys/{id}` - Update an existing survey
- `DELETE /api/surveys/{id}` - Delete a survey

The main REST endpoints are implemented in SurveyController.java.
