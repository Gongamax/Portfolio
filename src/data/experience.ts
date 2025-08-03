import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Frontend Apprentice',
    company: 'Sky Portugal',
    period: 'Jul 2025 - Aug 2025',
    current: true,
    description: 'Currently gaining valuable hands-on experience in frontend development and DevOps practices during this intensive apprenticeship program. Working with Apple TV application development and modern CI/CD pipelines in an Agile environment.',
    responsibilities: [
      'Developed Apple TV application using Swift, contributing to streaming platform UI and functionality',
      'Implemented CI/CD pipelines using Jenkins and Groovy for performance reporting',
      'Improved development workflow efficiency through automation and best practices',
      'Collaborated with cross-functional teams in Agile development environment',
      'Gained hands-on experience in DevOps practices and modern software methodologies'
    ],
    technologies: ['Swift', 'Apple TV', 'Jenkins', 'Groovy', 'CI/CD', 'Agile', 'DevOps'],
    type: 'apprentice'
  },
  {
    id: 2,
    title: 'Programmer',
    company: 'Universidade Lusófona',
    period: 'Jun 2023 - Oct 2023',
    current: false,
    description: 'Developed intuitive GUI solutions for engineering applications, focusing on user experience and data collection efficiency for laboratory equipment.',
    responsibilities: [
      'Developed intuitive GUI for Tension Testing Machine to streamline data collection',
      'Utilized Python and CustomTkinter to create user-friendly interfaces',
      'Improved data collection efficiency and reduced input errors',
      'Enhanced user experience through thoughtful human-computer interaction design',
      'Fostered deeper understanding of engineering applications through software solutions'
    ],
    technologies: ['Python', 'CustomTkinter', 'GUI Development', 'UX Design', 'Data Collection'],
    type: 'part-time'
  }
];

export const experienceGradients = {
  1: { bg: 'from-blue-500 to-purple-500', border: 'border-blue-100', hover: 'hover:shadow-blue-500/20', text: 'text-blue-600' },
  2: { bg: 'from-green-500 to-teal-500', border: 'border-green-100', hover: 'hover:shadow-green-500/20', text: 'text-green-600' }
} as const;
