import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users, DollarSign, Target } from 'lucide-react';

const ElevatorPitch = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Akss AI: Secure Enterprise GenAI Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              Pakistan's First GenAI Based SAAS Providers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Have You Ever Wondered...</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Security",
                questions: [
                  "Where your company's sensitive data goes when using ChatGPT, Claude, or Gemini?",
                  "How secure your data is with shared subscriptions?",
                  "Why repeatedly upload and prompt-tune models with the same documents?"
                ]
              },
              {
                title: "Infrastructure Costs",
                questions: [
                  "Are you juggling multiple cloud provider subscriptions?",
                  "How much are you spending on separate hosting solutions?",
                  "Why manage complex cloud infrastructure?"
                ]
              },
              {
                title: "Resource Management",
                questions: [
                  "How much time is wasted on repetitive fine-tuning?",
                  "Could you have custom UI formats for content generation?",
                  "Are rising cloud costs eating into your AI budget?"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{section.title}</h3>
                <ul className="space-y-4">
                  {section.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <p className="text-neutral">{question}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hook & Problem */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">The Challenge</h2>
                <p className="text-lg text-neutral mb-4">
                  In 2023, over 80% of companies reported data privacy concerns as their primary barrier to GenAI adoption. Yet, businesses can't afford to ignore generative AI's competitive advantages.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Companies Face:</h3>
                {[
                  "Need for GenAI to stay competitive",
                  "Forced to share sensitive data with public models",
                  "Wasted resources on repeated prompt engineering",
                  "Lack of secure, customized solutions",
                  "Security risks from shared subscriptions"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-secondary" />
                    <p className="text-neutral">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">The Opportunity</h2>
                <p className="text-lg text-neutral mb-4">
                  This challenge presents a unique opportunity. By developing private, secure GenAI solutions, we help businesses:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Keep sensitive data within their network",
                  "Eliminate repetitive training costs",
                  "Get customized GenAI solutions",
                  "Save up to 60% on infrastructure costs"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-secondary" />
                    <p className="text-neutral">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Unique Value Proposition</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-secondary" />,
                title: "Private Network Hosting",
                description: "Custom-trained GenAI models hosted on your private network"
              },
              {
                icon: <Zap className="h-12 w-12 text-secondary" />,
                title: "Cost-Effective",
                description: "Leveraging open-source models to reduce costs"
              },
              {
                icon: <Brain className="h-12 w-12 text-secondary" />,
                title: "Full-Stack SAAS",
                description: "Complete design-to-deployment service"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market & Financials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Target Market</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <DollarSign className="h-6 w-6 text-secondary" />,
                    title: "Market Size",
                    description: "Pakistan's GenAI market projected to reach $643M by 2025"
                  },
                  {
                    icon: <Target className="h-6 w-6 text-secondary" />,
                    title: "Total Addressable Market",
                    description: "Combined TAM across target sectors: $1.2B"
                  },
                  {
                    icon: <Users className="h-6 w-6 text-secondary" />,
                    title: "Initial Focus",
                    description: "Metropolitan areas with high tech adoption"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-neutral">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Business Model</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Revenue Streams</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <span className="text-secondary">•</span>
                      <span className="text-neutral">Freemium Model - Basic features & community support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-secondary">•</span>
                      <span className="text-neutral">Premium Subscription - Starting at $100/month</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-secondary">•</span>
                      <span className="text-neutral">Enterprise Solutions - Starting at $2,000 per project</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Track Record</h2>
            <p className="text-lg text-neutral">
              Successfully deployed solutions across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Insighted</h3>
              <p className="text-neutral mb-4">
                A comprehensive education industry solution providing full-stack SAAS capabilities.
              </p>
              <a href="https://insight-ed-demo-60.vercel.app/" className="text-secondary hover:text-primary transition-colors duration-300">
                View Project →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">CaseLink</h3>
              <p className="text-neutral mb-4">
                A law firm management system streamlining operations and documentation handling.
              </p>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-300">
                View Project →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElevatorPitch;