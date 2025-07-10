import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import CTAButton from './CTAButton';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiStar } = FiIcons;

const PricingTier = ({
  title,
  originalPrice,
  discountedPrice,
  monthly,
  payments,
  audience,
  features,
  popular = false,
  tier = 1
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-bg-primary rounded-lg shadow-xl border overflow-hidden ${
        popular ? 'border-bright-orange' : 'border-text-muted/20'
      }`}
    >
      {popular && (
        <div className="bg-bright-orange text-cream-white py-2 px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <SafeIcon icon={FiStar} className="w-5 h-5" />
            <span className="font-bold">MOST POPULAR</span>
            <SafeIcon icon={FiStar} className="w-5 h-5" />
          </div>
        </div>
      )}
      
      <div className={`p-6 text-center ${popular ? 'bg-bg-accent' : 'bg-bright-orange text-cream-white'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-text-primary' : 'text-cream-white'}`}>
          {title}
        </h3>
        <div className="flex justify-center items-center space-x-2 mb-2">
          <span className={`text-lg line-through ${popular ? 'text-text-muted' : 'text-cream-white/80'}`}>
            ${originalPrice}
          </span>
          <span className="text-4xl font-bold">
            ${discountedPrice}
          </span>
        </div>
        <p className={`${popular ? 'text-text-secondary' : 'text-cream-white/90'}`}>
          Save $500
        </p>
      </div>
      
      <div className="p-6">
        <p className="text-text-secondary mb-4 font-medium">
          Perfect for: {audience}
        </p>
        
        {tier > 1 && (
          <div className="mb-4 bg-bg-secondary p-3 rounded-lg">
            <p className="text-text-primary font-medium">
              Everything in Tier {tier - 1} PLUS:
            </p>
          </div>
        )}
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mt-1 flex-shrink-0" />
              <span className="text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-bg-secondary p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-text-primary mb-2">Payment Options:</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-text-secondary">Pay in Full:</span>
              <span className="font-semibold text-text-primary">${discountedPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">{payments} Payments:</span>
              <span className="font-semibold text-text-primary">${monthly}/month</span>
            </div>
          </div>
        </div>
        
        <CTAButton size="lg" className="w-full" variant={popular ? "primary" : "outline"}>
          {popular ? "Get Complete Mastery" : `Get ${title}`}
        </CTAButton>
      </div>
    </motion.div>
  );
};

export default PricingTier;