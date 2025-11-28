'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Floating Illustrations Component
function FloatingIllustrations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Corn kernel */}
      <motion.svg
        className="absolute top-[20%] right-[15%] w-16 h-16 opacity-20 animate-float"
        viewBox="0 0 100 100"
        fill="var(--yellow)"
      >
        <ellipse cx="50" cy="50" rx="30" ry="45" />
      </motion.svg>
      
      {/* Peppercorn cluster */}
      <motion.svg
        className="absolute top-[40%] right-[25%] w-12 h-12 opacity-15 animate-float-delayed"
        viewBox="0 0 100 100"
        fill="var(--brown)"
      >
        <circle cx="30" cy="50" r="20" />
        <circle cx="60" cy="35" r="18" />
        <circle cx="65" cy="65" r="16" />
      </motion.svg>
      
      {/* Cassava leaf outline */}
      <motion.svg
        className="absolute top-[60%] right-[10%] w-20 h-20 opacity-10 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        stroke="var(--black)"
        strokeWidth="1"
      >
        <path d="M50 90 L50 50 M50 50 L20 20 M50 50 L80 20 M50 50 L10 40 M50 50 L90 40" />
      </motion.svg>

      {/* Glow halos */}
      <div className="absolute top-[30%] right-[20%] w-64 h-64 rounded-full bg-[var(--yellow)] opacity-[0.08] blur-3xl" />
      <div className="absolute top-[50%] right-[5%] w-48 h-48 rounded-full bg-[var(--yellow)] opacity-[0.05] blur-2xl" />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <FloatingIllustrations />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="divider mb-8" />
            
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Heritage ingredients.
              <br />
              <span className="text-[var(--gray-400)]">Modern standards.</span>
            </h1>
            
            <p className="lead max-w-lg mb-10">
              Non-GMO corn, soybeans, and rare Central African spices — 
              traceable from volcanic Cameroonian soil to your kitchen.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/wholesale" className="btn-primary">
                Request Samples
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
          </motion.div>
          
          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 glow rounded-full" />
              <div className="absolute inset-8 border border-[var(--gray-200)] rounded-full" />
              <div className="absolute inset-16 border border-[var(--yellow)]/30 rounded-full" />
              <div className="absolute inset-24 bg-[var(--yellow)]/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="footer-text-thin">Scroll</span>
          <div className="w-px h-8 bg-[var(--gray-300)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Problem vs Solution Section
