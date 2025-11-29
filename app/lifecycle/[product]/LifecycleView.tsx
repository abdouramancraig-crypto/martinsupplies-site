'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ProductContent } from '@/lib/products';
import { getLifecycleBySlug } from '@/lib/productLifecycles';

type Props = {
  product: ProductContent;
};

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

export default function LifecycleView({ product }: Props) {
  const lifecycle = getLifecycleBySlug(product.slug);

  if (!lifecycle) {
    return <div>Lifecycle information not available for this product.</div>;
  }

  return (
    <div className="bg-[var(--white)] text-[var(--black)]">
      {/* Return to Product Button */}
      <Link href={`/products/${product.slug}`} className="fixed top-24 left-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--gray-200)] text-[var(--gray-700)] rounded-lg shadow-lg hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--black)] transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back to Product</span>
        </motion.button>
      </Link>

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-br from-[var(--black)] via-[var(--primary-dark)] to-[var(--black)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 text-[var(--yellow)] hover:text-white text-sm mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {product.name}
            </Link>
            <div className="w-20 h-1 bg-[var(--yellow)] mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--yellow)] mb-4" style={labelStyle}>
              Zero-Waste Supply Chain Blueprint
            </p>
            <h1 className="text-4xl md:text-6xl mb-6 text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              {product.name}
              <br />
              <span className="text-[var(--yellow)]">Full Life Cycle</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed" style={{ fontWeight: 300 }}>
              A complete, research-verified journey from volcanic soil to circular use. Every phase documented, 
              every byproduct valued, zero waste to landfill.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lifecycle Phases - Beautiful Timeline */}
      <section className="section-spacing bg-gradient-to-br from-[var(--gray-50)] to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Full Product Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Complete Life Cycle
            </h2>
            <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
              From volcanic soil to circular economy - every phase researched, verified, and optimized for zero waste.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--yellow)] via-[var(--gray-300)] to-[var(--gray-300)]" />

            {lifecycle.phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-16 lg:pl-32"
              >
                {/* Phase Number Circle */}
                <div className="absolute left-0 lg:left-6 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--yellow)] to-[var(--secondary-gold)] flex items-center justify-center shadow-lg z-10">
                  <span className="text-[var(--black)] font-bold text-lg">{index + 1}</span>
                </div>

                {/* Phase Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg border border-[var(--gray-200)] p-8 md:p-10 hover:shadow-2xl transition-all"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[var(--yellow)]/10 text-[var(--yellow)] text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="text-3xl font-bold text-[var(--black)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {phase.title}
                    </h3>
                    <p className="text-lg text-[var(--gray-600)] italic" style={{ fontWeight: 300 }}>
                      {phase.description}
                    </p>
                  </div>

                  <div className="space-y-3 mt-6">
                    {phase.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--gray-50)] transition-colors"
                      >
                        <svg className="w-5 h-5 text-[var(--yellow)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[var(--gray-700)] text-sm leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Applications Highlight */}
      <section className="py-20 bg-[var(--black)] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--yellow)] mb-4 text-center" style={labelStyle}>
              Commercial Applications
            </p>
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              US Market Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lifecycle.usApplications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-[var(--yellow)] transition-all"
                >
                  <svg className="w-6 h-6 text-[var(--yellow)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/90">{application}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* By-Products & Waste Streams */}
      <section className="section-spacing bg-gradient-to-br from-white to-[var(--gray-50)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              By-Products & Waste Valorization
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Every Component Has Value
            </h2>
            <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
              Nothing goes to waste. Every by-product is transformed into animal feed, biomass energy, or compost.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifecycle.byProducts.map((byProduct, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg border border-[var(--gray-200)] p-8 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--yellow)]/20 to-[var(--yellow)]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[var(--yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--black)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {byProduct.material}
                </h3>
                <ul className="space-y-2">
                  {byProduct.uses.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                      <span className="text-[var(--yellow)] mt-1">→</span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Waste Disposal Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[var(--black)] to-[var(--primary-dark)] rounded-2xl p-10 text-white"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              End-of-Life Disposal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--yellow)] mb-2">Waste Form</p>
                <p className="text-white/90">{lifecycle.wasteDisposal.form}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--yellow)] mb-2">Biodegradation Timeline</p>
                <p className="text-white/90">{lifecycle.wasteDisposal.timeline}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--yellow)] mb-2">Disposal Method</p>
                <p className="text-white/90">{lifecycle.wasteDisposal.method}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Programs - Segmented */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Partnership Opportunities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Join Our Circular Economy
            </h2>
            <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
              Partner with us to keep {product.name} in continuous value creation through animal feed or biomass energy programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Animal Feed Program */}
            {lifecycle.animalFeed && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border-2 border-green-200 hover:border-green-400 transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-green-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Animal Feed Program
                </h3>
                <p className="text-green-800 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                  {product.tag === 'Grain' || product.tag === 'Legume' || product.tag === 'Flour'
                    ? `Secondary grades and by-products of ${product.name} provide high-value nutrition for poultry, livestock, and aquaculture operations. Join our feed partner network.`
                    : `By-products and processing residues from ${product.name} contribute to specialized feed formulations and animal nutrition programs.`}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Non-GMO verified feed streams',
                    'Consistent quality and traceability',
                    'Nutritional analysis provided',
                    'Flexible volumes and packaging',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-green-800">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs/animal-feed" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg">
                  Join Feed Program
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            )}

            {/* Biomass Energy Program */}
            {lifecycle.biomass && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 border-2 border-orange-200 hover:border-orange-400 transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Biomass Energy Program
                </h3>
                <p className="text-orange-800 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                  {product.tag === 'Grain' || product.tag === 'Legume' || product.tag === 'Flour'
                    ? `Husks, cobs, shells, and fiber from ${product.name} are converted into renewable energy pellets, briquettes, and biochar. Partner with us for sustainable biomass.`
                    : `Processing residues from ${product.name} contribute to biochar production, composting, and soil enrichment programs with circular benefits.`}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'High-BTU biomass feedstock',
                    'Consistent moisture specifications',
                    'Carbon-negative potential',
                    'Bulk or pelletized formats',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-orange-800">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs/biomass" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-md hover:shadow-lg">
                  Join Biomass Program
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            )}
          </div>

          {/* If neither animal feed nor biomass applies */}
          {!lifecycle.animalFeed && !lifecycle.biomass && (
            <div className="text-center p-12 bg-[var(--gray-50)] rounded-2xl">
              <p className="text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                As a premium spice, {product.name} focuses primarily on culinary applications with minimal by-products. 
                Any processing residues are composted or used for essential oil extraction.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Zero-Waste Commitment */}
      <section className="py-20 bg-gradient-to-br from-[var(--yellow)] via-[var(--secondary-gold)] to-[var(--yellow)]">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--black)] rounded-full mb-6">
              <svg className="w-10 h-10 text-[var(--yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--black)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Zero-Waste Certified Blueprint
            </h2>
            <p className="text-xl text-[var(--black)]/80 mb-8 leading-relaxed" style={{ fontWeight: 400 }}>
              This lifecycle system has been researched, verified, and documented to FDA, USDA, and phytosanitary standards. 
              Every claim is backed by agronomic science and real-world supply chain data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--black)] text-white font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-all shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Product Page
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--black)] font-semibold rounded-lg hover:bg-[var(--gray-100)] transition-all shadow-lg border-2 border-[var(--black)]">
                Request Full Dossier
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Explore More
            </p>
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Other Product Lifecycles
            </h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {['non-gmo-yellow-corn', 'non-gmo-white-corn', 'non-gmo-soybeans', 'poivre-de-penja', 'mbongo', 'njansang', 'cassava-flour', 'tapioca-flour']
              .filter(slug => slug !== product.slug)
              .slice(0, 6)
              .map((slug) => (
                <Link
                  key={slug}
                  href={`/lifecycle/${slug}`}
                  className="px-4 py-2 bg-white border border-[var(--gray-200)] rounded-lg text-sm text-[var(--gray-700)] hover:border-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--black)] transition-all"
                >
                  {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

