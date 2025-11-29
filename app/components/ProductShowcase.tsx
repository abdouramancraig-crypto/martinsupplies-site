'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    title: 'Premium Grains',
    subtitle: 'Non-GMO Corn & Soybean',
    description: 'Heritage varieties cultivated using traditional methods in the fertile soils of Central Africa. Perfect for artisan producers and large-scale operations.',
    href: '/products/grains',
    image: '/grain-placeholder.jpg',
    color: '#d4af37',
  },
  {
    title: 'Exotic Spices',
    subtitle: 'Cameroon Pepper & More',
    description: 'Rare, hand-harvested spices that bring authentic African flavors to global cuisines. Sought after by Michelin-starred chefs worldwide.',
    href: '/products/spices',
    image: '/spices-placeholder.jpg',
    color: '#c45c26',
  },
  {
    title: 'Specialty Flours',
    subtitle: 'Ancient Grain Flours',
    description: 'Stone-milled flours from heritage grains, preserving nutritional integrity and delivering exceptional taste and texture.',
    href: '/products/flours',
    image: '/flour-placeholder.jpg',
    color: '#8b7355',
  },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="section-spacing bg-[var(--light-gray)]" ref={containerRef}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
            Our Products
          </span>
          <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Exceptional Ingredients, Exceptional Results
          </h2>
          <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
            From farm to table, we deliver the finest heritage-grown ingredients 
            to discerning food professionals across the globe.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.title} 
              product={product} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ 
  product, 
  index,
  isInView 
}: { 
  product: typeof products[0]; 
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={product.href}>
        <motion.article
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3 }}
          className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-[var(--accent-gold)] transition-colors duration-300"
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-[var(--primary-dark)]">
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[120%]"
            >
              {/* Gradient Placeholder */}
              <div 
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${product.color}20 0%, ${product.color}40 50%, ${product.color}20 100%)`,
                }}
              />
              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${product.color}30` }}
                >
                  <svg className="w-12 h-12" style={{ color: product.color }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[var(--primary-dark)]/0 group-hover:bg-[var(--primary-dark)]/30 transition-all duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <span 
              className="text-sm font-medium tracking-wider uppercase mb-2 block"
              style={{ color: product.color }}
            >
              {product.subtitle}
            </span>
            <h3 
              className="text-[var(--primary-dark)] text-xl mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {product.title}
            </h3>
            <p className="text-[var(--dark-gray)]/70 text-sm leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="flex items-center text-[var(--accent-gold)] font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
              <span>Learn More</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

