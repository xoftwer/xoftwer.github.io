import { type Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const slideInFromBottom: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

export const pixelFloat: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 180, 360],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    background: [
      'linear-gradient(135deg, rgb(71, 85, 105) 0%, rgb(20, 184, 166) 50%, rgb(34, 197, 94) 100%)',
      'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(163, 230, 53) 50%, rgb(20, 184, 166) 100%)',
      'linear-gradient(135deg, rgb(71, 85, 105) 0%, rgb(20, 184, 166) 50%, rgb(34, 197, 94) 100%)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const typewriter = {
  initial: { width: 0 },
  animate: { width: 'auto' },
};

export const bounceIn: Variants = {
  initial: { scale: 0.3, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05, 
    transition: { duration: 0.2 } 
  },
  whileTap: { 
    scale: 0.95 
  },
};

export const floatingElement: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};