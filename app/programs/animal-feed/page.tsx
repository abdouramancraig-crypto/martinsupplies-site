'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

export default function AnimalFeedProgramPage() {
  return (
    <div className="bg-[var(--white)] text-[var(--black)]">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 glow-subtle" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="divider mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Programs · Animal Feed
            </p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Animal Feed Partners
            </h1>
            <p className="text-xl mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Non-GMO grains with traceable origins for responsible feed processors, premix manufacturers, and integrators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs/partner-signup" className="btn-primary">
                Join the Program →
              </Link>
              <Link href="/products/non-gmo-yellow-corn" className="btn-secondary">
                View Grain Specs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[var(--gray-200)] shadow-sm p-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Mission
            </p>
            <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Build a feed chain that respects animals, farmers, and the environment.
            </h2>
            <ul className="grid md:grid-cols-3 gap-6 text-sm text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
              {[
                'Non-GMO grains sourced from verified smallholder cooperatives.',
                'Full traceability packs with origin, moisture, and quality documentation.',
                'Partnerships that reward regenerative practices and reduce waste.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--yellow)]">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-3" style={labelStyle}>
              What We Offer
            </p>
            <h2 className="text-3xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Support for your formulation team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Reliable Bulk Supply',
                body: 'Non-GMO yellow and white corn plus soybeans aggregated in Cameroon, inspected, and shipped through Houston, LA, or Miami.',
              },
              {
                title: 'Documentation Support',
                body: 'Origin sheets, moisture certificates, and lot-level data that plug into your FSVP or internal QA workflows.',
              },
              {
                title: 'Alignment with Standards',
                body: 'Facility registration, prior notice routines, and full transparency so your customers can trust every ration.',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[var(--gray-200)] p-6"
              >
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Impact
              </p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Every shipment tells a responsible story
              </h2>
              <p className="text-[var(--gray-600)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Supporting rural economies in Cameroon, creating higher-value channels for clean grains, and closing the loop on husks and bran through biomass partners.
              </p>
              <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                Feed buyers tap into a differentiated supply chain with documentation that meets North American regulatory expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '100%', label: 'Non-GMO grain network' },
                { stat: '3', label: 'U.S. distribution gateways (Houston, LA, Miami)' },
                { stat: '24h', label: 'Documentation turnaround on request' },
                { stat: '0 Waste', label: 'Goal for every harvest cycle' },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--gray-50)] border border-[var(--gray-200)] p-6 text-center">
                  <span className="block text-3xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                    {item.stat}
                  </span>
                  <span className="text-xs uppercase text-[var(--gray-500)]" style={labelStyle}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[var(--gray-200)]">
        <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Ready to join the feed program?
            </h3>
            <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
              Share your formulation goals, preferred volumes, and QA requirements. We’ll respond with a tailored plan.
            </p>
          </div>
          <Link href="/programs/partner-signup" className="btn-primary">
            Apply now
          </Link>
        </div>
      </section>
    </div>
  );
}

