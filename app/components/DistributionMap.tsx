'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const cities = [
  {
    name: 'Houston',
    state: 'TX',
    description: 'Our headquarters and primary distribution hub, serving the Gulf Coast region.',
    position: { left: '45%', top: '65%' },
    features: ['Main Warehouse', 'Corporate HQ', '24/7 Operations'],
  },
  {
    name: 'Los Angeles',
    state: 'CA',
    description: 'West Coast distribution center, connecting Pacific Rim trade routes.',
    position: { left: '15%', top: '50%' },
    features: ['West Coast Hub', 'Import Terminal', 'Cold Storage'],
  },
  {
    name: 'Miami',
    state: 'FL',
    description: 'Southeast hub with direct access to Caribbean and Latin American markets.',
    position: { left: '75%', top: '72%' },
    features: ['Port Access', 'SE Distribution', 'International Shipping'],
  },
];

export default function DistributionMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <section className="section-spacing bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
            Distribution Network
          </span>
          <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Serving the US from Premium Port Cities
          </h2>
          <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
            Strategic locations ensuring fast, reliable delivery across North America
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[var(--primary-dark)] rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4af37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Simplified US Map Shape */}
          <div className="relative aspect-[16/9] md:aspect-[2/1]">
            {/* Map Outline */}
            <svg 
              viewBox="0 0 960 600" 
              className="w-full h-full absolute inset-0 opacity-20"
              fill="none" 
              stroke="var(--accent-gold)" 
              strokeWidth="1"
            >
              <path d="M161,485 L154,449 L140,448 L127,461 L118,486 L104,489 L92,500 L82,523 L66,536 L44,552 L22,556 L12,572 L4,598 L46,598 L46,581 L72,581 L72,565 L94,557 L111,542 L124,519 L141,507 L158,492 L161,485 Z" />
              <path d="M258,408 L267,372 L294,349 L306,303 L338,279 L385,263 L412,235 L454,219 L492,210 L542,197 L583,188 L628,173 L664,164 L720,148 L760,135 L800,127 L840,115 L880,108 L900,102 L920,98 L940,85 L960,78 L960,600 L0,600 L0,572 L22,556 L44,552 L66,536 L82,523 L92,500 L104,489 L118,486 L127,461 L140,448 L154,449 L161,485 L175,479 L195,456 L220,436 L245,420 L258,408 Z" />
            </svg>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Houston to LA */}
              <motion.line
                x1="45" y1="65"
                x2="15" y2="50"
                stroke="var(--accent-gold)"
                strokeWidth="0.3"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {/* Houston to Miami */}
              <motion.line
                x1="45" y1="65"
                x2="75" y2="72"
                stroke="var(--accent-gold)"
                strokeWidth="0.3"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </svg>

            {/* City Markers */}
            {cities.map((city, index) => (
              <div
                key={city.name}
                className="absolute"
                style={{ left: city.position.left, top: city.position.top }}
              >
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
                  className="relative group"
                >
                  {/* Pulsing Ring */}
                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)]"
                  />
                  
                  {/* Main Marker */}
                  <span className="relative block w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)] border-2 border-white shadow-lg" />
                  
                  {/* City Label */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-4 whitespace-nowrap text-white text-sm font-medium">
                    {city.name}, {city.state}
                  </span>
                </motion.button>

                {/* Info Popup */}
                <AnimatePresence>
                  {activeCity === city.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 top-12 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl p-4"
                    >
                      <h4 className="text-[var(--primary-dark)] font-semibold mb-2">
                        {city.name}, {city.state}
                      </h4>
                      <p className="text-[var(--dark-gray)]/70 text-sm mb-3">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {city.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* City Cards (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 lg:hidden">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-[var(--light-gray)] rounded-lg p-4"
            >
              <h4 className="text-[var(--primary-dark)] font-semibold mb-1">
                {city.name}, {city.state}
              </h4>
              <p className="text-[var(--dark-gray)]/70 text-sm">
                {city.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

