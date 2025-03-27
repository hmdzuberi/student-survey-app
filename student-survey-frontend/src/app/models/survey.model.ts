// src/app/models/survey.model.ts
export interface Survey {
    id?: number;
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    telephone: string;
    email: string;
    surveyDate: string;
    likedStudents: boolean;
    likedLocation: boolean;
    likedCampus: boolean;
    likedAtmosphere: boolean;
    likedDormRooms: boolean;
    likedSports: boolean;
    interestSource: string;
    recommendationLikelihood: string;
    additionalComments: string;
  }