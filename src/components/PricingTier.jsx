import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck } = FiIcons;

const PricingTier = ({ 
  title, 
  originalPrice, 
  discountedPrice, 
  audience, 
  features, 
  popular = false, 
  tier = 1,
  onSelect
}) => {
  // Determine button text based on tier
  const getButtonText = () => {
    switch(tier) {
      case 1: return "Get Essentials";
      case 2: return "Get Mastery";
      case 3: return "Get Powerhouse";
      default: return "Get Started";
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-bg-primary p-6 rounded-lg shadow-xl border ${
        popular ? 'border-bright-orange' : 'border-text-muted/20'
      } relative`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bright-orange text-cream-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
      
      <div className="mb-4">
        <span className="text-text-muted line-through text-lg">${originalPrice}</span>
        <span className="text-3xl font-bold text-text-primary ml-2">${discountedPrice}</span>
      </div>
      
      <p className="text-text-secondary text-sm mb-6">
        Perfect for: {audience}
      </p>
      
      {tier > 1 && (
        <div className="mb-4 bg-bg-secondary p-3 rounded-lg">
          <p className="text-text-primary font-medium">
            Everything in {tier === 2 ? 'Essentials' : 'Mastery'} PLUS:
          </p>
        </div>
      )}
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <SafeIcon 
              icon={FiCheck} 
              className="w-5 h-5 text-bright-orange mr-2 mt-0.5" 
            />
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
      
      <CTAButton 
        variant={popular ? "primary" : "outline"} 
        className="w-full"
        onClick={onSelect}
      >
        {getButtonText()}
      </CTAButton>
    </motion.div>
  );
};

export default PricingTier;