'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { CountUpNumber } from '../components/hooks/useCountUp';

const impactStats = [
  { value: 5000, suffix: '+', label: 'Farming Families Supported', description: 'Direct partnerships with cooperatives' },
  { value: 1.2, suffix: 'M', prefix: '$', label: 'Community Investment', description: 'Since 2010' },
  { value: 60, suffix: '%', label: 'Emissions Reduced', description: 'In logistics since 2018' },
  { value: 15000, suffix: '+', label: 'Acres Protected', description: 'Biodiversity zones' },
];

const initiatives = [
  {
    id: 'clean-process',
    title: 'Clean Process',
    subtitle: 'Sustainable Operations',
    description: 'Our operations are designed to minimize environmental impact at every step, from sourcing to delivery.',
    stats: [
      { value: 75, label: 'Recyclable Packaging' },
      { value: 40, label: 'Reduced Plastic Use' },
      { value: 100, label: 'Renewable Energy (HQ)' },
    ],
    details: [
      'Transition to 100% recyclable and compostable packaging materials',
      'Elimination of single-use plastics from our supply chain',
      'Solar-powered warehouse operations in Houston',
      'Low-emission freight partnerships',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: '#3d8f5a',
  },
  {
    id: 'circular',
    title: 'Circular Agriculture',
    subtitle: 'Regenerative Farming',
    description: 'Our farming partners practice regenerative agriculture that rebuilds soil health and supports biodiversity.',
    stats: [
      { value: 100, label: 'Organic Methods' },
      { value: 30, label: 'Soil Carbon Increase' },
      { value: 12, label: 'Crop Rotation Cycles' },
    ],
    details: [
      'Organic waste redistribution to enrich soil naturally',
      'Cover cropping between harvest seasons',
      'No synthetic fertilizers or pesticides',
      'Traditional companion planting methods',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#2d5a3d',
  },
  {
    id: 'logistics',
    title: 'Responsible Logistics',
    subtitle: 'Carbon-Conscious Shipping',
    description: 'Strategic shipping routes and partnerships that minimize our carbon footprint while maintaining product quality.',
    stats: [
      { value: 60, label: 'Emissions Reduced' },
      { value: 3, label: 'Port Hubs' },
      { value: 90, label: 'Ocean Freight' },
    ],
    details: [
      'Freight consolidation to maximize container efficiency',
      'Ocean freight prioritized over air shipping',
      'Strategic port city warehouses reduce inland transport',
      'Route optimization for minimal emissions',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: '#3d5a8f',
  },
  {
    id: 'social',
    title: 'Social Responsibility',
    subtitle: 'Community Impact',
    description: 'Building sustainable communities through education, healthcare, and economic opportunity.',
    stats: [
      { value: 12, label: 'Schools Built' },
      { value: 5, label: 'Health Clinics' },
      { value: 500, label: 'Farmers Trained/Year' },
    ],
    details: [
      'Annual agricultural training programs',
      'School construction and scholarship programs',
      'Rural healthcare facility funding',
      'Women\'s cooperative support initiatives',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: '#8f5a3d',
  },
];

const goals2030 = [
  { goal: 'Carbon Neutral Operations', target: '100%', progress: 65 },
  { goal: 'Sustainable Packaging', target: '100%', progress: 75 },
  { goal: 'Farmer Income Increase', target: '+50%', progress: 80 },
  { goal: 'Water Usage Reduction', target: '-30%', progress: 45 },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2d5a3d]/10 to-transparent" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[#2d5a3d]/30 text-[#5eba7d] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Sustainability
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Growing Better, Sustainably
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Sustainability isn't a marketing initiative—it's been core to our business since 1959. 
              We believe that doing right by farmers, communities, and the environment creates 
              better products and stronger partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats with Counter Animation */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent-gold)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  <CountUpNumber 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix || ''} 
                    duration={2.5}
                    decimals={stat.value < 10 ? 1 : 0}
                  />
                </div>
                <p className="text-[var(--primary-dark)] font-semibold mb-1">{stat.label}</p>
                <p className="text-[var(--dark-gray)]/50 text-xs">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiative Sections */}
      {initiatives.map((initiative, index) => (
        <section 
          key={initiative.id}
          className={`section-spacing ${index % 2 === 0 ? 'bg-[var(--light-gray)]' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${initiative.color}20`, color: initiative.color }}
                >
                  {initiative.icon}
                </div>
                
                <span className="text-sm font-medium tracking-wider uppercase mb-2 block" style={{ color: initiative.color }}>
                  {initiative.subtitle}
                </span>
                <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {initiative.title}
                </h2>
                <p className="text-[var(--dark-gray)]/70 leading-relaxed mb-6">
                  {initiative.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {initiative.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold mb-1" style={{ color: initiative.color }}>
                        <CountUpNumber end={stat.value} suffix="%" duration={2} />
                      </div>
                      <p className="text-[var(--dark-gray)]/60 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Details List */}
                <ul className="space-y-2">
                  {initiative.details.map((detail, i) => (
                    <motion.li 
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: initiative.color }}
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-[var(--dark-gray)]/70">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden relative"
                  style={{ background: `linear-gradient(135deg, ${initiative.color}20, ${initiative.color}40)` }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                      className="w-48 h-48 rounded-full border-2 border-dashed"
                      style={{ borderColor: `${initiative.color}30` }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${initiative.color}30`, color: initiative.color }}
                    >
                      {initiative.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Farmer Spotlight */}
      <section className="section-spacing bg-[var(--primary-dark)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Farmer Spotlight
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                The People Behind Our Products
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  "When MartinSupplies first came to our village in 1992, we were skeptical. 
                  But they didn't just want to buy our corn—they wanted to partner with us. 
                  They taught us sustainable farming methods and paid us fairly."
                </p>
                <p>
                  "Today, my children go to school. We have a health clinic in our village. 
                  And we're farming the same land my grandfather farmed, but in a way that 
                  will preserve it for my grandchildren."
                </p>
              </div>
              <div className="mt-8">
                <p className="text-white font-semibold">Emmanuel Nkeng</p>
                <p className="text-[var(--accent-gold)] text-sm">
                  Cooperative Leader, Dschang Region, Cameroon
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-gold)]/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2030 Goals */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              Looking Ahead
            </span>
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Our 2030 Sustainability Goals
            </h2>
            <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
              Ambitious targets that will guide our growth for the next decade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals2030.map((item, index) => (
              <motion.div
                key={item.goal}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl font-bold text-[var(--accent-gold)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.target}
                  </span>
                  <span className="text-xs font-medium text-[var(--dark-gray)]/50 px-2 py-1 bg-[var(--light-gray)] rounded">
                    2030
                  </span>
                </div>
                <h4 className="text-[var(--primary-dark)] font-semibold mb-3">
                  {item.goal}
                </h4>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-[var(--accent-gold)] rounded-full"
                  />
                </div>
                <p className="text-xs text-[var(--dark-gray)]/50 mt-2">
                  {item.progress}% progress
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular CO2 Lifecycle - Animated on Scroll */}
      <CircularLifecycleSection />

      {/* CTA */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Partner With Purpose
            </h2>
            <p className="text-[var(--dark-gray)]/70 mb-8">
              When you choose MartinSupplies, you're not just getting premium ingredients—you're 
              supporting sustainable agriculture and thriving communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/wholesale">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-primary bg-[var(--primary-dark)] text-white">
                  Become a Partner
                </motion.button>
              </Link>
              <Link href="/sourcing">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary text-[var(--primary-dark)] border-[var(--primary-dark)]">
                  View Certifications
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Circular CO2 Lifecycle Component
function CircularLifecycleSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.08em',
  };

  const lifecycleStages = [
    {
      id: 1,
      title: 'Soil & Cultivation',
      description: 'Volcanic soils, organic methods, no synthetic inputs',
      co2Impact: '-20% emissions vs. conventional',
      angle: 0,
    },
    {
      id: 2,
      title: 'Harvest & Processing',
      description: 'Solar-powered facilities, minimal water use',
      co2Impact: '-35% energy consumption',
      angle: 60,
    },
    {
      id: 3,
      title: 'Packaging',
      description: 'Biodegradable materials, recyclable containers',
      co2Impact: '75% recyclable packaging',
      angle: 120,
    },
    {
      id: 4,
      title: 'Ocean Freight',
      description: 'Consolidated shipments, optimized routes',
      co2Impact: '90% ocean vs. air freight',
      angle: 180,
    },
    {
      id: 5,
      title: 'Distribution',
      description: 'Port city hubs reduce inland transport',
      co2Impact: '-40% last-mile emissions',
      angle: 240,
    },
    {
      id: 6,
      title: 'Zero-Waste Disposal',
      description: 'Biomass energy, animal feed, composting',
      co2Impact: '100% circular use',
      angle: 300,
    },
  ];

  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stageIndex = Math.floor(latest * lifecycleStages.length);
      setActiveStage(Math.min(stageIndex, lifecycleStages.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, lifecycleStages.length]);

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={sectionRef} className="py-32 bg-[var(--black)] text-white relative overflow-hidden">
      <div className="absolute inset-0 glow-subtle" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--yellow)] mb-3" style={labelStyle}>
            Full Circle
          </p>
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
            Our Low-Emission CO₂ Lifecycle
          </h2>
          <p className="lead text-white/70 max-w-3xl mx-auto">
            From volcanic soil to zero-waste disposal, every stage of our supply chain is designed 
            to minimize carbon emissions and maximize circular value.
          </p>
        </motion.div>

        {/* Circular Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-square relative">
            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-[var(--yellow)]/10 border-2 border-[var(--yellow)]/30 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    -60%
                  </div>
                  <p className="text-xs text-white/60" style={labelStyle}>
                    TOTAL CO₂ REDUCTION
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Rotating Circle Path */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              style={{ rotate: rotation }}
            >
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="rgba(254, 255, 2, 0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </motion.svg>

            {/* Lifecycle Stage Nodes */}
            {lifecycleStages.map((stage, index) => {
              const isActive = index <= activeStage;
              const angleRad = (stage.angle * Math.PI) / 180;
              const radius = 180;
              const x = 50 + radius * Math.cos(angleRad - Math.PI / 2);
              const y = 50 + radius * Math.sin(angleRad - Math.PI / 2);

              return (
                <motion.div
                  key={stage.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isActive ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer"
                    style={{
                      borderColor: isActive ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <span className="text-xl font-bold" style={{ color: isActive ? 'var(--black)' : 'white' }}>
                      {stage.id}
                    </span>
                  </motion.div>

                  {/* Stage Label */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-48 text-center"
                  >
                    <p className="text-xs font-semibold mb-1 text-[var(--yellow)]" style={labelStyle}>
                      {stage.title}
                    </p>
                    <p className="text-xs text-white/60 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      {stage.description}
                    </p>
                    <p className="text-xs font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {stage.co2Impact}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/60 mb-4" style={labelStyle}>
            Scroll to explore each stage
          </p>
          <div className="flex justify-center gap-2">
            {lifecycleStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                animate={{
                  backgroundColor: index <= activeStage ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.2)',
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-1 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              90%
            </div>
            <p className="text-xs text-white/60" style={labelStyle}>
              OCEAN FREIGHT
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              75%
            </div>
            <p className="text-xs text-white/60" style={labelStyle}>
              RECYCLABLE PACKAGING
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              100%
            </div>
            <p className="text-xs text-white/60" style={labelStyle}>
              CIRCULAR USE
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              0
            </div>
            <p className="text-xs text-white/60" style={labelStyle}>
              SYNTHETIC INPUTS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
