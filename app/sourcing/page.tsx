'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const tabs = [
  { id: 'ethical', label: 'Ethical Sourcing' },
  { id: 'terroir', label: 'Soil & Terroir' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'processing', label: 'Processing Methods' },
];

const certifications = [
  { name: 'FDA Registered', status: 'Active', number: 'FDA-12345678' },
  { name: 'Non-GMO Project Verified', status: 'Active', number: 'NGP-87654321' },
  { name: 'Fair Trade Certified', status: 'Active', number: 'FTC-11223344' },
  { name: 'SQF Level 2', status: 'Active', number: 'SQF-55667788' },
  { name: 'USDA Organic (Select)', status: 'Active', number: 'USDA-99887766' },
  { name: 'Kosher Certified', status: 'Active', number: 'OK-44556677' },
];

const processingSteps = [
  {
    step: 1,
    title: 'Traditional Harvest',
    description: 'Hand-harvested at peak ripeness using methods passed down through generations. Our farming partners know exactly when each variety reaches optimal maturity.',
    duration: 'Day 1-3',
  },
  {
    step: 2,
    title: 'Natural Drying',
    description: 'Sun-dried on raised platforms to ensure even moisture reduction while preventing ground contamination. Temperature and humidity are carefully monitored.',
    duration: 'Day 4-14',
  },
  {
    step: 3,
    title: 'Cleaning & Sorting',
    description: 'Multi-stage cleaning removes debris and foreign matter. Trained sorters grade each batch by size, color, and quality.',
    duration: 'Day 15-17',
  },
  {
    step: 4,
    title: 'Quality Testing',
    description: 'Laboratory analysis for moisture content, purity, and contamination. Only batches meeting our strict standards proceed.',
    duration: 'Day 18-20',
  },
  {
    step: 5,
    title: 'Processing',
    description: 'Stone milling for flours, careful selection for whole products. Traditional methods preserve nutritional integrity and flavor profiles.',
    duration: 'Day 21-25',
  },
  {
    step: 6,
    title: 'Packaging & Export',
    description: 'Food-grade, moisture-controlled packaging protects products during transit. Full documentation accompanies every shipment.',
    duration: 'Day 26-30',
  },
];

const farmerStories = [
  {
    name: 'Emmanuel Nkeng',
    role: 'Cooperative Leader',
    location: 'Dschang Region',
    quote: 'For 30 years, MartinSupplies has been more than a buyer—they are partners in our community\'s growth.',
    image: '/farmer-1.jpg',
  },
  {
    name: 'Marie Fotso',
    role: 'Third-Generation Farmer',
    location: 'Penja Valley',
    quote: 'My grandmother grew pepper here, my mother grew pepper, and now I do. MartinSupplies helps us continue this tradition.',
    image: '/farmer-2.jpg',
  },
  {
    name: 'Joseph Kamga',
    role: 'Quality Inspector',
    location: 'Bafoussam',
    quote: 'Every bean that leaves our region carries our reputation. We take that responsibility seriously.',
    image: '/farmer-3.jpg',
  },
];

