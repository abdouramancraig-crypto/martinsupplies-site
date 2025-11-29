'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote: "MartinSupplies' Cameroon pepper has become the signature flavor in our West African fusion dishes. The quality is unmatched—you can taste the heritage in every grain.",
    author: 'Chef Adaora Nwankwo',
    credentials: 'Executive Chef, Afrique Modern • Chicago',
    rating: 5,
  },
  {
    quote: "We've been sourcing our non-GMO corn from MartinSupplies for over a decade. Their commitment to sustainable practices aligns perfectly with our farm-to-table philosophy.",
    author: 'Marcus Chen',
    credentials: 'Owner, Heritage Grain Bakery • San Francisco',
    rating: 5,
  },
  {
    quote: "The consistency and traceability of their products give us confidence in every dish we serve. Their team truly understands the needs of professional kitchens.",
    author: 'Chef Isabella Rodriguez',
    credentials: 'Michelin-starred Chef • Houston',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="section-spacing bg-[var(--light-gray)] overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-[var(--primary-dark)]" style={{ fontFamily: 'var(--font-display)' }}>
            Trusted by Culinary Professionals
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ y: parallaxY }}
            >
              <motion.article
                whileHover={{ rotate: index === 1 ? 0 : (index === 0 ? -1 : 1), y: -5 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-xl p-8 shadow-lg relative h-full flex flex-col ${
                  index === 1 ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-[var(--accent-gold)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[var(--dark-gray)]/80 italic leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-semibold text-[var(--primary-dark)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--dark-gray)]/60">
                    {testimonial.credentials}
                  </p>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-2 mt-10 lg:hidden"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[var(--accent-gold)] w-8' 
                  : 'bg-[var(--dark-gray)]/20 hover:bg-[var(--dark-gray)]/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

