import React, { ButtonHTMLAttributes } from 'react';

/**
 * Button Component Props
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable Button Component
 * Supports different variants and sizes
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-block font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-md';
  
  const variantStyles = {
    primary: 'bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/40',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-accent',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-10 py-4 text-sm',
    lg: 'px-12 py-5 text-base',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