export default function SourcingPage() {
  const [activeTab, setActiveTab] = useState('ethical');
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--primary-dark)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Sourcing & Certifications
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Trust Through Transparency
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Every product we deliver carries complete documentation of its journey—from the 
              farming communities in Central Africa to your facility. Know your source, trust your supplier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? 'text-[var(--accent-gold)]' 
                    : 'text-[var(--dark-gray)]/60 hover:text-[var(--dark-gray)]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-gold)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'ethical' && (
          <motion.section
            key="ethical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="section-spacing bg-white"
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                    Ethical Sourcing
                  </span>
                  <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    Handpicked with Care, Grown with Integrity
                  </h2>
                  <div className="space-y-4 text-[var(--dark-gray)]/70 leading-relaxed">
                    <p>
                      Our sourcing philosophy is simple: the best ingredients come from farmers 
                      who are treated as partners, not suppliers. We work directly with farming 
                      cooperatives, eliminating middlemen and ensuring fair compensation.
                    </p>
                    <p>
                      Every product is grown using organic methods—no synthetic pesticides, no 
                      chemical fertilizers. Traditional farming techniques have sustained these 
                      communities for generations, and we're committed to helping them continue.
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {[
                      'Direct trade relationships since 1987',
                      '40% above market rate paid to farmers',
                      'No middlemen—farm to warehouse',
                      'Annual farm visits and audits',
                    ].map((item, i) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <svg className="w-5 h-5 text-[var(--accent-gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-[var(--dark-gray)]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5" />
                </div>
              </div>

              {/* Farmer Stories Carousel */}
              <div>
                <h3 className="text-[var(--primary-dark)] text-2xl mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  Meet Our Partners
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {farmerStories.map((farmer, index) => (
                    <motion.div
                      key={farmer.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[var(--light-gray)] rounded-xl p-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-[var(--accent-gold)]/20 mx-auto mb-4" />
                      <blockquote className="text-[var(--dark-gray)]/70 text-sm italic text-center mb-4">
                        "{farmer.quote}"
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold text-[var(--primary-dark)]">{farmer.name}</p>
                        <p className="text-[var(--accent-gold)] text-sm">{farmer.role}</p>
                        <p className="text-[var(--dark-gray)]/50 text-xs">{farmer.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'terroir' && (
          <motion.section
            key="terroir"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="section-spacing bg-white"
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2d5a3d]/20 to-[#2d5a3d]/5" />
                </div>

                <div>
                  <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                    Soil & Terroir
                  </span>
                  <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    The Land That Creates Excellence
                  </h2>
                  <div className="space-y-4 text-[var(--dark-gray)]/70 leading-relaxed">
                    <p>
                      Cameroon's western highlands sit atop ancient volcanic formations, creating 
                      soil compositions found nowhere else on Earth. This unique terroir—the 
                      combination of soil, climate, and altitude—gives our products their 
                      distinctive character.
                    </p>
                    <p>
                      The Penja region, where our signature pepper grows, has been granted 
                      Protected Geographical Indication (PGI) status by the African Intellectual 
                      Property Organization—the first and only African spice to receive this designation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Chart */}
              <div className="bg-[var(--light-gray)] rounded-2xl p-8 md:p-12">
                <h3 className="text-[var(--primary-dark)] text-xl mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  Why Cameroon Terroir is Superior
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-sm font-semibold text-[var(--primary-dark)]">Factor</th>
                        <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--accent-gold)]">Cameroon Highlands</th>
                        <th className="text-center py-4 px-4 text-sm font-semibold text-[var(--dark-gray)]/50">Typical Sources</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { factor: 'Soil Type', cameroon: 'Volcanic (High Mineral)', typical: 'Mixed/Clay' },
                        { factor: 'Altitude', cameroon: '1,200-2,000m', typical: '200-800m' },
                        { factor: 'Annual Rainfall', cameroon: '2,000-3,000mm', typical: '1,000-1,500mm' },
                        { factor: 'Growing Method', cameroon: 'Traditional/Organic', typical: 'Conventional' },
                        { factor: 'Harvest Method', cameroon: 'Hand-Picked', typical: 'Mechanical' },
                      ].map((row, i) => (
                        <tr key={row.factor} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-sm text-[var(--dark-gray)]">{row.factor}</td>
                          <td className="py-4 px-4 text-sm text-center text-[var(--primary-dark)] font-medium">{row.cameroon}</td>
                          <td className="py-4 px-4 text-sm text-center text-[var(--dark-gray)]/50">{row.typical}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'certifications' && (
          <motion.section
            key="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="section-spacing bg-white"
          >
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                  Certifications & Compliance
                </span>
                <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Industry-Leading Standards
                </h2>
                <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
                  Every certification we hold represents our commitment to quality, safety, and ethical practices.
                </p>
              </div>

              {/* Certification Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-[var(--light-gray)] rounded-xl p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[var(--primary-dark)] font-semibold mb-1">{cert.name}</h4>
                      <p className="text-green-600 text-sm mb-1">● {cert.status}</p>
                      <p className="text-[var(--dark-gray)]/50 text-xs font-mono">{cert.number}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Document Downloads */}
              <div className="bg-[var(--primary-dark)] rounded-2xl p-8 md:p-12">
                <h3 className="text-white text-xl mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  Documentation Downloads
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    'Certificate of Analysis (COA)',
                    'Phytosanitary Certificate',
                    'FDA Registration',
                    'Non-GMO Verification',
                  ].map((doc) => (
                    <button
                      key={doc}
                      className="relative flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-left cursor-not-allowed opacity-75"
                      disabled
                    >
                      <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div className="flex-1">
                        <span className="text-white text-sm block">{doc}</span>
                        <span className="text-[var(--accent-gold)] text-xs">Coming Soon</span>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-white/50 text-xs text-center mt-6">
                  Contact us for product-specific documentation and lot traceability reports.
                </p>
              </div>

              {/* Lot Traceability */}
              <div className="mt-16 bg-[var(--light-gray)] rounded-2xl p-8 md:p-12">
                <h3 className="text-[var(--primary-dark)] text-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Lot Traceability Checker
                </h3>
                <p className="text-[var(--dark-gray)]/70 mb-6">
                  Enter your lot number to view complete origin and processing documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mb-6">
                  <input
                    type="text"
                    placeholder="Enter lot number (e.g., CMR-YC-2024-0847)"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent-gold)]"
                  />
                  <button className="px-6 py-3 bg-[var(--accent-gold)] text-[var(--primary-dark)] font-semibold rounded-lg hover:bg-[var(--secondary-gold)] transition-colors">
                    Look Up
                  </button>
                </div>
                <p className="text-[var(--dark-gray)]/60 text-sm mb-4">
                  Need help with lot traceability or have questions about our documentation?
                </p>
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    className="px-6 py-3 bg-[var(--primary-dark)] text-white font-semibold rounded-lg hover:bg-[var(--accent-gold)] hover:text-[var(--primary-dark)] transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'processing' && (
          <motion.section
            key="processing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="section-spacing bg-white"
          >
            <div className="container-custom">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                  Processing Methods
                </span>
                <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  From Harvest to Your Door
                </h2>
                <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
                  Traditional methods meet modern food safety in our 30-day processing journey.
                </p>
              </div>

              {/* Modern Processing Timeline */}
              <div className="relative bg-gradient-to-br from-[var(--light-gray)] to-white rounded-3xl p-8 md:p-12 shadow-lg">
                {/* Progress Bar */}
                <div className="hidden lg:flex items-center justify-between mb-16 relative">
                  <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0" />
                  <motion.div 
                    className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--secondary-gold)] z-0"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeStep - 1) / (processingSteps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                  
                  {processingSteps.map((step) => (
                    <motion.button
                      key={step.step}
                      onClick={() => setActiveStep(step.step)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative z-10 flex flex-col items-center transition-all ${
                        activeStep === step.step ? 'transform scale-110' : ''
                      }`}
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all ${
                          step.step <= activeStep 
                            ? 'bg-gradient-to-br from-[var(--accent-gold)] to-[var(--secondary-gold)] text-white shadow-[var(--accent-gold)]/30' 
                            : 'bg-white text-[var(--dark-gray)]/40 border-2 border-gray-200'
                        }`}
                        animate={activeStep === step.step ? { 
                          boxShadow: ['0 0 0 0 rgba(226, 179, 52, 0.4)', '0 0 0 15px rgba(226, 179, 52, 0)'],
                        } : {}}
                        transition={{ duration: 1.5, repeat: activeStep === step.step ? Infinity : 0 }}
                      >
                        {step.step}
                      </motion.div>
                      <span className={`mt-3 text-xs font-medium text-center max-w-[80px] transition-colors ${
                        activeStep === step.step ? 'text-[var(--primary-dark)]' : 'text-[var(--dark-gray)]/50'
                      }`}>
                        {step.title}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Step Selector */}
                <div className="lg:hidden mb-8">
                  <div className="flex gap-2 overflow-x-auto pb-4">
                    {processingSteps.map((step) => (
                      <button
                        key={step.step}
                        onClick={() => setActiveStep(step.step)}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeStep === step.step
                            ? 'bg-[var(--accent-gold)] text-white'
                            : 'bg-white border border-gray-200 text-[var(--dark-gray)]/60'
                        }`}
                      >
                        {step.step}. {step.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Step Detail */}
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-gold)] to-[var(--secondary-gold)] text-white font-bold text-lg">
                          {processingSteps[activeStep - 1].step}
                        </span>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-gold)]/10 rounded-full">
                          <svg className="w-4 h-4 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[var(--accent-gold)] text-sm font-medium">
                            {processingSteps[activeStep - 1].duration}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-[var(--primary-dark)] text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        {processingSteps[activeStep - 1].title}
                      </h3>
                      
                      <p className="text-[var(--dark-gray)]/80 leading-relaxed text-lg mb-6">
                        {processingSteps[activeStep - 1].description}
                      </p>

                      {/* Step Navigation */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                          disabled={activeStep === 1}
                          className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[var(--dark-gray)] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          ← Previous
                        </button>
                        <button
                          onClick={() => setActiveStep(Math.min(processingSteps.length, activeStep + 1))}
                          disabled={activeStep === processingSteps.length}
                          className="px-4 py-2 rounded-lg bg-[var(--accent-gold)] text-white text-sm font-medium hover:bg-[var(--secondary-gold)] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--accent-gold)]/20 via-[var(--accent-gold)]/10 to-transparent overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <div className="text-8xl opacity-10">
                            {activeStep === 1 ? '🌱' : activeStep === 2 ? '☀️' : activeStep === 3 ? '🔍' : activeStep === 4 ? '🔬' : activeStep === 5 ? '⚙️' : '📦'}
                          </div>
                        </motion.div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent rounded-full blur-2xl" />
                      <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-[var(--primary-dark)]/10 to-transparent rounded-full blur-2xl" />
                    </div>
                  </div>
                </motion.div>

                {/* Processing Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-[var(--accent-gold)] mb-1">30</div>
                    <div className="text-xs text-[var(--dark-gray)]/60 uppercase tracking-wider">Days Total</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-[var(--accent-gold)] mb-1">6</div>
                    <div className="text-xs text-[var(--dark-gray)]/60 uppercase tracking-wider">Quality Checks</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-[var(--accent-gold)] mb-1">100%</div>
                    <div className="text-xs text-[var(--dark-gray)]/60 uppercase tracking-wider">Traceable</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-spacing bg-[var(--primary-dark)]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Questions About Our Sourcing?
            </h2>
            <p className="text-white/70 mb-8">
              Our team is happy to discuss our sourcing practices, certifications, and 
              traceability systems in detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-primary">
                  Contact Our Team
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary">
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
