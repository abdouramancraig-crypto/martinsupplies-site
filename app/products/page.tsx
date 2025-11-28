'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

// Product catalog data
const catalogProducts = [
  {
    id: 'yellow-corn',
    name: 'Non-GMO Yellow Corn',
    tag: 'Grain',
    description: 'Dense, heritage-grown yellow corn ideal for milling, tortilla and snack production, and African & Latin-inspired dishes.',
    formats: 'Whole kernel / milled',
    packaging: '25kg / 50kg bags',
    origin: 'Central Africa',
    specs: {
      productType: 'Whole yellow maize grain',
      nonGmoStatus: 'Grown from non-GMO seed; identity-preserved.',
      moisture: '< 14%',
      foreignMatter: 'Within standard grain tolerances; cleaned and sorted.',
      packagingDetail: '25kg / 50kg woven sacks (food-contact liner on request).',
      shelfLife: '12 months from production (stored properly)',
      applications: 'Tortillas, snacks, milling, animal feed, brewing',
    }
  },
  {
    id: 'white-corn',
    name: 'Non-GMO White Corn',
    tag: 'Grain',
    description: 'Clean, versatile white maize for fufu blends, porridges, specialty flour, and artisanal milling.',
    formats: 'Whole kernel / milled',
    packaging: '25kg / 50kg bags',
    origin: 'Central Africa',
    specs: {
      productType: 'Whole white maize grain',
      nonGmoStatus: 'Grown from non-GMO seed; identity-preserved.',
      moisture: '< 14%',
      foreignMatter: 'Within standard grain tolerances; cleaned and sorted.',
      packagingDetail: '25kg / 50kg woven sacks (food-contact liner on request).',
      shelfLife: '12 months from production (stored properly)',
      applications: 'Fufu, porridge, specialty flour, ethnic foods',
    }
  },
  {
    id: 'soybeans',
    name: 'Non-GMO Soybeans',
    tag: 'Legume',
    description: 'High-protein, non-GMO soybeans suited for tofu, plant-based products, and premium feed formulations.',
    formats: 'Whole bean',
    packaging: '25kg / 50kg bags',
    origin: 'Central Africa',
    specs: {
      productType: 'Whole soybeans, non-GMO',
      nonGmoStatus: 'Identity-preserved non-GMO.',
      protein: '~38–40% (as is)',
      moisture: '< 13%',
      foreignMatter: 'Cleaned and graded.',
      packagingDetail: '25kg / 50kg woven sacks.',
      shelfLife: '12 months from production',
      applications: 'Tofu, tempeh, soy milk, plant proteins, premium feed',
    }
  },
  {
    id: 'penja',
    name: 'Poivre de Penja',
    tag: 'Spice',
    description: 'Volcanic-soil pepper with complex floral notes and long, clean heat. Designed for fine dining and premium spice blends.',
    formats: 'Whole / ground',
    packaging: '0.5kg / 1kg / bulk',
    origin: 'Penja region, Central Africa',
    specs: {
      productType: 'White pepper (Piper nigrum)',
      geoIndication: 'PGI-protected origin (Penja, Cameroon)',
      flavor: 'Complex floral, citrus, long clean heat',
      moisture: '< 12%',
      packagingDetail: 'Food-grade bags or containers, vacuum-sealed options.',
      shelfLife: '24 months (whole), 12 months (ground)',
      applications: 'Fine dining, premium blends, white sauces, seafood',
    }
  },
  {
    id: 'mbongo',
    name: 'Mbongo',
    tag: 'Spice',
    description: 'Deep, smoky spice used in traditional stews and sauces, now finding its place in Afro-fusion and modern gastronomy.',
    formats: 'Whole / ground',
    packaging: '0.5kg / 1kg / bulk',
    origin: 'Central Africa',
    specs: {
      productType: 'Traditional smoked spice blend',
      flavor: 'Deep smoky, earthy, umami complexity',
      moisture: '< 10%',
      packagingDetail: 'Food-grade bags, airtight containers.',
      shelfLife: '18 months from production',
      applications: 'Stews, sauces, Afro-fusion, meat rubs, marinades',
    }
  },
  {
    id: 'njansang',
    name: 'Njansang',
    tag: 'Seed / Spice',
    description: 'Buttery, nutty seed used as a thickener and flavor enhancer in West and Central African cuisine.',
    formats: 'Whole seed / ground',
    packaging: '0.5kg / 1kg / bulk',
    origin: 'Central Africa',
    specs: {
      productType: 'Ricinodendron heudelotii seeds',
      flavor: 'Buttery, nutty, mild bitter undertone',
      moisture: '< 8%',
      packagingDetail: 'Food-grade bags, vacuum-sealed options.',
      shelfLife: '18 months (whole), 12 months (ground)',
      applications: 'Soups, stews, sauces, thickening agent',
    }
  },
  {
    id: 'cassava',
    name: 'Cassava Flour',
    tag: 'Flour',
    description: 'Naturally gluten-free flour for bakeries, ethnic foods, and better-for-you formulations.',
    formats: 'Fine / medium',
    packaging: '25kg bags',
    origin: 'Central Africa',
    specs: {
      productType: 'Cassava (Manihot esculenta) flour',
      glutenFree: 'Yes, naturally gluten-free',
      moisture: '< 12%',
      particleSize: 'Fine to medium grind available',
      packagingDetail: '25kg multi-wall paper bags, food-grade liner.',
      shelfLife: '12 months from production',
      applications: 'Gluten-free baking, ethnic foods, thickening, coatings',
    }
  },
  {
    id: 'tapioca',
    name: 'Tapioca Flour',
    tag: 'Flour',
    description: 'Refined starch for boba tea, desserts, sauces, and texture control in food manufacturing.',
    formats: 'Fine starch',
    packaging: '25kg bags',
    origin: 'Central Africa',
    specs: {
      productType: 'Tapioca starch (from cassava)',
      glutenFree: 'Yes',
      moisture: '< 13%',
      purity: 'High purity refined starch',
      packagingDetail: '25kg multi-wall paper bags.',
      shelfLife: '24 months from production',
      applications: 'Boba tea, desserts, sauces, binding, texture modification',
    }
  },
];

