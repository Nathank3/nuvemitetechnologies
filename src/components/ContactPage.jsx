import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import DemoBookingModal from './DemoBookingModal';

const ContactPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: 'Product Inquiry',
      message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
      const newErrors = {};
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
          // Mock submission
          console.log("Submitting form to info@nuvemite.com", formData);
          alert(`Message sent! We'll contact you at ${formData.email} shortly.`);
          setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', subject: 'Product Inquiry', message: '' });
          setErrors({});
      }
  };
  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on complexity, typically ranging from 6-16 weeks for standard deployments."
    },
    {
      question: "Do you offer cloud and on-premise options?",
      answer: "Yes, our solutions like Imara LIMS are available as a cloud-hosted SaaS solution or can be deployed on-premise based on your requirements."
    },
    {
      question: "What ERP systems do you integrate with?",
      answer: "We offer pre-built integrations with major Enterprise Resource Planning systems and can develop custom integrations for your specific stack."
    },
    {
      question: "Is your software validated for regulated industries?",
      answer: "Yes, we provide comprehensive IQ/OQ/PQ documentation packages for FDA 21 CFR Part 11, EU GMP Annex 11, and other regulatory frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Ready to transform your operations? Get in touch with our team to discuss your needs.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT COLUMN: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                      <p className="text-slate-600 mb-2">For general inquiries and support</p>
                      <a href="mailto:info@nuvemite.com" className="text-blue-600 font-semibold hover:underline">info@nuvemite.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-slate-600 mb-2">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+254712984364" className="text-blue-600 font-semibold hover:underline">+254 712 984364</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redesigned Schedule Demo CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl transition-transform hover:scale-[1.02]">
                <div className="absolute -right-4 -top-4 opacity-10">
                    <Calendar className="h-32 w-32 rotate-12" />
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">See it in Action</h3>
                    <p className="text-blue-100 mb-8 leading-relaxed">
                        Experience the power of our ecosystem firsthand. Book a personalized demo with our product experts today.
                    </p>
                    
                    <button 
                        onClick={() => setIsDemoModalOpen(true)}
                        className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
                    >
                        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Schedule a Demo
                    </button>
                </div>
              </div>

              <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Nuvemite Technologies</h3>
                <p className="text-slate-600 leading-relaxed">
                  The innovation hub behind Imara LIMS and the EcosystemHub. We're committed to transforming business management through cutting-edge technology solutions.
                </p>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
            >
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`} 
                        placeholder="John" 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" 
                        placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`} 
                            placeholder="john@example.com" 
                        />
                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" 
                            placeholder="+254..." 
                        />
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none" 
                    placeholder="Your Company Ltd." 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none"
                  >
                    <option>Product Inquiry</option>
                    <option>Request Demo</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions about our platform and services.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-500 mt-1"><CheckCircle2 className="w-5 h-5" /></span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 ml-8 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <DemoBookingModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default ContactPage;
