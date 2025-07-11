import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CTAButton from '../components/CTAButton';
import PricingTier from '../components/PricingTier';
import TestimonialCard from '../components/TestimonialCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiClock, FiDollarSign, FiShield } = FiIcons;

const DailyPage = () => {
  // Pricing tiers data
  const pricingTiers = [
    {
      title: "Advocacy Essentials",
      originalPrice: 997,
      discountedPrice: 497,
      audience: "First-time advocates, corporate professionals, nonprofit staff",
      features: [
        "6 Core Learning Modules (approximately 6 hours)",
        "12 Essential Templates",
        "Discord Community Access",
        "30-Day Money-Back Guarantee",
        "Lifetime Access to updates"
      ],
      tier: 1
    },
    {
      title: "Advocacy Mastery",
      originalPrice: 1497,
      discountedPrice: 997,
      audience: "Government relations professionals, nonprofit leaders, experienced advocates",
      features: [
        "Everything in Essentials plus:",
        "25+ Templates",
        "Email Templates Pack",
        "Video Implementation Lessons",
        "Bonus Course: Crisis Communication",
        "Bonus Course: Digital Age Advocacy"
      ],
      popular: true,
      tier: 2
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: FiClock,
      title: "Extended Guarantee",
      description: "Daily Note listeners get our extended 90-day guarantee (vs. standard 30 days)"
    },
    {
      icon: FiDollarSign,
      title: "Exclusive Pricing",
      description: "Special discounted pricing only available through this link"
    },
    {
      icon: FiShield,
      title: "Priority Support",
      description: "Daily Note listeners receive priority email support"
    }
  ];

  // Testimonial data
  const testimonial = {
    quote: "As a Daily Note listener, I was skeptical about another 'government course.' But this is the real deal - practical techniques that actually work for regular people like me.",
    author: "Robert M.",
    title: "Daily Note Listener",
    rating: 5
  };

  return (
    <>
      <Helmet>
        <title>Special Offer for Daily Note Listeners | Know Your Power</title>
        <meta 
          name="description" 
          content="Exclusive offer for Daily Note listeners - Master government advocacy with James A. Brown's proven system at special pricing."
        />
        <meta 
          name="keywords" 
          content="Daily Note, special offer, government advocacy, discount, James A. Brown"
        />
        <meta 
          property="og:title" 
          content="Special Offer for Daily Note Listeners | Know Your Power"
        />
        <meta 
          property="og:description" 
          content="Exclusive pricing and extended guarantee for Daily Note listeners on our government advocacy course."
        />
        <link rel="canonical" href="https://knowyourpowernow.com/daily" />
      </Helmet>
      
      <div className="bg-pure-white">
        {/* Hero Section */}
        <section className="relative text-cream-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609842581-HERO.jpg')`}}
          >
            <div className="absolute inset-0 bg-navy-blue/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Special Offer for <span className="text-bright-orange">Daily Note</span> Listeners
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-cream-white/90 max-w-3xl mx-auto"
              >
                Thank you for being a loyal listener of The Daily Note
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Intro Section */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  From The Daily Note to <span className="text-bright-orange">Real-World Advocacy</span>
                </h2>
                
                <p className="text-lg text-text-secondary">
                  As a Daily Note listener, you already understand the importance of staying informed about government and politics.
                </p>
                
                <p className="text-lg text-text-secondary">
                  But understanding is just the first step. The next step is <strong>effective action</strong>.
                </p>
                
                <p className="text-lg text-text-secondary">
                  That's why I've created this special offer exclusively for my loyal listeners - to help you transform your knowledge into real-world results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-bg-primary p-8 rounded-lg shadow-lg border border-text-muted/20"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Special Benefits */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
              >
                Daily Note Listener <span className="text-bright-orange">Exclusive Benefits</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-bg-secondary p-6 rounded-lg shadow-lg border border-text-muted/20 text-center"
                >
                  <div className="bg-bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={benefit.icon} className="w-8 h-8 text-text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Course Summary */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
              >
                What You'll <span className="text-bright-orange">Learn</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-bg-primary p-8 rounded-lg shadow-lg border border-text-muted/20"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-6">Core Modules</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Module 1: The Government Mindset</h4>
                      <p className="text-text-secondary text-sm">Understanding how government officials think and make decisions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Module 2: Strategic Communication</h4>
                      <p className="text-text-secondary text-sm">Crafting messages that actually get responses</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Module 3: Navigating Bureaucracy</h4>
                      <p className="text-text-secondary text-sm">Finding the right person to talk to and getting past gatekeepers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Module 4: Building Influence</h4>
                      <p className="text-text-secondary text-sm">Creating relationships that lead to long-term advocacy success</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-bg-primary p-8 rounded-lg shadow-lg border border-text-muted/20"
              >
                <h3 className="text-2xl font-bold text-text-primary mb-6">Advanced Content (Mastery Tier)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Crisis Communication</h4>
                      <p className="text-text-secondary text-sm">How to handle urgent advocacy situations effectively</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Digital Advocacy Techniques</h4>
                      <p className="text-text-secondary text-sm">Using social media and digital tools for maximum impact</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Advanced Templates Library</h4>
                      <p className="text-text-secondary text-sm">25+ templates for complex advocacy situations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary">Implementation Videos</h4>
                      <p className="text-text-secondary text-sm">Detailed walkthroughs of real-world advocacy scenarios</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-navy-blue text-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Exclusive <span className="text-bright-orange">Daily Note</span> Pricing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8 text-cream-white/90 max-w-3xl mx-auto"
              >
                Special pricing for Daily Note listeners only
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-cream-white text-navy-blue px-6 py-3 rounded-full inline-block mb-8"
              >
                <p className="font-bold">
                  Including extended 90-day money-back guarantee
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PricingTier {...tier} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
            >
              Turn Your Daily Note Knowledge Into Real-World Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-text-secondary mb-8"
            >
              This special offer is available exclusively for Daily Note listeners
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <CTAButton size="lg">
                Get Started Today
              </CTAButton>
              <p className="text-text-muted text-sm">
                90-day money-back guarantee for Daily Note listeners
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DailyPage;