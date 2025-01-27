import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Cloud, Lock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-secondary" />,
      title: "Industry-Specific AI Models",
      description: "Tailored solutions for finance, education, legal, and e-commerce sectors with specialized capabilities."
    },
    {
      icon: <Shield className="h-12 w-12 text-secondary" />,
      title: "Enterprise-Grade Security",
      description: "On-premise deployment options and robust security measures to protect sensitive data."
    },
    {
      icon: <Cloud className="h-12 w-12 text-secondary" />,
      title: "AWS Infrastructure",
      description: "Leveraging AWS services for cost-effective, scalable, and reliable infrastructure."
    },
    {
      icon: <Lock className="h-12 w-12 text-secondary" />,
      title: "Data Privacy",
      description: "GDPR-compliant solutions ensuring your data remains secure and private."
    },
    {
      icon: <Zap className="h-12 w-12 text-secondary" />,
      title: "Full Stack Integration",
      description: "Seamless integration with existing systems and workflows for maximum efficiency."
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Collaborative Platform",
      description: "Enhanced team collaboration features for better productivity and innovation."
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
              Features That Drive Innovation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our comprehensive suite of features can transform your business operations with secure, scalable AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-secondary transition-colors duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Specifications</h2>
            <p className="text-neutral text-lg">
              Built with cutting-edge technology to ensure performance, security, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">AI & Machine Learning</h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Custom-trained language models
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Industry-specific fine-tuning
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Real-time model updates
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-secondary mr-2" />
                  Advanced NLP capabilities
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Infrastructure & Security</h3>
              <ul className="space-y-3 text-neutral">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-secondary mr-2" />
                  AWS cloud infrastructure
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-secondary mr-2" />
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-secondary mr-2" />
                  GDPR compliance
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-secondary mr-2" />
                  Regular security audits
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;