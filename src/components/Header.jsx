import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from '@/data/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
    }`;
  
  const getMobileNavLinkClass = ({ isActive }) =>
    `text-left font-medium py-2 ${
      isActive ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
    }`;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Dora Mpeh Tech Solutions Logo" className="h-16 w-auto" />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </motion.div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center cursor-pointer text-gray-700 hover:text-yellow-600 font-medium"
                >
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {servicesData.map(service => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <NavLink to={link.path} className={getNavLinkClass}>
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+237 675 587 232</span>
            </div>
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-yellow-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={getMobileNavLinkClass}>Home</NavLink>
              <div className="text-gray-700 font-medium py-2">Services</div>
              <div className="flex flex-col space-y-2 pl-4">
                {servicesData.map(service => (
                  <NavLink key={service.slug} to={`/services/${service.slug}`} onClick={() => setIsMenuOpen(false)} className={getMobileNavLinkClass}>
                    {service.title}
                  </NavLink>
                ))}
              </div>
              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={getMobileNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+237 675 587 232</span>
                </div>
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;