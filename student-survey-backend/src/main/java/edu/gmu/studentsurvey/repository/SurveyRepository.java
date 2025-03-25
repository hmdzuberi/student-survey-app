package edu.gmu.studentsurvey.repository;

import edu.gmu.studentsurvey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // You can add custom query methods here if needed
}