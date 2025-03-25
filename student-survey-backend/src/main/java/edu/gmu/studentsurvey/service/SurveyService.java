package edu.gmu.studentsurvey.service;

import edu.gmu.studentsurvey.exception.ResourceNotFoundException;
import edu.gmu.studentsurvey.model.Survey;
import edu.gmu.studentsurvey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    public Survey getSurveyById(Long id) {
        return surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey not found with id: " + id));
    }

    public Survey createSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    public Survey updateSurvey(Long id, Survey surveyDetails) {
        Survey survey = getSurveyById(id);
        
        survey.setFirstName(surveyDetails.getFirstName());
        survey.setLastName(surveyDetails.getLastName());
        survey.setStreetAddress(surveyDetails.getStreetAddress());
        survey.setCity(surveyDetails.getCity());
        survey.setState(surveyDetails.getState());
        survey.setZip(surveyDetails.getZip());
        survey.setTelephone(surveyDetails.getTelephone());
        survey.setEmail(surveyDetails.getEmail());
        survey.setSurveyDate(surveyDetails.getSurveyDate());
        survey.setLikedStudents(surveyDetails.isLikedStudents());
        survey.setLikedLocation(surveyDetails.isLikedLocation());
        survey.setLikedCampus(surveyDetails.isLikedCampus());
        survey.setLikedAtmosphere(surveyDetails.isLikedAtmosphere());
        survey.setLikedDormRooms(surveyDetails.isLikedDormRooms());
        survey.setLikedSports(surveyDetails.isLikedSports());
        survey.setInterestSource(surveyDetails.getInterestSource());
        survey.setRecommendationLikelihood(surveyDetails.getRecommendationLikelihood());
        survey.setAdditionalComments(surveyDetails.getAdditionalComments());
        
        return surveyRepository.save(survey);
    }

    public void deleteSurvey(Long id) {
        Survey survey = getSurveyById(id);
        surveyRepository.delete(survey);
    }
}