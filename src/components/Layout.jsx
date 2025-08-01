import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <Toaster />
    </div>
  );
};

export default Layout;