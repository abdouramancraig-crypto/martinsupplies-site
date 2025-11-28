'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const offices = [
  {
    city: 'Houston',
    state: 'TX',
    role: 'Headquarters',
    address: ['4200 Main Street, Suite 800', 'Houston, TX 77002'],
    phone: '+1 (713) 555-0123',
    email: 'houston@martinsupplies.com',
    hours: 'Mon-Fri: 8am-6pm CT',
    position: { x: 45, y: 65 },
  },
  {
    city: 'Los Angeles',
    state: 'CA',
    role: 'West Coast Distribution',
    address: ['1250 S. Figueroa Street', 'Los Angeles, CA 90015'],
    phone: '+1 (213) 555-0124',
    email: 'la@martinsupplies.com',
    hours: 'Mon-Fri: 7am-5pm PT',
    position: { x: 15, y: 50 },
  },
  {
    city: 'Miami',
    state: 'FL',
    role: 'Southeast Hub',
    address: ['800 Brickell Avenue, Floor 12', 'Miami, FL 33131'],
    phone: '+1 (305) 555-0125',
    email: 'miami@martinsupplies.com',
    hours: 'Mon-Fri: 8am-6pm ET',
    position: { x: 75, y: 72 },
  },
  {
    city: 'Douala',
    country: 'Cameroon',
    role: 'Africa Operations',
    address: ['Rue de l\'Industrie, Zone Portuaire', 'Douala, Cameroon'],
    phone: '+237 233 42 XX XX',
    email: 'africa@martinsupplies.com',
    hours: 'Mon-Fri: 8am-5pm WAT',
    position: { x: 48, y: 55 },
  },
];

const faqs = [
  {
    question: 'What are your minimum order quantities?',
    answer: 'Our minimum order for wholesale accounts is $500. For bulk/pallet orders, minimums vary by product. Contact our wholesale team for specific requirements.',
  },
  {
    question: 'Do you offer samples?',
    answer: 'Yes! We offer sample kits for qualified business accounts. Fill out our contact form and request samples, and our team will follow up with options and pricing.',
  },
  {
    question: 'What are your shipping options?',
    answer: 'We offer standard ground shipping (5-7 days), express shipping (2-3 days), and expedited shipping (next-day) for urgent orders. Freight shipping is available for pallet-quantity orders.',
  },
  {
    question: 'Are your products certified organic?',
    answer: 'Select products in our line carry USDA Organic certification. All our products are Non-GMO verified. Check individual product pages or contact us for specific certification information.',
  },
  {
    question: 'How do I become a wholesale partner?',
    answer: 'Fill out our wholesale inquiry form or contact our wholesale team directly. We\'ll review your business and set up an account within 24-48 business hours.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship throughout the United States and Canada. For international inquiries, please contact our team directly to discuss options.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Let's Start a Conversation
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you have questions about our products, want to explore partnership 
              opportunities, or just want to learn more about what we do—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'General Inquiries',
                contact: 'info@martinsupplies.com',
                phone: '+1 (713) 555-0123',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Wholesale & Partnerships',
                contact: 'wholesale@martinsupplies.com',
                phone: '+1 (713) 555-0124',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Support',
                contact: 'support@martinsupplies.com',
                phone: '1-800-MARTIN-S',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--light-gray)] rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                  {item.icon}
                </div>
                <h3 className="text-[var(--primary-dark)] font-semibold mb-2">{item.title}</h3>
                <p className="text-[var(--accent-gold)] text-sm mb-1">{item.contact}</p>
                <p className="text-[var(--dark-gray)]/60 text-sm">{item.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Map */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[var(--light-gray)] rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <motion.svg 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                      className="w-10 h-10 text-green-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <h3 className="text-[var(--primary-dark)] text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[var(--dark-gray)]/70 mb-6">
                    Thank you for reaching out. A member of our team will get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--accent-gold)] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors bg-white"
                      >
                        <option value="">Select industry...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bakery">Bakery</option>
                        <option value="manufacturer">Food Manufacturer</option>
                        <option value="distributor">Distributor</option>
                        <option value="retailer">Specialty Retailer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors bg-white"
                      >
                        <option value="">Select a topic...</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="products">Product Questions</option>
                        <option value="samples">Sample Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[var(--accent-gold)] text-[var(--primary-dark)] font-semibold rounded-lg hover:bg-[var(--secondary-gold)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Office Locations Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Our Locations
              </h2>

              {/* Interactive Map */}
              <div className="bg-[var(--primary-dark)] rounded-xl p-6 mb-6 relative overflow-hidden aspect-[16/10]">
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,30 Q30,20 50,30 T90,30" fill="none" stroke="var(--accent-gold)" strokeWidth="0.5" />
                    <path d="M10,50 Q30,40 50,50 T90,50" fill="none" stroke="var(--accent-gold)" strokeWidth="0.5" />
                    <path d="M10,70 Q30,60 50,70 T90,70" fill="none" stroke="var(--accent-gold)" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Office Markers */}
                {offices.slice(0, 3).map((office) => (
                  <motion.button
                    key={office.city}
                    onClick={() => setSelectedOffice(selectedOffice === office.city ? null : office.city)}
                    className="absolute"
                    style={{ left: `${office.position.x}%`, top: `${office.position.y}%` }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)]"
                    />
                    <span className={`relative block w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white ${
                      selectedOffice === office.city ? 'bg-[var(--accent-gold)]' : 'bg-[var(--accent-gold)]'
                    }`} />
                    <span className="absolute left-1/2 -translate-x-1/2 top-3 text-white text-xs whitespace-nowrap font-medium">
                      {office.city}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Office Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedOffice(office.city)}
                    className={`bg-[var(--light-gray)] rounded-lg p-4 cursor-pointer transition-all ${
                      selectedOffice === office.city ? 'ring-2 ring-[var(--accent-gold)]' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-[var(--primary-dark)] font-semibold">
                          {office.city}, {office.state || office.country}
                        </h4>
                        <p className="text-[var(--accent-gold)] text-xs">{office.role}</p>
                      </div>
                    </div>
                    <div className="text-xs text-[var(--dark-gray)]/60 space-y-1">
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      <p className="pt-1">{office.hours}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="text-[var(--primary-dark)]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[var(--primary-dark)] pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-[var(--accent-gold)] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-[var(--dark-gray)]/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[var(--primary-dark)]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8">
              For wholesale inquiries, visit our dedicated wholesale page for partnership 
              information and pricing tiers.
            </p>
            <Link href="/wholesale">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                View Wholesale Options
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
