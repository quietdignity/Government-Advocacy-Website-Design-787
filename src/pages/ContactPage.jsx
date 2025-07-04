import React from 'react';
import { motion } from 'framer-motion';
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
              Get in <span className="text-bright-orange">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-soft-gray max-w-3xl mx-auto"
            >
              We're here to help you succeed with government advocacy
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-cream-white p-8 rounded-lg shadow-lg border border-soft-gray/20 text-center"
              >
                <div className="bg-warm-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={option.icon} className="w-8 h-8 text-navy-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-navy-blue mb-4">
                  {option.title}
                </h3>
                <p className="text-soft-gray mb-6">
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
      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">
                Response Times
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-bright-orange mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">Course Support</h3>
                    <p className="text-soft-gray">We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-forest-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">Speaking Inquiries</h3>
                    <p className="text-soft-gray">We respond within 48 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiFileText} className="w-6 h-6 text-soft-gray mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-blue">Media Requests</h3>
                    <p className="text-soft-gray">Same-day response for urgent requests</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue">
                What to Include
              </h2>
              <div className="bg-cream-white p-6 rounded-lg shadow-lg border border-soft-gray/20">
                <h3 className="text-xl font-semibold text-navy-blue mb-4">
                  For Course Support:
                </h3>
                <ul className="space-y-2 text-soft-gray">
                  <li>• Your order number or account email</li>
                  <li>• Specific question or issue</li>
                  <li>• Screenshots if relevant</li>
                  <li>• What you've already tried</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg shadow-lg border border-soft-gray/20">
                <h3 className="text-xl font-semibold text-navy-blue mb-4">
                  For Speaking Requests:
                </h3>
                <ul className="space-y-2 text-soft-gray">
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
  );
};

export default ContactPage;