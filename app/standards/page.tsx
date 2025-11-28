'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    id: 'philosophy',
    title: '1. Our Regulatory Philosophy',
    content: `At MartinSupplies & Co, every bag of corn, soy, cassava flour, and every kilo of Poivre de Penja or Mbongo we ship is treated as both food and responsibility.

We design our import process to align with U.S. Food and Drug Administration (FDA) requirements for human foods imported into the United States — from facility registration and prior notice, to FSMA preventive controls, foreign supplier verification, and truthful labeling.

We don't see compliance as a checkbox. It's the minimum level of respect for our customers and for the people who eat what you serve.`
  },
  {
    id: 'facility',
    title: '2. Food Facility Registration',
    subtitle: 'Foreign & U.S.',
    content: `Most facilities that manufacture, process, pack, receive, or hold food for U.S. consumption must register with FDA under the Food Facility Registration program, renewed every two years.`,
    list: [
      'Register the foreign processing and packing facilities handling: Non-GMO yellow and white corn, Non-GMO soybeans, Cassava and tapioca flour, Whole and ground spices (Poivre de Penja, Mbongo, Njansang)',
      'Maintain accurate, up-to-date registration data',
      'Ensure all U.S. agents and partners have the information they need to reference these registrations during entry'
    ],
    note: 'We never disclose registration numbers publicly; that information is confidential under FDA rules and shared only with relevant regulatory and importing partners.'
  },
  {
    id: 'prior-notice',
    title: '3. Prior Notice for Imported Food Shipments',
    content: `FDA must receive prior notice before food is offered for import into the U.S., via Customs (ACE/ABI) or FDA's Prior Notice System Interface (PNSI).`,
    list: [
      'Submit prior notice for each shipment of grains, flours, and spices before arrival at the first U.S. port',
      'Include accurate details on: Product identity and description, Manufacturer and shipper, Country of origin, Anticipated port of entry, U.S. consignee / importer',
      'Coordinate with customs brokers to ensure confirmation numbers accompany shipments, so product is not delayed or refused for procedural errors'
    ]
  },
  {
    id: 'fsma',
    title: '4. FSMA & Preventive Controls',
    content: `The FDA Food Safety Modernization Act (FSMA) shifts focus from responding to contamination to preventing it. Imported foods must meet the same safety standards as domestic foods, including hazard analysis and preventive controls where applicable.`,
    list: [
      'Conduct hazard analyses for each product category: Grains and legumes (biological risks like mycotoxins, physical risks like stones/foreign matter), Cassava/tapioca flour (cyanogenic potential, drying conditions), Spices (contamination risks including pathogens and residues)',
      'Work with processors that implement Good Manufacturing Practices (GMPs), Sanitation Standard Operating Procedures (SSOPs), documented cleaning, pest control, and foreign-material controls',
      'Maintain documentation ready for partners who need to support their own FSMA and internal QA requirements'
    ]
  },
  {
    id: 'fsvp',
    title: '5. Foreign Supplier Verification Program (FSVP) Support',
    content: `Under FSMA's Foreign Supplier Verification Program (FSVP), U.S. importers are responsible for verifying that foreign suppliers use adequate preventive controls.`,
    list: [
      'Provide U.S. importers and their FSVP agents with: Facility registration details (where appropriate), Process descriptions and flow diagrams, Hazard analyses and control summaries, Testing and certificate-of-analysis (COA) results when available',
      'Collaborate with buyer QA teams to fit into their FSVP programs rather than forcing a one-size-fits-all template'
    ],
    note: 'We position ourselves as a transparent ingredient partner, not a black box.'
  },
  {
    id: 'labeling',
    title: '6. Food Labeling & Documentation',
    content: `FDA expects imported foods to be pure, wholesome, safe, produced under sanitary conditions, and contain informative, truthful labeling in English.

For bulk/B2B ingredients, our labeling and documentation focus on:`,
    list: [
      'Accurate product identity: Non-GMO Yellow Corn (whole grain / milled), Non-GMO Soybeans (feed-grade / food-grade as specified), Cassava Flour / Tapioca Flour, Poivre de Penja (Penja Pepper), Mbongo, Njansang (botanical names when applicable)',
      'Country of origin and production region',
      'Net weight in both metric and U.S. customary units',
      'Batch/lot codes for traceability',
      'Storage and handling instructions where relevant',
      'Supporting documents: Phytosanitary certificates, Certificates of origin, Certificates of analysis when testing is performed'
    ],
    note: 'We design our documentation to integrate smoothly into your own traceability and labeling systems.'
  },
  {
    id: 'alerts',
    title: '7. Import Alerts & Risk Management',
    content: `FDA maintains import alerts for products and firms subject to detention without physical examination (DWPE), based on safety concerns or repeated violations.`,
    list: [
      'Proactively check FDA import alert database for our product categories (spices, grains, flours) and our shipping partners/processors',
      'Avoid processors or exporters with patterns of regulatory issues',
      'Stay alert to emerging risks, such as recent cases where imported spices were subject to alerts due to contamination concerns'
    ]
  },
  {
    id: 'packaging',
    title: '8. Ingredients, Packaging & Environmental Responsibility',
    content: `FDA regulates substances added to food and food-contact materials.`,
    list: [
      'Use packaging materials intended for food contact and aligned with FDA expectations',
      'Favor packaging formats that balance food safety, shelf-life, and reduced waste with rational freight (full containers, optimized palletization)',
      'Where possible, work with partners to divert organic waste into biomass or other circular uses, connecting our heritage agriculture with modern sustainability practices'
    ]
  },
  {
    id: 'improvement',
    title: '9. Continuous Improvement & Transparency',
    content: `Compliance isn't a one-time project. It's a moving line.`,
    list: [
      'Update our practices as FDA rules evolve, especially around FSMA implementation, labeling changes, and new import screening tools',
      'Work with customs brokers, regulatory consultants, and our customers QA teams to improve processes over time',
      'Share clear, honest documentation about what we do today and what we are building toward'
    ]
  }
];

