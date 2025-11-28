'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  products: [
    { name: 'Corn', href: '/products/grains' },
    { name: 'Soybeans', href: '/products/grains' },
    { name: 'Poivre de Penja', href: '/products/spices' },
    { name: 'Mbongo', href: '/products/spices' },
    { name: 'Cassava Flour', href: '/products/flours' },
  ],
  company: [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Standards & Practices', href: '/standards' },
    { name: 'Industries', href: '/industries' },
    { name: 'Sustainability', href: '/sustainability' },
  ],
  resources: [
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact', href: '/contact' },
    { name: 'Sourcing', href: '/sourcing' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-[var(--black)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span 
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                MartinSupplies
              </span>
              <span className="text-[var(--yellow)] text-3xl leading-none">.</span>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm" style={{ fontWeight: 300 }}>
              Premium heritage-grown ingredients from Central Africa. 
              Traceable, non-GMO, story-rich products for discerning food professionals.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 300 }}>
                Industry Updates
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--yellow)] transition-colors"
                  required
                  suppressHydrationWarning
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-[var(--yellow)] text-[var(--black)] font-medium text-sm uppercase tracking-wider hover:bg-white transition-colors"
                >
                  {isSubmitted ? '✓' : '→'}
                </motion.button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 300 }}>
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 300 }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 300 }}>
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs" style={{ fontWeight: 300 }}>Houston, TX</p>
              <a href="mailto:hello@martinsupplies.com" className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors" style={{ fontWeight: 300 }}>
                hello@martinsupplies.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="footer-text-thin" suppressHydrationWarning>
              © {new Date().getFullYear()} MartinSupplies & Co. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="footer-text-thin hover:text-[var(--yellow)] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="footer-text-thin hover:text-[var(--yellow)] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
