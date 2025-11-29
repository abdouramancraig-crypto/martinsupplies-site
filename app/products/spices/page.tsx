'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const spices = [
  {
    name: 'Cameroon Pepper',
    description: 'Our signature spice—a complex, smoky heat that has become a favorite among Michelin-starred chefs. Hand-harvested and sun-dried using traditional methods.',
    origin: 'Penja Region, Cameroon',
    attributes: ['Hand Harvested', 'Sun Dried', 'Smoky Heat'],
    heatLevel: 4,
    uses: ['Grilled Meats', 'Stews', 'Marinades', 'Finishing'],
  },
  {
    name: 'Grains of Paradise',
    description: 'Ancient spice with warm, peppery notes and hints of cardamom, ginger, and citrus. Once more valuable than gold in medieval Europe.',
    origin: 'West Africa',
    attributes: ['Aromatic', 'Complex Flavor', 'Historical'],
    heatLevel: 2,
    uses: ['Craft Cocktails', 'Baking', 'Sausages', 'Brews'],
  },
  {
    name: 'African Nutmeg (Ehuru)',
    description: 'Intensely aromatic with earthy, musky notes. Essential in traditional West African soups and increasingly popular in contemporary cuisine.',
    origin: 'Central Africa',
    attributes: ['Intensely Aromatic', 'Earthy', 'Whole Seeds'],
    heatLevel: 0,
    uses: ['Soups', 'Stews', 'Spice Blends', 'Baking'],
  },
  {
    name: 'Selim Pepper (Grains of Selim)',
    description: 'Smoky, slightly bitter pods with complex notes of nutmeg and black pepper. A secret ingredient in many West African dishes.',
    origin: 'Cameroon',
    attributes: ['Smoky', 'Unique Flavor', 'Whole Pods'],
    heatLevel: 1,
    uses: ['Soups', 'Rice Dishes', 'Meat Rubs', 'Infusions'],
  },
  {
    name: 'African Bird\'s Eye Chili',
    description: 'Intense heat with bright, fruity undertones. These small but mighty chilies are essential for authentic African heat.',
    origin: 'Central Africa',
    attributes: ['Intense Heat', 'Fruity Notes', 'Dried Whole'],
    heatLevel: 5,
    uses: ['Hot Sauces', 'Curries', 'Marinades', 'Pickling'],
  },
  {
    name: 'Njangsa (Ricinodendron)',
    description: 'Nutty, earthy seeds that add depth and body to sauces and stews. A thickening agent and flavor enhancer in one.',
    origin: 'Cameroon Rainforest',
    attributes: ['Thickening', 'Nutty Flavor', 'Protein Rich'],
    heatLevel: 0,
    uses: ['Sauces', 'Stews', 'Soups', 'Vegetarian Dishes'],
  },
];

export default function SpicesPage() {
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
            <span className="block text-[#c45c26] text-sm font-medium tracking-wider uppercase mb-4">
              Exotic Spices
            </span>
            <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Rare Spices from the Heart of Africa
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Hand-harvested, traditionally processed spices that bring authentic African 
              flavors to kitchens around the world. Sought after by the world's finest chefs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spices.map((spice, index) => (
              <motion.article
                key={spice.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[var(--light-gray)] rounded-xl overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#c45c26]/20 to-[#c45c26]/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#c45c26]/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#c45c26]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[var(--primary-dark)] text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {spice.name}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--dark-gray)]/70 text-sm mb-4 leading-relaxed">
                    {spice.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-[#c45c26] font-medium">
                      Origin: {spice.origin}
                    </div>
                    
                    {/* Heat Level */}
                    {spice.heatLevel > 0 && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-[var(--dark-gray)]/50">Heat:</span>
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-3 h-3 ${i < spice.heatLevel ? 'text-[#c45c26]' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Attributes */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {spice.attributes.map((attr) => (
                      <span key={attr} className="px-2 py-1 bg-[#c45c26]/10 text-[#c45c26] text-xs rounded-full">
                        {attr}
                      </span>
                    ))}
                  </div>

                  {/* Uses */}
                  <div>
                    <span className="text-xs font-semibold text-[var(--primary-dark)] block mb-2">Culinary Uses:</span>
                    <div className="flex flex-wrap gap-1">
                      {spice.uses.map((use) => (
                        <span key={use} className="text-xs text-[var(--dark-gray)]/60">
                          {use}{spice.uses.indexOf(use) < spice.uses.length - 1 ? ' •' : ''}
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
              Discover the Flavors of Africa
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Our spice collection is available in various quantities for restaurants, 
              food manufacturers, and specialty retailers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/wholesale">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
                  Request Wholesale Pricing
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary">
                  Order Sample Kit
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

