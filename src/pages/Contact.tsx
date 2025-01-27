// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     industry: '',
//     message: ''
//   });

//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     // Initialize Google Maps
//     const loadGoogleMaps = () => {
//       const googleMapsScript = document.createElement('script');
//       googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
//       googleMapsScript.async = true;
//       googleMapsScript.defer = true;
//       window.document.body.appendChild(googleMapsScript);

//       googleMapsScript.addEventListener('load', () => {
//         // Coordinates for Islamabad
//         const islamabad = { lat: 33.6844, lng: 73.0479 };
        
//         const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
//           center: islamabad,
//           zoom: 15,
//         });

//         new window.google.maps.Marker({
//           position: islamabad,
//           map: mapInstance,
//           title: 'Akss AI Office'
//         });

//         setMap(mapInstance);
//       });
//     };

//     loadGoogleMaps();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-primary py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Get in Touch
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Ready to transform your business with AI? Contact us to discuss your needs and discover how we can help.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               <div>
//                 <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
//                 <p className="text-neutral mb-8">
//                   Have questions about our AI solutions? Our team is here to help. Reach out to us through any of these channels.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {[
//                   {
//                     icon: <Mail className="h-6 w-6 text-secondary" />,
//                     title: "Email",
//                     content: "contact@akssai.com"
//                   },
//                   {
//                     icon: <Phone className="h-6 w-6 text-secondary" />,
//                     title: "Phone",
//                     content: "+92 333 8270313"
//                   },
//                   {
//                     icon: <MapPin className="h-6 w-6 text-secondary" />,
//                     title: "Location",
//                     content: "Islamabad, Pakistan"
//                   },
//                   {
//                     icon: <MessageSquare className="h-6 w-6 text-secondary" />,
//                     title: "Support",
//                     content: "support@akssai.com"
//                   }
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="flex-shrink-0">{item.icon}</div>
//                     <div>
//                       <h3 className="font-semibold text-primary">{item.title}</h3>
//                       <p className="text-neutral">{item.content}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-neutral mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium text-neutral mb-2">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="industry" className="block text-sm font-medium text-neutral mb-2">
//                       Industry
//                     </label>
//                     <select
//                       id="industry"
//                       name="industry"
//                       value={formData.industry}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
//                       required
//                     >
//                       <option value="">Select Industry</option>
//                       <option value="finance">Finance</option>
//                       <option value="education">Education</option>
//                       <option value="legal">Legal</option>
//                       <option value="ecommerce">E-commerce</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={4}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
//                       required
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-secondary hover:bg-gold text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
//             <p className="text-neutral">
//               We're located in the heart of Islamabad's technology district.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-white p-4 rounded-lg shadow-lg"
//           >
//             <div id="map" className="h-96 w-full rounded-lg"></div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });

  // Removed Google Maps initialization and useState for the map
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Dummy location for Islamabad
    const islamabad = { lat: 33.6844, lng: 73.0479 };

    // You can now simulate map loading with static content or a dummy map.
    // For the purpose of this example, we're using a simple placeholder.

    const mapContainer = document.getElementById('map');
    if (mapContainer) {
      mapContainer.innerHTML = `
        <div style="width: 100%; height: 100%; background: #e0e0e0; display: flex; justify-content: center; align-items: center;">
          <div style="text-align: center;">
            <h3>Dummy Location: Akss AI Office</h3>
            <p>Latitude: ${islamabad.lat}, Longitude: ${islamabad.lng}</p>
            <div style="width: 40px; height: 40px; background-color: red; border-radius: 50%; margin-top: 10px;"></div>
          </div>
        </div>
      `;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Contact us to discuss your needs and discover how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-neutral mb-8">
                  Have questions about our AI solutions? Our team is here to help. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {[{
                  icon: <Mail className="h-6 w-6 text-secondary" />,
                  title: "Email",
                  content: "contact@akssai.com"
                },
                {
                  icon: <Phone className="h-6 w-6 text-secondary" />,
                  title: "Phone",
                  content: "+92 333 8270313"
                },
                {
                  icon: <MapPin className="h-6 w-6 text-secondary" />,
                  title: "Location",
                  content: "Islamabad, Pakistan"
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-secondary" />,
                  title: "Support",
                  content: "support@akssai.com"
                }].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-neutral">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-neutral mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="legal">Legal</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-gold text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-neutral">
              We're located in the heart of Islamabad's technology district.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="map"
            style={{ height: '400px', borderRadius: '10px' }}
          >
            {/* Dummy map rendering */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
