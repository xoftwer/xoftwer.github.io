import type { Project, Experience, Skill } from "@/types";
import tooleaseImage from "@/assets/toolease.jpeg";

export const personalInfo = {
  name: "Rayan Reynaldo",
  title: "Full Stack Developer",
  subtitle:
    "Passionate about crafting digital solutions that deliver meaningful impact.",
  email: "rayanvegareynaldo@gmail.com",
  location: "Sariaya, Quezon, Philippines",
  bio: "I'm a dedicated full-stack developer with expertise in modern web technologies. I enjoy building intuitive, responsive applications that solve real-world challenges and create value for users.",
  avatar: "/me.png",
  social: {
    github: "https://github.com/xoftwer",
    facebook: "https://facebook.com/xoftwer",
    email: "mailto:rayanvegareynaldo@gmail.com",
  },
};

export const skills: Skill[] = [
  { id: "1", name: "React.js", level: "Advanced", category: "Frontend" },
  { id: "2", name: "TypeScript", level: "Advanced", category: "Languages" },
  { id: "3", name: "JavaScript", level: "Expert", category: "Languages" },
  { id: "4", name: "Node.js", level: "Advanced", category: "Backend" },
  { id: "5", name: "Bootstrap", level: "Advanced", category: "Frontend" },
  { id: "6", name: "Python", level: "Intermediate", category: "Languages" },
  { id: "7", name: "Dart", level: "Intermediate", category: "Languages" },
  {
    id: "8",
    name: "Nginx / Apache",
    level: "Intermediate",
    category: "DevOps",
  },
  { id: "9", name: "PHP", level: "Intermediate", category: "Languages" },
  { id: "10", name: "PostgreSQL", level: "Intermediate", category: "Database" },
  { id: "11", name: "FastAPI", level: "Intermediate", category: "Backend" },
  { id: "12", name: "MySQL", level: "Intermediate", category: "Database" },
  { id: "13", name: "Redis", level: "Intermediate", category: "Database" },
  { id: "14", name: "Docker", level: "Intermediate", category: "DevOps" },
  { id: "15", name: "Git", level: "Advanced", category: "Tools" },
  { id: "16", name: "VS Code", level: "Advanced", category: "Tools" },
  { id: "17", name: "Android Studio", level: "Advanced", category: "Tools" },
  { id: "18", name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { id: "19", name: "Flutter", level: "Intermediate", category: "Frontend" },
  { id: "20", name: "Laravel", level: "Expert", category: "Backend" },
  {
    id: "21",
    name: "cPanel / Self-Hosted Deployments",
    level: "Expert",
    category: "DevOps",
  },
  { id: "22", name: "Linux", level: "Expert", category: "DevOps" },
  { id: "23", name: "Postman", level: "Expert", category: "Tools" },
  { id: "24", name: "SQLite", level: "Expert", category: "Database" },
  { id: "25", name: "Figma", level: "Expert", category: "Tools" },
  { id: "26", name: "React Native", level: "Expert", category: "Frontend" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "ToolEase",
    description:
      "Built as a kiosk application for Android tablets, it provides a streamlined interface for students to borrow and return equipment while giving administrators powerful tools to manage inventory, track usage, and generate reports",
    technologies: [
      "Flutter",
      "SQLite",
      "Dart",
      "Material Design 3",
      "Drift",
      "Riverpod",
    ],
    imageUrl: tooleaseImage,
    githubUrl: "https://github.com/xoftwer/toolease",
    featured: true,
    createdAt: new Date("2025-09-30"),
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Maryhill College, Inc.",
    position: "Programmer",
    location: "Lucena City",
    mode: "Hybrid",
    duration: "2024 - Present",
    current: true,
    description: [
      "Debugged, maintained, and optimized multiple institutional systems to improve stability and performance.",
      "Migrated production servers from cPanel (CentOS) to cPanel (AlmaLinux), ensuring smoother deployments and security compliance.",
      "Upgraded legacy systems from PHP 7.3 to PHP 8.2, enhancing maintainability and modernizing codebases.",
      "Designed, developed, and deployed a Student Portal for academic services using Laravel 12, improving accessibility for faculty and students.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "jQuery",
      "React",
      "TypeScript",
      "MySQL",
      "Docker",
      "cPanel",
      "Linux",
    ],
  },
];
