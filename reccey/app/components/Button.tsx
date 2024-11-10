// components/ui/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
}: ButtonProps) {
  const baseStyle = 'flex items-center justify-center rounded-lg font-medium transition ease-in-out duration-200 focus:outline-none';

  // Define variant styles
  const variantStyles = {
    primary: 'bg-[#036C20] border-4 border-[#036C20] text-white hover:bg-green-700',
    secondary: ' border-4 text-black border-[#036C20] bg-white hover:bg-gray-700',
    tertiary: 'bg-white text-[#036C20] border-white hover:bg-green-70',
  };

  // Define size styles
  const sizeStyles = {
    small: 'w-[8rem] px-3 py-3 text-sm',
    medium: 'w-[10rem] px-4 py-3 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const disabledStyle = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyle : ''
        }`}
    >
      {children}
    </button>
  );
}
