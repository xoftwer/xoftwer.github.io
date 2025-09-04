// Core portfolio types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  imageUrl: string | null;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Experience {
  id: string;
  location: string;
  mode: "Remote" | "On-site" | "Hybrid";
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: readonly string[];
  current: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category:
    | "Frontend"
    | "Backend"
    | "DevOps"
    | "Database"
    | "Tools"
    | "Languages"
    | "Mobile";
}

// Utility types for API responses
export type ApiResponse<T> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: string;
    };

export type LoadingState = "idle" | "loading" | "success" | "error";

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
}

// Theme and UI types
export type Theme = "light" | "dark";

export interface AppState {
  theme: Theme;
  language: string;
  user: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type AppAction =
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_LANGUAGE"; payload: string }
  | { type: "SET_USER"; payload: User | null };

// Animation variants
export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavigationProps {
  items?: NavItem[];
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

// SEO types
export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
