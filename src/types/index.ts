export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  status: 'Live' | 'Research Complete' | 'Demo Available';
  type: string;
  image: string;
  category: string;
  grade?: string;
  liveUrl?: string;
  videoDemo?: boolean;
  demoVideoUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: 'apprentice' | 'internship' | 'full-time' | 'part-time' | 'freelance';
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  current: boolean;
  specialization?: string;
  achievements?: Achievement[];
  finalProject?: FinalProject;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface FinalProject {
  title: string;
  description: string;
  grade: string;
}

export interface StatusBadgeProps {
  status: Project['status'];
}

export interface TechnologyTagProps {
  technologies: string[];
  maxVisible?: number;
}

export interface ExperienceCardProps {
  experience: Experience;
  timelinePosition: 'current' | 'past';
}
