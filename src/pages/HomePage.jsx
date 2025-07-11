import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';
import PricingTier from '../components/PricingTier';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiTarget, FiUsers, FiFileText, FiClock } = FiIcons;

const HomePage = () => {
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
    },
    {
      title: "Advocacy Powerhouse",
      originalPrice: 2497,
      discountedPrice: 1997,
      audience: "Senior professionals, consultants, organizational leaders",
      features: [
        "Everything in Mastery plus:",
        "Complete Template Library (50+ templates)",
        "Implementation lessons for every template",
        "Bonus Course: Media Mastery for Advocates",
        "Bonus Course: How Journalists Think About Government",
        "Quarterly webinar access"
      ],
      tier: 3
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "This system gave me the exact language to use with my city council. Within 30 days, we got approval for a project that had been stalled for years.",
      author: "Sarah T.",
      title: "Nonprofit Director",
      rating: 5
    },
    {
      quote: "As someone who works with government agencies daily, I thought I knew it all. The crisis communication module alone was worth 10x what I paid.",
      author: "Michael R.",
      title: "Government Relations Manager",
      rating: 5
    },
    {
      quote: "The templates saved me countless hours. I finally got a response from my congressperson after months of silence.",
      author: "Jennifer K.",
      title: "Small Business Owner",
      rating: 5
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: FiTarget,
      title: "Strategic Templates",
      description: "Pre-written documents for every advocacy situation, saving you time and increasing effectiveness"
    },
    {
      icon: FiUsers,
      title: "Insider Psychology",
      description: "Understand how government officials think and make decisions from someone who's been in the room"
    },
    {
      icon: FiFileText,
      title: "Proven System",
      description: "A complete methodology for influencing government at any level, based on real-world success"
    },
    {
      icon: FiClock,
      title: "Immediate Results",
      description: "Start seeing progress within your first 30 days of implementing the system"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Know Your Power - Master Government Advocacy | James A. Brown</title>
        <meta 
          name="description" 
          content="Learn how to get what you want from government officials with proven advocacy techniques from award-winning journalist James A. Brown."
        />
        <meta 
          name="keywords" 
          content="government advocacy, public policy, influence government, advocacy training, James A. Brown"
        />
        <meta 
          property="og:title" 
          content="Know Your Power - Master Government Advocacy"
        />
        <meta 
          property="og:description" 
          content="Learn how to get what you want from government officials with proven advocacy techniques."
        />
        <meta 
          property="og:image" 
          content="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609842581-HERO.jpg"
        />
        <link rel="canonical" href="https://knowyourpowernow.com/" />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Master <span className="text-bright-orange">Government Advocacy</span> with Proven Techniques
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 text-cream-white/90 max-w-3xl"
                >
                  Learn how to get what you want from government officials from award-winning journalist James A. Brown.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link to="/daily">
                    <CTAButton size="lg">
                      Get Started Today
                    </CTAButton>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative bg-navy-blue/60 p-6 rounded-lg shadow-xl border border-cream-white/20"
              >
                <h2 className="text-2xl font-bold mb-4 text-bright-orange">What You'll Learn</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-2 mt-1" />
                    <span>How to craft messages government officials <em>actually respond to</em></span>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-2 mt-1" />
                    <span>The psychology behind government decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-2 mt-1" />
                    <span>Proven templates that get results (not theory)</span>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-2 mt-1" />
                    <span>How to navigate bureaucracy without getting stuck</span>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange mr-2 mt-1" />
                    <span>Crisis communication strategies that work</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
              >
                Why This System <span className="text-bright-orange">Works</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-text-secondary max-w-2xl mx-auto"
              >
                Based on 15+ years of award-winning journalism covering government and politics
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-bg-primary p-6 rounded-lg shadow-lg border border-text-muted/20 text-center"
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
        
        {/* Testimonials Section */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
              >
                What People Are <span className="text-bright-orange">Saying</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-text-secondary max-w-2xl mx-auto"
              >
                Real results from real people using these advocacy techniques
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
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
                Choose Your <span className="text-bright-orange">Advocacy Path</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8 text-cream-white/90 max-w-3xl mx-auto"
              >
                Select the level that matches your advocacy needs
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PricingTier {...tier} onSelect={() => window.location.href = '/daily'} />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-cream-white/80 mb-4">
                Not sure which option is right for you?
              </p>
              <Link to="/contact">
                <CTAButton variant="secondary" size="md">
                  Contact Us
                </CTAButton>
              </Link>
            </motion.div>
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
              Ready to Master Government Advocacy?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-text-secondary mb-8"
            >
              Join thousands who have transformed their advocacy efforts with our proven system
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/daily">
                <CTAButton size="lg">
                  Get Started Today
                </CTAButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;