'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const grains = [
  {
    name: 'Yellow Dent Corn',
    description: 'Our signature heritage variety, known for its rich golden color and exceptional starch content. Perfect for milling, masa production, and animal feed.',
    origin: 'Cameroon Highlands',
    attributes: ['High Starch', 'Non-GMO', 'Whole Kernel'],
    uses: ['Corn Flour', 'Masa', 'Polenta', 'Animal Feed'],
  },
  {
    name: 'White Corn',
    description: 'Premium white corn with superior texture and neutral flavor profile. Preferred by artisan tortilla makers and specialty food manufacturers.',
    origin: 'Central Africa',
    attributes: ['Fine Texture', 'Neutral Flavor', 'High Yield'],
    uses: ['Tortillas', 'Grits', 'Cornmeal', 'Brewing'],
  },
  {
    name: 'Soybean Whole',
    description: 'Nutrient-dense whole soybeans, carefully dried and sorted for consistency. Ideal for tofu production, tempeh, and direct food applications.',
    origin: 'Cameroon Plains',
    attributes: ['High Protein', 'Food Grade', 'Low Moisture'],
    uses: ['Tofu', 'Tempeh', 'Soy Milk', 'Direct Cooking'],
  },
  {
    name: 'Soybean Meal',
    description: 'Precision-processed soybean meal with optimal protein content for food manufacturing and specialty applications.',
    origin: 'Central Africa',
    attributes: ['46% Protein', 'Defatted', 'Fine Mill'],
    uses: ['Protein Fortification', 'Baking', 'Meat Alternatives'],
  },
  {
    name: 'Millet',
    description: 'Ancient grain prized for its nutty flavor and gluten-free properties. A staple in traditional African cuisine now gaining global popularity.',
    origin: 'West Africa',
    attributes: ['Gluten-Free', 'High Fiber', 'Quick Cooking'],
    uses: ['Porridge', 'Flatbreads', 'Pilaf', 'Brewing'],
  },
  {
    name: 'Sorghum',
    description: 'Versatile ancient grain with excellent drought resistance and nutritional profile. Perfect for gluten-free applications and traditional recipes.',
    origin: 'Central Africa',
    attributes: ['Gluten-Free', 'Antioxidant Rich', 'Sustainable'],
    uses: ['Flour', 'Syrup', 'Brewing', 'Whole Grain'],
  },
];

export default function GrainsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/products" className="inline-flex items-center gap-2 text-[var(--accent-gold)] mb-6 hover:gap-3 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
            <span className="block text-[#d4af37] text-sm font-medium tracking-wider uppercase mb-4">
              Premium Grains
            </span>
            <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Non-GMO Corn, Soybean & Ancient Grains
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Heritage varieties cultivated in the fertile soils of Central Africa using 
              time-honored agricultural practices that preserve nutritional integrity and authentic flavor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grains.map((grain, index) => (
              <motion.article
                key={grain.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[var(--light-gray)] rounded-xl overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#d4af37]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[var(--primary-dark)] text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {grain.name}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--dark-gray)]/70 text-sm mb-4 leading-relaxed">
                    {grain.description}
                  </p>

                  <div className="text-xs text-[var(--accent-gold)] font-medium mb-4">
                    Origin: {grain.origin}
                  </div>

                  {/* Attributes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {grain.attributes.map((attr) => (
                      <span key={attr} className="px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs rounded-full">
                        {attr}
                      </span>
                    ))}
                  </div>

                  {/* Uses */}
                  <div>
                    <span className="text-xs font-semibold text-[var(--primary-dark)] block mb-2">Common Uses:</span>
                    <div className="flex flex-wrap gap-1">
                      {grain.uses.map((use) => (
                        <span key={use} className="text-xs text-[var(--dark-gray)]/60">
                          {use}{grain.uses.indexOf(use) < grain.uses.length - 1 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[var(--primary-dark)]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Interested in Our Grains?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Contact us for samples, pricing, and detailed specifications for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/wholesale">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
                  Request Wholesale Pricing
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary">
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

