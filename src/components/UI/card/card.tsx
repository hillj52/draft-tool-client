import React from 'react';
import classes from './card.module.css';

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, onClick }) => (
  <div className={`${classes.card} ${className}`} onClick={onClick}>
    {children}
  </div>
);

export default Card;