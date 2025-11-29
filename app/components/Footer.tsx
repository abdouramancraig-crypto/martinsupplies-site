'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  products: [
    { 
      name: 'Non-GMO Yellow Corn', 
      href: '/products/non-gmo-yellow-corn',
      humidity: '65-75%',
      temperature: '20-28°C',
      region: 'Western Highlands & Centre',
      weather: 'Tropical, well-drained volcanic soil'
    },
    { 
      name: 'Non-GMO White Corn', 
      href: '/products/non-gmo-white-corn',
      humidity: '60-70%',
      temperature: '18-26°C',
      region: 'Adamawa & North West',
      weather: 'Semi-tropical highlands, rich soil'
    },
    { 
      name: 'Soybeans', 
      href: '/products/non-gmo-soybeans',
      humidity: '70-80%',
      temperature: '22-30°C',
      region: 'Northern Cameroon highlands',
      weather: 'Savannah climate, fertile soil'
    },
    { 
      name: 'Poivre de Penja', 
      href: '/products/poivre-de-penja',
      humidity: '75-85%',
      temperature: '24-30°C',
      region: 'Penja Valley, Littoral Province',
      weather: 'High humidity, mineral-rich volcanic soil'
    },
    { 
      name: 'Mbongo', 
      href: '/products/mbongo',
      humidity: '70-80%',
      temperature: '22-28°C',
      region: 'Littoral & Centre regions',
      weather: 'Equatorial rainforest, humid conditions'
    },
    { 
      name: 'Njansang', 
      href: '/products/njansang',
      humidity: '75-85%',
      temperature: '23-29°C',
      region: 'Forest margins, Cameroon rainforest',
      weather: 'Tropical rainforest, high moisture'
    },
    { 
      name: 'Cassava Flour', 
      href: '/products/cassava-flour',
      humidity: '70-85%',
      temperature: '24-30°C',
      region: 'Centre & South regions',
      weather: 'Tropical lowlands, rich organic soil'
    },
    { 
      name: 'Tapioca Flour', 
      href: '/products/tapioca-flour',
      humidity: '70-85%',
      temperature: '24-30°C',
      region: 'Cassava processing clusters',
      weather: 'Humid tropical climate, well-watered'
    },
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

// Animated Logo for Footer
function FooterLogo() {
  const dotVariants = {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.4, 1],
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <Link href="/" className="inline-block group">
      <motion.div 
        className="text-2xl font-semibold tracking-tight flex items-baseline"
        style={{ fontFamily: 'var(--font-display)' }}
        whileHover="hover"
      >
        <span className="text-white">MartinSupplies</span>
        <motion.span
          className="text-[var(--yellow)] mx-0"
          variants={dotVariants}
          style={{ 
            display: 'inline-block',
            textShadow: '0 0 10px rgba(254, 255, 2, 0.5)'
          }}
        >
          .
        </motion.span>
        <span className="text-white font-light ml-1">&amp; CO</span>
      </motion.div>
    </Link>
  );
}

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-12 mb-8">
            <div className="mb-6">
              <FooterLogo />
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm" style={{ fontWeight: 400 }}>
              Premium heritage-grown ingredients from Central Africa. 
              Traceable, non-GMO, story-rich products for discerning food professionals.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 400 }}>
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

          {/* Products Grid */}
          <div className="lg:col-span-12 border-t border-white/10 pt-8">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 400 }}>
              Our Products — Optimal Growing Conditions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {footerLinks.products.map((link) => (
                <div key={link.name} className="border-l-2 border-white/10 pl-4 hover:border-[var(--yellow)] transition-colors group">
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-[var(--yellow)] text-sm font-medium transition-colors block mb-2"
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                  <div className="space-y-1 text-xs text-white/50" style={{ fontWeight: 400 }}>
                    <p><span className="text-white/40">Region:</span> {link.region}</p>
                    <p><span className="text-white/40">Humidity:</span> {link.humidity}</p>
                    <p><span className="text-white/40">Temperature:</span> {link.temperature}</p>
                    <p className="text-white/40 italic text-[11px] mt-1">{link.weather}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-6 border-t border-white/10 pt-8">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 400 }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 border-t border-white/10 pt-8">
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6" style={{ fontWeight: 400 }}>
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs" style={{ fontWeight: 400 }}>Houston, TX</p>
              <a href="mailto:hello@martinsupplies.com" className="text-white/70 hover:text-[var(--yellow)] text-sm transition-colors" style={{ fontWeight: 400 }}>
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
            <p className="footer-text-thin text-white/50" suppressHydrationWarning>
              © {new Date().getFullYear()} MartinSupplies. & CO — All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="footer-text-thin text-white/50 hover:text-[var(--yellow)] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="footer-text-thin text-white/50 hover:text-[var(--yellow)] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
