# Glow & Glam Studio — Professional Website (Demo Template)

A modern, high-performance, responsive web application developed for **Glow & Glam Studio** (Demo Unisex Salon). Crafted with a luxury salon aesthetic (warm ivory, muted gold, deep charcoal, and soft beige), data-driven service catalogs, an interactive photo gallery with accessible lightbox, multi-branch location finders with Google Maps, and an appointment enquiry system supporting both instant WhatsApp dispatch and direct web form integration.

> **Note:** This project is currently configured with **clearly fictional placeholder demo data**. All business information, telephone numbers, addresses, and prices are demonstration examples.

---

## 1. Technology Stack

- **Frontend Framework:** React 19 + Vite
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Custom Luxury CSS Design System + Bootstrap 5 utilities
- **Icons:** Lucide React (`lucide-react`) + Custom inline SVGs
- **Celebration / Feedback:** `canvas-confetti`
- **SEO & Structured Data:** Semantic HTML5, Open Graph, Twitter Cards, Schema.org `HairSalon` JSON-LD, `robots.txt`, and `sitemap.xml`.

---

## 2. Key Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero section, announcement bar, about preview, featured rituals, why choose us pillars, gallery preview, sample client reviews, branch locator, and booking CTA. |
| `/about` | **About Us** | Brand story, styling vision, certified professional standards, salon interior imagery, and hygiene commitments. |
| `/services` | **Services Menu** | Full catalog of services with interactive category filter pills (*Haircut & Styling, Hair Spa, Texture & Treatment, Hair Colouring, Skin & Facial, Bridal & Makeup, Grooming & Waxing*), live keyword search, starting prices, and durations. |
| `/services/:slug` | **Service Details** | Dynamic route detailing individual rituals (e.g. `/services/womens-haircut-styling`), benefits breakdown, what's included, and pre-filled booking actions. |
| `/gallery` | **Gallery** | Visual portfolio with category filters and a keyboard-accessible modal lightbox (Escape to close, Left/Right arrow keys to navigate, image counter). |
| `/contact` | **Contact & Locations** | Click-to-call phone numbers, WhatsApp chat, addresses for both sample branches, embedded Google Maps, enquiry form, and FAQ accordion. |
| `/book-appointment` | **Book Appointment** | Complete appointment enquiry form with date picker (past dates blocked), branch selection, service dropdown, time slots, consent check, and instant confirmation summary. |
| `/privacy-policy` | **Privacy Policy** | Transparent customer privacy statement regarding enquiry data collection, communication channels, and data deletion requests. |
| `*` | **Not Found (404)** | Branded 404 page with return shortcuts. |

---

## 3. Quick Start & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation
```bash
# Clone or enter the project directory
cd SALON

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Build optimized static production bundle
npm run build

# Preview production build locally
npm run preview
```
The compiled assets will be placed in the `dist/` directory.

---

## 4. Central Configuration Guide

All business details, phone numbers, branch addresses, operating hours, and booking behaviors are centralized in **`src/config/business.js`**. You never need to hunt through individual components to update salon information.

### A. Central Business Configuration
Open `src/config/business.js`:
```javascript
export const BUSINESS_CONFIG = {
  name: "Glow & Glam Studio",
  tagline: "Your Beauty, Your Confidence",
  primaryPhone: "+91 90000 00001",
  primaryPhoneRaw: "+919000000001",
  secondaryPhone: "+91 90000 00002",
  secondaryPhoneRaw: "+919000000002",
  email: "hello@example.com",
  operatingHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:30 PM",
    sunday: "Sunday: 10:00 AM – 8:00 PM",
  },
  whatsapp: {
    number: "919000000001",
    displayNumber: "+91 90000 00001",
    defaultGreeting: "Hello Glow & Glam Studio team! I would like to enquire about your demo services.",
  },
  branches: [
    {
      id: "branch-1",
      name: "Branch 1 — Example Nagar",
      city: "Kochi",
      area: "Example Nagar",
      fullAddress: "123 Sample Main Road, Example Nagar, Kochi, Kerala 682001",
      phone: "+91 90000 00001",
      phoneRaw: "+919000000001",
    },
    {
      id: "branch-2",
      name: "Branch 2 — Sample Junction",
      city: "Kochi",
      area: "Sample Junction",
      fullAddress: "456 Demo Street, Sample Junction, Kochi, Kerala 682002",
      phone: "+91 90000 00002",
      phoneRaw: "+919000000002",
    },
  ],
};
```

---

## 5. Managing Services & Pricing

All services, prices, durations, descriptions, benefits, and images are managed in **`src/data/services.js`**.

Sample dummy services included:
- **Haircut & Styling** — Starting at ₹299
- **Hair Spa** — Starting at ₹699
- **Hair Colouring** — Starting at ₹999
- **Facial** — Starting at ₹599
- **Manicure** — Starting at ₹249
- **Pedicure** — Starting at ₹399
- **Bridal Makeup** — Starting at ₹4,999
- **Party Makeup** — Starting at ₹1,499
- **Waxing** — Starting at ₹199

---

## 6. Appointment Enquiry Architecture

The appointment feature operates as an **Appointment Enquiry** system:
1. **No Live Overbooking Risk:** The customer selects their preferred date, branch, and time slot.
2. **Dual-Mode Submission:**
   - **Mode 1 (Instant WhatsApp Dispatch):** Formats an elegant message with a unique enquiry reference (e.g., `DEMO-492104`), client name, branch, service, date, and notes, and opens WhatsApp directly with the configured dummy number `919000000001`.
   - **Mode 2 (Web Form Endpoint):** If an endpoint is configured in `.env` (`VITE_FORM_ENDPOINT` e.g., Formspree or Web3Forms), the form dispatches a POST request and presents an on-screen confirmation summary.
3. **Clear Customer Disclaimer:** An on-screen disclaimer explains: *"Submitting this form sends an appointment enquiry for demonstration purposes. Our front desk reception reviews stylist schedules and will contact you to confirm your scheduled slot."*

---

## 7. Environment Variables (`.env`)

Copy `.env.example` to `.env` or `.env.local` to customize environment variables:
```bash
# Optional Web3Forms / Formspree endpoint
VITE_FORM_ENDPOINT=https://api.web3forms.com/submit

# Optional Web3Forms Access Key
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

---

## 8. Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push the code to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add environment variables if applicable (`VITE_FORM_ENDPOINT`).
7. For client-side routing fallback on Vercel, ensure `vercel.json` rewrites to `/index.html`:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### Deploy to Netlify
1. Connect repository to [Netlify](https://netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Ensure `public/_redirects` contains:
   ```
   /*    /index.html   200
   ```
