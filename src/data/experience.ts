import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Associate Software Developer",
    company: "Sky Portugal",
    period: "Jan 2026 - Present",
    current: true,
    description:
      "Contributing to core Apple TV application development in Swift, helping deliver reliable experiences to millions of global users.",
    responsibilities: [
      "Developing and maintaining core Apple TV features for a global streaming platform",
      "Collaborating in Agile squads to deliver high-availability product improvements",
      "Participating in architecture discussions and code reviews for scalable codebases",
      "Applying clean code and maintainability best practices in production systems",
    ],
    technologies: [
      "Swift",
      "Apple TV",
      "Agile",
      "Code Review",
      "Clean Code",
      "Scalability",
    ],
    type: "full-time",
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "INESC-ID Lisboa",
    period: "Nov 2025 - Present",
    current: true,
    description:
      "Conducting research in phylogenetics and high-performance computing for large-scale trees and network visualization.",
    responsibilities: [
      "Investigating efficient algorithms for exploratory analysis of large graph structures",
      "Optimizing data processing pipelines for computationally intensive workloads",
      "Supporting research initiatives bridging distributed systems and computational biology",
    ],
    technologies: [
      "Python",
      "HPC",
      "Phylogenetics",
      "Algorithms",
      "Data Processing",
    ],
    type: "part-time",
  },
  {
    id: 3,
    title: "Frontend Apprentice",
    company: "Sky Portugal",
    period: "Jul 2025 - Aug 2025",
    current: false,
    description:
      "Contributed to Apple ecosystem product development and CI/CD workflow improvements in a cross-functional team.",
    responsibilities: [
      "Developed Apple TV ecosystem features using Swift",
      "Implemented CI/CD pipelines with Jenkins and Groovy",
      "Optimized build and deployment workflow performance",
      "Adopted DevOps practices and Scrum-based delivery routines",
    ],
    technologies: ["Swift", "Jenkins", "Groovy", "CI/CD", "Scrum", "DevOps"],
    type: "apprentice",
  },
  {
    id: 4,
    title: "Programmer",
    company: "Universidade Lusófona",
    period: "Jun 2023 - Oct 2023",
    current: false,
    description:
      "Developed a data acquisition GUI for a Tension Testing Machine, improving workflow efficiency and measurement reliability.",
    responsibilities: [
      "Built data acquisition workflows with Python and CustomTkinter",
      "Improved accuracy and usability through user-focused interface decisions",
      "Streamlined technical operations for laboratory testing scenarios",
    ],
    technologies: [
      "Python",
      "CustomTkinter",
      "GUI Development",
      "UX Design",
      "Data Collection",
    ],
    type: "part-time",
  },
];

export const experienceGradients = {
  1: {
    bg: "from-blue-500 to-purple-500",
    border: "border-blue-100",
    hover: "hover:shadow-blue-500/20",
    text: "text-blue-600",
  },
  2: {
    bg: "from-teal-500 to-cyan-500",
    border: "border-teal-100",
    hover: "hover:shadow-teal-500/20",
    text: "text-teal-600",
  },
  3: {
    bg: "from-purple-500 to-pink-500",
    border: "border-purple-100",
    hover: "hover:shadow-purple-500/20",
    text: "text-purple-600",
  },
  4: {
    bg: "from-green-500 to-emerald-500",
    border: "border-green-100",
    hover: "hover:shadow-green-500/20",
    text: "text-green-600",
  },
} as const;