// Sidebar Navigation Component
function SidebarNav() {
  return (
    <aside className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <nav className="flex flex-col gap-4">
        <a href="#catalog" className="footer-text-thin hover:text-[var(--black)] transition-colors">
          Catalog
        </a>
        <a href="#specs" className="footer-text-thin hover:text-[var(--black)] transition-colors">
          Specs
        </a>
        <a href="#contact" className="footer-text-thin hover:text-[var(--black)] transition-colors">
          Contact
        </a>
      </nav>
    </aside>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 glow-subtle" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="divider mb-8" />
          <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Product Catalog
          </h1>
          <p className="lead">
            Heritage-grown non-GMO grains and rare African spices, curated for chefs, 
            distributors, and specialty manufacturers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Catalog Section
function CatalogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="catalog" ref={ref} className="section-spacing border-t border-[var(--gray-200)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="footer-text-thin mb-4 block">Catalog</span>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            MartinSupplies & Co Product Catalog
          </h2>
          <p className="text-[var(--gray-600)] mt-4 max-w-2xl" style={{ fontWeight: 300 }}>
            Heritage-grown non-GMO grains and rare African spices, curated for chefs, 
            distributors, and specialty manufacturers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="card h-full flex flex-col">
                <span 
                  className="inline-block px-3 py-1 text-xs uppercase tracking-widest mb-4 w-fit"
                  style={{ 
                    fontWeight: 300,
                    background: product.tag === 'Grain' ? 'var(--yellow)' : 
                               product.tag === 'Spice' ? 'var(--brown)' :
                               product.tag === 'Legume' ? '#3d8f5a' :
                               product.tag === 'Flour' ? 'var(--gray-200)' : 'var(--gray-200)',
                    color: product.tag === 'Grain' ? 'var(--black)' :
                           product.tag === 'Spice' ? 'white' :
                           product.tag === 'Legume' ? 'white' : 'var(--black)'
                  }}
                >
                  {product.tag}
                </span>
                
                <h3 className="text-lg mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {product.name}
                </h3>
                
                <p className="text-sm text-[var(--gray-600)] mb-4 flex-grow" style={{ fontWeight: 300 }}>
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4 pt-4 border-t border-[var(--gray-100)]">
                  <p className="text-xs text-[var(--gray-500)]" style={{ fontWeight: 300 }}>
                    <span className="text-[var(--gray-400)]">Formats:</span> {product.formats}
                  </p>
                  <p className="text-xs text-[var(--gray-500)]" style={{ fontWeight: 300 }}>
                    <span className="text-[var(--gray-400)]">Packaging:</span> {product.packaging}
                  </p>
                  <p className="text-xs text-[var(--gray-500)]" style={{ fontWeight: 300 }}>
                    <span className="text-[var(--gray-400)]">Origin:</span> {product.origin}
                  </p>
                </div>
                
                <a href={`#specs-${product.id}`} className="link-arrow text-xs mt-auto">
                  View specs
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Specs Section
function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  return (
    <section id="specs" ref={ref} className="section-spacing bg-[var(--gray-50)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="footer-text-thin mb-4 block">Technical</span>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Product Specifications
          </h2>
          <p className="text-[var(--gray-600)] mt-4 max-w-2xl" style={{ fontWeight: 300 }}>
            High-level specifications for our core products. Detailed COA and lab 
            analysis are available upon request for qualified buyers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {catalogProducts.map((product, index) => (
            <motion.div
              key={product.id}
              id={`specs-${product.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-[var(--gray-200)]"
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--gray-50)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span 
                    className="inline-block px-2 py-0.5 text-xs uppercase tracking-widest"
                    style={{ 
                      fontWeight: 300,
                      background: product.tag === 'Grain' ? 'var(--yellow)' : 
                                 product.tag === 'Spice' ? 'var(--brown)' :
                                 product.tag === 'Legume' ? '#3d8f5a' :
                                 'var(--gray-200)',
                      color: product.tag === 'Grain' ? 'var(--black)' :
                             product.tag === 'Spice' || product.tag === 'Legume' ? 'white' : 'var(--black)'
                    }}
                  >
                    {product.tag}
                  </span>
                  <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    {product.name}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: expandedProduct === product.id ? 180 : 0 }}
                  className="text-[var(--gray-400)]"
                >
                  ↓
                </motion.span>
              </button>
              
              {expandedProduct === product.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-[var(--gray-200)]"
                >
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs uppercase tracking-widest text-[var(--gray-400)] mb-1" style={{ fontWeight: 300 }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm text-[var(--gray-700)]" style={{ fontWeight: 400 }}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-6 flex gap-4">
                    <Link href="/contact?subject=specs" className="link-arrow text-xs">
                      Request full COA
                    </Link>
                    <Link href="/contact?subject=samples" className="link-arrow text-xs">
                      Request samples
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    products: '',
    volume: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', company: '', email: '', role: '', products: '', volume: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={ref} className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="footer-text-thin mb-4 block">Contact</span>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Contact & Wholesale Inquiries
          </h2>
          <p className="text-[var(--gray-600)] mt-4 max-w-2xl" style={{ fontWeight: 300 }}>
            If you are a distributor, manufacturer, or chef exploring non-GMO grains 
            and heritage spices, share a bit about your operation and we will respond 
            with a tailored sourcing proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                  <strong className="text-[var(--black)]" style={{ fontFamily: 'var(--font-display)' }}>
                    MartinSupplies & Co
                  </strong>
                  <br />
                  Heritage-grown grains & spices from Central Africa, serving U.S. 
                  partners from Houston, with expansion toward Los Angeles and Miami.
                </p>
              </div>

              <div>
                <span className="footer-text-thin block mb-2">Email</span>
                <a href="mailto:hello@martinsupplies.com" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors">
                  hello@martinsupplies.com
                </a>
              </div>

              <div>
                <span className="footer-text-thin block mb-2">Phone / WhatsApp</span>
                <a href="tel:+17135550123" className="text-[var(--black)] hover:text-[var(--brown)] transition-colors block">
                  +1 (713) 555-0123
                </a>
                <a href="https://wa.me/17135550123" target="_blank" className="link-arrow text-xs mt-2 inline-block">
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <span className="footer-text-thin block mb-2">Locations</span>
                <p className="text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                  Houston, Texas (primary U.S. base)
                  <br />
                  <span className="text-[var(--gray-400)]">
                    Planned hubs: Los Angeles, California & Miami, Florida
                  </span>
                </p>
              </div>

              <div className="pt-8 border-t border-[var(--gray-200)]">
                <span className="footer-text-thin block mb-4">Quick Links</span>
                <div className="flex flex-wrap gap-4">
                  <Link href="/standards" className="link-arrow text-xs">
                    Standards & Practices
                  </Link>
                  <Link href="/sourcing" className="link-arrow text-xs">
                    Certifications
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="bg-[var(--gray-50)] p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--yellow)] flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Inquiry Received
                </h3>
                <p className="text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                  We will review your request and respond with a tailored proposal within 24–48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-[var(--gray-500)] hover:text-[var(--black)] transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="footer-text-thin block mb-2">Your name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontWeight: 300 }}
                    />
                  </div>
                  <div>
                    <label className="footer-text-thin block mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Company name"
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontWeight: 300 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="footer-text-thin block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      suppressHydrationWarning
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontWeight: 300 }}
                    />
                  </div>
                  <div>
                    <label className="footer-text-thin block mb-2">Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g., Purchasing manager, Chef"
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontWeight: 300 }}
                    />
                  </div>
                </div>

                <div>
                  <label className="footer-text-thin block mb-2">Products of interest</label>
                  <textarea
                    name="products"
                    value={formData.products}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us which products you are exploring (corn, soy, cassava, Poivre de Penja, Mbongo, Njansang, etc.)."
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                    style={{ fontWeight: 300 }}
                  />
                </div>

                <div>
                  <label className="footer-text-thin block mb-2">Approximate annual volume</label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g., 2 containers/year, 5 tons/month, pilot volumes"
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                    style={{ fontWeight: 300 }}
                  />
                </div>

                <div>
                  <label className="footer-text-thin block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your timelines, current challenges, and what a great partnership looks like to you."
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                    style={{ fontWeight: 300 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit inquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ProductsPage() {
  return (
    <>
      <SidebarNav />
      <HeroSection />
      <CatalogSection />
      <SpecsSection />
      <ContactSection />
    </>
  );
}
