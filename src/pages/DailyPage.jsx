import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiClock, FiGift, FiShield } = FiIcons;

const DailyPage = () => {
  const benefits = [
    "Save $500 - Your price: $1,497 (Regular: $1,997)",
    "Bonus Audio Module: \"How Journalists Think About Government\"",
    "Special Q&A Access: Monthly calls for Daily Note listeners only",
    "Extended Guarantee: 90 days instead of 60"
  ];

  const included = [
    "Complete 6-module system",
    "40+ professional templates",
    "Video guides for every template",
    "Audio course",
    "Crisis communication training",
    "Lifetime access"
  ];

  return (
    <div className="bg-warm-white">
      {/* Hero Section */}
      <section className="relative bg-deep-charcoal text-warm-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal to-deep-charcoal/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-ember-orange/20 border border-ember-orange/40 rounded-lg p-4 inline-block mb-8"
            >
              <p className="text-ember-orange font-semibold">Welcome Daily Note Listeners!</p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              You just heard James A. Brown find clarity in everyday moments.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-ember-orange font-semibold"
            >
              Now discover how to find clarity in government systems too.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-10 max-w-3xl mx-auto"
            >
              After 15 years covering government, James learned that successful advocacy isn't about being loud 
              or connected - it's about understanding how the system really works.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg mb-10 max-w-3xl mx-auto text-sage-gray"
            >
              <strong className="text-ember-orange">Know Your Power</strong> teaches you exactly what James learned, 
              with the same authentic, no-hype approach you hear every day on The Daily Note.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-20 bg-ember-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Exclusive Daily Note Listener Benefits
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-warm-white p-6 rounded-lg shadow-md"
              >
                <SafeIcon icon={FiCheck} className="w-6 h-6 text-ember-orange mt-1 flex-shrink-0" />
                <p className="text-deep-charcoal text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal">
                What You Get
              </h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-ember-orange" />
                    <span className="text-deep-charcoal">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-deep-charcoal/5 border-l-4 border-ember-orange p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-deep-charcoal mb-2">
                  No hype. No hot takes. Just truth about how government actually works.
                </p>
                <p className="text-ember-orange font-medium italic">
                  Real talk for real people who need real results.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-steel-blue/10 p-8 rounded-lg border border-steel-blue/20">
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiGift} className="w-6 h-6 text-ember-orange" />
                  <h3 className="text-xl font-semibold text-deep-charcoal">Daily Note Exclusive</h3>
                </div>
                <p className="text-deep-charcoal mb-4">
                  "How Journalists Think About Government" - bonus audio module revealing the insider perspective 
                  on how government really operates.
                </p>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-sage-gray" />
                  <span className="text-sm text-sage-gray">45-minute exclusive content</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-20 bg-deep-charcoal text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Limited Time Offer
              </h2>
              <p className="text-xl mb-8 text-sage-gray">
                This exclusive Daily Note listener discount expires in 7 days.
              </p>
              
              <div className="bg-warm-white/10 rounded-lg p-8 mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-ember-orange" />
                  <span className="text-lg font-semibold">90-day money-back guarantee</span>
                </div>
                <p className="text-sage-gray">
                  Try the complete system risk-free.
                </p>
              </div>
              
              <CTAButton size="xl" className="mb-4">
                Claim Your Daily Note Discount Now
              </CTAButton>
              <p className="text-sm text-sage-gray">
                Secure payment • Instant access • 90-day guarantee for Daily Note listeners
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyPage;