import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is our top priority. Learn how we protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                <p className="text-neutral">
                  At Akss AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <ul className="space-y-4 text-neutral">
                  <li className="flex items-start space-x-3">
                    <Lock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Personal identification information (Name, email address, phone number, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Usage data (How you interact with our services)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Content and data processed through our AI services</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="text-neutral mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="space-y-2 text-neutral">
                  <li>• To provide and maintain our services</li>
                  <li>• To notify you about changes to our services</li>
                  <li>• To provide customer support</li>
                  <li>• To gather analysis or valuable information to improve our services</li>
                  <li>• To monitor the usage of our services</li>
                  <li>• To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p className="text-neutral">
                  We implement robust security measures to maintain the safety of your personal information:
                </p>
                <ul className="space-y-2 text-neutral mt-4">
                  <li>• End-to-end encryption for data transmission</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Strict access controls and authentication</li>
                  <li>• Secure data storage with regular backups</li>
                  <li>• Compliance with industry security standards</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Retention</h2>
                <p className="text-neutral">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Data Rights</h2>
                <p className="text-neutral mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="space-y-2 text-neutral">
                  <li>• Right to access your personal data</li>
                  <li>• Right to rectification of inaccurate data</li>
                  <li>• Right to erasure of your personal data</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-neutral">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="space-y-2 text-neutral mt-4">
                  <li>Email: privacy@akssai.com</li>
                  <li>Phone: +92 333 8270313</li>
                  <li>Address: Islamabad, Pakistan</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;