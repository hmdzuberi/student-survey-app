/*
 * StudentSurveyApplication.java
 * 
 * This is the main entry point for the Student Survey application.
 * The application is built using the Spring Boot framework and is designed
 * to handle backend operations for a student survey system.
 * 
 */

package edu.gmu.studentsurvey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentSurveyApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentSurveyApplication.class, args);
    }
}