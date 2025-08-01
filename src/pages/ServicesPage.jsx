import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Services - Dora Mpeh Tech Solutions | Custom Software, Cloud & Cybersecurity</title>
        <meta name="description" content="Explore our comprehensive technology services including custom software development, cloud solutions, cybersecurity, digital transformation, and IT consulting." />
      </Helmet>
      <Services />
    </motion.div>
  );
};

export default ServicesPage;