function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-[var(--gray-50)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="divider mx-auto mb-6" />
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            A better way to source
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 border border-[var(--gray-200)] bg-white"
          >
            <span className="text-xs uppercase tracking-widest text-[var(--gray-400)] mb-4 block" style={{ fontWeight: 300 }}>
              The problem
            </span>
            <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              How sourcing feels today
            </h3>
            <ul className="space-y-4">
              {[
                'Opaque supply chains with unknown origins',
                'Inconsistent quality batch to batch',
                'Limited traceability documentation',
                'Generic products without story or provenance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                  <span className="text-[var(--gray-400)] mt-1">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-10 border border-[var(--yellow)] bg-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--yellow)]/10 rounded-bl-full" />
            <span className="text-xs uppercase tracking-widest text-[var(--brown)] mb-4 block" style={{ fontWeight: 300 }}>
              Our answer
            </span>
            <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              What working with us feels like
            </h3>
            <ul className="space-y-4">
              {[
                'Direct farm relationships in Cameroon',
                'Non-GMO verified, consistent quality',
                'Full documentation & traceability',
                'Story-rich ingredients with provenance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--black)]" style={{ fontWeight: 400 }}>
                  <span className="text-[var(--yellow)] mt-1">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Product Grid Section
const products = [
  { name: 'Yellow Corn', category: 'Grains', desc: 'Non-GMO, volcanic soil grown' },
  { name: 'Soybeans', category: 'Grains', desc: 'Food-grade, traceable origin' },
  { name: 'Poivre de Penja', category: 'Spices', desc: 'PGI-protected white pepper' },
  { name: 'Mbongo', category: 'Spices', desc: 'Traditional smoked spice' },
  { name: 'Njansang', category: 'Spices', desc: 'Aromatic seed, nutty profile' },
  { name: 'Cassava Flour', category: 'Flours', desc: 'Fine-milled, gluten-free' },
];

function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="divider mb-6" />
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Our products</h2>
          </div>
          <Link href="/products" className="link-arrow mt-4 md:mt-0">
            View all products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/products" className="block group">
                <div className="card h-full">
                  <span className="text-xs uppercase tracking-widest text-[var(--gray-400)] mb-3 block" style={{ fontWeight: 300 }}>
                    {product.category}
                  </span>
                  <h3 className="text-xl mb-2 group-hover:text-[var(--brown)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {product.name}
                  </h3>
                  <p className="text-[var(--gray-500)] text-sm mb-4" style={{ fontWeight: 300 }}>
                    {product.desc}
                  </p>
                  <span className="link-arrow text-xs">View specs</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
const processSteps = [
  {
    step: '01',
    title: 'Soil & Harvest',
    location: 'Cameroon',
    desc: 'Volcanic, equatorial soils in the Western Highlands create unique growing conditions.',
  },
  {
    step: '02',
    title: 'Sorting & Processing',
    location: 'Local Facilities',
    desc: 'Hand-picked, cleaned, and milled using traditional methods that preserve quality.',
  },
  {
    step: '03',
    title: 'Compliance & Documentation',
    location: 'Quality Control',
    desc: 'FDA-aligned practices, phytosanitary certificates, lab tests, and full traceability.',
  },
  {
    step: '04',
    title: 'Shipping & Delivery',
    location: 'Houston / LA / Miami',
    desc: 'Strategic port locations ensure efficient delivery across North America.',
  },
];

function ProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={ref} className="section-spacing bg-[var(--black)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--yellow)]/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="divider mb-6" />
          <h2 className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
            From soil to shelf
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-white/10 absolute -top-4 -left-2" style={{ fontFamily: 'var(--font-display)' }}>
                {step.step}
              </span>
              <div className="relative pt-8">
                <span className="text-[var(--yellow)] text-xs uppercase tracking-widest mb-2 block" style={{ fontWeight: 300 }}>
                  {step.location}
                </span>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm" style={{ fontWeight: 300 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compliance Teaser Section
function ComplianceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing border-y border-[var(--gray-200)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="divider mb-6" />
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Standards you can trust
            </h2>
            <p className="text-[var(--gray-600)] mb-8" style={{ fontWeight: 300 }}>
              FDA-aligned import practices, facility registration, prior notice, 
              labeling compliance, and FSVP support. We design our process around 
              regulatory requirements — not as an afterthought.
            </p>
            <Link href="/standards" className="btn-secondary">
              View Standards & Practices
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              'FDA Facility Registration',
              'Prior Notice Compliance',
              'FSMA Preventive Controls',
              'FSVP Documentation',
              'Phytosanitary Certificates',
              'Full Traceability',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3 p-4 border border-[var(--gray-200)]">
                <span className="text-[var(--yellow)]">✓</span>
                <span className="text-sm" style={{ fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Founder Section
function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-[var(--gray-100)]" />
            <div className="absolute inset-8 border border-[var(--gray-200)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--yellow)]/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="divider mb-6" />
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Built on heritage,
              <br />driven by purpose
            </h2>
            
            <div className="space-y-4 text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
              <p>
                MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO was founded by Kevin Milol — a first-generation American 
                with roots in Cameroon and a degree in Electrical Engineering from a U.S. university.
              </p>
              <p>
                What started as a question — "Why can't American chefs access the ingredients 
                I grew up with?" — became a mission to bridge Central African agriculture 
                with modern American gastronomy.
              </p>
              <p>
                We're not just moving commodities. We're telling the story of volcanic soil, 
                traditional farming, and ingredients that have shaped cuisines for generations.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--gray-200)]">
              <p className="font-medium text-[var(--black)]" style={{ fontFamily: 'var(--font-display)' }}>
                Kevin Milol
              </p>
              <p className="text-sm text-[var(--gray-500)]" style={{ fontWeight: 300 }}>
                Founder, MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Strip
function CTAStrip() {
  return (
    <section className="py-20 bg-[var(--yellow)] relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, var(--black) 0, var(--black) 1px, transparent 1px, transparent 60px)',
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--black)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Work with a partner who takes your ingredients as seriously as your menu.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/wholesale" className="btn-primary bg-[var(--black)] text-white hover:bg-[var(--brown)]">
              Request Samples
            </Link>
            <Link href="/contact" className="btn-secondary border-[var(--black)] hover:bg-[var(--black)] hover:text-white">
              Schedule a Call
            </Link>
            <Link href="/products" className="btn-secondary border-[var(--black)] hover:bg-[var(--black)] hover:text-white">
              View Catalog
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <ProductsSection />
      <ProcessSection />
      <ComplianceSection />
      <FounderSection />
      <CTAStrip />
    </>
  );
}
