import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClass} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
