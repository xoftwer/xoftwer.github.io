import { useState, useEffect } from 'react';

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

interface WindowSize {
  width: number;
  height: number;
}

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowSize,
    isMobile: windowSize.width < breakpoints.md,
    isTablet: windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
    isDesktop: windowSize.width >= breakpoints.lg,
    isSmall: windowSize.width < breakpoints.sm,
    isMedium: windowSize.width >= breakpoints.sm && windowSize.width < breakpoints.lg,
    isLarge: windowSize.width >= breakpoints.lg && windowSize.width < breakpoints.xl,
    isXLarge: windowSize.width >= breakpoints.xl,
    is2XLarge: windowSize.width >= breakpoints['2xl'],
  };
};