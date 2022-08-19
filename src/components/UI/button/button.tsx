import { MouseEvent } from 'react';
import classes from './button.module.css';

interface ButtonProps {
  primary?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'smaller';
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  primary,
  onClick,
  children,
  size,
}) => (
  <button
    className={`${primary ? classes.primary : classes.secondary} ${
      size ? classes[size] : ''
    }`}
    onClick={onClick ? (e) => onClick(e) : () => {}}
  >
    {children}
  </button>
);

export default Button;
