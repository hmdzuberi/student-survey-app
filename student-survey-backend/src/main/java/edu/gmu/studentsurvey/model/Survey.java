/**
 * This class represents a Survey entity for a student survey application.
 * It is mapped to a database table named "surveys" using JPA annotations.
 * The Survey class contains fields for storing personal information, survey preferences,
 * and additional comments provided by the user.
 * 
 * Key features:
 * - Validation annotations ensure data integrity for fields like email, ZIP code, and telephone.
 * - Includes fields for survey preferences such as liked aspects of the campus and interest sources.
 * - Provides constructors, getters, and setters for all fields.
 * 
 * This class is used as part of the backend model for managing survey data.
 */

package edu.gmu.studentsurvey.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import java.time.LocalDate;

@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "First name is required")
    @Column(nullable = false)
    private String firstName;
    
    @NotBlank(message = "Last name is required")
    @Column(nullable = false)
    private String lastName;
    
    @NotBlank(message = "Street address is required")
    @Column(nullable = false)
    private String streetAddress;
    
    @NotBlank(message = "City is required")
    @Column(nullable = false)
    private String city;
    
    @NotBlank(message = "State is required")
    @Column(nullable = false)
    private String state;
    
    @NotBlank(message = "ZIP code is required")
    @Pattern(regexp = "^\\d{5}(-\\d{4})?$", message = "Invalid ZIP code format")
    @Column(nullable = false)
    private String zip;
    
    @NotBlank(message = "Telephone number is required")
    @Pattern(regexp = "^\\(\\d{3}\\)\\s?\\d{3}-\\d{4}$|^\\d{3}-\\d{3}-\\d{4}$", message = "Invalid telephone format")
    @Column(nullable = false)
    private String telephone;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private LocalDate surveyDate;
    
    private boolean likedStudents;
    private boolean likedLocation;
    private boolean likedCampus;
    private boolean likedAtmosphere;
    private boolean likedDormRooms;
    private boolean likedSports;
    
    @NotBlank(message = "Interest source is required")
    @Column(nullable = false)
    private String interestSource; // friends, television, internet, other
    
    @NotBlank(message = "Recommendation likelihood is required")
    @Column(nullable = false)
    private String recommendationLikelihood; // very likely, likely, unlikely
    
    @Column(columnDefinition = "TEXT")
    private String additionalComments;
    
    // Default constructor
    public Survey() {}
    
    // Constructor with all fields
    public Survey(String firstName, String lastName, String streetAddress,
                 String city, String state, String zip, String telephone,
                 String email, LocalDate surveyDate, boolean likedStudents,
                 boolean likedLocation, boolean likedCampus, boolean likedAtmosphere,
                 boolean likedDormRooms, boolean likedSports, String interestSource,
                 String recommendationLikelihood, String additionalComments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.telephone = telephone;
        this.email = email;
        this.surveyDate = surveyDate;
        this.likedStudents = likedStudents;
        this.likedLocation = likedLocation;
        this.likedCampus = likedCampus;
        this.likedAtmosphere = likedAtmosphere;
        this.likedDormRooms = likedDormRooms;
        this.likedSports = likedSports;
        this.interestSource = interestSource;
        this.recommendationLikelihood = recommendationLikelihood;
        this.additionalComments = additionalComments;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    
    public String getStreetAddress() { return streetAddress; }
    public void setStreetAddress(String streetAddress) { this.streetAddress = streetAddress; }
    
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    
    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }
    
    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public LocalDate getSurveyDate() { return surveyDate; }
    public void setSurveyDate(LocalDate surveyDate) { this.surveyDate = surveyDate; }
    
    public boolean isLikedStudents() { return likedStudents; }
    public void setLikedStudents(boolean likedStudents) { this.likedStudents = likedStudents; }
    
    public boolean isLikedLocation() { return likedLocation; }
    public void setLikedLocation(boolean likedLocation) { this.likedLocation = likedLocation; }
    
    public boolean isLikedCampus() { return likedCampus; }
    public void setLikedCampus(boolean likedCampus) { this.likedCampus = likedCampus; }
    
    public boolean isLikedAtmosphere() { return likedAtmosphere; }
    public void setLikedAtmosphere(boolean likedAtmosphere) { this.likedAtmosphere = likedAtmosphere; }
    
    public boolean isLikedDormRooms() { return likedDormRooms; }
    public void setLikedDormRooms(boolean likedDormRooms) { this.likedDormRooms = likedDormRooms; }
    
    public boolean isLikedSports() { return likedSports; }
    public void setLikedSports(boolean likedSports) { this.likedSports = likedSports; }
    
    public String getInterestSource() { return interestSource; }
    public void setInterestSource(String interestSource) { this.interestSource = interestSource; }
    
    public String getRecommendationLikelihood() { return recommendationLikelihood; }
    public void setRecommendationLikelihood(String recommendationLikelihood) { this.recommendationLikelihood = recommendationLikelihood; }
    
    public String getAdditionalComments() { return additionalComments; }
    public void setAdditionalComments(String additionalComments) { this.additionalComments = additionalComments; }
}