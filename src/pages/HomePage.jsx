import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Dora Mpeh Tech Solutions - Leading Technology Solutions Provider | Software Development & IT Services</title>
        <meta name="description" content="Dora Mpeh Tech Solutions delivers cutting-edge technology solutions including software development, cloud services, cybersecurity, digital transformation, and IT consulting. Transform your business with our expert team." />
      </Helmet>
      <Hero />
      <Services />
      <Testimonials />
    </motion.div>
  );
};

export default HomePage;