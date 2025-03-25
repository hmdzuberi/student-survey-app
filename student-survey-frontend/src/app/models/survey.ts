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
    dateOfSurvey: string;
    likedMost: string[];
    interestSource: string;
    likelihood: string;
    comments: string;
  }