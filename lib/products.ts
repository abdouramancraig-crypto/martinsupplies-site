export type ProductSlug =
  | "poivre-de-penja"
  | "mbongo"
  | "njansang"
  | "non-gmo-yellow-corn"
  | "non-gmo-white-corn"
  | "non-gmo-soybeans"
  | "cassava-flour"
  | "tapioca-flour";

export type ProductContent = {
  slug: ProductSlug;
  name: string;
  tag: "Grain" | "Legume" | "Spice" | "Seed / Spice" | "Flour";
  tagline: string;
  description: string;
  subcopy: string;
  formats: string;
  originSummary: string;
  packagingSummary: string;
  scientificName: string;
  origin: string;
  growth: string;
  climate: string;
  moisture: string;
  shelfLife: string;
  annualVolume: string;
  pricing: string;
  packaging: string;
  applications: {
    global: string[];
    regional: string[];
  };
};

const sharedGrowth =
  "Cultivated in naturally rich, volcanic and equatorial soils across Cameroon, maintained by smallholder partners without synthetic fertilizers or genetic modification.";

const sharedClimate =
  "Thrives in tropical, high-humidity environments. We carefully dry, clean, and condition every lot to meet safe moisture targets before export.";

export const productCatalog: ProductContent[] = [
  {
    slug: "poivre-de-penja",
    name: "Poivre de Penja",
    tag: "Spice",
    tagline: "Volcanic-soil pepper with a long, floral finish.",
    description:
      "PGI-recognized pepper cultivated in the Penja valley’s mineral-dense volcanic soil.",
    subcopy:
      "Grown by trusted partner families, hand-harvested, washed, and sun-dried before being graded for global fine-dining partners.",
    formats: "Whole berries / carefully milled powder",
    originSummary: "Penja region, Cameroon",
    packagingSummary: "Bulk food-grade bags + 0.5 kg / 1 kg recyclable units",
    scientificName: "Piper nigrum (Penja terroir black & white pepper)",
    origin: "Penja region, Littoral Province, Cameroon.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture: "Low residual moisture (< 12%) preserved in light-protected storage.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 18–24 months (best aroma within 12–18 months).",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "Bulk food-grade bags inside cartons; 0.5 kg / 1 kg recyclable units available for specialty buyers.",
    applications: {
      global: [
        "Finishing pepper for seafood, meats, and vegetables.",
        "Sauces, stocks, and consommés requiring a clean floral heat.",
        "Premium spice blends for retail or foodservice.",
        "Infused oils, vinegars, and gourmet condiments.",
      ],
      regional: [
        "Traditional grilled meats and pepper-forward stews.",
        "Mbongo Tchobi variations with Penja pepper’s signature aroma.",
        "Seasoning base for Central African sauces and marinades.",
        "Everyday table condiment across Cameroon’s Littoral region.",
      ],
    },
  },
  {
    slug: "mbongo",
    name: "Mbongo",
    tag: "Spice",
    tagline: "Smoked, spice-forward blend rooted in Cameroonian cuisine.",
    description:
      "A deep, smoky spice blend used for Mbongo Tchobi and Afro-fusion stews.",
    subcopy:
      "MartinSupplies & Co preserves traditional techniques while standardizing quality for modern kitchens.",
    formats: "Ground blend / paste-ready powder",
    originSummary: "Littoral & Centre regions, Cameroon",
    packagingSummary: "Bulk food-grade bags, recyclable specialty pouches",
    scientificName:
      "Traditional Central African spice blend (botanical composition shared on request).",
    origin: "Harvested and blended in Cameroon’s Littoral and Centre regions.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture: "Low residual moisture (< 10%) to protect smokey aromatics.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 18–24 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "Bulk food-grade bags inside cartons; smaller recyclable pouches available for specialty buyers.",
    applications: {
      global: [
        "Afro-fusion stews, marinades, and braises.",
        "Slow-cooked meat or plant-based dishes needing depth.",
        "Rub bases for smoked proteins and vegetables.",
        "Signature sauces in upscale casual dining.",
      ],
      regional: [
        "Mbongo Tchobi with catfish or other local proteins.",
        "Traditional pepper sauces and spice pastes.",
        "Cameroonian soups served at celebrations.",
        "Everyday kitchen staple for home cooks in Douala and Yaoundé.",
      ],
    },
  },
  {
    slug: "njansang",
    name: "Njansang",
    tag: "Seed / Spice",
    tagline: "Buttery, nutty seed for thickening and flavor amplification.",
    description:
      "Ricinodendron heudelotii seeds processed for export-ready consistency.",
    subcopy:
      "We handle delicate drying and grading so chefs and manufacturers can rely on Njansang’s silky texture.",
    formats: "Whole seed / ground powder",
    originSummary: "Forest margins & agroforestry plots, Cameroon",
    packagingSummary: "Bulk bags with optional vacuum packs",
    scientificName: "Ricinodendron heudelotii.",
    origin: "Forest margins and agroforestry plots across Cameroon.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture: "Carefully dried to < 8% moisture to maintain buttery notes.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 18 months (whole) / 12 months (ground).",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "Bulk food-grade bags with optional vacuum sealing; recyclable 0.5 kg / 1 kg units available.",
    applications: {
      global: [
        "Thickening agent and flavor enhancer in sauces and gravies.",
        "Premium base note in plant-forward soups and stews.",
        "Innovative nutty element for fine-dining tasting menus.",
        "R&D ingredient for clean-label emulsions.",
      ],
      regional: [
        "Classic Cameroonian soups and stews featuring Njansang.",
        "Regional sauces served with fish, poultry, and roots.",
        "Street-food soups needing silky body.",
        "Home-cooking thickener for weekly family meals.",
      ],
    },
  },
  {
    slug: "non-gmo-yellow-corn",
    name: "Non-GMO Yellow Corn",
    tag: "Grain",
    tagline: "Heritage maize for milling, snacks, and fortified foods.",
    description:
      "Identity-preserved yellow corn with natural color and clean flavor.",
    subcopy:
      "Sourced from smallholder farmers and aggregated through MartinSupplies & Co’s verified supply chain.",
    formats: "Whole kernel / grits / flour",
    originSummary: "Western Highlands & Centre regions, Cameroon",
    packagingSummary: "25 kg / 50 kg recyclable paper sacks",
    scientificName: "Zea mays L. (non-GMO yellow varieties).",
    origin: "Western Highlands and Centre regions, Cameroon.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture:
      "Target grain moisture: < 14%. Stored cool and dry to protect kernel integrity.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 12–18 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "25 kg / 50 kg recyclable paper sacks with optional biodegradable food-grade liner.",
    applications: {
      global: [
        "Milling for tortillas, arepas, polenta, and snack grits.",
        "Breakfast cereals and extruded snacks.",
        "Fortified blends for feeding programs.",
        "Premium brewing and distillation adjuncts.",
      ],
      regional: [
        "Corn fufu and boiled corn staples.",
        "Local porridges and baked goods.",
        "Heritage dishes served during festivals.",
        "Community feeding programs needing reliable grain.",
      ],
    },
  },
  {
    slug: "non-gmo-white-corn",
    name: "Non-GMO White Corn",
    tag: "Grain",
    tagline: "Clean, versatile maize for porridges and specialty milling.",
    description:
      "Snow-white kernels prized for neutral flavor and fine milling performance.",
    subcopy:
      "Maintained through identity-preserved channels to guarantee non-GMO status and traceability.",
    formats: "Whole kernel / fine milling / hominy",
    originSummary: "Adamawa & North West regions, Cameroon",
    packagingSummary: "25 kg / 50 kg recyclable paper sacks",
    scientificName: "Zea mays L. (non-GMO white varieties).",
    origin: "Adamawa and North West regions, Cameroon.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture:
      "Target grain moisture: < 14%. Stored in aerated, food-safe silos prior to export.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 12–18 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "25 kg / 50 kg recyclable paper sacks with optional biodegradable food-grade liner.",
    applications: {
      global: [
        "Arepas, ugali, and hominy-style processing.",
        "Breakfast cereals and ready-to-eat porridge bases.",
        "Premium masa and corn flour for gluten-sensitive baking.",
        "Snack extrudates requiring light color.",
      ],
      regional: [
        "Corn fufu variations and ceremonial dishes.",
        "Local porridges enriched for school feeding.",
        "Blends with cassava for baked goods.",
        "Street-food staples requiring pale, neutral maize.",
      ],
    },
  },
  {
    slug: "non-gmo-soybeans",
    name: "Non-GMO Soybeans",
    tag: "Legume",
    tagline: "High-protein soy for food, fortification, and feed.",
    description:
      "Identity-preserved soybeans grown by MartinSupplies & Co partner cooperatives.",
    subcopy:
      "Clean, traceable beans suited for tofu, tempeh, plant-based proteins, and premium feed formulations.",
    formats: "Whole bean / dehulled on request",
    originSummary: "Northern Cameroon highlands and savannah zones",
    packagingSummary: "25 kg / 50 kg recyclable paper sacks",
    scientificName: "Glycine max (non-GMO).",
    origin: "Northern Cameroon highlands and savannah zones.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture: "Target moisture: < 13%. Stored in cool, dry environments.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 12–18 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "25 kg / 50 kg recyclable paper sacks with optional biodegradable food-grade liner.",
    applications: {
      global: [
        "Tofu, tempeh, and plant-based meat fermentation.",
        "Soy flour blends and protein fortification.",
        "Textured vegetable protein manufacturing.",
        "Premium livestock and aquaculture feed.",
      ],
      regional: [
        "Soy-enriched porridges for nutrition programs.",
        "Local flour fortification blends.",
        "Smallholder feed rations for poultry and fish.",
        "Community-based soy beverage production.",
      ],
    },
  },
  {
    slug: "cassava-flour",
    name: "Cassava Flour",
    tag: "Flour",
    tagline: "Naturally gluten-free flour with clean, neutral flavor.",
    description:
      "Stone-milled cassava delivering consistent particle size for baking and blends.",
    subcopy:
      "Processed near harvest regions to minimize transport time and lock in freshness before export.",
    formats: "Fine / medium flour",
    originSummary: "Centre & South regions, Cameroon",
    packagingSummary: "25 kg paper sacks with moisture-resistant liner",
    scientificName: "Manihot esculenta (cassava root).",
    origin: "Centre and South regions, Cameroon.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture:
      "Moisture maintained below 12% with food-safe drying and sealed transport.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 9–12 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "25 kg paper sacks with moisture-resistant inner layer made from biodegradable films.",
    applications: {
      global: [
        "Gluten-free baking mixes and breads.",
        "Clean-label thickening for soups and sauces.",
        "Snack pellets, crackers, and chips.",
        "Plant-based cheese and dairy-alternative formulations.",
      ],
      regional: [
        "Gari and fufu variations served daily.",
        "Local baked goods combining cassava with maize or wheat.",
        "Street-food batters and fritters.",
        "Household staples for gluten-free cooking.",
      ],
    },
  },
  {
    slug: "tapioca-flour",
    name: "Tapioca Flour",
    tag: "Flour",
    tagline: "Refined cassava starch for texture control and beverages.",
    description:
      "High-purity tapioca starch with consistent gelatinization profiles.",
    subcopy:
      "Ideal for boba pearls, desserts, sauces, and low-allergen formulations.",
    formats: "Refined starch / customized particle size",
    originSummary: "Cassava processing clusters across Cameroon",
    packagingSummary: "25 kg paper sacks with food-safe liner",
    scientificName: "Manihot esculenta (refined tapioca starch).",
    origin: "Processed in Cameroon close to cassava farming clusters.",
    growth: sharedGrowth,
    climate: sharedClimate,
    moisture: "Moisture maintained below 13% with controlled drying and packing.",
    shelfLife:
      "Typical shelf life in recommended storage conditions: 12–18 months.",
    annualVolume: "Annual volume available: Contact us for current capacity.",
    pricing: "Pricing: Contact us for current FOB pricing per ton.",
    packaging:
      "25 kg paper sacks with food-safe liner to protect against moisture uptake.",
    applications: {
      global: [
        "Boba pearls and specialty beverages.",
        "Gluten-free noodles, breads, and pastries.",
        "Sauce thickening and freeze-thaw stable desserts.",
        "Snack coatings and batters for a crisp finish.",
      ],
      regional: [
        "Cassava-based beverages and desserts sold locally.",
        "Fufu blends that require silky, elastic texture.",
        "Traditional puddings and porridge-style dishes.",
        "Ingredient in community-scale snack production.",
      ],
    },
  },
];

const productMap = productCatalog.reduce<Record<string, ProductContent>>(
  (acc, product) => {
    acc[product.slug] = product;
    return acc;
  },
  {}
);

export const getProductBySlug = (slug: string) => productMap[slug];

