/**
 * SurveyController is a REST controller that handles HTTP requests for managing surveys.
 * It provides endpoints to perform CRUD operations on surveys, including:
 * - Retrieving all surveys
 * - Retrieving a survey by its ID
 * - Creating a new survey
 * - Updating an existing survey
 * - Deleting a survey by its ID
 * 
 * This controller interacts with the SurveyService to perform the necessary business logic.
 * It also uses Spring Boot annotations to define request mappings and handle cross-origin requests.
 */

package edu.gmu.studentsurvey.controller;

import edu.gmu.studentsurvey.model.Survey;
import edu.gmu.studentsurvey.service.SurveyService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        List<Survey> surveys = surveyService.getAllSurveys();
        return new ResponseEntity<>(surveys, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable Long id) {
        Survey survey = surveyService.getSurveyById(id);
        return new ResponseEntity<>(survey, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Survey> createSurvey(@Valid @RequestBody Survey survey) {
        Survey newSurvey = surveyService.createSurvey(survey);
        return new ResponseEntity<>(newSurvey, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @Valid @RequestBody Survey survey) {
        Survey updatedSurvey = surveyService.updateSurvey(id, survey);
        return new ResponseEntity<>(updatedSurvey, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long id) {
        surveyService.deleteSurvey(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}