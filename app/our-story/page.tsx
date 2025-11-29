'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const milestones = [
  { year: '2023', title: 'The Spark', desc: 'Kevin Milol graduates with an EE degree, begins exploring ways to bring Cameroonian ingredients to the US market.' },
  { year: '2024', title: 'Research & Planning', desc: 'Deep dive into FDA requirements, supply chain logistics, and building relationships with farming cooperatives in Cameroon.' },
  { year: '2025', title: 'Launch', desc: 'MartinSupplies. & CO officially launches, bringing heritage-grown ingredients to American food professionals.' },
];

const values = [
  {
    title: 'Traceability',
    desc: 'Every product we ship can be traced back to its origin — the farm, the region, the harvest.',
  },
  {
    title: 'Integrity',
    desc: 'Non-GMO verified, FDA-aligned practices, and honest documentation. No shortcuts.',
  },
  {
    title: 'Heritage',
    desc: 'We are preserving traditional farming methods while meeting modern food safety standards.',
  },
  {
    title: 'Partnership',
    desc: 'We work with farmers, not just buy from them. Fair compensation, long-term relationships.',
  },
];

export default function OurStoryPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 glow-subtle" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="divider mb-8" />
              <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Built on heritage.
                <br />
                <span className="text-[var(--gray-400)]">Driven by purpose.</span>
              </h1>
              <p className="lead max-w-lg">
                MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO was born from a simple question: why can't American 
                chefs access the ingredients that shaped cuisines for generations?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-[var(--gray-100)]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--yellow)]/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white border border-[var(--gray-200)]">
                <p className="text-sm text-[var(--gray-500)] mb-2" style={{ fontWeight: 300 }}>Founder</p>
                <p className="font-medium" style={{ fontFamily: 'var(--font-display)' }}>Kevin Milol</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mb-8" />
              <h2 className="mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                The beginning
              </h2>
              
              <div className="space-y-6 text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                <p className="text-lg">
                  Kevin Milol grew up between two worlds — the volcanic highlands of Cameroon 
                  where his family farmed, and the American Midwest where he earned his 
                  Electrical Engineering degree.
                </p>
                
                <p>
                  During college, he noticed something: the specialty ingredients that defined 
                  his childhood — Penja pepper, Mbongo spice, heritage corn varieties — were 
                  nearly impossible to find in the U.S. When they were available, there was 
                  no story attached. No traceability. No connection to the land or people 
                  who grew them.
                </p>
                
                <p>
                  Meanwhile, American chefs were increasingly interested in African cuisines, 
                  but struggled to source authentic ingredients. The gap was obvious.
                </p>

                <p>
                  What started as curiosity became research. Then planning. Then MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mb-6" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                What we're building
              </h2>
              <div className="space-y-4 text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                <p>
                  MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO isn't just an import business. We're building a bridge 
                  between Central African agriculture and modern American gastronomy.
                </p>
                <p>
                  That means working directly with farming cooperatives in Cameroon. 
                  Paying fair prices. Maintaining relationships that span seasons, not transactions.
                </p>
                <p>
                  It means designing our entire process around FDA requirements — not 
                  as compliance theater, but as genuine respect for the people who will 
                  eat what you serve.
                </p>
                <p>
                  And it means telling the story of every ingredient: the volcanic soil 
                  it grew in, the traditional methods used to process it, the journey 
                  from harvest to your kitchen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/chef-preparation.jpg"
                  alt="Professional chef preparing dishes with MartinSupplies ingredients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/40 to-transparent" />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm italic">
                    "The authenticity and quality are unmatched in the industry."
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--yellow)]/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--brown)]/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-[var(--black)] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="divider mb-6" />
            <h2 className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
              The journey so far
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-6xl font-bold text-white/10 mb-4 block" style={{ fontFamily: 'var(--font-display)' }}>
                  {milestone.year}
                </span>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {milestone.title}
                </h3>
                <p className="text-white/60" style={{ fontWeight: 300 }}>
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
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
              What we believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-[var(--gray-200)] hover:border-[var(--yellow)] transition-colors"
              >
                <h3 className="text-lg mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Land */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-[var(--brown)]/10" />
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(circle at 30% 70%, rgba(254, 255, 2, 0.2), transparent 50%)'
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="divider mb-6" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                The land that shapes our products
              </h2>
              <div className="space-y-4 text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                <p>
                  Cameroon's Western Highlands sit atop ancient volcanic formations. The soil 
                  here contains mineral compositions that have taken millions of years to form.
                </p>
                <p>
                  Combined with equatorial climate — consistent rainfall and sunlight — these 
                  conditions create growing environments found nowhere else on Earth.
                </p>
                <p>
                  Our Penja pepper, for example, grows only in a 20-kilometer radius around 
                  the town of Penja. It's the only African spice with Protected Geographical 
                  Indication (PGI) status.
                </p>
                <p>
                  This isn't marketing. It's terroir — the same concept that makes Burgundy 
                  wine or Parmigiano-Reggiano unique. You can't replicate it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 bg-[var(--yellow)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-2xl md:text-3xl text-[var(--black)] mb-8" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                "We're not just moving commodities. We're telling the story of volcanic soil, 
                traditional farming, and ingredients that have shaped cuisines for generations."
              </blockquote>
              <div>
                <p className="font-medium text-[var(--black)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Kevin Milol
                </p>
                <p className="text-sm text-[var(--black)]/60" style={{ fontWeight: 300 }}>
                  Founder, MartinSupplies<span className="text-[var(--yellow)]">.</span> &amp; CO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mx-auto mb-6" />
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to work together?
              </h2>
              <p className="text-[var(--gray-600)] mb-8" style={{ fontWeight: 300 }}>
                Whether you're a chef exploring new flavors or a manufacturer 
                seeking consistent supply, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="btn-primary">
                  View Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
