import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, Building2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pakistan's First GenAI Based<br />SAAS Provider
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses with secure, scalable, and industry-focused AI solutions that protect your sensitive data while driving innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="bg-secondary hover:bg-gold text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300">
                Get Started
              </Link>
              <Link to="/solutions" className="bg-transparent border-2 border-accent hover:bg-accent/10 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Industry Challenges We Solve</h2>
            <p className="text-neutral text-lg">Industries are struggling to adopt generative AI effectively while maintaining data security.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-secondary" />,
                title: "Finance",
                description: "Automation and personalized LLMs without compromising data compliance"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-secondary" />,
                title: "Education",
                description: "GenAI based personalized learning tools for creative education"
              },
              {
                icon: <Shield className="h-8 w-8 text-secondary" />,
                title: "Legal",
                description: "Efficient AI tools while safeguarding sensitive legal data"
              },
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: "E-commerce",
                description: "Market and customer-oriented LLMs for enhanced engagement"
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

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Solution</h2>
              <p className="text-lg text-neutral mb-8">
                Akss AI provides bespoke generative AI solutions that empower businesses to innovate without compromise. From adaptive learning to fraud detection, we deliver secure, scalable, and precise tools.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-secondary" />,
                    title: "Tailored Solutions",
                    description: "Fine-tuned models specific to your industry"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-secondary" />,
                    title: "Data Privacy & Security",
                    description: "On-premise solutions with complete data control"
                  },
                  {
                    icon: <Brain className="h-6 w-6 text-secondary" />,
                    title: "Full Stack SAAS",
                    description: "End-to-end solutions for your business needs"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary">{feature.title}</h3>
                      <p className="text-neutral">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Pakistan's leading GenAI SAAS provider and unlock the full potential of your organization.
            </p>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-gold text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;