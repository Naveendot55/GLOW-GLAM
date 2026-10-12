import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Scissors, ExternalLink, Calendar } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#11100f",
        color: "#ffffff",
        borderTop: "1px solid rgba(197, 168, 128, 0.25)",
        paddingTop: "4.5rem",
        paddingBottom: "2rem",
      }}
      role="contentinfo"
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "3.5rem",
          }}
        >
          {/* Column 1: Brand & Story */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "2px solid var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                }}
              >
                <Scissors size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    color: "#ffffff",
                    display: "block",
                  }}
                >
                  GLOW &amp; GLAM
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    textTransform: "uppercase",
                  }}
                >
                  STUDIO (DEMO)
                </span>
              </div>
            </div>

            <p style={{ color: "#a8a29a", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "20px" }}>
              {BUSINESS_CONFIG.name} offers a demonstration showcase of professional hair styling, nourishing hair spas, skin facials, and grooming rituals. All information on this demonstration site is fictional.
            </p>

            {/* Social Icons (Demo Links) */}
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS_CONFIG.name} Demo on Instagram`}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(197, 168, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                }}
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS_CONFIG.name} Demo on Facebook`}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(197, 168, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                }}
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BUSINESS_CONFIG.name} Demo on YouTube`}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(197, 168, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold)",
                }}
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                color: "var(--color-gold)",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link to="/" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>About Our Salon</Link>
              </li>
              <li>
                <Link to="/services" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Services & Pricing</Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Hairstyle Gallery</Link>
              </li>
              <li>
                <Link to="/book-appointment" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Book Appointment</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Contact & Directions</Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h4
              style={{
                color: "var(--color-gold)",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Popular Rituals
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link to="/services/womens-haircut-styling" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Haircut &amp; Styling
                </Link>
              </li>
              <li>
                <Link to="/services/nourishing-hair-spa" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Nourishing Hair Spa
                </Link>
              </li>
              <li>
                <Link to="/services/global-hair-colouring" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Hair Colouring
                </Link>
              </li>
              <li>
                <Link to="/services/revitalizing-radiance-facial" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Skin Care Facial
                </Link>
              </li>
              <li>
                <Link to="/services/soothing-spa-pedicure" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Spa Pedicure &amp; Manicure
                </Link>
              </li>
              <li>
                <Link to="/services/bridal-makeup-package" style={{ color: "#c9c4bc", fontSize: "0.9rem" }}>
                  Bridal &amp; Party Makeup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Salon Branches & Hours */}
          <div>
            <h4
              style={{
                color: "var(--color-gold)",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Our Branches in Kochi
            </h4>

            {BUSINESS_CONFIG.branches.map((branch) => (
              <div key={branch.id} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "4px" }}>
                  <MapPin size={16} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <strong style={{ color: "#ffffff", fontSize: "0.9rem", display: "block" }}>
                      {branch.name}
                    </strong>
                    <span style={{ color: "#a8a29a", fontSize: "0.82rem", lineHeight: "1.4", display: "block" }}>
                      {branch.area}
                    </span>
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "0.78rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        marginTop: "2px",
                      }}
                    >
                      Get Directions <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-gold)", fontSize: "0.85rem", marginBottom: "4px" }}>
                <Clock size={15} />
                <span>Operating Hours:</span>
              </div>
              <div style={{ color: "#c9c4bc", fontSize: "0.82rem" }}>
                Mon – Sat: 9:30 AM – 8:30 PM <br />
                Sun: 10:00 AM – 8:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.85rem",
            color: "#888279",
          }}
        >
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved. Designed for premium beauty & salon excellence.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/privacy-policy" style={{ color: "#888279" }}>
              Privacy Policy
            </Link>
            <Link to="/contact" style={{ color: "#888279" }}>
              Enquiries
            </Link>
            <a href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`} style={{ color: "var(--color-gold)" }}>
              Call: {BUSINESS_CONFIG.primaryPhone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
