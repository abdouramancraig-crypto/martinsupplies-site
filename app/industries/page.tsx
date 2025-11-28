'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const industries = [
  {
    id: 'gourmet-restaurants',
    title: 'Gourmet Restaurants',
    description: 'High-end dining establishments seeking unique, premium ingredients to create memorable culinary experiences.',
    challenge: 'Finding consistent, traceable ingredients that meet exacting quality standards.',
    solution: 'We provide chef-quality ingredients with complete origin documentation, enabling you to tell the story behind every dish.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#d4af37',
  },
  {
    id: 'michelin-chefs',
    title: 'Michelin-Level Chefs',
    description: 'Award-winning culinary professionals who demand the finest ingredients for their innovative creations.',
    challenge: 'Accessing rare, exceptional-quality ingredients that differentiate your cuisine.',
    solution: 'Our exclusive spice collection and heritage grains are sought after by starred restaurants worldwide.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: '#c45c26',
  },
  {
    id: 'ethnic-restaurants',
    title: 'Ethnic Restaurants',
    description: 'Authentic African, Caribbean, and fusion restaurants seeking genuine regional ingredients.',
    challenge: 'Sourcing authentic ingredients that capture true regional flavors.',
    solution: 'Direct imports from Cameroon ensure the authentic taste your customers expect.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#2d5a3d',
  },
  {
    id: 'health-manufacturers',
    title: 'Health-Focused Manufacturers',
    description: 'Companies creating better-for-you products that demand clean, natural ingredients.',
    challenge: 'Finding non-GMO, sustainably-sourced ingredients with full documentation.',
    solution: 'All products are Non-GMO verified with complete traceability and certification documentation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: '#5a8f3d',
  },
  {
    id: 'organic-brands',
    title: 'Organic & Non-GMO Brands',
    description: 'Consumer brands built on clean-label promises and transparent sourcing.',
    challenge: 'Maintaining certifications while ensuring consistent supply.',
    solution: 'Our certified supply chain supports your brand integrity with documentation for every shipment.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#3d8f5a',
  },
  {
    id: 'distributors',
    title: 'Food Distributors & Wholesalers',
    description: 'Regional and national distributors expanding their specialty ingredient offerings.',
    challenge: 'Finding reliable, scalable sources for unique product categories.',
    solution: 'Strategic partnership programs with competitive margins and marketing support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: '#3d5a8f',
  },
  {
    id: 'retail-chains',
    title: 'Retail Chains & Grocery',
    description: 'Grocery retailers and specialty food stores seeking unique product offerings.',
    challenge: 'Differentiating product shelves with authentic, story-rich ingredients.',
    solution: 'Retail-ready packaging with compelling origin stories that drive consumer engagement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: '#8f5a3d',
  },
  {
    id: 'spice-blenders',
    title: 'Spice Blenders & Private Label',
    description: 'Companies creating custom spice blends and private label products.',
    challenge: 'Accessing consistent, high-quality base ingredients for blending.',
    solution: 'Bulk spices with detailed specifications for precise blending and white-label options.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: '#8f3d5a',
  },
  {
    id: 'food-labs',
    title: 'Ingredient Suppliers & Food Labs',
    description: 'R&D facilities and ingredient companies exploring new formulations.',
    challenge: 'Sourcing sample quantities and detailed specifications for testing.',
    solution: 'Flexible sample programs with comprehensive technical documentation and lab results.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#5a3d8f',
  },
];

export default function IndustriesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Industries We Serve
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Partnering Across the Food Industry
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From Michelin-starred kitchens to large-scale manufacturing, we understand 
              the unique challenges of each segment and provide tailored solutions that 
              drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Who We Work With
            </h2>
            <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
              Nine distinct segments, each with unique needs—all served with the same 
              commitment to quality and partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group"
              >
                <motion.div
                  animate={{
                    y: hoveredId === industry.id ? -10 : 0,
                    boxShadow: hoveredId === industry.id 
                      ? '0 20px 40px rgba(0,0,0,0.15)' 
                      : '0 4px 6px rgba(0,0,0,0.05)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-xl overflow-hidden bg-[var(--light-gray)] relative"
                >
                  {/* Default State */}
                  <div className="p-8 relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        backgroundColor: hoveredId === industry.id ? industry.color : 'rgba(212, 175, 55, 0.1)',
                        color: hoveredId === industry.id ? '#ffffff' : industry.color,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    >
                      {industry.icon}
                    </motion.div>

                    <h3 className="text-[var(--primary-dark)] text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {industry.title}
                    </h3>
                    
                    <p className="text-[var(--dark-gray)]/70 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    {/* Challenge (visible by default) */}
                    <AnimatePresence mode="wait">
                      {hoveredId !== industry.id ? (
                        <motion.div
                          key="challenge"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-xs font-semibold text-[var(--primary-dark)] uppercase tracking-wider mb-1">
                              Challenge
                            </p>
                            <p className="text-sm text-[var(--dark-gray)]/60">
                              {industry.challenge}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="solution"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: industry.color }}>
                              Our Solution
                            </p>
                            <p className="text-sm text-[var(--dark-gray)]/80">
                              {industry.solution}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <motion.div
                      animate={{ opacity: hoveredId === industry.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-6"
                    >
                      <Link 
                        href={`/contact?industry=${industry.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: industry.color }}
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Background Accent */}
                  <motion.div
                    animate={{
                      scaleY: hoveredId === industry.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 origin-bottom"
                    style={{ backgroundColor: industry.color }}
                  />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--primary-dark)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Business Partners' },
              { value: '9', label: 'Industry Segments' },
              { value: '98%', label: 'Retention Rate' },
              { value: '24hr', label: 'Response Time' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="block text-4xl font-bold text-[var(--accent-gold)] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              Why Partner With Us
            </span>
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Dedicated account managers who understand your specific segment and can anticipate your needs.',
                icon: '🎯',
              },
              {
                title: 'Flexible Programs',
                description: 'From sample-size orders to full container loads, we scale with your business.',
                icon: '📦',
              },
              {
                title: 'Full Support',
                description: 'Marketing materials, technical specs, and origin documentation to support your sales.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-[var(--primary-dark)] text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-[var(--dark-gray)]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-[var(--dark-gray)]/70 mb-8">
              Whatever your industry, we'll work with you to create a supply solution 
              that meets your unique requirements for quality, quantity, and consistency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary bg-[var(--primary-dark)] text-white"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
              <Link href="/wholesale">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-[var(--primary-dark)] border-[var(--primary-dark)]"
                >
                  View Wholesale Options
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
