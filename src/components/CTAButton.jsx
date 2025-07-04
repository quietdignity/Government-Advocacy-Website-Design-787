import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, variant = 'primary', size = 'lg', className = '', ...props }) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-bright-orange text-cream-white hover:bg-bright-orange/90 shadow-lg hover:shadow-xl",
    secondary: "bg-forest-green text-cream-white hover:bg-forest-green/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-cream-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;