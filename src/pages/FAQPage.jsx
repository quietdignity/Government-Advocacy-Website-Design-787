import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp } = FiIcons;

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "I'm not a professional advocate. Is this too advanced for me?",
      answer: "Not at all. This course is designed for anyone who needs to work with government - business owners, nonprofit leaders, concerned citizens, or professional advocates. We start with basics and build systematically."
    },
    {
      question: "How is this different from other advocacy training?",
      answer: "This is the only course that combines comprehensive templates, video walkthroughs, crisis communication, and digital advocacy in one system. Plus, it's created by a journalist who's covered government for 15+ years."
    },
    {
      question: "Do I need any special software or tools?",
      answer: "No. Everything works with basic software you already have. Templates are provided in multiple formats (PDF, Word, Google Docs) for maximum compatibility."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many students report improved confidence in their first week and actual results within 30 days. The system is designed for both immediate wins and long-term influence building."
    },
    {
      question: "Is this only for local government?",
      answer: "The principles work at all levels - local, state, and federal. We provide specific guidance for different types of government interactions."
    },
    {
      question: "How do I access the course materials?",
      answer: "After purchase, you'll receive login credentials for our online course platform where all materials are hosted. You can access everything 24/7 from any device."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 60-day money-back guarantee (90 days for Daily Note listeners). If you're not completely satisfied, contact support for a full refund."
    },
    {
      question: "Do you offer corporate or group training?",
      answer: "Yes. Contact speaking@knowyourpowernow.com for custom corporate training options and group pricing."
    },
    {
      question: "Will this work in my state/country?",
      answer: "The core principles apply everywhere, though specific examples focus on U.S. systems. International students have successfully adapted the techniques to their local government structures."
    },
    {
      question: "How long do I have access to the materials?",
      answer: "Lifetime access. Once you purchase, you can access all materials forever, including any future updates we add to the course."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              Frequently Asked <span className="text-bright-orange">Questions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-soft-gray max-w-3xl mx-auto"
            >
              Everything you need to know about the Know Your Power system
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-white border border-soft-gray/20 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-light-blue transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy-blue pr-4">
                    {faq.question}
                  </h3>
                  <SafeIcon
                    icon={openFAQ === index ? FiChevronUp : FiChevronDown}
                    className="w-5 h-5 text-bright-orange flex-shrink-0"
                  />
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-soft-gray/20"
                    >
                      <div className="px-6 py-4">
                        <p className="text-navy-blue leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-soft-gray mb-8">
                Our support team is here to help. Reach out with any questions about the course, 
                materials, or how the system can work for your specific situation.
              </p>
              <div className="bg-cream-white p-6 rounded-lg shadow-lg border border-soft-gray/20">
                <h3 className="text-xl font-semibold text-navy-blue mb-4">Contact Support</h3>
                <p className="text-navy-blue">
                  <strong>Email:</strong> support@knowyourpowernow.com
                </p>
                <p className="text-soft-gray text-sm mt-2">
                  We typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;