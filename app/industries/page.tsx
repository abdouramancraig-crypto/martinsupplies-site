'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const industries = [
  {
    id: 'restaurants',
    title: 'Restaurants & Chefs',
    desc: 'High-end dining establishments seeking unique, premium ingredients with traceable origins.',
    solution: 'Chef-quality ingredients with complete origin documentation for storytelling.',
  },
  {
    id: 'manufacturers',
    title: 'Food Manufacturers',
    desc: 'Companies creating better-for-you products demanding clean, natural ingredients.',
    solution: 'Non-GMO verified with full documentation and consistent batch quality.',
  },
  {
    id: 'distributors',
    title: 'Distributors',
    desc: 'Regional and national distributors expanding specialty ingredient offerings.',
    solution: 'Strategic partnerships with competitive margins and marketing support.',
  },
  {
    id: 'ethnic',
    title: 'Ethnic Restaurants',
    desc: 'Authentic African, Caribbean, and fusion restaurants seeking genuine regional ingredients.',
    solution: 'Direct imports from Cameroon ensure authentic taste your customers expect.',
  },
  {
    id: 'organic',
    title: 'Organic & Non-GMO Brands',
    desc: 'Consumer brands built on clean-label promises and transparent sourcing.',
    solution: 'Certified supply chain supporting brand integrity with documentation.',
  },
  {
    id: 'blenders',
    title: 'Spice Blenders',
    desc: 'Companies creating custom spice blends and private label products.',
    solution: 'Bulk spices with detailed specifications and white-label options.',
  },
];

export default function IndustriesPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' });

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
              Industries We Serve
            </h1>
            <p className="lead max-w-xl">
              From Michelin-starred kitchens to large-scale manufacturing, we understand 
              the unique challenges of each segment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={gridRef} className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="card h-full flex flex-col">
                  <h3 className="text-xl mb-3 group-hover:text-[var(--brown)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {industry.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-600)] mb-4 flex-grow" style={{ fontWeight: 400 }}>
                    {industry.desc}
                  </p>
                  <div className="pt-4 border-t border-[var(--gray-100)]">
                    <span className="text-xs uppercase tracking-widest text-[var(--gray-400)] mb-2 block" style={{ fontWeight: 400 }}>
                      Our Solution
                    </span>
                    <p className="text-sm text-[var(--black)]" style={{ fontWeight: 400 }}>
                      {industry.solution}
                    </p>
                  </div>
                  <Link href={`/contact?industry=${industry.id}`} className="link-arrow text-xs mt-4">
                    Learn more
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[var(--black)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Business Partners' },
              { value: '6', label: 'Industry Segments' },
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
                <span className="block text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm" style={{ fontWeight: 400 }}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="divider mx-auto mb-6" />
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to transform your supply chain?
            </h2>
            <p className="text-[var(--gray-600)] mb-8" style={{ fontWeight: 400 }}>
              Whatever your industry, we'll work with you to create a supply solution 
              that meets your unique requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/wholesale" className="btn-secondary">
                View Wholesale Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
