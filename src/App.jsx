import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import AboutPage from '@/pages/AboutPage';
import PortfolioPage from '@/pages/PortfolioPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;