import React from 'react';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet-async';
import CTAButton from '../components/CTAButton';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import PricingTier from '../components/PricingTier';

const {FiCheck,FiClock,FiGift,FiShield,FiPlay,FiMessageCircle}=FiIcons;

const DailyPage=()=> {
  const benefits=[
    "Save $500 - Your price: $997 (Regular: $1,497)",
    "Bonus Audio Module: \"How Journalists Think About Government\"",
    "Special Q&A Access: Monthly calls for Daily Note listeners only",
    "Extended Guarantee: 90 days instead of 60"
  ];

  const included=[
    "Complete training system",
    "40+ professional templates",
    "Video guides for every template",
    "Audio course",
    "Crisis communication training",
    "Private student Discord server",
    "Lifetime access"
  ];

  const pricingTiers = [
    {
      title: "ADVOCACY ESSENTIALS",
      originalPrice: 997,
      discountedPrice: 497,
      monthly: 175,
      payments: 3,
      audience: "First-time advocates, corporate professionals, nonprofit staff",
      features: [
        "6 Core Learning Modules (3+ hours of content)",
        "12 Essential Templates for immediate implementation",
        "Crisis Communication Basics (unavailable elsewhere)",
        "Discord Community Access for peer networking",
        "Ask Know Your Power sessions",
        "Digital Advocacy Foundation training",
        "30-Day Money-Back Guarantee",
        "Lifetime Access to all updates"
      ],
      tier: 1
    },
    {
      title: "COMPLETE ADVOCACY MASTERY",
      originalPrice: 1497,
      discountedPrice: 997,
      monthly: 265,
      payments: 4,
      audience: "Government relations professionals, nonprofit leaders, experienced advocates",
      features: [
        "Extended Modules with advanced psychology (6+ hours total)",
        "25+ Comprehensive Templates including coalition building",
        "Full Audio Program for learning anywhere, anytime",
        "Advanced Crisis Management protocols and frameworks",
        "Relationship Mapping Systems for long-term influence",
        "Opposition Analysis Frameworks to counter resistance",
        "Template Implementation Guides with real examples"
      ],
      popular: true,
      tier: 2
    }
  ];

  return (
    <>
      <Helmet>
        <title>Daily Note Listeners - Exclusive Government Advocacy Training Discount</title>
        <meta name="description" content="Exclusive discount for Daily Note listeners. Save $500 on Know Your Power government advocacy training plus bonus content." />
        <meta name="keywords" content="Daily Note,exclusive discount,government advocacy,James A. Brown,special offer" />
        <meta property="og:title" content="Daily Note Listeners - Exclusive Discount" />
        <meta property="og:description" content="Welcome Daily Note listeners! Get exclusive access to government advocacy training with special pricing." />
        <link rel="canonical" href="https://knowyourpowernow.com/daily" />
      </Helmet>

      <div className="bg-bg-primary">
        {/* Hero Section */}
        <section className="relative text-cream-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609842581-HERO.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-navy-blue/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="bg-bright-orange/20 border border-bright-orange/40 rounded-lg p-4 inline-block mb-8"
              >
                <p className="text-bright-orange font-semibold">Welcome Daily Note Listeners!</p>
              </motion.div>
              
              <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                You just heard James A. Brown find clarity in everyday moments.
              </motion.h1>
              
              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.4}}
                className="text-xl md:text-2xl mb-8 text-bright-orange font-semibold"
              >
                Now discover how to find clarity in government systems too.
              </motion.p>
              
              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.6}}
                className="text-lg mb-10 max-w-3xl mx-auto text-cream-white/90"
              >
                After 15 years covering government, James learned that successful advocacy isn't about being loud or connected - it's about understanding how the system really works.
              </motion.p>
              
              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.8}}
                className="text-lg mb-10 max-w-3xl mx-auto text-cream-white/90"
              >
                <strong className="text-bright-orange">Know Your Power</strong> teaches you exactly what James learned, with the same authentic, no-hype approach you hear every day on The Daily Note.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Exclusive Mini-Course */}
        <section className="py-20 bg-bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-text-primary/10 rounded-lg p-8 mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <SafeIcon icon={FiPlay} className="w-8 h-8 text-text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                      Exclusive Mini-Course for The Daily Note Listeners
                    </h2>
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">
                    "How Journalists Think About Government"
                  </h3>
                  <p className="text-lg text-text-secondary mb-6">
                    This exclusive audio module reveals the insider perspective on how government really operates. You'll learn the same mental frameworks that award-winning journalists use to understand and navigate government systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-bg-primary/70 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-text-primary mb-2">What You'll Discover:</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• How journalists identify real power players</li>
                        <li>• The questions that unlock government secrets</li>
                        <li>• Why some stories get covered (and others don't)</li>
                        <li>• How to think like an investigative reporter</li>
                      </ul>
                    </div>
                    <div className="bg-bg-primary/70 p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-text-primary mb-2">Perfect For:</h4>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• Daily Note listeners who want insider access</li>
                        <li>• Anyone curious about government operations</li>
                        <li>• People who want to understand the news better</li>
                        <li>• Citizens ready to engage more effectively</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exclusive Benefits */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Exclusive Daily Note Listener Benefits
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  className="flex items-start space-x-3 bg-bg-primary p-6 rounded-lg shadow-lg"
                >
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-bright-orange mt-1 flex-shrink-0" />
                  <p className="text-text-secondary text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  What You Get
                </h2>
                <div className="space-y-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-bg-accent border-l-4 border-bright-orange p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-text-primary mb-2">
                    No hype. No hot takes. Just truth about how government actually works.
                  </p>
                  <p className="text-bright-orange font-medium italic">
                    Real talk for real people who need real results.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                className="relative"
              >
                <div className="bg-bg-secondary p-8 rounded-lg border border-forest-green/20 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <SafeIcon icon={FiGift} className="w-6 h-6 text-bright-orange" />
                    <h3 className="text-xl font-semibold text-text-primary">Daily Note Exclusive</h3>
                  </div>
                  <p className="text-text-secondary mb-4">
                    "How Journalists Think About Government" - bonus audio module revealing the insider perspective on how government really operates.
                  </p>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-accent-blue" />
                    <span className="text-sm text-accent-blue">Exclusive content for listeners</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers for Daily Listeners */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Exclusive Pricing for Daily Note Listeners
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Select the package that best fits your advocacy goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <PricingTier
                  key={index}
                  title={tier.title}
                  originalPrice={tier.originalPrice}
                  discountedPrice={tier.discountedPrice}
                  monthly={tier.monthly}
                  payments={tier.payments}
                  audience={tier.audience}
                  features={tier.features}
                  popular={tier.popular || false}
                  tier={tier.tier}
                />
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-text-secondary mb-4">
                All packages include our extended 90-day guarantee exclusively for Daily Note listeners. If you're not completely satisfied with your purchase, contact us within the guarantee period for a full refund.
              </p>
              <p className="text-text-secondary font-medium">
                Questions? <a href="mailto:support@knowyourpowernow.com" className="text-bright-orange hover:text-bright-orange/80">Contact our team</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DailyPage;