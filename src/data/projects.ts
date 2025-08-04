import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SCAR - Master's Thesis",
    description:
      "Smart Contract Academic Registry - A blockchain-based solution to verify academic credentials and combat phony certifications. Uses smart contracts for automated, secure credential validation with GDPR compliance and seamless system integration.",
    technologies: [
      "Blockchain",
      "Smart Contracts",
      "Credential Verification",
      "GDPR Compliance",
      "System Integration",
    ],
    features: [
      "Blockchain-based credential verification system",
      "Smart contract automation for secure validation",
      "GDPR-compliant data management and user control",
      "Integration with existing academic systems",
      "Support for both formal and informal learning certification",
    ],
    status: "Research Complete",
    type: "Master's Thesis",
    image: "/api/placeholder/600/400",
    category: "Academic Research",
    grade: "18/20",
  },
  {
    id: 2,
    title: "Set&Scale Landing Page",
    description:
      "Professional landing page for an appointment setting business featuring modern animations, responsive design, and Calendly integration. Deployed and live on Netlify.",
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "Netlify"],
    features: [
      "Custom scroll-reveal animations",
      "TypewriterText effects",
      "Infinite scroll testimonials",
      "Mobile-responsive design",
      "Calendly integration",
    ],
    status: "Live",
    type: "Web Application",
    image: "/api/placeholder/600/400",
    liveUrl: "https://setandscale.net",
    category: "Client Project",
  },
  {
    id: 3,
    title: "Gomoku Online Game",
    description:
      "Full-stack online multiplayer Gomoku (Five in a Row) game with both web and mobile clients. Features real-time gameplay, user authentication, and cross-platform compatibility with comprehensive backend API.",
    technologies: [
      "Kotlin",
      "Spring Boot",
      "React",
      "TypeScript",
      "Android",
      "Nginx",
    ],
    features: [
      "Online multiplayer gameplay with real-time updates",
      "Cross-platform support (Web + Android mobile app)",
      "Robust backend API with Spring Boot and Nginx",
      "User authentication and game state management",
      "Demo video available showcasing gameplay",
    ],
    status: "Demo Available",
    type: "Game Application",
    image: "/api/placeholder/600/400",
    videoDemo: true,
    demoVideoUrl: "https://youtu.be/DDX3eL-NQxY",
    category: "Personal Project",
  },
];

export const projectGradients = {
  1: "from-purple-500 via-blue-500 to-pink-500",
  2: "from-green-500 via-teal-500 to-blue-500",
  3: "from-orange-500 via-red-500 to-pink-500",
} as const;
