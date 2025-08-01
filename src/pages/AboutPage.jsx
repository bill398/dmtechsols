import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us - Dora Mpeh Tech Solutions | Our Mission, Vision, and Team</title>
        <meta name="description" content="Learn about Dora Mpeh Tech Solutions, our mission to deliver innovative technology solutions, our core values, and the expert team behind our success." />
      </Helmet>
      <About />
    </motion.div>
  );
};

export default AboutPage;