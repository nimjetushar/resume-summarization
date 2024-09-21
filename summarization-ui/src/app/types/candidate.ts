export type CandidateEntity = {
  name: string;
  contactNumber: string;
  email: string;
  gender: string;
  yearOfExperience: string;
  skills: string;
  companyWorkedFor: string;
  summary: string;
};

export type DashboardColumn = {
  label: string;
  value: keyof CandidateEntity;
};

export type Filter = {
  gender: string;
  yearOfExperience: string;
  skills: string[];
};
