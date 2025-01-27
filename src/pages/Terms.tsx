import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const Terms = () => {
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
            <FileText className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
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
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral">
                  By accessing and using Akss AI's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Services</h2>
                <p className="text-neutral mb-4">
                  Akss AI provides:
                </p>
                <ul className="space-y-2 text-neutral">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Generative AI solutions for enterprises</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>Custom AI model development and deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>AI integration and consulting services</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. User Obligations</h2>
                <ul className="space-y-2 text-neutral">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Use services only for lawful purposes</li>
                  <li>• Respect intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
                <p className="text-neutral">
                  All content, features, and functionality of our services are owned by Akss AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Payment Terms</h2>
                <ul className="space-y-2 text-neutral">
                  <li>• Subscription fees are billed in advance</li>
                  <li>• All fees are non-refundable</li>
                  <li>• We reserve the right to modify pricing with notice</li>
                  <li>• Late payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
                <p className="text-neutral">
                  Akss AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Service Availability</h2>
                <p className="text-neutral">
                  We strive to provide uninterrupted service but cannot guarantee 100% uptime. We reserve the right to modify or discontinue services with notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Termination</h2>
                <p className="text-neutral mb-4">
                  We may terminate or suspend your access to our services:
                </p>
                <ul className="space-y-2 text-neutral">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>For violations of these terms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>For fraudulent or illegal activities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span>For non-payment of fees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to Terms</h2>
                <p className="text-neutral">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Information</h2>
                <p className="text-neutral">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="space-y-2 text-neutral mt-4">
                  <li className="flex items-center space-x-3">
                    <HelpCircle className="h-6 w-6 text-secondary" />
                    <span>Email: legal@akssai.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <HelpCircle className="h-6 w-6 text-secondary" />
                    <span>Phone: +92 333 8270313</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;