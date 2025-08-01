import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_fxc4i0k",
        "template_z7e5b7e",
        templateParams,
        "-MSquNRER_qq8U-VR"
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
        variant: "success",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: error.text || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+237 697 960 504"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dmtechsols@gmail.com"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Douala, Cameroon"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "24/7 Emergency Support"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const services = [
    "Software Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Digital Transformation",
    "IT Consulting",
    "Website Design",
    "Other",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology
            solutions? Let&apos;s discuss your project and see how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                We&apos;re here to help! Reach out via any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {info.title}
                            </h4>
                            {info.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-gray-600 text-sm"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form and we&apos;ll respond shortly.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+237 675 587 232"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      required
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 h-12 text-lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
