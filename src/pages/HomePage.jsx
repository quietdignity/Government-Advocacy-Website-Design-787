import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiAward, FiUsers } = FiIcons;

const HomePage = () => {
  const features = [
    "Understanding real power structures and decision makers",
    "Crafting messages that move government officials to action",
    "Navigating bureaucracy without losing your sanity",
    "Building lasting influence through authentic relationships",
    "Handling opposition and political pressure professionally",
    "Creating movements that drive long-term change",
    "BONUS: Crisis communication and digital advocacy"
  ];

  const testimonials = [
    {
      quote: "I got the city to approve our community center funding in just 6 weeks using James's templates.",
      author: "Maria Santos",
      title: "Nonprofit Director"
    },
    {
      quote: "After taking this course, the mayor's office actually calls ME for input on neighborhood issues.",
      author: "Jennifer Williams",
      title: "Community Advocate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Know Your Power - Master Government Advocacy in 90 Days | James A. Brown</title>
        <meta name="description" content="Learn proven government advocacy techniques from award-winning journalist James A. Brown. Get permits approved, funding secured, and policies changed with our complete system." />
        <meta name="keywords" content="government advocacy, political influence, civic engagement, public policy, community organizing, government relations, James A. Brown" />
        <meta property="og:title" content="Know Your Power - Master Government Advocacy in 90 Days" />
        <meta property="og:description" content="The only complete system for getting what you want from government officials. From award-winning journalist James A. Brown." />
        <meta property="og:image" content="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609842581-HERO.jpg" />
        <meta property="og:url" content="https://knowyourpowernow.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Know Your Power - Master Government Advocacy" />
        <meta name="twitter:description" content="Learn proven techniques to influence government officials and create real change in your community." />
        <meta name="twitter:image" content="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609842581-HERO.jpg" />
        <link rel="canonical" href="https://knowyourpowernow.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Know Your Power - Government Advocacy Mastery",
            "description": "Complete system for mastering government advocacy and getting what you want from government officials",
            "provider": {
              "@type": "Person",
              "name": "James A. Brown",
              "description": "Award-winning journalist with 15+ years covering government and politics"
            },
            "offers": {
              "@type": "Offer",
              "price": "1497",
              "priceCurrency": "USD"
            }
          })}
        </script>
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
            <div className="absolute inset-0 bg-navy-blue/80"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-cream-white"
              >
                Master Government Advocacy in{' '}
                <span className="text-bright-orange">90 Days</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-4 text-cream-white/90"
              >
                The Only Complete System for Getting What You Want from Government
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg mb-8 text-bright-orange font-semibold"
              >
                From Award-Winning Journalist James A. Brown
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg mb-10 max-w-3xl mx-auto text-cream-white"
              >
                Whether you need permits approved, funding secured, or policies changed - 
                learn the proven methods that actually work with government officials.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CTAButton size="xl" className="mb-4">
                  Get Instant Access - Save $500
                </CTAButton>
                <p className="text-sm text-cream-white/80">60-day money-back guarantee</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                The Problem Every Citizen Faces
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-text-secondary mb-6">
                  You know government decisions affect your life, business, and community daily. 
                  But when you try to get involved, you hit walls: phone calls that go unreturned, 
                  meetings that lead nowhere, officials who seem impossible to reach.
                </p>
                <p className="text-lg text-text-secondary mb-6">
                  Most people think government is this impersonal machine that doesn't care about regular citizens.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-bg-accent border-l-4 border-bright-orange p-6 rounded-r-lg"
                >
                  <p className="text-lg font-semibold text-text-primary">
                    Here's what I learned after 15 years covering government as an award-winning journalist: 
                    Government isn't a machine. It's people. And people can be influenced, persuaded, 
                    and engaged - if you know how.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About James Section */}
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
                  Meet James A. Brown
                </h2>
                <p className="text-lg text-text-secondary">
                  Award-winning journalist with 15+ years covering government and politics for major outlets 
                  including USA Today, NPR, and WXXI Public Broadcasting. Host of nationally syndicated "The Daily Note." 
                  Winner of Associated Press and New York State Broadcasting Association Awards.
                </p>
                <p className="text-lg text-text-secondary">
                  After spending over a decade in newsrooms, city halls, and government buildings, 
                  James discovered how government actually works - and how ordinary citizens can influence it.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-bright-orange" />
                    <span className="text-sm text-text-secondary">Award Winner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-bright-orange" />
                    <span className="text-sm text-text-secondary">15+ Years Experience</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-navy-blue rounded-lg p-8 text-cream-white shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-bright-orange">Credentials</h3>
                  <ul className="space-y-2 text-cream-white">
                    <li>• USA Today contributor</li>
                    <li>• NPR correspondent</li>
                    <li>• WXXI Public Broadcasting</li>
                    <li>• Host of "The Daily Note"</li>
                    <li>• Associated Press Award Winner</li>
                    <li>• NY State Broadcasting Award Winner</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Master Section */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                What You'll Master
              </h2>
              <p className="text-lg text-text-muted mb-8">
                Complete System + Bonus Training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-bright-orange mt-1 flex-shrink-0" />
                  <p className="text-text-secondary text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-bg-secondary p-6 rounded-lg border border-forest-green/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">40+ Professional Templates</h3>
                <p className="text-text-secondary">
                  Power mapping worksheets, meeting preparation checklists, coalition building guides, 
                  and crisis response plans.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-bg-accent p-6 rounded-lg border border-bright-orange/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">Video Walkthroughs</h3>
                <p className="text-text-secondary">
                  For every template so you see exactly how to use them with real examples.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-bg-secondary p-6 rounded-lg border border-accent-blue/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">Audio Course</h3>
                <p className="text-text-secondary">
                  For learning anywhere - commuting, exercising, or wherever you have time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes This Different */}
        <section className="py-20 bg-navy-blue text-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cream-white">
                What Makes This Different
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6 text-cream-white">
                  This isn't theory from a textbook. These are real-world techniques James learned 
                  covering government for 15+ years, watching some citizens get heard while others got ignored.
                </p>
                <p className="text-lg text-bright-orange font-semibold">
                  The successful advocates weren't the loudest or most connected. 
                  They were the ones who understood how to work within the system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Success Stories
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Your Investment
              </h2>
            </div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="max-w-2xl mx-auto bg-bg-primary rounded-lg shadow-xl border border-text-muted/20 overflow-hidden"
            >
              <div className="bg-bright-orange text-cream-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Complete System</h3>
                <div className="text-4xl font-bold mb-2">$1,497</div>
                <p className="text-cream-white/80 line-through">Regular Price: $1,997</p>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">Complete training system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">40+ professional templates with video guides</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">Audio course for mobile learning</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">Crisis communication training</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">Lifetime access with future updates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-bright-orange" />
                    <span className="text-text-secondary">60-day money-back guarantee</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <CTAButton size="xl" className="w-full mb-4">
                    Get Instant Access Now
                  </CTAButton>
                  <p className="text-sm text-text-muted">
                    Secure payment • Instant access • 60-day guarantee
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;