/*
 * SurveyRepository.java
 * 
 * This interface serves as the repository layer for managing Survey entities.
 * It extends JpaRepository, providing built-in methods for CRUD operations
 * and database interactions. Custom query methods can be added as needed.
 * 
 */

package edu.gmu.studentsurvey.repository;

import edu.gmu.studentsurvey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // You can add custom query methods here if needed
}