import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiTarget, FiBookOpen } = FiIcons;

const AboutPage = () => {
  const achievements = [
    {
      icon: FiAward,
      title: "Award-Winning Journalist",
      description: "Associated Press and New York State Broadcasting Association Awards"
    },
    {
      icon: FiUsers,
      title: "15+ Years Experience",
      description: "Covering government and politics for major outlets"
    },
    {
      icon: FiTarget,
      title: "Proven Methods",
      description: "Real-world techniques that actually work with government officials"
    },
    {
      icon: FiBookOpen,
      title: "Comprehensive System",
      description: "Complete training with templates, guides, and ongoing support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About James A. Brown - Award-Winning Journalist & Government Advocacy Expert</title>
        <meta name="description" content="Learn about James A. Brown, award-winning journalist with 15+ years covering government. Creator of Know Your Power advocacy training system." />
        <meta name="keywords" content="James A. Brown, journalist, government advocacy, USA Today, NPR, WXXI, Daily Note, Associated Press Award" />
        <meta property="og:title" content="About James A. Brown - Government Advocacy Expert" />
        <meta property="og:description" content="Award-winning journalist with 15+ years covering government and politics for major outlets including USA Today and NPR." />
        <meta property="og:image" content="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609531586-blob" />
        <link rel="canonical" href="https://knowyourpowernow.com/about" />
      </Helmet>

      <div className="bg-pure-white">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  About <span className="text-bright-orange">James A. Brown</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 text-cream-white/90 max-w-3xl"
                >
                  From thinking government was something that happened to people like him, 
                  to discovering how ordinary citizens can influence it.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751609531586-blob" 
                  alt="James A. Brown, award-winning journalist and government advocacy expert"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  James A. Brown grew up thinking government was something that happened <em>to</em> people like him. 
                  But 15+ years of award-winning journalism taught him different.
                </p>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Government is people. People who can be reached and influenced - if you know how.
                </p>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  After watching some citizens get heard while others got ignored, James saw the patterns. 
                  The successful advocates understood how to work within the system.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-bg-accent border-l-4 border-bright-orange p-6 rounded-r-lg mb-8"
                >
                  <p className="text-lg font-semibold text-text-primary">
                    <strong className="text-bright-orange">Know Your Power</strong> shares everything James learned - 
                    real-world techniques that actually work, not theory that sounds good but fails in practice.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Why James's Approach Works
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Real experience covering government from the inside, combined with proven methods 
                that deliver results for ordinary citizens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-bg-secondary p-6 rounded-lg shadow-lg border border-text-muted/20 text-center"
                >
                  <div className="bg-bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={achievement.icon} className="w-8 h-8 text-text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-text-secondary">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
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
                  Media Experience
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-bright-orange pl-4">
                    <h3 className="font-semibold text-text-primary">USA Today</h3>
                    <p className="text-text-secondary">Contributing journalist covering government and politics</p>
                  </div>
                  <div className="border-l-4 border-forest-green pl-4">
                    <h3 className="font-semibold text-text-primary">NPR</h3>
                    <p className="text-text-secondary">Correspondent reporting on government affairs</p>
                  </div>
                  <div className="border-l-4 border-accent-blue pl-4">
                    <h3 className="font-semibold text-text-primary">WXXI Public Broadcasting</h3>
                    <p className="text-text-secondary">Government and politics reporter</p>
                  </div>
                  <div className="border-l-4 border-bright-orange pl-4">
                    <h3 className="font-semibold text-text-primary">"The Daily Note"</h3>
                    <p className="text-text-secondary">Host of nationally syndicated program</p>
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
                  <h3 className="text-2xl font-bold mb-6 text-bright-orange">Awards & Recognition</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiAward} className="w-6 h-6 text-bright-orange mt-1" />
                      <div>
                        <h4 className="font-semibold text-cream-white">Associated Press Award</h4>
                        <p className="text-cream-white/80 text-sm">Excellence in journalism</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiAward} className="w-6 h-6 text-bright-orange mt-1" />
                      <div>
                        <h4 className="font-semibold text-cream-white">New York State Broadcasting Association Award</h4>
                        <p className="text-cream-white/80 text-sm">Outstanding broadcast journalism</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-navy-blue text-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Mission
                </h2>
                <p className="text-xl mb-8 text-cream-white/90">
                  To empower ordinary citizens with the knowledge and tools they need to effectively 
                  engage with government and create real change in their communities.
                </p>
                <p className="text-lg text-cream-white">
                  Because government isn't something that happens to you - it's something you can influence, 
                  if you know how.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;