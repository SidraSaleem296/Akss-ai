import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, CheckCircle, AlertCircle } from 'lucide-react';

const Security = () => {
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
            <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures to protect your sensitive information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-12 w-12 text-secondary" />,
                title: "Data Privacy",
                description: "End-to-end encryption and secure data handling practices that exceed industry standards."
              },
              {
                icon: <Server className="h-12 w-12 text-secondary" />,
                title: "On-Premise Deployment",
                description: "Keep your data within your network with our on-premise deployment options."
              },
              {
                icon: <Shield className="h-12 w-12 text-secondary" />,
                title: "Compliance",
                description: "GDPR-compliant solutions ensuring your data handling meets regulatory requirements."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Security Measures</h2>
            <p className="text-neutral text-lg">
              Comprehensive security protocols to protect your data at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                "256-bit encryption for all data in transit and at rest",
                "Regular security audits and penetration testing",
                "Multi-factor authentication",
                "Role-based access control",
                "24/7 security monitoring"
              ].map((measure, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-neutral">{measure}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Security Best Practices</h3>
              <div className="space-y-4">
                {[
                  "Regular security updates and patches",
                  "Secure development lifecycle",
                  "Employee security training",
                  "Incident response plan",
                  "Data backup and recovery procedures"
                ].map((practice, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-secondary" />
                    <p className="text-neutral">{practice}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Security Certifications</h2>
            <p className="text-neutral text-lg">
              We maintain the highest security standards through industry-recognized certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "ISO 27001",
              "GDPR Compliant",
              "SOC 2 Type II",
              "HIPAA Compliant"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="font-semibold text-primary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;