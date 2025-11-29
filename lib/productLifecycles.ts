import type { ProductSlug } from './products';

export type LifecyclePhase = {
  phase: string;
  title: string;
  description: string;
  details: string[];
};

export type ByProduct = {
  material: string;
  uses: string[];
};

export type WasteDisposal = {
  form: string;
  timeline: string;
  method: string;
};

export type ProductLifecycle = {
  slug: ProductSlug;
  name: string;
  phases: LifecyclePhase[];
  usApplications: string[];
  byProducts: ByProduct[];
  wasteDisposal: WasteDisposal;
  animalFeed: boolean;
  biomass: boolean;
};

export const productLifecycles: Record<string, ProductLifecycle> = {
  'non-gmo-yellow-corn': {
    slug: 'non-gmo-yellow-corn',
    name: 'Non-GMO Yellow Corn',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Grown in volcanic soil of Cameroon',
        details: [
          'Zero synthetic fertilizers used',
          'Family-controlled micro-plots ensure quality',
          'Dry-season harvesting ensures high starch content (70-75%)',
          'Western Highlands & Centre regions - optimal altitude 1,200-1,800m',
          'Temperature: 20-28°C during growing season',
          'Humidity: 65-75% - well-drained volcanic soil prevents waterlogging',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Sorting & Processing',
        description: 'Quality control and moisture management',
        details: [
          'Machine + hand sorting removes debris and damaged kernels',
          'Moisture reduced to <13% for export compliance (FDA/USDA standards)',
          'Cleaned and bagged in biodegradable grain sacks',
          'Quality testing: aflatoxin screening, foreign matter analysis',
          'Batch traceability codes assigned at this stage',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'US Applications',
        description: 'Food, feed, and industrial use',
        details: [
          'Tortilla & corn flour production - natural carotenoid color',
          'Gluten-free food manufacturing - bakeries, snack producers',
          'Ethanol / fermentation upstream - renewable fuel',
          'Cattle, poultry, and fish feed - high-energy grain',
          'Snack foods - corn grits, extruded corn snacks, popcorn',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'By-Products & Waste Streams',
        description: 'Zero-waste valorization',
        details: [
          'Corn husk → animal bedding (absorbent, biodegradable), compost feedstock, mushroom substrate (oyster & shiitake cultivation)',
          'Corn cobs → biochar production (carbon sequestration), solid biomass fuel (heating pellets), pelletized feed binder (livestock)',
          'Corn bran → fiber additive for human food, pet food fortification (digestive health), aquaculture feed supplement',
          'Corn germ meal → animal protein supplement, biodiesel feedstock',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End-of-Life / Disposal',
        description: 'Full biodegradability and circular economy',
        details: [
          '100% biodegradable in 60–90 days under composting conditions',
          'High-value biomass for renewable energy partners - pellet manufacturers',
          'Soil amendment producers - compost & biochar suppliers',
          'Regenerative agriculture programs - return nutrients to soil',
          'Zero landfill waste when properly managed',
        ],
      },
    ],
    usApplications: [
      'Tortilla & corn flour production',
      'Gluten-free food manufacturing',
      'Ethanol / fermentation',
      'Cattle, poultry, and fish feed',
      'Corn grits & extruded snacks',
    ],
    byProducts: [
      {
        material: 'Corn husk',
        uses: ['Animal bedding', 'Compost material', 'Mushroom substrate'],
      },
      {
        material: 'Corn cobs',
        uses: ['Biochar', 'Biomass fuel', 'Feed binder'],
      },
      {
        material: 'Corn bran',
        uses: ['Fiber additive', 'Pet food fortification', 'Aquaculture feed'],
      },
    ],
    wasteDisposal: {
      form: 'All organic matter - husks, cobs, stalks, bran',
      timeline: '60-90 days for complete biodegradation',
      method: 'Industrial composting, biochar production, or biomass pelletization',
    },
    animalFeed: true,
    biomass: true,
  },

  'non-gmo-white-corn': {
    slug: 'non-gmo-white-corn',
    name: 'Non-GMO White Corn',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Premium white varieties from highland regions',
        details: [
          'Adamawa & North West regions - semi-tropical highlands',
          'Grown in rich, well-aerated soil with natural fertility',
          'No GMO contamination - identity preservation from seed',
          'Temperature: 18-26°C - cooler climate produces denser kernels',
          'Humidity: 60-70% - moderate moisture for optimal growth',
          'Traditional farming methods maintained for generations',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Sorting & Processing',
        description: 'Specialized handling for white corn purity',
        details: [
          'Dedicated processing lines prevent cross-contamination',
          'Color sorting ensures snow-white kernels',
          'Moisture reduced to <14% for storage stability',
          'Lower carotenoid profile ideal for baby food & specialty products',
          'Packed in food-grade, moisture-resistant bags',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'US Applications',
        description: 'Premium tortillas, grits, and specialty foods',
        details: [
          'Premium tortillas - preferred by artisanal tortillerias',
          'Grits, hominy, Latin American cuisines - authentic flavor',
          'Baby food formulations - low carotenoid, hypoallergenic',
          'Brewing and distilling input - clean, neutral base',
          'High-end corn flour for gluten-free baking',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'By-Products & Waste Streams',
        description: 'Higher-value processing streams',
        details: [
          'White-corn germ waste → oil extraction (cosmetic-grade corn oil)',
          'White-corn hulls → high-fiber animal feed (dairy cattle)',
          'Starch residues → biodegradable packaging material',
          'Broken kernels → livestock feed blends',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End-of-Life / Disposal',
        description: 'Premium waste streams for bioethanol',
        details: [
          'White corn waste → higher purity bioethanol feedstock',
          'Cleaner fermentation due to lower pigment content',
          'Distillers grains (DDGs) → premium animal feed',
          'Composting yields nutrient-rich soil amendment',
          '100% biodegradable within 60-90 days',
        ],
      },
    ],
    usApplications: [
      'Premium white tortillas',
      'Grits & hominy',
      'Baby food formulations',
      'Brewing & distilling',
      'Specialty gluten-free products',
    ],
    byProducts: [
      {
        material: 'White-corn germ',
        uses: ['Oil extraction', 'Cosmetic applications'],
      },
      {
        material: 'White-corn hulls',
        uses: ['High-fiber animal feed', 'Dairy cattle nutrition'],
      },
      {
        material: 'Starch residues',
        uses: ['Biodegradable packaging', 'Bioethanol'],
      },
    ],
    wasteDisposal: {
      form: 'Low-pigment organic matter',
      timeline: '60-90 days for biodegradation',
      method: 'Bioethanol production, composting, or animal feed integration',
    },
    animalFeed: true,
    biomass: true,
  },

  'non-gmo-soybeans': {
    slug: 'non-gmo-soybeans',
    name: 'Non-GMO Soybeans',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Nitrogen-fixing legume from savannah highlands',
        details: [
          'Northern Cameroon highlands and savannah zones',
          'Grown in fertile volcanic soil - no synthetic nitrogen needed',
          'Natural nitrogen fixation improves soil health',
          'Temperature: 22-30°C optimal for pod development',
          'Humidity: 70-80% during flowering and pod fill',
          'Identity-preserved non-GMO from certified seed',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Sorting & Processing',
        description: 'Food-grade and feed-grade separation',
        details: [
          'Cleaned and sorted to remove foreign matter',
          'Moisture content reduced to <13% to prevent mold',
          'Dehulling available on request for food applications',
          'Protein content typically 38-40%',
          'Non-GMO certification maintained through chain of custody',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'US Applications',
        description: 'Plant-based protein and oil',
        details: [
          'Soy milk, tofu, tempeh producers - authentic Asian foods',
          'Protein isolates for plant-based meat companies - Beyond, Impossible alternatives',
          'Soybean oil for cosmetics and food manufacturing',
          'Animal feed concentrate (soybean meal) - poultry, swine, aquaculture',
          'Biodiesel feedstock - renewable energy',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'By-Products & Waste Streams',
        description: 'High-protein co-products',
        details: [
          'Okara (soy pulp) → high-nutrient feed for ruminants, organic fertilizer with 3-4% N content, aquaculture feed (fish meal replacement)',
          'Soy hulls → biofuel pellet production, fiber additive for processed foods, cattle roughage (18% fiber)',
          'Soybean meal → 44-48% protein animal feed, the gold standard livestock protein',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End-of-Life / Disposal',
        description: 'Fast composting and energy recovery',
        details: [
          'Soybean residues compost within 30–45 days (high nitrogen accelerates decomposition)',
          'Expelled oil → biodiesel partners - B20 blends common',
          'Meal → animal nutrition partners - zero waste in feed supply chain',
          'Hulls can be pelletized for biomass boilers',
          'Organic certification maintained in composting programs',
        ],
      },
    ],
    usApplications: [
      'Tofu & tempeh production',
      'Plant-based meat formulations',
      'Soy milk & beverages',
      'Soybean oil extraction',
      'Animal feed protein source',
    ],
    byProducts: [
      {
        material: 'Okara (soy pulp)',
        uses: ['Animal feed', 'Organic fertilizer', 'Aquaculture'],
      },
      {
        material: 'Soy hulls',
        uses: ['Biofuel pellets', 'Cattle roughage', 'Fiber additive'],
      },
      {
        material: 'Soybean meal',
        uses: ['Premium animal feed', 'Protein supplement'],
      },
    ],
    wasteDisposal: {
      form: 'High-protein organic matter',
      timeline: '30-45 days for composting',
      method: 'Biodiesel conversion, animal feed integration, or fast composting',
    },
    animalFeed: true,
    biomass: true,
  },

  'poivre-de-penja': {
    slug: 'poivre-de-penja',
    name: 'Poivre de Penja (Penja Pepper)',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Origin & Cultivation',
        description: 'PGI-protected pepper from volcanic soil',
        details: [
          'Penja Valley, Littoral Province - only designated PGI region in Africa',
          'Mineral-rich volcanic soil creates unique terroir',
          'Handpicked at precise ripeness for optimal flavor',
          'Temperature: 24-30°C year-round equatorial climate',
          'Humidity: 75-85% high moisture supports peppercorn development',
          'Traditional cultivation without synthetic chemicals',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing & Drying',
        description: 'Sun-dried to preserve aromatic compounds',
        details: [
          'Washed immediately after harvest',
          'Sun-dried on raised platforms for 7-10 days',
          'Moisture content reduced to <12% for preservation',
          'Sorted by size and quality - premium grades separated',
          'Black, white, and green varieties available',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Applications',
        description: 'Fine dining and gourmet markets',
        details: [
          'Michelin-star chefs - signature ingredient in high-end kitchens',
          'Fine dining finishing spice - floral, long finish',
          'Premium butchers / charcuterie - artisanal meat products',
          'Gourmet food shops - specialty retail',
          'Private-label spice brands - premium positioning',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Spice Waste Use',
        description: 'Essential oils and antimicrobial properties',
        details: [
          'Pepper husk powders → essential oil extraction (piperine-rich)',
          'Spice blends → lower-grade pepper incorporated into mixed spices',
          'Natural antimicrobial agents → food preservation research',
          'Aromatic compounds used in perfumery (trace amounts)',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Natural preservative and soil enrichment',
        details: [
          'Spice waste → natural preservative powder (antimicrobial piperine)',
          'Soil amendment → composted pepper waste enriches volcanic soil',
          'Rapid biodegradation (<30 days) due to antimicrobial breakdown',
          'Zero landfill - all waste has secondary use or composts',
        ],
      },
    ],
    usApplications: [
      'Fine dining & Michelin kitchens',
      'Premium charcuterie',
      'Gourmet retail',
      'Specialty spice blends',
      'Artisanal food products',
    ],
    byProducts: [
      {
        material: 'Pepper husks & dust',
        uses: ['Essential oil extraction', 'Natural antimicrobial', 'Spice blends'],
      },
    ],
    wasteDisposal: {
      form: 'Aromatic plant matter with antimicrobial properties',
      timeline: '<30 days for biodegradation',
      method: 'Composting, essential oil extraction, or natural preservative production',
    },
    animalFeed: false,
    biomass: false,
  },

  'mbongo': {
    slug: 'mbongo',
    name: 'Mbongo (African Black Pepper)',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Origin & Harvesting',
        description: 'Traditional Cameroonian spice blend',
        details: [
          'Littoral & Centre regions of Cameroon',
          'Wild-harvested and cultivated varieties',
          'Smoky, earthy profile from traditional preparation',
          'Temperature: 22-28°C tropical lowlands',
          'Humidity: 70-80% rainforest conditions',
          'Hand-picked and sorted by local cooperatives',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing & Preparation',
        description: 'Traditional smoking and grinding',
        details: [
          'Sun-dried followed by traditional smoking process',
          'Roasted to develop deep, complex flavors',
          'Ground to fine powder or paste-ready consistency',
          'Blended with complementary spices for Mbongo Tchobi',
          'Quality testing for flavor profile and moisture',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Applications',
        description: 'Afro-fusion and traditional cuisine',
        details: [
          'African and Caribbean restaurants - authentic Mbongo Tchobi stew',
          'High-end gourmet soups & sauces - depth and complexity',
          'Premium spice blends - Afro-fusion seasoning mixes',
          'Culinary schools - African gastronomy programs',
          'Specialty food manufacturers - unique product differentiation',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Medicinal and agricultural applications',
        details: [
          'Crushed outer shell → tea infusions (traditional medicine)',
          'Natural pesticide extract → organic farming applications',
          'Herbal medicinal use → traditional Cameroonian remedies',
          'Aromatic oils → perfumery and cosmetics (trace amounts)',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Ultra-fast biodegradation',
        details: [
          'Mbongo waste → extremely fast biodegradation (<20 days)',
          'High organic matter content accelerates composting',
          'Antimicrobial properties break down quickly',
          'Enriches soil with trace minerals',
          'Zero waste - all residues compost or have secondary use',
        ],
      },
    ],
    usApplications: [
      'Traditional Mbongo Tchobi',
      'Afro-fusion restaurants',
      'Gourmet sauces & soups',
      'Premium spice blends',
      'Culinary innovation',
    ],
    byProducts: [
      {
        material: 'Spice shells & residues',
        uses: ['Tea infusions', 'Natural pesticide', 'Herbal medicine'],
      },
    ],
    wasteDisposal: {
      form: 'Aromatic spice residues',
      timeline: '<20 days for complete biodegradation',
      method: 'Fast composting, medicinal extraction, or natural pesticide production',
    },
    animalFeed: false,
    biomass: false,
  },

  'njansang': {
    slug: 'njansang',
    name: 'Njansang (Ricinodendron heudelotii)',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Origin & Harvesting',
        description: 'Rainforest tree seeds',
        details: [
          'Forest margins and agroforestry plots across Cameroon',
          'Sustainably harvested from mature trees',
          'Buttery, nutty seeds with natural oils',
          'Temperature: 23-29°C tropical rainforest',
          'Humidity: 75-85% high moisture environment',
          'Wild collection and managed cultivation',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing',
        description: 'Shelling and drying',
        details: [
          'Seeds extracted from hard outer shells',
          'Carefully dried to <8% moisture to preserve oils',
          'Whole seeds or ground powder available',
          'Traditional stone milling preserves nutty flavor',
          'Vacuum packing optional for extended shelf life',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Applications',
        description: 'Traditional thickening and flavor',
        details: [
          'Traditional African cuisine - Eru, Ndolé, Egusi soups',
          'Cosmetic emulsifier - African beauty brands',
          'Thickener for sauces and nut pastes',
          'Flavor enhancer in stews and vegetarian dishes',
          'Specialty food products - unique African ingredient',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Shell valorization and residues',
        details: [
          'Hard shells → biochar production (high carbon content)',
          'Organic soil conditioner → potassium-rich amendment',
          'Shell residue → cosmetic base material (exfoliants)',
          'Oil extraction residues → livestock feed supplement',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Nutrient return to soil',
        details: [
          'Shells return to soil with high potassium content',
          'Organic matter enriches agroforestry plantations',
          'Biochar sequesters carbon in soil (100+ years stability)',
          'Supports regenerative forestry practices',
          'Biodegradation of organic components within 45-60 days',
        ],
      },
    ],
    usApplications: [
      'Traditional African soups & stews',
      'Cosmetic emulsifiers',
      'Sauce thickening',
      'Vegetarian protein dishes',
      'Specialty food manufacturing',
    ],
    byProducts: [
      {
        material: 'Njansang shells',
        uses: ['Biochar', 'Soil conditioner', 'Cosmetic exfoliants'],
      },
      {
        material: 'Oil residues',
        uses: ['Livestock feed', 'Cosmetic base material'],
      },
    ],
    wasteDisposal: {
      form: 'Hard shells and oil-rich residues',
      timeline: '45-60 days for organic components; shells → biochar (permanent)',
      method: 'Biochar production, composting, or cosmetic/feed applications',
    },
    animalFeed: false,
    biomass: true,
  },

  'cassava-flour': {
    slug: 'cassava-flour',
    name: 'Cassava Flour',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Drought-resistant root crop',
        details: [
          'Centre & South regions of Cameroon',
          'Grown in rich, well-drained tropical soil',
          'Drought-resistant - thrives in marginal lands',
          'Temperature: 24-30°C optimal for tuber development',
          'Humidity: 70-85% with good drainage',
          'Harvest after 8-12 months of growth',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing',
        description: 'Peeling, washing, and milling',
        details: [
          'Roots harvested and processed within 24-48 hours',
          'Peeled and washed to remove dirt and toxins',
          'Fermentation optional for traditional gari',
          'Dried and stone-milled to fine flour',
          'Moisture content <12% for food-grade quality',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'US Applications',
        description: 'Gluten-free baking and food manufacturing',
        details: [
          'Gluten-free bakeries - bread, cakes, pastries',
          'Pizza dough manufacturers - grain-free crusts',
          'Snack companies - crackers, chips, extruded snacks',
          'Tapioca producers - refined starch products',
          'Ethnic food wholesalers - fufu, African staples',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Peels and processing residues',
        details: [
          'Cassava peels → animal feed (high carbohydrate 20-25%)',
          'Bioethanol fermentation → renewable fuel production',
          'Biodegradable packaging input → starch-based films',
          'Starch residue → cassava pellets for pigs & poultry',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Ultra-fast composting',
        details: [
          'Peels degrade in <14 days - extremely compost-friendly',
          'High moisture and starch content accelerate decomposition',
          'Produces nutrient-rich humus for soil amendment',
          'Bioethanol production captures energy value',
          'Starch films are biodegradable and compostable',
        ],
      },
    ],
    usApplications: [
      'Gluten-free baking',
      'Pizza & flatbread dough',
      'Snack manufacturing',
      'Ethnic food products',
      'Clean-label thickeners',
    ],
    byProducts: [
      {
        material: 'Cassava peels',
        uses: ['Animal feed', 'Bioethanol', 'Biodegradable packaging'],
      },
      {
        material: 'Starch residues',
        uses: ['Animal feed pellets', 'Bioplastics'],
      },
    ],
    wasteDisposal: {
      form: 'High-starch organic matter',
      timeline: '<14 days for peels; starch films compost in 90-180 days',
      method: 'Fast composting, bioethanol fermentation, or animal feed integration',
    },
    animalFeed: true,
    biomass: true,
  },

  'tapioca-flour': {
    slug: 'tapioca-flour',
    name: 'Tapioca Flour (Refined Cassava Starch)',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Same as cassava flour - root crop',
        details: [
          'Cassava processing clusters across Cameroon',
          'Grown near processing facilities to minimize transport',
          'Temperature: 24-30°C tropical lowlands',
          'Humidity: 70-85% with good soil drainage',
          'High-starch varieties selected for tapioca production',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Refining Process',
        description: 'Starch extraction and purification',
        details: [
          'Cassava roots washed and grated into pulp',
          'Starch separated from fiber through water washing',
          'Centrifugation to purify starch',
          'Dried to <13% moisture for food-grade tapioca',
          'Consistent gelatinization profile for food applications',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'US Applications',
        description: 'Beverages, desserts, and food manufacturing',
        details: [
          'Boba tea manufacturers - tapioca pearls',
          'Gluten-free product companies - bakery & pasta',
          'Thickening agent for sauces and soups',
          'Freeze-thaw stable desserts - puddings, pies',
          'Snack coatings and batters - crispy texture',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Fiber and residue valorization',
        details: [
          'Cassava fiber residue → fermentation for ethanol',
          'Bioplastic base material → starch-based packaging',
          'Animal feed supplement → fiber for ruminants',
          'Residual starch → biogas production through anaerobic digestion',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'High biodegradability and circular economy',
        details: [
          'Highly biodegradable - starch breaks down rapidly',
          'Compatible with zero-waste programs',
          'Bioplastic films compost in 90-180 days',
          'Biogas production captures methane for energy',
          'Digestate from biogas used as organic fertilizer',
        ],
      },
    ],
    usApplications: [
      'Boba tea pearls',
      'Gluten-free baking',
      'Sauce thickening',
      'Dessert stabilization',
      'Snack coatings',
    ],
    byProducts: [
      {
        material: 'Cassava fiber residue',
        uses: ['Bioethanol', 'Bioplastics', 'Animal feed'],
      },
      {
        material: 'Residual starch',
        uses: ['Biogas production', 'Compost feedstock'],
      },
    ],
    wasteDisposal: {
      form: 'Pure starch and cellulosic fiber',
      timeline: '90-180 days for bioplastics; fiber composts in <30 days',
      method: 'Bioplastic manufacturing, biogas production, or fast composting',
    },
    animalFeed: true,
    biomass: true,
  },

  'organic-moringa': {
    slug: 'organic-moringa' as ProductSlug,
    name: 'Organic Moringa (Coming Soon)',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Cultivation',
        description: 'Nutrient-dense superfood from tropical regions',
        details: [
          'Grown in Cameroon\'s tropical lowlands and semi-arid zones',
          'Organic certification in progress - no synthetic inputs',
          'Fast-growing tree (Moringa oleifera) - harvest within 6-8 months',
          'Temperature: 25-35°C optimal for leaf production',
          'Humidity: Drought-tolerant, thrives in 60-80% humidity',
          'Multiple harvests per year from mature trees',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing',
        description: 'Leaves dried and powdered at low temperatures',
        details: [
          'Leaves harvested early morning for maximum nutrient retention',
          'Shade-dried to preserve vitamins and antioxidants',
          'Milled to fine powder at <40°C to maintain bioactivity',
          'Quality testing: protein (25-30%), vitamin A, iron content',
          'Packaged in light-protective, moisture-barrier pouches',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Applications',
        description: 'Nutraceuticals and wellness products',
        details: [
          'Nutraceutical powders - superfood supplements',
          'Smoothie brands - green nutrition boost',
          'Wellness retailers - capsules, tablets, teas',
          'Cosmetic companies - anti-aging, skin health',
          'Herbal supplement companies - traditional medicine applications',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Stems and leaf residues for animal feed',
        details: [
          'Moringa stems → animal nutrition (high protein forage)',
          'Leaf dust and fines → organic fertilizer (nitrogen-rich)',
          'Seed pods (drumsticks) → vegetable product or seed oil',
          'Seed cake → water purification agent (natural flocculant)',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Fast-growing carbon sequestration',
        details: [
          'Moringa trees sequester CO₂ rapidly (fast growth rate)',
          'Leaf waste biodegrades in <30 days',
          'Stems can be composted or used as mulch',
          'Supports agroforestry and soil regeneration',
          'Zero waste - all parts have nutritional or agricultural value',
        ],
      },
    ],
    usApplications: [
      'Superfood supplement powders',
      'Smoothie & wellness blends',
      'Capsules & tablets',
      'Cosmetic formulations',
      'Herbal teas',
    ],
    byProducts: [
      {
        material: 'Moringa stems',
        uses: ['Animal forage', 'Mulch material'],
      },
      {
        material: 'Leaf dust',
        uses: ['Organic fertilizer', 'Compost additive'],
      },
      {
        material: 'Seed cake',
        uses: ['Water purification', 'Livestock feed'],
      },
    ],
    wasteDisposal: {
      form: 'High-protein plant matter',
      timeline: '<30 days for leaves; stems compost in 60 days',
      method: 'Fast composting, animal feed, or agroforestry mulching',
    },
    animalFeed: true,
    biomass: false,
  },

  'kankan': {
    slug: 'kankan' as ProductSlug,
    name: 'Kankan (White & Red) - Coming Soon',
    phases: [
      {
        phase: 'Phase 1',
        title: 'Origin & Harvesting',
        description: 'Rare African spice with bold, complex heat',
        details: [
          'Sourced from specific regions in Cameroon known for Kankan cultivation',
          'White and Red varieties offer different heat profiles',
          'Traditional wild harvesting and emerging cultivation practices',
          'Temperature: 24-32°C tropical forest margins',
          'Humidity: 75-90% high moisture environment',
          'Hand-picked at peak ripeness for optimal flavor',
        ],
      },
      {
        phase: 'Phase 2',
        title: 'Processing',
        description: 'Sun-dried and sorted by variety',
        details: [
          'White Kankan: Milder, aromatic, floral notes',
          'Red Kankan: Intense heat, fruity undertones',
          'Sun-dried for 10-14 days to preserve essential oils',
          'Sorted by color, size, and quality grade',
          'Whole pods or ground powder available',
        ],
      },
      {
        phase: 'Phase 3',
        title: 'Applications',
        description: 'Premium spice for chefs and food innovators',
        details: [
          'Premium dry rubs - BBQ, grilled meats, charcuterie',
          'African fusion restaurants - signature spice blends',
          'High-end food products - artisanal sauces, marinades',
          'Craft hot sauce manufacturers - unique heat profile',
          'Specialty spice retailers - exotic offerings',
        ],
      },
      {
        phase: 'Phase 4',
        title: 'Waste Use',
        description: 'Aromatic oils and natural repellents',
        details: [
          'Kankan dust → aromatic oils for perfumery',
          'Organic insect repellent - natural capsaicin compounds',
          'Spice blend filler - lower grades incorporated into mixes',
          'Traditional medicinal use - warming, digestive aid',
        ],
      },
      {
        phase: 'Phase 5',
        title: 'End Cycle',
        description: 'Fast biodegradation and soil enrichment',
        details: [
          'Spice residues compost in <30 days',
          'Capsaicin compounds break down naturally',
          'Enriches soil with trace minerals and organic matter',
          'Compatible with organic farming systems',
          'Zero landfill waste - all residues compostable or extractable',
        ],
      },
    ],
    usApplications: [
      'Premium dry rubs & seasonings',
      'African fusion cuisine',
      'Artisanal hot sauces',
      'Gourmet spice blends',
      'Specialty food products',
    ],
    byProducts: [
      {
        material: 'Kankan dust & husks',
        uses: ['Aromatic oils', 'Natural insect repellent', 'Spice blends'],
      },
    ],
    wasteDisposal: {
      form: 'Aromatic spice residues with capsaicin',
      timeline: '<30 days for complete biodegradation',
      method: 'Composting, essential oil extraction, or natural pesticide production',
    },
    animalFeed: false,
    biomass: false,
  },
};

export const getLifecycleBySlug = (slug: string): ProductLifecycle | undefined => {
  return productLifecycles[slug];
};

