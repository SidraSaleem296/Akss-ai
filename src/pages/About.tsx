import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Award, Rocket, Heart, Shield } from 'lucide-react';

const About = () => {
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
              About Akss AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering secure and innovative AI solutions for Pakistan's digital future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Target className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-neutral">
                To empower organizations with secure, scalable, and innovative AI solutions that drive digital transformation while protecting sensitive data and maintaining compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Brain className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-neutral">
                To become Pakistan's leading provider of enterprise-grade GenAI solutions, setting new standards for secure AI implementation across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-neutral text-lg">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-secondary" />,
                title: "Security First",
                description: "We prioritize data security and privacy in every solution we build"
              },
              {
                icon: <Award className="h-8 w-8 text-secondary" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work"
              },
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: "Customer Focus",
                description: "We put our customers' needs at the heart of everything we do"
              },
              {
                icon: <Rocket className="h-8 w-8 text-secondary" />,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with AI"
              },
              {
                icon: <Heart className="h-8 w-8 text-secondary" />,
                title: "Integrity",
                description: "We maintain the highest standards of ethical conduct"
              },
              {
                icon: <Brain className="h-8 w-8 text-secondary" />,
                title: "Expertise",
                description: "We leverage deep technical knowledge to solve complex challenges"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-neutral">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Approach</h2>
            <p className="text-neutral text-lg max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Problem-First Mindset</h3>
                <p className="text-neutral">
                  We start by deeply understanding your specific challenges and requirements before proposing solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Security by Design</h3>
                <p className="text-neutral">
                  Security isn't an afterthought - it's built into every solution from day one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Continuous Innovation</h3>
                <p className="text-neutral">
                  We stay at the forefront of AI technology to provide you with the most advanced solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Scalable Solutions</h3>
                <p className="text-neutral">
                  Our solutions grow with your business, providing long-term value and adaptability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;