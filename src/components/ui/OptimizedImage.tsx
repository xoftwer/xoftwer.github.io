import { useState } from 'react';
import { cn } from '@/utils/cn';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  fallback?: React.ReactNode;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  placeholder = '/assets/placeholder.jpg',
  fallback,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={hasError ? placeholder : src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading="lazy"
        {...props}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-700 animate-pulse rounded" />
      )}
    </div>
  );
};