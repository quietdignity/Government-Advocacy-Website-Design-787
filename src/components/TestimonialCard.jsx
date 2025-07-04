import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const TestimonialCard = ({ quote, author, title, rating = 5 }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-bg-primary p-6 rounded-lg shadow-lg border border-text-muted/20"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-bright-orange fill-current" />
        ))}
      </div>
      <blockquote className="text-text-secondary mb-4 italic text-lg">
        "{quote}"
      </blockquote>
      <div className="border-t border-text-muted/20 pt-4">
        <p className="font-semibold text-text-primary">{author}</p>
        <p className="text-text-muted text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;