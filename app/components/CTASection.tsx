'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      className="section-spacing bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[var(--primary-dark)] relative overflow-hidden" 
      ref={ref}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--accent-gold)] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--accent-gold)] blur-[120px]"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase"
          >
            Start Your Partnership
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Partner with Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-lg mb-10 leading-relaxed"
          >
            Whether you're a restaurant, bakery, food manufacturer, or distributor, 
            we're here to provide the premium ingredients your business deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/wholesale">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-[var(--primary-dark)] min-w-[220px] group"
              >
                {/* Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--secondary-gold)] transition-transform duration-300 group-hover:scale-105" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Wholesale Pricing
                </span>
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-[var(--primary-dark)] transition-all duration-300 min-w-[220px]"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/40 text-sm mb-4">Trusted by leading food businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['Artisan Bakeries', 'Fine Restaurants', 'Food Manufacturers', 'Regional Distributors'].map((item) => (
                <span key={item} className="text-white/60 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

