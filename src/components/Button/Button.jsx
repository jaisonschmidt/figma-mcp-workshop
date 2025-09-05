import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'default',
  disabled = false,
  className = '',
  ...props 
}) => {
  const getButtonClasses = () => {
    let classes = 'custom-button';
    
    if (variant === 'secondary') {
      classes += ' custom-button--secondary';
    }
    
    if (size === 'small') {
      classes += ' custom-button--small';
    } else if (size === 'large') {
      classes += ' custom-button--large';
    }
    
    if (className) {
      classes += ` ${className}`;
    }
    
    return classes;
  };

  return (
    <button
      type={type}
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
