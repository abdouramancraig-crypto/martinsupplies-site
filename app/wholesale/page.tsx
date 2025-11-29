'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  { title: 'Direct Sourcing', desc: 'Cut out middlemen and work directly with the importer.' },
  { title: 'Consistent Quality', desc: 'Every batch meets the same exacting standards.' },
  { title: 'Reliable Supply', desc: 'Strategic inventory management ensures timely delivery.' },
  { title: 'Full Documentation', desc: 'Traceability, COAs, and compliance support.' },
];

export default function WholesalePage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    products: '',
    volume: '',
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
    setFormData({ businessName: '', contactName: '', email: '', phone: '', businessType: '', products: '', volume: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
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
              Wholesale & Partnerships
            </h1>
            <p className="lead max-w-xl">
              Whether you're a chef, bakery, manufacturer, or distributor — we have a 
              partnership program designed for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-y border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-[var(--yellow)] mb-3 block">→</span>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)]" style={{ fontWeight: 400 }}>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="divider mx-auto mb-6" />
            <h2 style={{ fontFamily: 'var(--font-display)' }}>
              Partnership Programs
            </h2>
            <p className="text-[var(--gray-600)] mt-4" style={{ fontWeight: 400 }}>
              Flexible programs designed to grow with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                min: '$500',
                desc: 'Perfect for restaurants and small bakeries.',
                features: ['Full product catalog', 'Standard pricing', 'Email support', 'Standard shipping'],
                highlight: false,
              },
              {
                name: 'Professional',
                min: '$2,500',
                desc: 'Ideal for established food businesses.',
                features: ['10% volume discount', 'Priority support', 'Express shipping', 'Dedicated account manager'],
                highlight: true,
              },
              {
                name: 'Enterprise',
                min: '$10,000+',
                desc: 'For manufacturers and distributors.',
                features: ['Custom pricing', 'Product customization', 'Just-in-time delivery', 'Marketing co-op'],
                highlight: false,
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 ${tier.highlight ? 'bg-[var(--black)] text-white' : 'bg-white border border-[var(--gray-200)]'}`}
              >
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 bg-[var(--yellow)] text-[var(--black)] text-xs uppercase tracking-widest mb-4">
                    Popular
                  </span>
                )}
                <h3 className={`text-2xl mb-2 ${tier.highlight ? 'text-white' : ''}`} style={{ fontFamily: 'var(--font-display)' }}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlight ? 'text-white/70' : 'text-[var(--gray-600)]'}`} style={{ fontWeight: 400 }}>
                  {tier.desc}
                </p>
                <div className="mb-6">
                  <span className={`text-xs ${tier.highlight ? 'text-white/50' : 'text-[var(--gray-400)]'}`}>Minimum Order</span>
                  <span className={`block text-3xl font-bold ${tier.highlight ? 'text-[var(--yellow)]' : 'text-[var(--black)]'}`} style={{ fontFamily: 'var(--font-display)' }}>
                    {tier.min}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm ${tier.highlight ? 'text-white/80' : 'text-[var(--gray-600)]'}`} style={{ fontWeight: 400 }}>
                      <span className={tier.highlight ? 'text-[var(--yellow)]' : 'text-[var(--yellow)]'}>→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={tier.highlight ? 'btn-yellow w-full' : 'btn-primary w-full'}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" ref={formRef} className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mb-6" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Request Wholesale Information
              </h2>
              <p className="text-[var(--gray-600)] mb-8" style={{ fontWeight: 400 }}>
                Fill out the form and our wholesale team will reach out within 24 business 
                hours to discuss your needs and provide custom pricing.
              </p>

              <div className="space-y-6">
                <div>
                  <span className="footer-text-thin block mb-2">Email</span>
                  <a href="mailto:wholesale@martinsupplies.com" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors">
                    wholesale@martinsupplies.com
                  </a>
                </div>
                <div>
                  <span className="footer-text-thin block mb-2">Phone</span>
                  <a href="tel:+17135550123" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors">
                    +1 (713) 555-0123
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-[var(--gray-50)] p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--yellow)] flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Inquiry Received
                  </h3>
                  <p className="text-[var(--gray-600)] mb-6" style={{ fontWeight: 400 }}>
                    We'll be in touch within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-[var(--gray-500)] hover:text-[var(--black)] transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[var(--gray-50)] p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="footer-text-thin block mb-2">Business Name *</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                    <div>
                      <label className="footer-text-thin block mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                      <label className="footer-text-thin block mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="footer-text-thin block mb-2">Business Type *</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        <option value="">Select type...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="bakery">Bakery</option>
                        <option value="manufacturer">Food Manufacturer</option>
                        <option value="distributor">Distributor</option>
                        <option value="retailer">Specialty Retailer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="footer-text-thin block mb-2">Est. Monthly Volume</label>
                      <select
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        <option value="">Select range...</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-2500">$500 - $2,500</option>
                        <option value="2500-10000">$2,500 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="footer-text-thin block mb-2">Products of Interest</label>
                    <input
                      type="text"
                      name="products"
                      value={formData.products}
                      onChange={handleChange}
                      placeholder="e.g., Penja Pepper, Non-GMO Corn, Cassava Flour"
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontWeight: 400 }}
                    />
                  </div>

                  <div>
                    <label className="footer-text-thin block mb-2">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business and specific needs..."
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                      style={{ fontWeight: 400 }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
