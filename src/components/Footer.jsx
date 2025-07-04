import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-bright-orange mb-4"
            >
              Know Your Power
            </motion.div>
            <p className="text-soft-gray mb-4 max-w-md">
              Master government advocacy with proven techniques from award-winning journalist James A. Brown. 
              Learn how to get what you want from government officials.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:support@knowyourpowernow.com"
                className="text-soft-gray hover:text-bright-orange transition-colors"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-bright-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-soft-gray hover:text-bright-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-soft-gray hover:text-bright-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-soft-gray hover:text-bright-orange transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-soft-gray hover:text-bright-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-bright-orange mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-soft-gray" />
                <span className="text-soft-gray text-sm">support@knowyourpowernow.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-soft-gray" />
                <span className="text-soft-gray text-sm">speaking@knowyourpowernow.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-soft-gray" />
                <span className="text-soft-gray text-sm">media@knowyourpowernow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-gray/20 mt-8 pt-8 text-center">
          <p className="text-soft-gray text-sm">
            © 2024 Know Your Power. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;