'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const flours = [
  {
    name: 'Stone-Milled Corn Flour',
    description: 'Traditional stone-milled flour preserving the full nutritional profile of our heritage corn varieties. Perfect for authentic tortillas, arepas, and cornbread.',
    origin: 'Cameroon Highlands',
    attributes: ['Stone Milled', 'Whole Grain', 'Fine Texture'],
    protein: '8%',
    uses: ['Tortillas', 'Cornbread', 'Arepas', 'Tamales'],
  },
  {
    name: 'Defatted Soy Flour',
    description: 'High-protein flour ideal for fortifying baked goods and creating meat alternatives. Neutral flavor allows for versatile applications.',
    origin: 'Central Africa',
    attributes: ['High Protein', 'Low Fat', 'Neutral Flavor'],
    protein: '52%',
    uses: ['Protein Bars', 'Baking', 'Meat Alternatives', 'Smoothies'],
  },
  {
    name: 'Full-Fat Soy Flour',
    description: 'Nutrient-dense flour with natural oils intact, providing rich flavor and moisture retention in baked goods.',
    origin: 'Cameroon Plains',
    attributes: ['Full Fat', 'Rich Flavor', 'Moisture Retention'],
    protein: '38%',
    uses: ['Baking', 'Sauces', 'Dairy Alternatives', 'Frying'],
  },
  {
    name: 'Pearl Millet Flour',
    description: 'Gluten-free ancient grain flour with a slightly sweet, nutty flavor. Essential for traditional flatbreads and modern gluten-free baking.',
    origin: 'West Africa',
    attributes: ['Gluten-Free', 'High Iron', 'Nutty Flavor'],
    protein: '11%',
    uses: ['Flatbreads', 'Porridge', 'Gluten-Free Baking', 'Pancakes'],
  },
  {
    name: 'Sorghum Flour',
    description: 'Mild, slightly sweet gluten-free flour perfect for blending or standalone use. High in antioxidants and fiber.',
    origin: 'Central Africa',
    attributes: ['Gluten-Free', 'Antioxidant Rich', 'Mild Flavor'],
    protein: '10%',
    uses: ['Gluten-Free Bread', 'Pancakes', 'Cookies', 'Thickening'],
  },
  {
    name: 'Cassava Flour',
    description: 'Versatile, neutral-flavored flour from dried cassava root. Excellent one-to-one wheat flour substitute for many applications.',
    origin: 'Central Africa',
    attributes: ['Grain-Free', 'Paleo-Friendly', 'Neutral Taste'],
    protein: '1.5%',
    uses: ['Bread', 'Wraps', 'Tortillas', 'Thickening'],
  },
];

export default function FloursPage() {
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
            <span className="block text-[#8b7355] text-sm font-medium tracking-wider uppercase mb-4">
              Specialty Flours
            </span>
            <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ancient Grain & Specialty Flours
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Stone-milled and precision-processed flours from heritage grains, delivering 
              exceptional taste, texture, and nutritional value for artisan bakers and manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flours.map((flour, index) => (
              <motion.article
                key={flour.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[var(--light-gray)] rounded-xl overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#8b7355]/20 to-[#8b7355]/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#8b7355]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#8b7355]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[var(--primary-dark)] text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {flour.name}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--dark-gray)]/70 text-sm mb-4 leading-relaxed">
                    {flour.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-[#8b7355] font-medium">
                      Origin: {flour.origin}
                    </div>
                    <div className="px-2 py-1 bg-[#8b7355]/10 text-[#8b7355] text-xs rounded-full font-medium">
                      {flour.protein} Protein
                    </div>
                  </div>

                  {/* Attributes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {flour.attributes.map((attr) => (
                      <span key={attr} className="px-2 py-1 bg-[#8b7355]/10 text-[#8b7355] text-xs rounded-full">
                        {attr}
                      </span>
                    ))}
                  </div>

                  {/* Uses */}
                  <div>
                    <span className="text-xs font-semibold text-[var(--primary-dark)] block mb-2">Applications:</span>
                    <div className="flex flex-wrap gap-1">
                      {flour.uses.map((use) => (
                        <span key={use} className="text-xs text-[var(--dark-gray)]/60">
                          {use}{flour.uses.indexOf(use) < flour.uses.length - 1 ? ' •' : ''}
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
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to Elevate Your Baking?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Our specialty flours are available in bulk quantities with detailed 
              specifications and certifications for commercial applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/wholesale">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
                  Request Wholesale Pricing
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary">
                  Get Technical Specs
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

