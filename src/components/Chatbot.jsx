import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const whatsappUrl =
    "https://wa.me/237675587232";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        size="icon"
        className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl hover:bg-green-600"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-8 h-8" />
        </a>
      </Button>
    </motion.div>
  );
};

export default Chatbot;
