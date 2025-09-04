import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  className, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={cn(
          'border-2 border-slate-600 rounded-full',
          sizeClasses[size],
          className
        )}
        style={{
          borderTopColor: 'var(--color-primary)'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};