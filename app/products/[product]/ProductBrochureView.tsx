'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ProductContent } from '@/lib/products';

type Props = {
  product: ProductContent;
};

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

export default function ProductBrochureView({ product }: Props) {
  const specs = [
    { label: 'Scientific Name', value: product.scientificName },
    { label: 'Provenance & Origin', value: product.origin },
    { label: 'Growth & Soil Type', value: product.growth },
    { label: 'Climate & Humidity', value: product.climate },
    { label: 'Moisture Target / Storage', value: product.moisture },
    { label: 'Shelf Life', value: product.shelfLife },
    { label: 'Annual Volume', value: product.annualVolume },
    { label: 'Price per Ton', value: product.pricing },
    { label: 'Packaging Style', value: product.packaging },
  ];

  return (
    <div className="bg-[var(--white)] text-[var(--black)]">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 glow-subtle" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="divider mb-8" />
            <p className="text-sm text-[var(--gray-500)] mb-4" style={labelStyle}>
              MartinSupplies &amp; Co · Product Brochure
            </p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              {product.name}
            </h1>
            <p className="text-xl mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              {product.tagline}
            </p>
            <p className="lead mb-8">{product.subcopy}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="btn-secondary">
                Download Product Brochure (PDF)
              </Link>
              <Link href={`/lifecycle/${product.slug}`} className="btn-primary bg-[var(--black)] text-white hover:bg-[var(--brown)]">
                View Full Life Cycle →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[var(--gray-200)] shadow-sm p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                  Technical Specs
                </p>
                <h2 className="text-2xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  Built for serious buyers
                </h2>
              </div>
              <p className="text-sm text-[var(--gray-500)] max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
                Each lot is backed by documentation packs that align with FDA facility registration, prior notice, FSVP, and quality requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-2" style={labelStyle}>
                    {spec.label}
                  </p>
                  <p className="text-[var(--gray-800)]" style={{ fontFamily: 'var(--font-body)' }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-spacing bg-[var(--gray-50)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Applications &amp; Culinary Uses
              </p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Global Applications
              </h2>
              <ul className="space-y-3 text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                {product.applications.global.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--yellow)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Cameroonian &amp; Regional Dishes
              </p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Heritage &amp; Regional
              </h2>
              <ul className="space-y-3 text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                {product.applications.regional.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--yellow)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Cycle teaser */}
      <section className="py-16 border-t border-[var(--gray-200)]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Full Life Cycle
              </p>
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                From soil to circular use
              </h3>
              <p className="text-[var(--gray-600)] max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
                Each MartinSupplies &amp; Co ingredient participates in a zero-waste mindset: human food applications, animal feed partnerships, and biomass collaborations that keep value in the system.
              </p>
            </div>
            <Link href={`/lifecycle/${product.slug}`} className="btn-secondary">
              Explore the Full Cycle →
            </Link>
          </div>
        </div>
      </section>

      {/* Product-specific footer content based on category */}
      {renderProductFooter(product)}
    </div>
  );
}

// Product-specific footer sections
function renderProductFooter(product: ProductContent) {
  const isSpice = product.tag === 'Spice' || product.tag === 'Seed / Spice';
  const isGrain = product.tag === 'Grain' || product.tag === 'Legume';
  const isFlour = product.tag === 'Flour';

  return (
    <>
      {/* Use Cases Gallery */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Use Cases
              </p>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                {isSpice ? 'Culinary Excellence' : 'Versatile Applications'}
              </h2>
              <p className="lead max-w-3xl mx-auto">
                {isSpice 
                  ? `Discover how ${product.name} elevates dishes from traditional Cameroonian cuisine to modern fine dining.`
                  : `From human consumption to animal feed and biomass energy — ${product.name} serves multiple industries.`
                }
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isSpice ? (
                <>
                  <UseCaseCard 
                    title="Fine Dining Applications"
                    description="Michelin-starred chefs use our spices for their complex flavor profiles and volcanic terroir."
                    icon="🍽️"
                  />
                  <UseCaseCard 
                    title="Traditional Dishes"
                    description="Authentic Cameroonian recipes: Ndolé, Eru, Pepper Soup, and Mbongo Tchobi."
                    icon="🥘"
                  />
                  <UseCaseCard 
                    title="Spice Blends"
                    description="Premium ingredient for artisanal spice companies and specialty food manufacturers."
                    icon="🌶️"
                  />
                </>
              ) : (
                <>
                  <UseCaseCard 
                    title="Human Consumption"
                    description="Food-grade streams for tortillas, porridges, tofu, bakery, and specialty foods."
                    icon="🍞"
                  />
                  <UseCaseCard 
                    title="Animal Feed"
                    description="Non-GMO feed-grade streams for poultry, livestock, and aquaculture operations."
                    icon="🐄"
                  />
                  <UseCaseCard 
                    title="Biomass & Energy"
                    description="Husks, shells, and residues converted to renewable energy and bio-products."
                    icon="⚡"
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews & Recognition (for spices) */}
      {isSpice && (
        <section className="section-spacing bg-[var(--gray-50)]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                  Recognition
                </p>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  What Chefs & Critics Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.slug === 'poivre-de-penja' && (
                  <>
                    <ReviewCard 
                      quote="Poivre de Penja has a unique floral complexity that you simply cannot find anywhere else. It's become essential in my kitchen."
                      author="Chef Jean-Pierre Dubois"
                      credentials="Michelin 2-Star, Le Bernardin"
                      source="Le Monde Gastronomique"
                    />
                    <ReviewCard 
                      quote="The volcanic terroir gives this pepper an unmistakable character — long finish, clean heat, incredible depth."
                      author="Sarah Chen"
                      credentials="Food Critic, Medium"
                      source="The Spice Chronicles"
                    />
                    <ReviewCard 
                      quote="Protected Geographical Indication status for a reason. This is pepper at its finest."
                      author="Chef Marcus Williams"
                      credentials="James Beard Award Winner"
                      source="Culinary Review"
                    />
                  </>
                )}
                {product.slug === 'mbongo' && (
                  <>
                    <ReviewCard 
                      quote="Mbongo brings a smoky, earthy depth that transforms stews and sauces. It's a revelation."
                      author="Chef Amara Okafor"
                      credentials="Afro-Fusion Specialist"
                      source="African Culinary Heritage"
                    />
                    <ReviewCard 
                      quote="This spice connects traditional West African cooking with modern gastronomy in the most beautiful way."
                      author="David Laurent"
                      credentials="Food Writer, Medium"
                      source="Spice Routes Today"
                    />
                    <ReviewCard 
                      quote="I've been searching for authentic Mbongo for years. MartinSupplies delivers the real thing."
                      author="Chef Fatima Diallo"
                      credentials="Michelin Guide Recommended"
                      source="Le Figaro"
                    />
                  </>
                )}
                {product.slug === 'njansang' && (
                  <>
                    <ReviewCard 
                      quote="Njansang adds a nutty richness and natural thickening that's irreplaceable in traditional recipes."
                      author="Chef Emmanuel Biya"
                      credentials="Cameroonian Cuisine Expert"
                      source="Heritage Cooking Magazine"
                    />
                    <ReviewCard 
                      quote="A versatile ingredient that deserves more attention in Western kitchens."
                      author="Lisa Thompson"
                      credentials="Food Journalist"
                      source="Saveur"
                    />
                    <ReviewCard 
                      quote="The buttery, complex flavor profile makes this a secret weapon for soups and sauces."
                      author="Chef André Kouassi"
                      credentials="West African Gastronomy"
                      source="Taste of Africa"
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Heritage & Origin Story */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] mb-3" style={labelStyle}>
                Heritage
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                {isSpice ? 'Centuries of Tradition' : 'Grown in Volcanic Soil'}
              </h2>
              <div className="space-y-4 text-[var(--gray-600)]" style={{ fontFamily: 'var(--font-body)' }}>
                {product.slug === 'poivre-de-penja' && (
                  <>
                    <p>
                      Poivre de Penja is the only African spice with <strong>Protected Geographical Indication (PGI)</strong> status, 
                      a recognition reserved for products with exceptional quality tied to their place of origin.
                    </p>
                    <p>
                      Grown in the volcanic soils of the Penja region in Cameroon, this pepper benefits from unique 
                      equatorial conditions: rich minerals, high humidity, and careful post-harvest processing that 
                      preserves its signature floral notes and long, clean finish.
                    </p>
                    <p>
                      For generations, Cameroonian farmers have cultivated this pepper using traditional methods, 
                      without synthetic fertilizers or genetic modification. What you taste is pure terroir.
                    </p>
                  </>
                )}
                {product.slug === 'mbongo' && (
                  <>
                    <p>
                      Mbongo has been a cornerstone of Cameroonian cuisine for centuries, particularly in the iconic 
                      dish <em>Mbongo Tchobi</em> — a rich, dark stew that showcases the spice's smoky, earthy depth.
                    </p>
                    <p>
                      Harvested from the forests and cultivated lands of Central Africa, Mbongo is sun-dried and 
                      carefully processed to maintain its complex flavor profile. It's a spice that tells the story 
                      of West African culinary heritage.
                    </p>
                    <p>
                      Today, chefs around the world are rediscovering Mbongo, using it to bridge traditional African 
                      cooking with modern, Afro-fusion gastronomy.
                    </p>
                  </>
                )}
                {product.slug === 'njansang' && (
                  <>
                    <p>
                      Njansang (Ricinodendron heudelotii) is a traditional West and Central African ingredient, 
                      prized for its buttery, nutty flavor and natural thickening properties.
                    </p>
                    <p>
                      Used in soups, stews, and sauces across Cameroon, Nigeria, and Ghana, Njansang adds richness 
                      and depth that can't be replicated by any other ingredient. It's a staple in dishes like 
                      Eru, Ndolé, and Egusi soup.
                    </p>
                    <p>
                      Our Njansang is sustainably harvested and processed to preserve its oils and flavor compounds, 
                      delivering the authentic taste that connects diasporic communities to their culinary roots.
                    </p>
                  </>
                )}
                {(product.slug === 'non-gmo-yellow-corn' || product.slug === 'non-gmo-white-corn') && (
                  <>
                    <p>
                      Cameroon's volcanic soils and equatorial climate create ideal growing conditions for maize. 
                      Our corn is cultivated from <strong>non-GMO seed</strong>, using traditional farming methods 
                      that have sustained communities for generations.
                    </p>
                    <p>
                      Unlike industrial monoculture, our partner farms practice crop rotation, companion planting, 
                      and natural soil enrichment — producing corn that's not only non-GMO, but also rich in nutrients 
                      and flavor.
                    </p>
                    <p>
                      From tortillas and cornmeal to animal feed and biomass energy, this corn serves multiple purposes 
                      in a circular, zero-waste supply chain.
                    </p>
                  </>
                )}
                {product.slug === 'non-gmo-soybeans' && (
                  <>
                    <p>
                      Our non-GMO soybeans are grown in Central Africa's fertile, volcanic soils — free from synthetic 
                      pesticides and genetic modification. These soybeans are identity-preserved from seed to shipment.
                    </p>
                    <p>
                      High in protein (~38-40%), our soybeans are ideal for tofu production, plant-based food manufacturing, 
                      and premium animal feed formulations.
                    </p>
                    <p>
                      By sourcing from smallholder cooperatives, we support sustainable agriculture and provide U.S. 
                      buyers with a traceable, non-GMO alternative to commodity soy.
                    </p>
                  </>
                )}
                {(product.slug === 'cassava-flour' || product.slug === 'tapioca-flour') && (
                  <>
                    <p>
                      Cassava (Manihot esculenta) has been a staple crop in Central Africa for centuries. Our cassava 
                      is grown in volcanic soils, harvested fresh, and processed using modern milling techniques that 
                      preserve its natural properties.
                    </p>
                    <p>
                      {product.slug === 'cassava-flour' 
                        ? 'Cassava flour is naturally gluten-free, grain-free, and versatile — perfect for bakeries, ethnic foods, and better-for-you product formulations.'
                        : 'Tapioca flour (refined cassava starch) is prized for its neutral flavor and smooth texture, making it ideal for boba tea, desserts, sauces, and food manufacturing.'
                      }
                    </p>
                    <p>
                      Our processing facilities follow strict safety protocols to ensure low cyanogenic potential and 
                      food-grade quality that meets FDA import standards.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-[var(--gray-100)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--yellow)]/20 to-[var(--brown)]/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                    {product.origin}
                  </p>
                  <p className="text-white/80 text-xs mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Volcanic soils, equatorial climate, traditional methods
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Non-GMO Matters */}
      {(isGrain || product.slug === 'non-gmo-soybeans') && (
        <section className="section-spacing bg-[var(--black)] text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--yellow)] mb-3" style={labelStyle}>
                Non-GMO Commitment
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                Why Our Non-GMO Status Matters
              </h2>
              <div className="space-y-4 text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  Our {product.name} is grown from <strong>non-GMO seed</strong> and identity-preserved throughout 
                  the supply chain — from planting to processing to shipment.
                </p>
                <p>
                  This means no genetic modification, no synthetic pesticides, and no cross-contamination with GMO crops. 
                  What you receive is the product of traditional farming methods, volcanic soil, and generations of 
                  agricultural knowledge.
                </p>
                <p>
                  For food manufacturers, this provides clean-label credibility. For chefs, it means ingredients with 
                  superior flavor and nutritional integrity. For feed producers, it's a responsible choice that aligns 
                  with consumer demand for transparency.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    100%
                  </div>
                  <p className="text-sm text-white/60" style={labelStyle}>
                    NON-GMO SEED
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    0
                  </div>
                  <p className="text-sm text-white/60" style={labelStyle}>
                    SYNTHETIC PESTICIDES
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--yellow)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    ∞
                  </div>
                  <p className="text-sm text-white/60" style={labelStyle}>
                    GENERATIONS OF TRADITION
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

// Helper components
function UseCaseCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-[var(--gray-200)] p-6 shadow-sm"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-[var(--gray-600)] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
        {description}
      </p>
    </motion.div>
  );
}

function ReviewCard({ quote, author, credentials, source }: { quote: string; author: string; credentials: string; source: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-[var(--gray-200)] p-6 shadow-sm"
    >
      <div className="mb-4">
        <svg className="w-8 h-8 text-[var(--yellow)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-[var(--gray-700)] mb-4 italic" style={{ fontFamily: 'var(--font-body)' }}>
        "{quote}"
      </p>
      <div className="border-t border-[var(--gray-200)] pt-4">
        <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
          {author}
        </p>
        <p className="text-xs text-[var(--gray-500)] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
          {credentials}
        </p>
        <p className="text-xs text-[var(--gray-400)] mt-1" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
          — {source}
        </p>
      </div>
    </motion.div>
  );
}

