export type CandidateEntity = {
  name: string;
  mobile: string;
  emailId: string;
  gender: string;
};

export type DashboardColumn = {
  label: string;
  value: keyof CandidateEntity;
};

export type Filter = {
  gender: string;
  yearOfExperience: string;
};
