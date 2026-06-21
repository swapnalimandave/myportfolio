export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  techStack: string[];
  contributors?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  badge?: string;
  year?: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string[];
  statusDotColor: 'mauve' | 'green' | 'blue' | 'pink'; // mapped to our palette
}

export interface HackathonEntry {
  id: string;
  title: string;
  organization: string;
  award: string;
  description?: string;
  badgeType: 'winner' | 'finalist' | 'participant';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
