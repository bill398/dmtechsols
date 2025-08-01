import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import Services from '@/components/Services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter(s => s.slug !== slug);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{service.title} - Services | Dora Mpeh Tech Solutions</title>
        <meta name="description" content={service.longDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
              <Link to="/services" className="hover:text-yellow-600">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span>{service.title}</span>
            </div>
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img  className="rounded-2xl shadow-xl w-full h-auto"  alt={`Illustration for ${service.title}`} src={service.image}/></motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Features & Tech Stack */}
            <aside className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <CardTitle>Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map(tech => (
                        <div key={tech} className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-yellow-600 text-white p-8 text-center rounded-2xl">
                    <CardTitle className="text-2xl mb-4">Ready to Start?</CardTitle>
                    <p className="mb-6 opacity-90">Let's discuss how our {service.title} services can benefit your business.</p>
                    <Button asChild variant="secondary" size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 w-full">
                      <Link to="/contact">
                        Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                </Card>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Other Services</h2>
            </motion.div>
            <Services showHeader={false} showCTA={false} />
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetailPage;