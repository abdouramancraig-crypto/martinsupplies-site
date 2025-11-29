'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { productCatalog } from '@/lib/products';

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
          {productCatalog.map((product, index) => (
            <motion.div
              key={product.slug}
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
                    <span className="text-[var(--gray-400)]">Packaging:</span> {product.packagingSummary}
                  </p>
                  <p className="text-xs text-[var(--gray-500)]" style={{ fontWeight: 300 }}>
                    <span className="text-[var(--gray-400)]">Origin:</span> {product.originSummary}
                  </p>
                </div>
                
                <Link href={`/products/${product.slug}`} className="link-arrow text-xs mt-auto">
                  View brochure →
                </Link>
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
          {productCatalog.map((product, index) => (
            <motion.div
              key={product.slug}
              id={`specs-${product.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-[var(--gray-200)]"
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.slug ? null : product.slug)}
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
                  animate={{ rotate: expandedProduct === product.slug ? 180 : 0 }}
                  className="text-[var(--gray-400)]"
                >
                  ↓
                </motion.span>
              </button>
              
              {expandedProduct === product.slug && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-[var(--gray-200)]"
                >
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Scientific Name', value: product.scientificName },
                      { label: 'Origin', value: product.originSummary },
                      { label: 'Formats', value: product.formats },
                      { label: 'Moisture Target', value: product.moisture },
                      { label: 'Packaging', value: product.packagingSummary },
                      { label: 'Shelf Life', value: product.shelfLife },
                    ].map((spec) => (
                      <div key={`${product.slug}-${spec.label}`} className="flex flex-col">
                        <span className="text-xs uppercase tracking-widest text-[var(--gray-400)] mb-1" style={{ fontWeight: 300 }}>
                          {spec.label}
                        </span>
                        <span className="text-sm text-[var(--gray-700)]" style={{ fontWeight: 400 }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                      Key Applications
                    </p>
                    <ul className="space-y-2 text-sm text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                      {[...product.applications.global.slice(0, 2), ...product.applications.regional.slice(0, 2)].map((application) => (
                        <li key={`${product.slug}-${application}`} className="flex gap-2">
                          <span className="text-[var(--yellow)]">→</span>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6 flex flex-wrap gap-4">
                    <Link href={`/products/${product.slug}`} className="link-arrow text-xs">
                      View brochure
                    </Link>
                    <Link href={`/lifecycle/${product.slug}`} className="link-arrow text-xs">
                      Full life cycle
                    </Link>
                    <Link href="/contact?subject=specs" className="link-arrow text-xs">
                      Request full COA
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
