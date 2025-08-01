import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Target,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Developers' },
    { icon: Award, number: '500+', label: 'Projects Delivered' },
    { icon: Clock, number: '10+', label: 'Years Experience' },
    { icon: Target, number: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure reliable, high-performance results.'
    },
    {
      title: 'Client Partnership',
      description: 'We work as an extension of your team, understanding your business goals and delivering tailored solutions.'
    },
    {
      title: 'Continuous Support',
      description: '24/7 support and maintenance ensure your systems run smoothly and evolve with your business needs.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Dora Mpeh Tech Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Founded with a vision to bridge the gap between business needs and technology solutions, 
                Dora Mpeh Web Services has been at the forefront of digital innovation for over a decade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of expert developers, designers, and consultants work collaboratively to deliver 
                solutions that not only meet your current requirements but also scale with your future growth. 
                We believe in building long-term partnerships with our clients, ensuring their success in an 
                ever-evolving digital landscape.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Certified experts in latest technologies',
                'Agile development methodology',
                'Transparent communication throughout projects',
                'Post-launch support and maintenance'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                className="rounded-2xl shadow-2xl w-full h-auto"
                alt="Professional team meeting discussing technology solutions"
                src="/images/about/about-team.jpg"
              />
            </div>
            
            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-yellow-600 text-white rounded-full p-6 shadow-lg z-20"
            >
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">10+ Years</div>
                <div className="text-xs opacity-90">Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-yellow-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and ensure we deliver exceptional value to our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
