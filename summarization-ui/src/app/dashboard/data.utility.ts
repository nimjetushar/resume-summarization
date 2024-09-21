import {CandidateEntity} from '../types/candidate';

const extractData = (text: string, separator = ':') => {
  if (text.includes(separator)) {
    const splitedData = text.split(separator);
    splitedData.shift();
    return splitedData.join();
  }
  return text;
};

export const modifyData = (data: CandidateEntity[]) => {
  return data.map((d) => ({
    ...d,
    email: extractData(d.email),
    contactNumber: extractData(d.contactNumber),
    summary: extractData(
      d.summary,
      'Here is a summarized version of the CV under 300 words:'
    ),
    skills: extractData(d.skills),
    companyWorkedFor: extractData(d.companyWorkedFor),
  }));
};

export const elipsisData = (text: string) => {
  const noOfChar = 150;
  if (text.length > noOfChar) {
    return text.slice(0, noOfChar) + '...';
  }
  return text;
};
