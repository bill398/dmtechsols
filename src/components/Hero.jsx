import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-sm"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Trusted by 500+ businesses worldwide</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Empowering businesses with cutting-edge technology solutions. From software development to digital transformation, we deliver innovation that drives growth.
              </p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              {[
                'Expert team with 10+ years experience',
                '24/7 support and maintenance',
                'Scalable solutions for any business size'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={handleStartProject}
                size="lg" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleViewWork}
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-yellow-600 px-8 py-3 text-lg"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                alt="Modern technology workspace with developers collaborating" 
                src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" 
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Support</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-yellow-600 text-white rounded-lg shadow-lg p-4 z-20"
            >
              <div className="text-sm font-medium">99.9% Uptime</div>
              <div className="text-xs opacity-90">Guaranteed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
