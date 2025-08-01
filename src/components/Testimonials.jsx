import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      content: 'DMTechSols transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale from 10 to 500 users seamlessly. Outstanding work!',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateCorp',
      content: 'The custom software they developed for us increased our operational efficiency by 300%. Their team is professional, responsive, and truly understands business needs.',
      rating: 5,
      company: 'InnovateCorp'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, GrowthLab',
      content: 'Working with DMTechSols was a game-changer. They delivered our e-commerce platform ahead of schedule and under budget. Highly recommend their services!',
      rating: 5,
      company: 'GrowthLab'
    },
    {
      name: 'David Thompson',
      position: 'IT Director, SecureBank',
      content: 'Their cybersecurity audit revealed critical vulnerabilities we never knew existed. The comprehensive security solution they implemented gives us complete peace of mind.',
      rating: 5,
      company: 'SecureBank'
    },
    {
      name: 'Lisa Wang',
      position: 'VP Operations, LogiFlow',
      content: 'The digital transformation project exceeded all expectations. Our processes are now fully automated, saving us 40 hours per week. Exceptional team and results!',
      rating: 5,
      company: 'LogiFlow'
    },
    {
      name: 'Robert Martinez',
      position: 'Founder, CreativeStudio',
      content: 'Our new website design is absolutely stunning and performs flawlessly. The user experience improvements led to a 250% increase in conversions. Amazing work!',
      rating: 5,
      company: 'CreativeStudio'
    }
  ];

  const clientLogos = [
    'TechStart Inc.',
    'InnovateCorp',
    'GrowthLab',
    'SecureBank',
    'LogiFlow',
    'CreativeStudio',
    'DataDriven Co.',
    'CloudFirst Ltd.'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with DMTechSols and the results we've delivered.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-yellow-600 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-yellow-600 font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 group-hover:from-yellow-50 group-hover:to-cyan-50 transition-colors duration-300">
                    <div className="text-lg font-bold text-gray-700 group-hover:text-yellow-600 transition-colors">
                      {logo}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '98%', label: 'Client Satisfaction Rate', description: 'Based on post-project surveys' },
            { number: '500+', label: 'Successful Projects', description: 'Delivered on time and budget' },
            { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;