import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact Us - Dora Mpeh Tech Solutions | Get a Free Quote</title>
        <meta name="description" content="Get in touch with the Dora Mpeh Tech Solutions team. Contact us for a free consultation and quote for your software development, cloud, or cybersecurity project." />
      </Helmet>
      <Contact />
    </motion.div>
  );
};

export default ContactPage;