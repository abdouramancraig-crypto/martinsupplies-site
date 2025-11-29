'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ProductContent } from '@/lib/products';

type Props = {
  product: ProductContent;
};

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

export default function LifecycleView({ product }: Props) {
  const steps = [
    {
      title: 'Soil & Cultivation',
      description:
        'Volcanic and equatorial soils in Cameroon nurture non-GMO plants cultivated by smallholder partners who follow traditional practices without synthetic fertilizers.',
    },
    {
      title: 'Harvest & Primary Processing',
      description:
        'Seasonal harvests are dried, cleaned, and sorted close to the farm gate before moving to MartinSupplies & Co aggregation hubs for quality verification.',
    },
    {
      title: 'Food-Grade Streams',
      description:
        `Top grades of ${product.name} enter food programs—from premium milling and spice grading to export-ready packaging supported by FDA-aligned documentation.`,
    },
    {
      title: 'Feed-Grade Streams',
      description:
        'Secondary grades and by-products are routed to animal nutrition partners. Nothing is discarded; every fraction supports poultry, aquaculture, or livestock diets.',
    },
    {
      title: 'Biomass & Energy Partners',
      description:
        'Husks, shells, bran, and fiber travel to biomass collaborators that convert residues into pellets, briquettes, or other renewable energy inputs.',
    },
    {
      title: 'Zero-Waste Vision',
      description:
        'The cycle closes with low-CO₂ ambitions: verify, document, and continually improve a loop where soil, food, feed, and energy stay connected.',
    },
  ];

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
              {product.name} · Full Life Cycle
            </p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              {product.name} Life Cycle
            </h1>
            <p className="lead max-w-3xl">
              How {product.name} moves through soil, harvest, food, feed, and energy inside MartinSupplies &amp; Co’s zero-waste mindset.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="relative border-l border-[var(--gray-200)] pl-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative mb-12 pl-6"
              >
                <span
                  className="absolute left-[-45px] top-2 w-8 h-8 rounded-full bg-[var(--black)] text-white flex items-center justify-center text-sm"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="bg-white border border-[var(--gray-200)] shadow-sm p-6">
                  <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                    {step.title}
                  </h2>
                  <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner pathways */}
      <section className="py-20 bg-[var(--gray-50)] border-y border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Partner Pathways
              </p>
              <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Keep {product.name} in circular motion
              </h3>
              <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                We collaborate with feed formulators, biomass specialists, and renewable energy partners to ensure every kernel, seed, or fiber reaches its highest-value use.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/programs/animal-feed" className="btn-primary">
                Join Animal Feed Program →
              </Link>
              <Link href="/programs/biomass" className="btn-secondary">
                Join Biomass &amp; Energy Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="section-spacing">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Documentation Ready
            </p>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Request the full cycle dossier
            </h3>
            <p className="text-[var(--gray-600)] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Our team can share process summaries, sustainability notes, and example documentation showing how {product.name} supports human food, animal nutrition, and biomass energy partners.
            </p>
            <Link href={`/products/${product.slug}`} className="btn-secondary">
              Return to Product Brochure
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

