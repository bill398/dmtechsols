import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/services';

const Services = ({ showHeader = true, showCTA = true }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. 
              From custom software development to strategic IT consulting, we've got you covered.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${service.slug}`} className="block h-full">
                  <Card className="service-card h-full group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        asChild
                        variant="ghost" 
                        className="w-full group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors"
                      >
                        <Link to={`/services/${service.slug}`} className="flex items-center">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your business goals. 
                Get a free consultation and custom quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8"
                >
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-2 px-8"
                >
                  <Link to="/portfolio">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
