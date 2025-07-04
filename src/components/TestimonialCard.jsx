import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const TestimonialCard = ({ quote, author, title, rating = 5 }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-warm-white p-6 rounded-lg shadow-lg border border-sage-gray/20"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <SafeIcon
            key={i}
            icon={FiStar}
            className="w-5 h-5 text-ember-orange fill-current"
          />
        ))}
      </div>
      <blockquote className="text-deep-charcoal mb-4 italic">
        "{quote}"
      </blockquote>
      <div className="border-t border-sage-gray/20 pt-4">
        <p className="font-semibold text-deep-charcoal">{author}</p>
        <p className="text-sage-gray text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;