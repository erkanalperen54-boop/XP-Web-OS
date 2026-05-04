
export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
