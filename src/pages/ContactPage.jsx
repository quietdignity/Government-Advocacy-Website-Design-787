import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiMessageSquare, FiUsers, FiFileText } = FiIcons;

const ContactPage = () => {
  const contactOptions = [
    {
      icon: FiMail,
      title: "Course Support",
      email: "support@knowyourpowernow.com",
      description: "Questions about the course, materials, or technical support"
    },
    {
      icon: FiUsers,
      title: "Speaking & Corporate Training",
      email: "speaking@knowyourpowernow.com",
      description: "Custom corporate training options and group pricing"
    },
    {
      icon: FiFileText,
      title: "Media Inquiries",
      email: "media@knowyourpowernow.com",
      description: "Press inquiries and media requests"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Know Your Power - Get Help with Government Advocacy Training</title>
        <meta name="description" content="Contact Know Your Power for course support, speaking inquiries, or media requests. Get help with government advocacy training from James A. Brown." />
        <meta name="keywords" content="contact, support, speaking, media, government advocacy training, James A. Brown" />
        <meta property="og:title" content="Contact Know Your Power" />
        <meta property="og:description" content="Get in touch for course support, speaking inquiries, or media requests." />
        <link rel="canonical" href="https://knowyourpowernow.com/contact" />
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Get in <span className="text-bright-orange">Touch</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-cream-white/90 max-w-3xl mx-auto"
              >
                We're here to help you succeed with government advocacy
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-bg-primary p-8 rounded-lg shadow-lg border border-text-muted/20 text-center"
                >
                  <div className="bg-bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={option.icon} className="w-8 h-8 text-text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-4">
                    {option.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {option.description}
                  </p>
                  <a
                    href={`mailto:${option.email}`}
                    className="text-bright-orange hover:text-bright-orange/80 font-semibold transition-colors"
                  >
                    {option.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Response Times
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-bright-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-text-primary">Course Support</h3>
                      <p className="text-text-secondary">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-forest-green mt-1" />
                    <div>
                      <h3 className="font-semibold text-text-primary">Speaking Inquiries</h3>
                      <p className="text-text-secondary">We respond within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiFileText} className="w-6 h-6 text-accent-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-text-primary">Media Requests</h3>
                      <p className="text-text-secondary">Same-day response for urgent requests</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  What to Include
                </h2>
                <div className="bg-bg-secondary p-6 rounded-lg shadow-lg border border-text-muted/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    For Course Support:
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Your order number or account email</li>
                    <li>• Specific question or issue</li>
                    <li>• Screenshots if relevant</li>
                    <li>• What you've already tried</li>
                  </ul>
                </div>
                <div className="bg-bg-secondary p-6 rounded-lg shadow-lg border border-text-muted/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    For Speaking Requests:
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Event date and location</li>
                    <li>• Audience size and type</li>
                    <li>• Preferred topics</li>
                    <li>• Budget range</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;