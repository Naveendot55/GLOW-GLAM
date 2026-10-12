/**
 * Comprehensive Services Data (Sample / Demo Data)
 * Glow & Glam Studio
 * Data-driven services repository with categorization, demo pricing, durations, benefits, and imagery.
 */

export const SERVICE_CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "haircut-styling", name: "Haircut & Styling" },
  { id: "hair-care-treatments", name: "Hair Care & Spa" },
  { id: "hair-color", name: "Hair Colouring" },
  { id: "skin-facials", name: "Skin Care & Facials" },
  { id: "mens-grooming", name: "Men's Grooming" },
  { id: "hands-feet", name: "Manicure & Pedicure" },
  { id: "bridal-makeup", name: "Bridal & Party Makeup" },
  { id: "waxing-threading", name: "Waxing & Threading" },
];

export const SERVICES = [
  // 1. Haircut & Styling (Starting at ₹299)
  {
    id: "haircut-styling-women",
    slug: "womens-haircut-styling",
    name: "Women's Haircut & Styling",
    category: "haircut-styling",
    categoryName: "Haircut & Styling",
    shortDescription: "Personalized style cut, clarifying wash, nourishing conditioning, and blowdry styling.",
    fullDescription: "Sample service description: Experience a tailored haircut suited to your face shape and hair density. Includes gentle hair wash, precision layer or blunt cut, followed by a blowdry finish.",
    startingPrice: "₹299",
    duration: "45 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Face-shape and hair-texture consultation",
      "Includes hair wash and deep conditioning",
      "Finished with blowdry styling",
      "Sample hair maintenance advice",
    ],
    includes: [
      "Style Consultation",
      "Hair Wash & Rinse",
      "Precision Cut",
      "Blowdry & Serum",
    ],
  },
  {
    id: "haircut-styling-men",
    slug: "mens-haircut-grooming",
    name: "Men's Precision Haircut & Styling",
    category: "haircut-styling",
    categoryName: "Haircut & Styling",
    shortDescription: "Modern clipper fade, scissor work, scalp wash, and styling finish.",
    fullDescription: "Sample service description: Precision haircut for men combining clipper and scissor styling, finished with scalp wash and hair pomade.",
    startingPrice: "₹299",
    duration: "30 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Custom scissor or fade cut",
      "Scalp cleansing wash",
      "Neckline detailing and edging",
      "Styling paste application",
    ],
    includes: [
      "Consultation",
      "Precision Haircut",
      "Scalp Wash",
      "Styling Finish",
    ],
  },

  // 2. Hair Spa (Starting at ₹699)
  {
    id: "nourishing-hair-spa",
    slug: "nourishing-hair-spa",
    name: "Nourishing Hair Spa Ritual",
    category: "hair-care-treatments",
    categoryName: "Hair Care & Spa",
    shortDescription: "Deeply moisturizing hair creambath, gentle steam infusion, and relaxing scalp massage.",
    fullDescription: "Sample service description: Revitalize dull or dry hair with an intensive conditioning spa treatment. Includes scalp creambath, steam infusion, and massage to restore softness and shine.",
    startingPrice: "₹699",
    duration: "60 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Deep moisture replenishment",
      "Scalp relaxation and stress relief",
      "Smooths frizz and improves hair texture",
    ],
    includes: [
      "Scalp Diagnostic",
      "Cleansing Wash",
      "Creambath Massage",
      "Steam & Rinse",
    ],
  },

  // 3. Hair Colouring (Starting at ₹999)
  {
    id: "hair-colouring-global",
    slug: "global-hair-colouring",
    name: "Hair Colouring & Highlights",
    category: "hair-color",
    categoryName: "Hair Colouring",
    shortDescription: "Rich dimensional shade coverage, root touch-up, or highlights for vibrant shine.",
    fullDescription: "Sample service description: Transform your hair look with professional hair colouring. Offers uniform root-to-tip shades or subtle highlights with nourishing protective serums.",
    startingPrice: "₹999",
    duration: "90 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Even color coverage and vibrancy",
      "Ammonia-free gentle formulations",
      "Luminous long-lasting reflection",
    ],
    includes: [
      "Shade Consultation",
      "Color Application",
      "Color-Lock Rinse",
      "Blowdry Finish",
    ],
  },

  // 4. Facial (Starting at ₹599)
  {
    id: "revitalizing-facial",
    slug: "revitalizing-radiance-facial",
    name: "Revitalizing Skin Facial",
    category: "skin-facials",
    categoryName: "Skin Care & Facials",
    shortDescription: "Gentle exfoliation, deep pore cleansing, relaxing facial massage, and brightening face pack.",
    fullDescription: "Sample service description: Refresh tired skin with a soothing facial. Combines deep cleansing, botanical scrub, facial massage, and a nourishing mask for a radiant complexion.",
    startingPrice: "₹599",
    duration: "60 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Cleanses deep pores and impurities",
      "Stimulates natural facial circulation",
      "Leaves skin hydrated, soft, and refreshed",
    ],
    includes: [
      "Cleansing & Toning",
      "Exfoliating Scrub",
      "Facial Massage",
      "Hydrating Mask",
    ],
  },

  // 5. Manicure (Starting at ₹249)
  {
    id: "classic-manicure",
    slug: "classic-spa-manicure",
    name: "Classic Spa Manicure",
    category: "hands-feet",
    categoryName: "Manicure & Pedicure",
    shortDescription: "Warm hand soak, cuticle care, gentle exfoliation, and relaxing hand massage.",
    fullDescription: "Sample service description: Give your hands meticulous care with nail shaping, cuticle conditioning, exfoliating scrub, and nail buffing.",
    startingPrice: "₹249",
    duration: "40 mins",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Neat cuticle detailing and nail shaping",
      "Softens dry skin on hands",
      "Relaxing hand and wrist massage",
    ],
    includes: [
      "Aromatherapy Soak",
      "Nail Shaping",
      "Hand Scrub",
      "Nail Buff or Polish",
    ],
  },

  // 6. Pedicure (Starting at ₹399)
  {
    id: "soothing-pedicure",
    slug: "soothing-spa-pedicure",
    name: "Soothing Spa Pedicure",
    category: "hands-feet",
    categoryName: "Manicure & Pedicure",
    shortDescription: "Sea-salt foot bath, heel smoothing, botanical scrub, and foot massage.",
    fullDescription: "Sample service description: Pamper tired feet with a warm soak, gentle heel smoothing, invigorating scrub, and deep moisturizing massage.",
    startingPrice: "₹399",
    duration: "50 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Relieves foot fatigue and stress",
      "Smooths rough heels and skin",
      "Cleans and shapes toenails",
    ],
    includes: [
      "Sea Salt Foot Bath",
      "Heel Filing",
      "Foot Scrub & Mask",
      "Foot & Calf Massage",
    ],
  },

  // 7. Bridal Makeup (Starting at ₹4,999)
  {
    id: "signature-bridal-makeup",
    slug: "bridal-makeup-package",
    name: "Bridal Makeup & Styling Package",
    category: "bridal-makeup",
    categoryName: "Bridal & Party Makeup",
    shortDescription: "Complete bridal makeover including HD makeup, bridal hair styling, and saree draping.",
    fullDescription: "Sample service description: Premium bridal package tailored for your wedding celebrations. Includes skin prep, professional HD makeup, bridal hairstyle, and accessory placement.",
    startingPrice: "₹4,999",
    duration: "3 - 4 hours",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Custom makeup consultation",
      "Long-lasting camera-ready HD makeup",
      "Includes bridal hairstyle & draping",
    ],
    includes: [
      "Skin Primer & Prep",
      "HD Bridal Makeup",
      "Bridal Updo / Hairdo",
      "Draping & Finishing",
    ],
  },

  // 8. Party Makeup (Starting at ₹1,499)
  {
    id: "party-glam-makeup",
    slug: "party-glam-makeup",
    name: "Party Makeup & Hair Styling",
    category: "bridal-makeup",
    categoryName: "Bridal & Party Makeup",
    shortDescription: "Elegant event makeup, eyes styling, and blowdry or curls for parties and celebrations.",
    fullDescription: "Sample service description: Step out in style for special evenings, festive occasions, and parties with custom glam makeup and hair styling.",
    startingPrice: "₹1,499",
    duration: "75 mins",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Tailored to your outfit and party theme",
      "Includes hair setting (curls, waves, or blowdry)",
      "High quality, lightweight makeup",
    ],
    includes: [
      "Base Prep",
      "Eye Makeup & Lashes",
      "Lip Color & Highlight",
      "Hair Setting",
    ],
  },

  // 9. Waxing (Starting at ₹199)
  {
    id: "gentle-body-waxing",
    slug: "gentle-body-waxing",
    name: "Gentle Body Waxing & Threading",
    category: "waxing-threading",
    categoryName: "Waxing & Threading",
    shortDescription: "Hygienic smooth waxing for arms, legs, or face with soothing post-wax lotions.",
    fullDescription: "Sample service description: Hygienic hair removal services using gentle wax formulas for smooth, soft skin.",
    startingPrice: "₹199",
    duration: "30 mins",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1512290900672-1f55a15340eb?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Hygienic single-use strips and spatulas",
      "Leaves skin silky and smooth",
      "Calming post-wax lotion application",
    ],
    includes: [
      "Skin Preparation",
      "Gentle Wax Application",
      "Soothing After-Care Gel",
    ],
  },

  // 10. Men's Grooming
  {
    id: "mens-beard-grooming",
    slug: "mens-beard-trim-sculpting",
    name: "Men's Beard Sculpting & Trim",
    category: "mens-grooming",
    categoryName: "Men's Grooming",
    shortDescription: "Precision beard shaping, razor line-up, and soothing conditioning oil.",
    fullDescription: "Sample service description: Sharp, clean beard design and trimming with straight-razor cheek line edging and organic beard oil treatment.",
    startingPrice: "₹299",
    duration: "25 mins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Precision beard outline and length trim",
      "Warm towel softening",
      "Beard oil and balm massage",
    ],
    includes: [
      "Warm Towel Wrap",
      "Beard Trimming",
      "Razor Edging",
      "Beard Balm Application",
    ],
  },
];
