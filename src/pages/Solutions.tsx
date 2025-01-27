import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Scale, ShoppingBag, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12 text-secondary" />,
      title: "Finance",
      description: "AI-powered solutions for financial analysis, fraud detection, and automated document processing.",
      marketSize: "$12B by 2033",
      features: [
        "Automated financial analysis",
        "Fraud detection systems",
        "Document processing",
        "Risk assessment"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      title: "Education",
      description: "Personalized learning experiences and administrative automation for educational institutions.",
      marketSize: "$20B by 2030",
      features: [
        "Adaptive learning platforms",
        "Student performance analytics",
        "Content generation",
        "Administrative automation"
      ]
    },
    {
      icon: <Scale className="h-12 w-12 text-secondary" />,
      title: "Legal",
      description: "AI-enhanced legal research and document analysis tools for law firms.",
      marketSize: "$5B by 2026",
      features: [
        "Legal document analysis",
        "Case research automation",
        "Contract review",
        "Compliance checking"
      ]
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-secondary" />,
      title: "E-commerce",
      description: "Customer-focused AI solutions for personalized shopping experiences.",
      marketSize: "$30B by 2028",
      features: [
        "Personalized recommendations",
        "Customer service automation",
        "Inventory management",
        "Market trend analysis"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions that address the unique challenges of your industry while ensuring data security and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-secondary transition-colors duration-300"
              >
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{industry.title}</h3>
                <p className="text-neutral mb-4">{industry.description}</p>
                <div className="mb-4">
                  <span className="text-secondary font-semibold">Market Size: </span>
                  <span className="text-neutral">{industry.marketSize}</span>
                </div>
                <ul className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-neutral">
                      <ChevronRight className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Akss AI?</h2>
            <p className="text-neutral text-lg max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge AI technology to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-secondary" />,
                title: "Custom Development",
                description: "Tailored solutions built specifically for your business needs"
              },
              {
                icon: <Building2 className="h-8 w-8 text-secondary" />,
                title: "Industry Expertise",
                description: "Deep understanding of industry-specific challenges and requirements"
              },
              {
                icon: <Scale className="h-8 w-8 text-secondary" />,
                title: "Scalable Solutions",
                description: "Grow your AI capabilities alongside your business"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-neutral">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can address your specific needs and challenges.
            </p>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-gold text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;