'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { CountUpNumber } from '../components/hooks/useCountUp';

const timeline = [
  {
    year: '1959',
    title: 'The Beginning',
    description: 'Joseph Martin, a young agronomist, establishes the first organized farming cooperative in the highlands of Cameroon, focusing on heritage corn varieties.',
    image: '/timeline-1.jpg',
  },
  {
    year: '1972',
    title: 'First Export',
    description: 'The cooperative completes its first international export, shipping premium white corn to European specialty markets.',
    image: '/timeline-2.jpg',
  },
  {
    year: '1987',
    title: 'US Operations',
    description: 'Samuel Martin, Joseph\'s son, establishes MartinSupplies & Co in Houston, creating a direct trade route to the American market.',
    image: '/timeline-3.jpg',
  },
  {
    year: '1995',
    title: 'FDA Registration',
    description: 'MartinSupplies becomes one of the first African ingredient importers to achieve full FDA registration, setting new industry standards.',
    image: '/timeline-4.jpg',
  },
  {
    year: '2003',
    title: 'West Coast Expansion',
    description: 'Opening of Los Angeles distribution center, expanding reach to restaurants and food manufacturers across California and the Pacific Northwest.',
    image: '/timeline-5.jpg',
  },
  {
    year: '2010',
    title: 'Spice Collection Launch',
    description: 'Introduction of our signature exotic spice collection, featuring rare Penja pepper varieties that gain following among Michelin-starred chefs.',
    image: '/timeline-6.jpg',
  },
  {
    year: '2018',
    title: 'Sustainability Certified',
    description: 'Achievement of comprehensive sustainability certifications, formalizing our commitment to ethical sourcing and environmental stewardship.',
    image: '/timeline-7.jpg',
  },
  {
    year: '2024',
    title: 'Third Generation',
    description: 'Michael Martin takes the helm as CEO, combining 65 years of heritage with modern innovation to serve the evolving needs of global food professionals.',
    image: '/timeline-8.jpg',
  },
];

