'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const offices = [
  {
    city: 'Houston',
    state: 'TX',
    role: 'Headquarters',
    email: 'houston@martinsupplies.com',
    phone: '+1 (713) 555-0123',
  },
  {
    city: 'Los Angeles',
    state: 'CA',
    role: 'West Coast (Planned)',
    email: 'la@martinsupplies.com',
    phone: 'Coming Soon',
  },
  {
    city: 'Miami',
    state: 'FL',
    role: 'Southeast (Planned)',
    email: 'miami@martinsupplies.com',
    phone: 'Coming Soon',
  },
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 glow-subtle" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="divider mb-8" />
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Get in Touch
            </h1>
            <p className="lead max-w-xl">
              Whether you have questions about our products, want to explore partnership 
              opportunities, or need samples — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 border-y border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="footer-text-thin block mb-2">Email</span>
              <a href="mailto:hello@martinsupplies.com" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors">
                hello@martinsupplies.com
              </a>
            </div>
            <div>
              <span className="footer-text-thin block mb-2">Phone</span>
              <a href="tel:+17135550123" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors">
                +1 (713) 555-0123
              </a>
            </div>
            <div>
              <span className="footer-text-thin block mb-2">WhatsApp</span>
              <a href="https://wa.me/17135550123" target="_blank" className="link-arrow text-sm">
                Chat now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Locations */}
      <section ref={formRef} className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mb-6" />
              <h2 className="mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Send a message
              </h2>

              {isSubmitted ? (
                <div className="bg-[var(--gray-50)] p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--yellow)] flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Message Sent
                  </h3>
                  <p className="text-[var(--gray-600)] mb-6" style={{ fontWeight: 400 }}>
                    We'll get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-[var(--gray-500)] hover:text-[var(--black)] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="footer-text-thin block mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                    <div>
                      <label className="footer-text-thin block mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="footer-text-thin block mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                    <div>
                      <label className="footer-text-thin block mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        <option value="">Select topic...</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="samples">Sample Request</option>
                        <option value="products">Product Questions</option>
                        <option value="compliance">Compliance Dossier</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="footer-text-thin block mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                      style={{ fontWeight: 400 }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="divider mb-6" />
              <h2 className="mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Our Locations
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-6 border border-[var(--gray-200)] hover:border-[var(--yellow)] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                          {office.city}, {office.state}
                        </h3>
                        <span className="text-xs uppercase tracking-widest text-[var(--gray-400)]" style={{ fontWeight: 400 }}>
                          {office.role}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-[var(--gray-600)]" style={{ fontWeight: 400 }}>
                      <p>{office.email}</p>
                      <p>{office.phone}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-8 border-t border-[var(--gray-200)]">
                <span className="footer-text-thin block mb-4">Quick Links</span>
                <div className="flex flex-wrap gap-4">
                  <Link href="/products" className="link-arrow text-xs">
                    Product Catalog
                  </Link>
                  <Link href="/wholesale" className="link-arrow text-xs">
                    Wholesale Info
                  </Link>
                  <Link href="/standards" className="link-arrow text-xs">
                    Standards & Practices
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
