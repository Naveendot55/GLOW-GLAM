# Glow & Glam Studio — Luxury Unisex Salon Web Application

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://naveendot55.github.io/GLOW-GLAM/)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.4-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Live Deployment:** **[https://naveendot55.github.io/GLOW-GLAM/](https://naveendot55.github.io/GLOW-GLAM/)**  
> A high-performance, fully responsive web application engineered for modern beauty and grooming salons. Built with a bespoke champagne-gold luxury design system, dynamic service routing, an interactive photo gallery with accessible lightbox modal, and a dual-channel appointment enquiry engine.

---

## 🌟 Live Demo & Quick Navigation

The application is deployed on **GitHub Pages**. Explore the live pages directly:

| Page | Live URL | Description |
| :--- | :--- | :--- |
| 🏠 **Homepage** | [https://naveendot55.github.io/GLOW-GLAM/](https://naveendot55.github.io/GLOW-GLAM/) | Hero spotlight, service teasers, studio standards, client reviews, branch locator. |
| 💇 **Services Catalog** | [https://naveendot55.github.io/GLOW-GLAM/services](https://naveendot55.github.io/GLOW-GLAM/services) | Filterable ritual menu with live keyword search, starting rates, and duration badges. |
| 📅 **Book Appointment** | [https://naveendot55.github.io/GLOW-GLAM/book-appointment](https://naveendot55.github.io/GLOW-GLAM/book-appointment) | Date-picker validation, time slots, branch selection, and instant enquiry dispatch. |
| 📍 **Contact & Locations** | [https://naveendot55.github.io/GLOW-GLAM/contact](https://naveendot55.github.io/GLOW-GLAM/contact) | Multi-branch locator tabs, interactive Google Maps, click-to-call, FAQ accordion. |
| 🖼️ **Portfolio Gallery** | [https://naveendot55.github.io/GLOW-GLAM/gallery](https://naveendot55.github.io/GLOW-GLAM/gallery) | Categorized photography showcase with keyboard-navigable modal lightbox. |
| ✨ **About the Studio** | [https://naveendot55.github.io/GLOW-GLAM/about](https://naveendot55.github.io/GLOW-GLAM/about) | Studio heritage, certified styling standards, hygiene protocols, and vision. |
| 🔒 **Privacy Policy** | [https://naveendot55.github.io/GLOW-GLAM/privacy-policy](https://naveendot55.github.io/GLOW-GLAM/privacy-policy) | Client data transparency, communication policies, and data handling practices. |

---

## 🎨 Key Architectural Highlights

* **Bespoke Luxury Design Language:**  
  Curated color harmony featuring Warm Ivory (`#faf7f2`), Deep Charcoal (`#181716`), and Muted Champagne Gold (`#c5a880`) paired with typography from Google Fonts (*Playfair Display* & *Plus Jakarta Sans*).
* **Responsive Across All Viewports:**  
  Rigorously tested and fluid across mobile (360px, 390px), tablet (768px), laptop (1024px), and ultra-wide desktops (1440px+). Zero horizontal scroll overflow.
* **Accessible Lightbox Modal:**  
  WCAG-compliant keyboard controls (`Escape` to close, `ArrowLeft` / `ArrowRight` to navigate images, accessible focus trapping, and ARIA labels).
* **Dual-Mode Appointment Engine:**  
  1. **Instant WhatsApp Dispatch:** Formats pre-filled booking enquiries with unique reference codes (`DEMO-XXXXXX`) directly into WhatsApp chat.
  2. **Web API Endpoint:** Optional integration with Formspree, Web3Forms, or custom REST APIs with client-side confirmation feedback.
* **Centralized Business & Data Architecture:**  
  Every piece of business information (salon name, phone numbers, hours, social links, addresses, services, prices) lives in two central configuration files for effortless white-label customization.
* **Built-in SEO & Schema Markup:**  
  Pre-configured Open Graph meta tags, Twitter Cards, dynamic page titles (`useSEO` hook), and Schema.org `HairSalon` JSON-LD structured data.

---

## 💻 Tech Stack

- **Core:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **Styling:** Custom Luxury CSS Design System + Modular CSS Utilities
- **Icons:** [Lucide React](https://lucide.dev/)
- **Micro-Interactions:** `canvas-confetti` (interactive booking feedback)
- **Deployment:** GitHub Pages, Vercel, Netlify

---

## 📁 Project Structure

```text
GLOW-GLAM/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD GitHub Pages workflow
├── public/
│   ├── _redirects              # Netlify SPA routing rewrite rule
│   ├── favicon.svg             # Luxury monogram brand favicon
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Search engine XML index
├── src/
│   ├── assets/                 # Brand graphics and icons
│   ├── components/             # Reusable UI components
│   │   ├── AnnouncementBar.jsx # Dynamic promotional ribbon
│   │   ├── AppointmentForm.jsx # Appointment enquiry form with validation
│   │   ├── BranchLocator.jsx   # Multi-branch switcher with map embeds
│   │   ├── Footer.jsx          # Studio footer with branch details
│   │   ├── Navbar.jsx          # Sticky header with mobile drawer
│   │   ├── SectionHeading.jsx  # Reusable luxury section header
│   │   ├── ServiceCard.jsx     # Service catalog card
│   │   ├── Testimonials.jsx    # Neutral client feedback slider
│   │   ├── WhatsAppButton.jsx  # Floating pulsing WhatsApp action
│   │   └── WhyChooseUs.jsx     # Value pillars and trust standards
│   ├── config/
│   │   └── business.js         # ⭐ Central salon business configuration
│   ├── data/
│   │   └── services.js         # ⭐ Central service menu, rates & descriptions
│   ├── hooks/
│   │   └── useSEO.js           # Dynamic document title & meta tags hook
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── Contact.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx        # Custom branded 404 page
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ServiceDetails.jsx  # Dynamic route (/services/:slug)
│   │   └── Services.jsx
│   ├── App.jsx                 # Route definitions & layout wrapper
│   ├── index.css               # Design tokens, variables & typography
│   └── main.jsx                # Application root mounting
├── .env.example                # Safe environment variable template
├── .gitignore                  # Git tracking exclusion list
├── package.json                # Project dependencies & build scripts
├── vercel.json                 # Vercel SPA routing rewrites
└── vite.config.js              # Vite bundler config with base path
```

---

## ⚙️ Central Configuration Guide

You can easily adapt this project for any salon business by editing just two files:

### 1. Salon Business Details (`src/config/business.js`)
Edit name, phone numbers, WhatsApp, branch addresses, operating hours, and social media handles:
```javascript
export const BUSINESS_CONFIG = {
  name: "Glow & Glam Studio",
  tagline: "Your Beauty, Your Confidence",
  primaryPhone: "+91 90000 00001",
  secondaryPhone: "+91 90000 00002",
  email: "hello@example.com",
  operatingHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 8:00 PM",
  },
  whatsapp: {
    number: "919000000001",
    displayNumber: "+91 90000 00001",
  },
  branches: [
    {
      id: "branch-1",
      name: "Branch 1 — Example Nagar",
      fullAddress: "123 Sample Main Road, Example Nagar, Kochi, Kerala 682001",
      phone: "+91 90000 00001",
    },
    // ...
  ],
};
```

### 2. Service Catalog & Pricing (`src/data/services.js`)
Add, update, or remove rituals, starting prices, duration, benefits, and category classifications:
```javascript
{
  id: "haircut-styling",
  slug: "womens-haircut-styling",
  name: "Haircut & Styling",
  category: "hair-cut-styling",
  categoryName: "Haircut & Styling",
  startingPrice: "₹299",
  duration: "45 mins",
  isPopular: true,
  // ...
}
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/Naveendot55/GLOW-GLAM.git

# 2. Navigate into the project folder
cd GLOW-GLAM

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deployment Instructions

### 1. GitHub Pages (Automated Deployment)
This repository includes an automated deployment script. To deploy changes directly to GitHub Pages:
```bash
npm run deploy
```
This builds the static bundle with base path `/GLOW-GLAM/`, adds the `404.html` SPA redirect fallback, and pushes the production assets to the `gh-pages` branch.

### 2. Deploy to Vercel
1. Import this repository into [Vercel](https://vercel.com/).
2. Set Framework Preset to **Vite**.
3. Deploy. The included `vercel.json` automatically configures single-page application routing rewrites.

### 3. Deploy to Netlify
1. Connect the repository to [Netlify](https://netlify.com/).
2. Build command: `npm run build` | Publish directory: `dist`.
3. The included `public/_redirects` file automatically handles SPA routing.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
