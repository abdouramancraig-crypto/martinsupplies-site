'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Hero Section - Authority & Credibility
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Intro Movie.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/70 via-[#0d1f3c]/60 to-[#071020]/70" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Credentials Badge */}
            <div className="inline-block px-6 py-2 bg-[var(--yellow)]/10 border border-[var(--yellow)]/30 rounded-full text-[var(--yellow)] text-sm font-medium tracking-wider uppercase mb-8">
              FDA-Registered • Non-GMO Verified • Est. 1987
            </div>
            
            <h1 className="text-5xl md:text-7xl text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Heritage Ingredients
              <br />
              <span className="text-[var(--yellow)]">Trusted by Michelin Chefs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Premium Non-GMO corn, soybeans, and rare Central African spices from 
              Cameroon's volcanic soil — sourced with integrity, delivered with excellence.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: '37+', label: 'Years Excellence' },
                { number: '100%', label: 'Non-GMO' },
                { number: '100%', label: 'Traceable' },
                { number: 'FDA', label: 'Registered' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Non-GMO Commitment Section
function NonGMOCommitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/10 text-[var(--brown)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            OUR NON-GMO COMMITMENT
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto mb-8" style={{ fontWeight: 400 }}>
            Every kernel, bean, and spice is grown naturally in Cameroon's mineral-rich volcanic soil—
            without synthetic fertilizers, GMOs, or harmful pesticides.
          </p>
        </motion.div>

        {/* Cameroon Advantage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Volcanic Soil Advantage
            </h3>
            <p className="text-[var(--gray-600)] text-sm leading-relaxed" style={{ fontWeight: 400 }}>
              Cameroon's volcanic regions provide naturally mineral-rich soil (high in potassium, 
              phosphorus, and nitrogen) that enhances flavor intensity and nutritional density 
              without artificial inputs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Perfect Subtropical Climate
            </h3>
            <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-4" style={{ fontWeight: 400 }}>
              Year-round optimal growing conditions with stable temperatures (20-28°C), 
              consistent rainfall (1,500-3,000mm annually), and 70-85% humidity—ideal for 
              premium corn, soybeans, and rare spices.
            </p>
            <div className="text-xs text-[var(--gray-500)] space-y-1 text-left">
              <div className="flex justify-between">
                <span>Temperature:</span>
                <span className="font-medium">20-28°C (68-82°F)</span>
              </div>
              <div className="flex justify-between">
                <span>Humidity:</span>
                <span className="font-medium">70-85%</span>
              </div>
              <div className="flex justify-between">
                <span>Rainfall:</span>
                <span className="font-medium">1,500-3,000mm/year</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--yellow)]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--yellow)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-3 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Heritage Farming Practices
            </h3>
            <p className="text-[var(--gray-600)] text-sm leading-relaxed" style={{ fontWeight: 400 }}>
              Hand-harvested by smallholder farmers using generations-old techniques. 
              No synthetic pesticides, no genetic modification—just time-tested methods 
              that preserve authenticity and heritage.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/sourcing" className="btn-primary">
            Learn More About Our Sources
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// FDA Standards Section
function FDAStandards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-[var(--gray-50)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/10 text-[var(--brown)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
              Regulatory Excellence
            </span>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              COMMITMENT TO FDA STANDARDS
            </h2>
            <p className="text-lg text-[var(--gray-600)] mb-8 leading-relaxed" style={{ fontWeight: 400 }}>
              We don't just meet FDA requirements—we exceed them. Every shipment is backed 
              by rigorous documentation, testing, and compliance protocols designed to give 
              you complete peace of mind.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'FDA Facility Registration & Compliance',
                'FSMA Preventive Controls Qualified',
                'Foreign Supplier Verification Program (FSVP)',
                'Phytosanitary Certificates & Lab Testing',
                'Prior Notice & Import Documentation',
                'Full Chain-of-Custody Traceability',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[var(--yellow)] mt-1">✓</span>
                  <span className="text-[var(--gray-700)]" style={{ fontWeight: 400 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/standards" className="btn-secondary">
              View Our Practices
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📋', type: 'emoji', title: 'Documentation', desc: 'Complete records' },
                { icon: '🔬', type: 'emoji', title: 'Lab Tested', desc: 'Third-party verified' },
                { icon: '/images/fda-registered.png', type: 'image', title: 'FDA Registered', desc: 'Facility approved' },
                { icon: '/images/fda-approved.png', type: 'image', title: 'Non-GMO Certified', desc: 'FDA verified' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="card text-center"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    {item.type === 'emoji' ? (
                      <div className="text-4xl">{item.icon}</div>
                    ) : (
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--gray-500)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sustainability Programs Section
function SustainabilityPrograms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/environment-impact-bg.jpg)',
        }}
      />
      
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)]/85 via-[var(--black)]/80 to-[var(--black)]/85" />
      
      {/* Additional subtle overlay for better readability */}
      <div className="absolute inset-0 bg-[#0d1f3c]/40" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/20 backdrop-blur-sm border border-[var(--yellow)]/40 text-[var(--yellow)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase shadow-lg">
            Environmental Impact
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-6 drop-shadow-2xl" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            JOIN OUR PROGRAMS
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg" style={{ fontWeight: 400, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Sustainability isn't an afterthought—it's built into every step of our supply chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--yellow)]/20 backdrop-blur-sm border-2 border-[var(--yellow)]/50 flex items-center justify-center shadow-lg">
              <span className="text-3xl">♻️</span>
            </div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              FULL CYCLE
            </h3>
            <p className="text-white/90 leading-relaxed drop-shadow-md" style={{ fontWeight: 400 }}>
              By-products from corn and soy processing are repurposed for animal feed 
              and biomass energy—nothing goes to waste.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--yellow)]/20 backdrop-blur-sm border-2 border-[var(--yellow)]/50 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              ZERO WASTE
            </h3>
            <p className="text-white/90 leading-relaxed drop-shadow-md" style={{ fontWeight: 400 }}>
              100% of our agricultural by-products are utilized. Crop residue becomes 
              feed or compost, ensuring complete resource utilization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--yellow)]/20 backdrop-blur-sm border-2 border-[var(--yellow)]/50 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              LOW EMISSIONS
            </h3>
            <p className="text-white/90 leading-relaxed drop-shadow-md" style={{ fontWeight: 400 }}>
              Direct-ship logistics, minimal processing, and strategic port locations 
              reduce carbon footprint throughout our supply chain.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/programs/animal-feed" className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--black)] transition-all shadow-xl">
              Animal Feed Program
            </Link>
            <Link href="/programs/biomass" className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--black)] transition-all shadow-xl">
              Biomass & Energy
            </Link>
            <Link href="/sustainability" className="px-8 py-4 bg-[var(--yellow)] backdrop-blur-md border-2 border-[var(--yellow)] text-[var(--black)] font-semibold rounded-lg hover:bg-white hover:border-white transition-all shadow-xl">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Carousel Section
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The Poivre de Penja from MartinSupplies is simply extraordinary. Its floral notes and volcanic terroir bring a unique complexity that elevates every dish.",
      name: "Chef Pierre Dubois",
      title: "3-Star Michelin Chef, Paris",
      category: "Spice Excellence"
    },
    {
      quote: "Mbongo and Njansang have revolutionized my approach to African-inspired cuisine. The authenticity and quality are unmatched in the industry.",
      name: "Chef Amara Williams",
      title: "Michelin-Starred Chef, New York",
      category: "Culinary Innovation"
    },
    {
      quote: "As a nutritionist, I'm impressed by the non-GMO corn and soybeans from MartinSupplies. The nutrient density from volcanic soil is measurable and significant.",
      name: "Dr. Sarah Chen, PhD",
      title: "Clinical Nutritionist & Food Scientist",
      category: "Nutritional Value"
    },
    {
      quote: "The traceability and quality consistency of their soybeans make them ideal for our plant-based protein formulations. FDA compliance is impeccable.",
      name: "Dr. Michael Rodriguez",
      title: "Food Technologist & Nutrition Consultant",
      category: "Food Science"
    },
    {
      quote: "Poivre de Penja is the secret ingredient in our signature dishes. Clients specifically request it—they can taste the difference.",
      name: "Chef Laurent Beaumont",
      title: "Executive Chef, Lyon",
      category: "Signature Ingredient"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/10 text-[var(--brown)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
            Trusted Globally
          </span>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            What Experts Are Saying
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="card bg-[var(--gray-50)] p-12">
                <span className="text-xs uppercase tracking-widest text-[var(--yellow)] mb-4 block">
                  {testimonials[currentIndex].category}
                </span>
                <blockquote className="text-2xl text-[var(--gray-700)] mb-8 leading-relaxed italic" style={{ fontFamily: 'var(--font-display)' }}>
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[var(--black)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-[var(--gray-500)]">
                      {testimonials[currentIndex].title}
                    </div>
                  </div>
                  <div className="text-6xl text-[var(--yellow)]/20">⭐</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[var(--yellow)] w-8' : 'bg-[var(--gray-300)]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Statement Section
function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-gradient-to-br from-[var(--brown)] to-[var(--black)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, var(--yellow) 35px, var(--yellow) 36px)',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/20 text-[var(--yellow)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
            The Problem
          </span>
          
          <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Millions Are Searching. Few Are Finding.
          </h2>
          
          <div className="space-y-6 text-lg text-white/80 mb-10 leading-relaxed">
            <p>
              Over <strong className="text-white">4.2 million</strong> African diaspora members across the U.S. and Canada 
              seek authentic ingredients from home. Western spice enthusiasts, Michelin-starred chefs, and 
              fine-dining restaurants actively search for <strong className="text-white">Poivre de Penja</strong>, 
              <strong className="text-white"> Mbongo</strong>, and <strong className="text-white">Njansang</strong>—
              but availability remains scarce.
            </p>
            
            <p>
              Renowned French and international chefs consistently request these rare Central African 
              ingredients, yet most suppliers cannot guarantee authenticity, consistent quality, or 
              regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                4.2M+
              </div>
              <div className="text-sm text-white/70">
                African diaspora seeking authentic ingredients
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                87%
              </div>
              <div className="text-sm text-white/70">
                Report difficulty finding Poivre de Penja
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                1000+
              </div>
              <div className="text-sm text-white/70">
                Michelin chefs seeking rare spices
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[var(--yellow)] pl-6 py-4 bg-white/5 backdrop-blur-sm mb-8">
            <p className="text-xl italic text-white/90" style={{ fontFamily: 'var(--font-display)' }}>
              "I've been searching for authentic Poivre de Penja for my restaurant for years. 
              The volcanic terroir is irreplaceable—there's simply nothing like it."
            </p>
            <p className="text-sm text-white/60 mt-3">
              — Chef Marc Fontaine, 2-Star Michelin Restaurant, Paris
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Solution Statement Section
function SolutionStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--yellow)]/10 text-[var(--brown)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
              Our Solution
            </span>
            
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              We Deliver What Others Can't
            </h2>
            
            <p className="text-2xl text-[var(--gray-700)] mb-12 leading-relaxed" style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>
              The finest Non-GMO corn, soybeans, and rare Central African spices—
              <span className="text-[var(--yellow)]"> hand-harvested in the best region in the world to grow them</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  🌋 Volcanic Terroir
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed" style={{ fontWeight: 400 }}>
                  Grown in Cameroon's Penja valley and volcanic highlands—regions globally 
                  recognized for producing the world's most flavorful pepper, corn, and legumes.
                </p>
              </div>
              
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  ✋ Hand-Harvested
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed" style={{ fontWeight: 400 }}>
                  Picked at peak ripeness by skilled smallholder farmers using generations 
                  of inherited knowledge—never mechanized, always quality-first.
                </p>
              </div>
              
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  📜 Fully Traceable
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed" style={{ fontWeight: 400 }}>
                  Every batch includes farm-to-port documentation, lab certifications, 
                  and compliance records—transparency you can trust.
                </p>
              </div>
              
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  ⚡ FDA Compliant
                </h3>
                <p className="text-[var(--gray-600)] leading-relaxed" style={{ fontWeight: 400 }}>
                  Every shipment meets or exceeds FDA import requirements with full FSVP 
                  support and third-party verification.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing bg-[var(--yellow)] relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, var(--black) 0, var(--black) 1px, transparent 1px, transparent 60px)',
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-[var(--black)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Experience
            <br />
            The Difference?
          </h2>
          
          <p className="text-xl text-[var(--black)]/70 mb-10" style={{ fontWeight: 400 }}>
            Join Michelin-starred chefs, food manufacturers, and discerning buyers 
            who trust MartinSupplies for premium, traceable ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products" className="btn-primary bg-[var(--black)] text-white hover:bg-[var(--brown)] text-lg px-8 py-4">
              View Full Catalog
            </Link>
            <Link href="/wholesale" className="btn-secondary border-[var(--black)] hover:bg-[var(--black)] hover:text-white text-lg px-8 py-4">
              Request Samples
            </Link>
            <Link href="/contact" className="btn-secondary border-[var(--black)] hover:bg-[var(--black)] hover:text-white text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--black)]/20">
            <p className="text-sm text-[var(--black)]/60 mb-4">Trusted by:</p>
            <p className="text-[var(--black)]/70 font-medium">
              Michelin-Starred Restaurants • Food Manufacturers • Premium Distributors • Specialty Retailers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <NonGMOCommitment />
      <FDAStandards />
      <SustainabilityPrograms />
      <TestimonialsCarousel />
      <ProblemStatement />
      <SolutionStatement />
      <FinalCTA />
    </>
  );
}
