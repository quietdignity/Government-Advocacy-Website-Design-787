import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-navy-blue text-cream-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue to-navy-blue/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
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
              className="text-xl md:text-2xl mb-8 text-soft-gray max-w-3xl mx-auto"
            >
              From thinking government was something that happened to people like him, 
              to discovering how ordinary citizens can influence it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-navy-blue mb-6 leading-relaxed">
                James A. Brown grew up thinking government was something that happened <em>to</em> people like him. 
                But 15+ years of award-winning journalism taught him different.
              </p>
              
              <p className="text-lg text-navy-blue mb-6 leading-relaxed">
                Government is people. People who can be reached and influenced - if you know how.
              </p>
              
              <p className="text-lg text-navy-blue mb-6 leading-relaxed">
                After watching some citizens get heard while others got ignored, James saw the patterns. 
                The successful advocates understood how to work within the system.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-warm-orange border-l-4 border-bright-orange p-6 rounded-r-lg mb-8"
              >
                <p className="text-lg font-semibold text-navy-blue">
                  <strong className="text-bright-orange">Know Your Power</strong> shares everything James learned - 
                  real-world techniques that actually work, not theory that sounds good but fails in practice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              Why James's Approach Works
            </h2>
            <p className="text-lg text-soft-gray max-w-2xl mx-auto">
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
                className="bg-cream-white p-6 rounded-lg shadow-lg border border-soft-gray/20 text-center"
              >
                <div className="bg-warm-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={achievement.icon} className="w-8 h-8 text-navy-blue" />
                </div>
                <h3 className="text-xl font-semibold text-navy-blue mb-3">
                  {achievement.title}
                </h3>
                <p className="text-soft-gray">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">
                Media Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-bright-orange pl-4">
                  <h3 className="font-semibold text-navy-blue">USA Today</h3>
                  <p className="text-soft-gray">Contributing journalist covering government and politics</p>
                </div>
                <div className="border-l-4 border-forest-green pl-4">
                  <h3 className="font-semibold text-navy-blue">NPR</h3>
                  <p className="text-soft-gray">Correspondent reporting on government affairs</p>
                </div>
                <div className="border-l-4 border-soft-gray pl-4">
                  <h3 className="font-semibold text-navy-blue">WXXI Public Broadcasting</h3>
                  <p className="text-soft-gray">Government and politics reporter</p>
                </div>
                <div className="border-l-4 border-bright-orange pl-4">
                  <h3 className="font-semibold text-navy-blue">"The Daily Note"</h3>
                  <p className="text-soft-gray">Host of nationally syndicated program</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-navy-blue rounded-lg p-8 text-cream-white">
                <h3 className="text-2xl font-bold mb-6 text-bright-orange">Awards & Recognition</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-bright-orange mt-1" />
                    <div>
                      <h4 className="font-semibold">Associated Press Award</h4>
                      <p className="text-soft-gray text-sm">Excellence in journalism</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-bright-orange mt-1" />
                    <div>
                      <h4 className="font-semibold">New York State Broadcasting Association Award</h4>
                      <p className="text-soft-gray text-sm">Outstanding broadcast journalism</p>
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
              <p className="text-xl mb-8 text-soft-gray">
                To empower ordinary citizens with the knowledge and tools they need to effectively 
                engage with government and create real change in their communities.
              </p>
              <p className="text-lg">
                Because government isn't something that happens to you - it's something you can influence, 
                if you know how.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;