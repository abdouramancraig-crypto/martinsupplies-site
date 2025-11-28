'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const productCategories = [
  {
    title: 'Premium Grains',
    subtitle: 'Non-GMO Corn & Soybean',
    description: 'Heritage varieties cultivated using traditional methods in the fertile soils of Central Africa. Our grains are prized for their exceptional flavor, nutritional density, and consistent quality.',
    href: '/products/grains',
    color: '#d4af37',
    features: ['Non-GMO Verified', 'FDA Registered', 'Traceable Origin'],
    products: ['Yellow Dent Corn', 'White Corn', 'Soybean Whole', 'Soybean Meal'],
  },
  {
    title: 'Exotic Spices',
    subtitle: 'Cameroon Pepper & Rare Varieties',
    description: 'Hand-harvested spices that bring authentic African flavors to global cuisines. Each spice is carefully selected, dried, and processed to preserve its unique aromatic profile.',
    href: '/products/spices',
    color: '#c45c26',
    features: ['Hand Selected', 'Small Batch', 'Chef Approved'],
    products: ['Cameroon Pepper', 'Grains of Paradise', 'African Nutmeg', 'Selim Pepper'],
  },
  {
    title: 'Specialty Flours',
    subtitle: 'Ancient Grain Flours',
    description: 'Stone-milled flours from heritage grains, preserving nutritional integrity and delivering exceptional taste and texture for artisan bakers and health-conscious consumers.',
    href: '/products/flours',
    color: '#8b7355',
    features: ['Stone Milled', 'Whole Grain', 'High Protein'],
    products: ['Corn Flour', 'Soybean Flour', 'Millet Flour', 'Sorghum Flour'],
  },
];

const stats = [
  { value: '50+', label: 'Products' },
  { value: '3', label: 'Categories' },
  { value: '12', label: 'Countries Served' },
  { value: '100%', label: 'Non-GMO' },
];

export default function ProductsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Our Products
              </span>
              <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Premium Ingredients for Exceptional Results
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                From our farms in Central Africa to your kitchen, every product is carefully 
                sourced, tested, and delivered to meet the highest standards of quality and authenticity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/wholesale">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                  >
                    Request Pricing
                  </motion.button>
                </Link>
                <Link href="/sourcing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary"
                  >
                    View Certifications
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                >
                  <span className="block text-4xl font-bold text-[var(--accent-gold)] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-spacing bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Explore Our Categories
            </h2>
            <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
              Three distinct product lines, each representing our commitment to quality and authenticity.
            </p>
          </motion.div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)` }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div 
                        className="w-32 h-32 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}30` }}
                      >
                        <svg className="w-16 h-16" style={{ color: category.color }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div 
                    className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg"
                    style={{ borderLeft: `4px solid ${category.color}` }}
                  >
                    <span className="text-sm font-medium text-[var(--primary-dark)]">
                      {category.products.length}+ Products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span 
                    className="text-sm font-medium tracking-wider uppercase mb-2 block"
                    style={{ color: category.color }}
                  >
                    {category.subtitle}
                  </span>
                  <h3 className="text-[var(--primary-dark)] text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {category.title}
                  </h3>
                  <p className="text-[var(--dark-gray)]/70 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[var(--light-gray)] text-[var(--dark-gray)] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Product List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--primary-dark)] mb-3">Featured Products:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product) => (
                        <div key={product} className="flex items-center gap-2 text-sm text-[var(--dark-gray)]/70">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }} />
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={category.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 font-medium transition-colors duration-300"
                      style={{ color: category.color }}
                    >
                      View All {category.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              Quality Assurance
            </span>
            <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Every Product Tells a Story
            </h2>
            <p className="text-[var(--dark-gray)]/70 mb-8 leading-relaxed">
              From the moment our ingredients are harvested to when they arrive at your door, 
              we maintain complete traceability and quality control. Every batch is tested, 
              documented, and certified to meet the highest industry standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sourcing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary bg-[var(--primary-dark)] text-white"
                >
                  View Certifications
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-[var(--primary-dark)] border-[var(--primary-dark)]"
                >
                  Request Samples
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

