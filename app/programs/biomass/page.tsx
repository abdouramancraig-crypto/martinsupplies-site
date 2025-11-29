'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

export default function BiomassProgramPage() {
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
              Programs · Biomass &amp; Energy
            </p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Biomass &amp; Energy Partners
            </h1>
            <p className="text-xl mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Turning agricultural residues into power through strategic collaborations with renewable energy companies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programs/partner-signup" className="btn-primary">
                Become a Partner →
              </Link>
              <Link href="/lifecycle/non-gmo-yellow-corn" className="btn-secondary">
                See the Full Cycle
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
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
              Vision
            </p>
            <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              A supply chain where every husk and shell has a purpose.
            </h2>
            <p className="text-[var(--gray-600)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              MartinSupplies &amp; Co is building long-term frameworks with biomass processors, pelletizers, briquette makers, and renewable energy plants who can use our agricultural residues.
            </p>
            <ul className="grid md:grid-cols-3 gap-6 text-sm text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
              {[
                'Zero-waste ambition across corn, soy, cassava, and spices.',
                'Reliable residue streams from Cameroon’s farming clusters.',
                'Joint storytelling on low-CO₂ pathways.',
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

      {/* What we provide */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-3" style={labelStyle}>
              What We Provide
            </p>
            <h2 className="text-3xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Residue streams with a story
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Residue Portfolio',
                body: 'Corn cobs, husks, cassava peels, spice shells, and bran—all aggregated with documentation on origin and handling.',
              },
              {
                title: 'Reliable Sourcing',
                body: 'Consistent volumes from Central African farming zones with transparent logistics to ports like Douala and onward to global partners.',
              },
              {
                title: 'Long-Term Frameworks',
                body: 'We co-design offtake agreements, storage solutions, and shipping schedules as volume grows.',
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
                Why biomass partners choose MartinSupplies &amp; Co
              </h2>
              <p className="text-[var(--gray-600)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Environmental: avoided burning, reduced landfill, and measurable CO₂ savings. Economic: new revenue channels for farmers and processors. Strategic: access to unique feedstocks with a powerful provenance narrative.
              </p>
              <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                Together we prove that premium food exports and renewable energy can reinforce each other.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '6+', label: 'Residue types available' },
                { stat: 'PgI', label: 'Penja pepper husks with traceable terroir' },
                { stat: '3 Ports', label: 'Export gateways for biomass cargo' },
                { stat: 'Shared', label: 'Story kits for your marketing team' },
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
              Ready to turn residues into power?
            </h3>
            <p className="text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
              Introduce your biomass or energy project, target specs, and preferred feedstocks. We’ll return with availability and a collaboration plan.
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

