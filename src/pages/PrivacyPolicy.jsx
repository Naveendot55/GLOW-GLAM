import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Mail, Phone } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BUSINESS_CONFIG } from "../config/business";

export default function PrivacyPolicy() {
  useSEO(
    `Privacy Policy — ${BUSINESS_CONFIG.name}`,
    `Privacy policy regarding customer appointment enquiry data, communication channels, and privacy practices at ${BUSINESS_CONFIG.name}.`
  );

  return (
    <main id="main-content">
      <section
        style={{
          backgroundColor: "#181716",
          color: "#ffffff",
          padding: "60px 0 40px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="badge-gold" style={{ marginBottom: "12px" }}>
              Transparency &amp; Trust
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "#d9d4cc", fontSize: "0.95rem" }}>
              Last updated: October 2026. This policy outlines how {BUSINESS_CONFIG.name} collects and handles your appointment enquiry information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            className="card-luxury"
            style={{
              padding: "40px 36px",
              lineHeight: "1.75",
              color: "var(--color-text-main)",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "14px", color: "var(--color-primary)" }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: "20px" }}>
              When you submit an appointment enquiry on this website or initiate a conversation via WhatsApp, we collect basic contact information provided voluntarily by you:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
              <li>Full Name</li>
              <li>Phone number (mobile or WhatsApp)</li>
              <li>Email address (optional)</li>
              <li>Selected salon service and branch preference</li>
              <li>Preferred appointment date, time, and special requests</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "14px", color: "var(--color-primary)" }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "20px" }}>
              We use this information exclusively to:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "24px" }}>
              <li>Verify chair and stylist availability for your requested date and time.</li>
              <li>Contact you via telephone or WhatsApp to confirm your appointment enquiry.</li>
              <li>Answer your queries regarding service procedures, pricing, or bridal packages.</li>
            </ul>
            <p style={{ marginBottom: "24px" }}>
              We <strong>do not</strong> sell, rent, or trade your personal information to third-party marketing companies. We do not store sensitive payment card details or create online customer accounts.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "14px", color: "var(--color-primary)" }}>
              3. Communication Channels &amp; Third-Party Services
            </h2>
            <p style={{ marginBottom: "24px" }}>
              When you choose the WhatsApp booking option, you interact with WhatsApp/Meta under their respective privacy terms. If web form submissions are routed through an approved form dispatch provider (such as Web3Forms or Formspree), data is transmitted securely via HTTPS encrypted connections to our salon reception mailbox.
            </p>

            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "14px", color: "var(--color-primary)" }}>
              4. Data Retention &amp; Deletion Requests
            </h2>
            <p style={{ marginBottom: "24px" }}>
              We retain appointment messages only as long as necessary to manage customer appointments and salon scheduling. If you wish to have your contact details removed from our records, simply contact us at:
            </p>

            <div
              style={{
                padding: "20px",
                backgroundColor: "#faf7f2",
                border: "1px solid var(--border-gold-subtle)",
                borderRadius: "var(--radius-sm)",
                marginBottom: "32px",
              }}
            >
              <div><strong>Salon:</strong> {BUSINESS_CONFIG.name}</div>
              <div><strong>Email:</strong> {BUSINESS_CONFIG.email}</div>
              <div><strong>Phone:</strong> {BUSINESS_CONFIG.primaryPhone}</div>
            </div>

            <Link to="/" className="btn btn-outline-gold">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
