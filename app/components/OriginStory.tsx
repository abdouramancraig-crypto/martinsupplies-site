'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function OriginStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-spacing bg-[var(--primary-dark)] overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              {/* Placeholder Image with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/30 via-[var(--accent-gold)]/20 to-transparent" />
              <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center" />
              
              {/* Decorative Pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3.5zm0-1V20h20v2H20v2l-2-3 2-3.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-xl shadow-2xl"
            >
              <div className="text-center">
                <span className="block text-4xl font-bold text-[var(--accent-gold)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  37+
                </span>
                <span className="text-[var(--dark-gray)] text-sm font-medium">
                  Years of Excellence
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Our Heritage
            </span>
            
            <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Legacy of Quality, From Central Africa to Your Kitchen
            </h2>
            
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Founded in 1987, MartinSupplies & Co began with a simple mission: 
                to bring the extraordinary flavors and nutritional benefits of 
                Central African agriculture to kitchens around the world.
              </p>
              <p>
                Three generations later, we continue our founders' vision—working 
                directly with farming communities in Cameroon and neighboring 
                regions to source the finest non-GMO grains, exotic spices, and 
                specialty ingredients.
              </p>
              <p>
                Today, our products grace the kitchens of Michelin-starred 
                restaurants, artisan bakeries, and health-conscious home cooks 
                across North America.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/our-story">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Read Our Full Story
                </motion.button>
              </Link>
              <Link href="/sourcing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-white/70 hover:text-[var(--accent-gold)] font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  View Certifications
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

