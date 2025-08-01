import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { portfolioData } from '@/data/portfolioData';

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-50"
    >
      <Helmet>
        <title>Our Portfolio - Dora Mpeh Tech Solutions | Case Studies & Success Stories</title>
        <meta
          name="description"
          content="Discover our portfolio of successful projects. See how Dora Mpeh Tech Solutions has helped businesses with custom software, cloud solutions, and digital transformation."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-cyan-500 p-4 rounded-full mb-4">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take pride in the solutions we deliver. Explore some of our recent projects and see
            the tangible results we've achieved for our clients.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="service-card h-full group flex flex-col overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} website`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardDescription className="text-yellow-600 font-semibold">
                    {project.category}
                  </CardDescription>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors mt-auto"
                  >
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: portfolioData.length * 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800">And many more...</h3>
              <p className="text-gray-600 mt-2">
                Our work spans various industries and technologies. Contact us to see more examples relevant to your project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's turn your idea into a reality. We're ready to tackle your next challenge.
            </p>
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 px-8">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
