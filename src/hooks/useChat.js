import React, { useState } from 'react';
import { servicesData } from '@/data/services';

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 'init',
      role: 'assistant',
      content: "Hello! I'm the DMTechSols AI assistant. How can I help you today? You can ask me about our services, contact info, or portfolio.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      return "Hi there! How can I assist you?";
    }

    if (lowerCaseInput.includes('service')) {
      const serviceLinks = servicesData.map(s => `<li><a href="/services/${s.slug}" class="text-blue-500 hover:underline">${s.title}</a></li>`).join('');
      return `We offer a range of services to help your business grow. Here are our main areas of expertise: <ul class="list-disc pl-5 mt-2">${serviceLinks}</ul> You can click on any service to learn more.`;
    }

    if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('email') || lowerCaseInput.includes('phone')) {
      return 'You can reach us at <a href="mailto:info@dmtechsols.com" class="text-blue-500 hover:underline">info@dmtechsols.com</a> or call us at +1 (555) 123-4567. You can also use the <a href="/contact" class="text-blue-500 hover:underline">contact form</a> on our website.';
    }

    if (lowerCaseInput.includes('about')) {
      return 'DMTechSols is a leading technology solutions provider dedicated to helping businesses innovate and grow. You can learn more about our mission, vision, and team on our <a href="/about" class="text-blue-500 hover:underline">About Us</a> page.';
    }
    
    if (lowerCaseInput.includes('portfolio') || lowerCaseInput.includes('work') || lowerCaseInput.includes('project')) {
        return 'We have a portfolio of successful projects showcasing our expertise. You can explore our case studies on the <a href="/portfolio" class="text-blue-500 hover:underline">Portfolio</a> page.';
    }

    if (lowerCaseInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    return "I'm sorry, I'm not sure how to answer that. I can help with questions about our services, portfolio, and contact information. Try asking 'What services do you offer?'.";
  };

  const sendMessage = (userInput) => {
    if (!userInput.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userInput,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseContent = generateResponse(userInput);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botResponseContent,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return { messages, sendMessage, isTyping };
};