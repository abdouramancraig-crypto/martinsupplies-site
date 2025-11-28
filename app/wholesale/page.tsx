'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const partnershipTiers = [
  {
    name: 'Starter',
    description: 'Perfect for restaurants and small bakeries exploring our products.',
    minOrder: '$500',
    features: [
      'Access to full product catalog',
      'Standard pricing',
      'Email support',
      'Monthly ordering',
      'Standard shipping (5-7 days)',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for established food businesses with consistent needs.',
    minOrder: '$2,500',
    features: [
      'Everything in Starter',
      '10% volume discount',
      'Priority phone support',
      'Weekly ordering available',
      'Express shipping (2-3 days)',
      'Dedicated account manager',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For manufacturers and distributors requiring large volumes.',
    minOrder: '$10,000',
    features: [
      'Everything in Professional',
      'Custom pricing negotiation',
      'Product customization options',
      'Just-in-time delivery',
      'White-label opportunities',
      'Quarterly business reviews',
      'Marketing co-op funds',
    ],
    highlight: false,
  },
];

const benefits = [
  {
    title: 'Direct Sourcing',
    description: 'Cut out middlemen and work directly with the importer. Better prices, better relationships.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Consistent Quality',
    description: 'Every batch meets the same exacting standards. Your products will always taste the same.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Reliable Supply',
    description: 'Strategic inventory management ensures your orders ship on time, every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Marketing Support',
    description: 'Tell your sourcing story with our marketing materials and origin documentation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    monthlyVolume: '',
    products: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: '',
      monthlyVolume: '',
      products: '',
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
              Wholesale & Partnerships
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Partner With the Source
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you're a chef looking for unique ingredients, a bakery seeking premium 
              flours, or a manufacturer needing reliable bulk supply, we have a partnership 
              program designed for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                  {benefit.icon}
                </div>
                <h3 className="text-[var(--primary-dark)] font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--dark-gray)]/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Partnership Programs
            </h2>
            <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
              Flexible programs designed to grow with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  tier.highlight 
                    ? 'bg-[var(--primary-dark)] text-white ring-2 ring-[var(--accent-gold)]' 
                    : 'bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block px-3 py-1 bg-[var(--accent-gold)] text-[var(--primary-dark)] text-xs font-semibold rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 
                  className={`text-2xl mb-2 ${tier.highlight ? 'text-white' : 'text-[var(--primary-dark)]'}`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlight ? 'text-white/70' : 'text-[var(--dark-gray)]/70'}`}>
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${tier.highlight ? 'text-white/50' : 'text-[var(--dark-gray)]/50'}`}>
                    Minimum Order
                  </span>
                  <span className={`block text-3xl font-bold ${tier.highlight ? 'text-[var(--accent-gold)]' : 'text-[var(--accent-gold)]'}`}>
                    {tier.minOrder}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? 'text-[var(--accent-gold)]' : 'text-[var(--accent-gold)]'}`} 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className={tier.highlight ? 'text-white/80' : 'text-[var(--dark-gray)]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-[var(--accent-gold)] text-[var(--primary-dark)] hover:bg-[var(--secondary-gold)]'
                      : 'bg-[var(--primary-dark)] text-white hover:bg-[var(--primary-dark)]/90'
                  }`}
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Get Started
              </span>
              <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Request Wholesale Information
              </h2>
              <p className="text-[var(--dark-gray)]/70 mb-8">
                Fill out the form and our wholesale team will reach out within 24 business 
                hours to discuss your needs and provide custom pricing.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[var(--primary-dark)] font-semibold">Email Us</h4>
                    <p className="text-[var(--dark-gray)]/70">wholesale@martinsupplies.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[var(--primary-dark)] font-semibold">Call Us</h4>
                    <p className="text-[var(--dark-gray)]/70">+1 (713) 555-0123</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="bg-[var(--light-gray)] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[var(--primary-dark)] text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Thank You!
                  </h3>
                  <p className="text-[var(--dark-gray)]/70 mb-6">
                    We've received your inquiry and will be in touch within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[var(--accent-gold)] font-medium hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Email *
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
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors bg-white"
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
                      <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                        Est. Monthly Volume
                      </label>
                      <select
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors bg-white"
                      >
                        <option value="">Select range...</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-2500">$500 - $2,500</option>
                        <option value="2500-10000">$2,500 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                      Products of Interest
                    </label>
                    <input
                      type="text"
                      name="products"
                      value={formData.products}
                      onChange={handleChange}
                      placeholder="e.g., Cameroon Pepper, Non-GMO Corn, Stone-Milled Flour"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[var(--primary-dark)] mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business and specific needs..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[var(--accent-gold)] text-[var(--primary-dark)] font-semibold rounded-lg hover:bg-[var(--secondary-gold)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