const values = [
  {
    title: 'Heritage',
    description: 'We honor traditional farming methods passed down through generations, preserving authentic flavors and nutritional integrity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'Every product undergoes rigorous testing to ensure it meets the highest standards of purity, flavor, and nutritional value.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with farmers and clients alike, ensuring mutual prosperity and shared success.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description: 'We are committed to practices that protect the environment and support the communities where our ingredients are grown.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const impactStats = [
  { value: 65, suffix: '+', label: 'Years of Heritage' },
  { value: 5000, suffix: '+', label: 'Farming Families' },
  { value: 12, suffix: '', label: 'Countries Served' },
  { value: 3, suffix: '', label: 'Generations' },
];

export default function OurStoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 bg-[var(--primary-dark)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[#0d1f3c] to-[#071020]" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
        
        <motion.div style={{ opacity: heroOpacity }} className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
              Our Story
            </span>
            <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              65 Years of Heritage, Three Generations of Excellence
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From the volcanic highlands of Cameroon to kitchens across North America, 
              our family's journey is one of passion, perseverance, and an unwavering 
              commitment to bringing the world's finest ingredients to your table.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent-gold)] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <CountUpNumber end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <span className="text-[var(--dark-gray)]/70 text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Journey */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5 relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                />
                {/* Decorative frame */}
                <div className="absolute inset-4 border-2 border-[var(--accent-gold)]/30 rounded-xl pointer-events-none" />
              </div>
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-[var(--primary-dark)] text-white p-6 rounded-xl max-w-xs shadow-2xl"
              >
                <p className="italic text-sm leading-relaxed mb-3">
                  "The best ingredients come from those who treat the land as family."
                </p>
                <p className="text-[var(--accent-gold)] text-xs font-medium">
                  — Joseph Martin, Founder (1959)
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Founder's Journey
              </span>
              <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Where It All Began
              </h2>
              <div className="space-y-4 text-[var(--dark-gray)]/70 leading-relaxed">
                <p>
                  In 1959, Joseph Martin stood in the volcanic highlands of western Cameroon with a vision 
                  that would span generations. As a young agronomist trained in France, he returned home 
                  with both modern knowledge and a deep respect for the traditional farming methods of his ancestors.
                </p>
                <p>
                  He saw what others missed: the unique terroir of this region—volcanic soil, equatorial 
                  humidity, and altitude—created conditions found nowhere else on Earth. The corn grown 
                  here had a sweetness and starch content that European varieties couldn't match.
                </p>
                <p>
                  Joseph's first cooperative brought together 12 farming families. By 1972, they had 
                  completed their first international export. Today, that same cooperative supports 
                  over 5,000 families across Central Africa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin of Products */}
      <section className="section-spacing bg-[var(--light-gray)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-6 tracking-wider uppercase">
                Origins of Excellence
              </span>
              <h2 className="text-[var(--primary-dark)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                The Land That Shapes Our Products
              </h2>
              <div className="space-y-4 text-[var(--dark-gray)]/70 leading-relaxed">
                <p>
                  The volcanic soils of Cameroon's western highlands contain mineral compositions 
                  that have taken millions of years to form. When combined with the region's unique 
                  climate—consistent rainfall and equatorial sunlight—they create growing conditions 
                  that produce ingredients with unmatched flavor profiles.
                </p>
                <p>
                  Our Penja pepper, for example, grows only in a 20-kilometer radius around the 
                  town of Penja. The volcanic soil here gives it a distinctive complexity that 
                  has made it the only African spice with a Protected Geographical Indication (PGI).
                </p>
                <p>
                  We've spent 65 years learning from this land and its people. Every product we 
                  offer carries this heritage—a connection to place that no laboratory can replicate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--primary-dark)]/10 to-[var(--primary-dark)]/5 relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-[var(--primary-dark)]" style={{ fontFamily: 'var(--font-playfair)' }}>
              65 Years of Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold)]/50 to-[var(--accent-gold)] md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--accent-gold)] rounded-full -translate-x-1/2 z-10 ring-4 ring-white shadow-lg"
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                    className="bg-[var(--light-gray)] p-6 rounded-xl relative"
                  >
                    <span className="text-[var(--accent-gold)] font-bold text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {item.year}
                    </span>
                    <h3 className="text-[var(--primary-dark)] text-xl mt-2 mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {item.title}
                    </h3>
                    <p className="text-[var(--dark-gray)]/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-[var(--primary-dark)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] text-sm font-medium rounded-full mb-4 tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What We Stand For
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These principles have guided us for 65 years and will guide us for 65 more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--light-gray)] rounded-2xl p-8 md:p-12"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[var(--primary-dark)] text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Our Mission
              </h3>
              <p className="text-[var(--dark-gray)]/70 leading-relaxed">
                To connect the world's finest kitchens with heritage-grown, ethically-sourced ingredients 
                from Central Africa—preserving traditional agriculture, supporting farming communities, 
                and delivering uncompromising quality to food professionals who demand the best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--primary-dark)] rounded-2xl p-8 md:p-12"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To become the world's most trusted source for premium African ingredients—proving that 
                sustainable practices, fair trade, and exceptional quality aren't just compatible, 
                they're inseparable. We envision a future where every kitchen can access ingredients 
                with integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Support */}
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
              Community Impact
            </span>
            <h2 className="text-[var(--primary-dark)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Beyond Business
            </h2>
            <p className="text-[var(--dark-gray)]/70 max-w-2xl mx-auto">
              Our success is measured not just in sales, but in the positive impact we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Education Initiative',
                stat: '12',
                statLabel: 'Schools Built',
                description: 'We have funded construction and operation of schools serving over 3,000 students in farming communities.',
              },
              {
                title: 'Healthcare Access',
                stat: '5',
                statLabel: 'Health Clinics',
                description: 'Rural health clinics provide essential medical care to families who previously had to travel hours for basic treatment.',
              },
              {
                title: 'Agricultural Training',
                stat: '500',
                statLabel: 'Farmers Trained Yearly',
                description: 'Annual training programs teach sustainable farming techniques, improving yields while protecting the environment.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-[var(--accent-gold)] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <CountUpNumber end={parseInt(item.stat)} suffix="+" duration={2} />
                </div>
                <p className="text-[var(--dark-gray)]/50 text-sm mb-4">{item.statLabel}</p>
                <h3 className="text-[var(--primary-dark)] text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-[var(--dark-gray)]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-[var(--primary-dark)] to-[#071020]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/70 mb-8">
              Discover why leading chefs and food manufacturers trust MartinSupplies 
              for their premium ingredient needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Explore Our Products
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
