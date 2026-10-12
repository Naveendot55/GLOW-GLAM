/**
 * Central Business Configuration (Demo / Placeholder Data)
 * Glow & Glam Studio — Demonstration Showcase
 * All business details, contact information, branches, opening hours,
 * and form endpoints are centralized here for easy client customization.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity (Demo Data)
  name: "Glow & Glam Studio",
  shortName: "Glow & Glam",
  tagline: "Your Beauty, Your Confidence",
  subTagline: "Premium Unisex Hair, Skin & Aesthetics Studio",
  establishedYear: 2024,
  isDemo: true, // Indicates placeholder/demo website
  
  // Announcement / Promo Bar
  announcement: {
    isEnabled: true,
    badge: "Sample Offer",
    message: "Special Demo Promotion: Get 20% OFF on your first Hair Spa & Styling session!",
    ctaText: "Claim Offer",
    ctaLink: "/book-appointment?promo=GLOW20",
  },

  // Primary Contact (Placeholder Demo Numbers)
  primaryPhone: "+91 90000 00001",
  primaryPhoneRaw: "+919000000001",
  secondaryPhone: "+91 90000 00002",
  secondaryPhoneRaw: "+919000000002",
  
  // WhatsApp Configuration (Placeholder Demo Number)
  whatsapp: {
    number: "919000000001",
    displayNumber: "+91 90000 00001",
    defaultGreeting: "Hello Glow & Glam Studio team! I would like to enquire about your demo salon services and appointment availability.",
  },

  // Email (Placeholder Demo Email)
  email: "hello@example.com",

  // Physical Branches (Placeholder Addresses)
  branches: [
    {
      id: "branch-1",
      name: "Example Nagar Branch",
      city: "Kochi",
      area: "Example Nagar",
      fullAddress: "123 Sample Main Road, Example Nagar, Kochi, Kerala 682001",
      phone: "+91 90000 00001",
      phoneRaw: "+919000000001",
      googleMapsUrl: "https://maps.google.com/?q=Kochi+Kerala",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98188591873!2d76.2755208!3d9.9816358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      features: ["Certified Professional Stylists", "VIP Private Styling Cubicle", "Customer Parking Available", "Complimentary Wi-Fi & Refreshments"],
    },
    {
      id: "branch-2",
      name: "Sample Junction Branch",
      city: "Kochi",
      area: "Sample Junction",
      fullAddress: "456 Demo Street, Sample Junction, Kochi, Kerala 682002",
      phone: "+91 90000 00002",
      phoneRaw: "+919000000002",
      googleMapsUrl: "https://maps.google.com/?q=Kochi+Kerala",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98188591873!2d76.2755208!3d9.9816358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      features: ["Bridal & Aesthetics Lounge", "Pedicure & Manicure Spa Suite", "Skin Care & Facial Suite", "Designated Parking Space"],
    },
  ],

  // Operating Hours
  hours: {
    weekdays: "9:30 AM – 8:30 PM",
    weekends: "9:30 AM – 8:30 PM",
    holidays: "Open on selected public holidays",
    displaySchedule: [
      { days: "Monday – Saturday", time: "9:30 AM – 8:30 PM" },
      { days: "Sunday", time: "10:00 AM – 8:00 PM" },
    ],
  },

  // Social Links (Clearly Marked Demo Links)
  socials: {
    instagram: "https://instagram.com/example_demo",
    facebook: "https://facebook.com/example_demo",
    youtube: "https://youtube.com/example_demo",
  },

  // Appointment & Form Handling Configuration
  booking: {
    formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "",
    web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
    enableWhatsAppBooking: true,
    enableWebFormBooking: true,
    noticeText: "Demo Notice: This website is running in demonstration mode with sample business information. Submitting this enquiry simulates appointment dispatch without making live reservations.",
  },

  // Brand Pillars / Why Choose Us
  pillars: [
    {
      icon: "Award",
      title: "Certified Professional Stylists",
      description: "Our hairdressers and aesthetic experts hold certified training across international styling techniques.",
    },
    {
      icon: "ShieldCheck",
      title: "100% Hygienic Protocols",
      description: "Single-use disposable capes, sterilized scissors and equipment, and rigorous studio hygiene standards.",
    },
    {
      icon: "Sparkles",
      title: "Premium Salon Products",
      description: "We use curated professional hair, skin, and nail products for high quality, consistent results.",
    },
    {
      icon: "HeartHandshake",
      title: "Personalized Consultations",
      description: "Every appointment includes a personal consultation tailored to your facial features and hair texture.",
    },
  ],

  // Demo Reviews / Placeholder Testimonials
  reviews: [
    {
      id: 1,
      author: "Demo Client A",
      service: "Hair Spa & Styling",
      rating: 5,
      date: "Sample Feedback",
      review: "Sample review: Wonderful experience! The styling consultation was thorough and the ambiance was calm and welcoming. Perfect demonstration of salon quality.",
      branch: "Example Nagar Branch",
    },
    {
      id: 2,
      author: "Demo Client B",
      service: "Haircut & Grooming",
      rating: 5,
      date: "Sample Feedback",
      review: "Sample review: Clean environment, attentive service, and very polite team members. Highly recommend this demo experience.",
      branch: "Sample Junction Branch",
    },
    {
      id: 3,
      author: "Demo Client C",
      service: "Facial & Skin Care",
      rating: 5,
      date: "Sample Feedback",
      review: "Sample review: Loved the facial ritual. My skin felt glowing and refreshed. Great attention to comfort and hygiene.",
      branch: "Sample Junction Branch",
    },
  ],
};
