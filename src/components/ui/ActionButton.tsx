import React from 'react';

/**
 * Action Button Props
 */
interface ActionButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'email';
  className?: string;
}

/**
 * Large touchable action button for mobile
 * Optimized for quick taps at events
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30',
    secondary: 'bg-white hover:bg-gray-50 text-primary border-2 border-gray-200',
    whatsapp: 'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-green-500/30',
    email: 'bg-[#EA4335] hover:bg-[#D33426] text-white shadow-lg shadow-red-500/30',
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-center gap-4 
        px-6 py-5 rounded-2xl
        font-display font-bold text-base uppercase tracking-wide
        transition-all duration-300
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      <i className={`fas ${icon} text-2xl`} />
      <span>{label}</span>
    </button>
  );
};
