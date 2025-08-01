import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin,
  Instagram
} from 'lucide-react';
import { servicesData } from '@/data/services';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Blog', path: null },
    { name: 'Careers', path: null },
    { name: 'Privacy Policy', path: null }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Dora Mpeh Tech Solutions Logo" 
                className="h-16 w-auto bg-white p-1 rounded-md" 
              />
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. 
              We deliver innovation that drives growth and transforms digital experiences.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">+237 675 587 232</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">dmtechsols@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Douala, Cameroon</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Our Services</span>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link to={link.path} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-medium mb-3 block">Follow Us</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dorampehtech/?igsh=b2lnOHNjMGJiYnc%3D&utm_source=qr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2018 Dora Mpeh Web Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm">Terms of Service</span>
              <span className="text-gray-400 text-sm">Privacy Policy</span>
              <span className="text-gray-400 text-sm">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