export default function StandardsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
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
              Standards & Practices
            </h1>
            <p className="lead">
              How MartinSupplies & Co aligns with FDA food import requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-y border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-[var(--gray-500)] hover:text-[var(--black)] transition-colors"
                style={{ fontWeight: 300 }}
              >
                {section.title.split('.')[0]}.{' '}
                <span className="text-[var(--black)]">{section.title.split('.')[1]?.trim()}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="mb-16 pb-16 border-b border-[var(--gray-200)] last:border-0"
              >
                <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-[var(--gray-500)] text-sm mb-6" style={{ fontWeight: 300 }}>
                    {section.subtitle}
                  </p>
                )}
                
                <div className="prose max-w-none">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-[var(--gray-600)] mb-4" style={{ fontWeight: 300 }}>
                      {paragraph}
                    </p>
                  ))}
                  
                  {section.list && (
                    <div className="mt-6 space-y-4">
                      <p className="text-sm uppercase tracking-widest text-[var(--gray-400)]" style={{ fontWeight: 300 }}>
                        Our approach:
                      </p>
                      <ul className="space-y-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[var(--yellow)] mt-1 flex-shrink-0">→</span>
                            <span className="text-[var(--gray-600)]" style={{ fontWeight: 300 }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.note && (
                    <div className="mt-6 p-4 bg-[var(--gray-50)] border-l-2 border-[var(--yellow)]">
                      <p className="text-sm text-[var(--gray-600)] italic" style={{ fontWeight: 300 }}>
                        {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Request CTA */}
      <section className="py-20 bg-[var(--black)] text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="divider mx-auto mb-8" />
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Request our Compliance Dossier
              </h2>
              <p className="text-white/60 mb-8" style={{ fontWeight: 300 }}>
                If you are an import manager, QA lead, or regulatory contact, you can request our 
                current documentation pack — includes facility info, process summaries, sample labels, 
                and example documentation for a typical shipment.
              </p>
              <Link href="/contact?subject=compliance" className="btn-yellow">
                Request Compliance Dossier
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/sourcing" className="link-arrow">
              View Certifications
            </Link>
            <Link href="/products" className="link-arrow">
              Product Catalog
            </Link>
            <Link href="/wholesale" className="link-arrow">
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

