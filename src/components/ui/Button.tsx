import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/utils/cn';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none',
  compoundVariants: [{
    class: 'focus-visible:ring-[var(--color-primary)]'
  }],
  variants: {
    variant: {
      default: 'text-white shadow-lg transition-all duration-200',
      defaultStyle: {
        backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
        boxShadow: '0 10px 25px -5px var(--color-primary)25'
      },
      accent: 'text-slate-900 shadow-lg font-semibold transition-all duration-200',
      accentStyle: {
        backgroundImage: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
        boxShadow: '0 10px 25px -5px var(--color-secondary)40'
      },
      outline: 'border-2 transition-colors',
      outlineStyle: {
        borderColor: 'var(--color-primary)',
        color: 'var(--color-primary-light)'
      },
      ghost: 'transition-colors',
      ghostStyle: {
        color: 'var(--color-primary-light)'
      },
      pixel: 'text-slate-900 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500 font-semibold shadow-lg',
      pixelStyle: {
        backgroundColor: 'var(--color-secondary)',
        boxShadow: '0 10px 25px -5px var(--color-secondary)30'
      },
    },
    size: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-11 px-6 text-lg',
      xl: 'h-12 px-8 text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const getVariantStyles = (variant?: string) => {
      switch (variant) {
        case 'default':
          return {
            backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
            boxShadow: '0 10px 25px -5px var(--color-primary)25'
          };
        case 'accent':
          return {
            backgroundImage: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
            boxShadow: '0 10px 25px -5px var(--color-secondary)40'
          };
        case 'outline':
          return {
            borderColor: 'var(--color-primary)',
            color: 'var(--color-primary-light)'
          };
        case 'ghost':
          return {
            color: 'var(--color-primary-light)'
          };
        case 'pixel':
          return {
            backgroundColor: 'var(--color-secondary)',
            boxShadow: '0 10px 25px -5px var(--color-secondary)30'
          };
        default:
          return {};
      }
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        style={getVariantStyles(variant)}
        ref={ref}
        onMouseEnter={(e) => {
          if (variant === 'default') {
            e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, var(--color-primary-light), var(--color-secondary))';
          } else if (variant === 'accent') {
            e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, var(--color-accent), var(--color-secondary))';
          } else if (variant === 'outline') {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            e.currentTarget.style.color = 'white';
          } else if (variant === 'ghost') {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)20';
            e.currentTarget.style.color = 'var(--color-secondary)';
          } else if (variant === 'pixel') {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
          }
        }}
        onMouseLeave={(e) => {
          const styles = getVariantStyles(variant);
          Object.assign(e.currentTarget.style, styles);
          if (variant === 'outline') {
            e.currentTarget.style.backgroundColor = 'transparent';
          } else if (variant === 'ghost') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';