import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SCAR: Smart Contract Academic Registry",
    description:
      "Blockchain-based platform to verify academic credentials and prevent fraud, with GDPR-compliant and tamper-proof validation workflows.",
    technologies: [
      "Solidity",
      "React Native",
      "Blockchain",
      "Web3",
      "Smart Contracts",
    ],
    features: [
      "Developed DiGo Certify App for academic credential verification",
      "Implemented smart contracts for tamper-proof validation",
      "Ensured GDPR-aligned data handling and access controls",
      "Integrated blockchain flows with Expo React Native user experience",
    ],
    status: "Research Complete",
    type: "Bachelor's Thesis",
    image: "/api/placeholder/600/400",
    category: "Academic Research",
    grade: "18/20",
  },
  {
    id: 2,
    title: "Games@Cloud",
    description:
      "Distributed systems platform with intelligent load balancing and ML-based workload prediction for computational jobs across AWS EC2.",
    technologies: [
      "Java",
      "AWS EC2",
      "DynamoDB",
      "Machine Learning",
      "Distributed Systems",
      "Javassist",
    ],
    features: [
      "Architected adaptive scheduling strategies: Spreading, Packing and Hybrid",
      "Implemented dynamic auto-scaling system for EC2 lifecycle management",
      "Built bytecode instrumentation for transparent runtime metrics collection",
      "Automated infrastructure setup with IAM, security groups, AMIs and deployment scripts",
    ],
    status: "Completed",
    type: "Distributed Systems Project",
    image: "/api/placeholder/600/400",
    category: "Academic Project",
  },
  {
    id: 3,
    title: "Gomoku Full-Stack Game",
    description:
      "Cross-platform Gomoku experience with backend APIs in Kotlin/Spring Boot, React web frontend, and Android native client.",
    technologies: [
      "Kotlin",
      "Spring Boot",
      "React",
      "TypeScript",
      "Android",
      "Nginx",
    ],
    features: [
      "Built backend REST APIs with Kotlin and Spring Boot",
      "Developed React web client and Android app for unified gameplay",
      "Configured Nginx reverse proxy for secure and efficient distribution",
      "Implemented user state and gameplay flow across clients",
    ],
    status: "Demo Available",
    type: "Game Application",
    image: "/api/placeholder/600/400",
    videoDemo: true,
    demoVideoUrl: "https://youtu.be/DDX3eL-NQxY",
    category: "Personal Project",
  },
  {
    id: 4,
    title: "DepChain: Permissioned Blockchain System",
    description:
      "Permissioned blockchain architecture implementing a custom fault-tolerant consensus mechanism with dependability and reconfiguration support.",
    technologies: [
      "Java",
      "Distributed Systems",
      "Consensus Protocols",
      "Blockchain",
    ],
    features: [
      "Architected custom fault-tolerant consensus protocol",
      "Designed modular client-server structure for maintainability",
      "Implemented reconfiguration mechanisms for resilient operation",
      "Focused on reliability and dependability guarantees",
    ],
    status: "Completed",
    type: "Distributed Systems Project",
    image: "/api/placeholder/600/400",
    category: "Academic Project",
  },
  {
    id: 5,
    title: "ChargeIST: EV Charging Management App",
    description:
      "Android mobile app and Spring Boot backend for EV charging station discovery and management with real-time updates and containerized data services.",
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
    ],
    features: [
      "Integrated Google Maps SDK for charging station discovery",
      "Built backend with authentication and WebSocket live updates",
      "Containerized PostgreSQL setup for reliable persistence",
      "Applied MVVM, Coroutines, Hilt DI and Ktor client architecture",
    ],
    status: "Completed",
    type: "Mobile + Backend Application",
    image: "/api/placeholder/600/400",
    category: "Academic Project",
  },
];

export const projectGradients = {
  1: "from-purple-500 via-blue-500 to-pink-500",
  2: "from-indigo-500 via-sky-500 to-cyan-500",
  3: "from-orange-500 via-red-500 to-pink-500",
  4: "from-violet-500 via-purple-500 to-fuchsia-500",
  5: "from-emerald-500 via-teal-500 to-cyan-500",
} as const;
