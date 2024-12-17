export interface ResumeFile {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
  size: number;
}

export interface ResumeFormData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
}