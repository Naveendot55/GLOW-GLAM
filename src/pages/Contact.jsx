import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BUSINESS_CONFIG } from "../config/business";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  useSEO(
    "Contact Us & Locations (Demo)",
    `Contact ${BUSINESS_CONFIG.name} in Kochi. Demo phone numbers, WhatsApp, sample addresses, and operating hours.`
  );

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Do I need to book in advance or can I walk in?",
      a: "Walk-ins are warmly welcome subject to stylist availability. For specialized services such as hair spas, colouring, facials, and bridal makeovers, we recommend submitting an advance enquiry to avoid waiting.",
    },
    {
      q: "Are the styling and treatment suites private?",
      a: "Yes! While our main hairdressing area is an open unisex floor, we have designated private rooms for facials, waxing, and bridal styling.",
    },
    {
      q: "Is parking available at both branches?",
      a: "Yes. Both our Example Nagar and Sample Junction demo branches offer designated customer parking bays.",
    },
    {
      q: "Are the products used authentic and safe?",
      a: "Yes. We use professional salon products adhering to strict safety and dermatological guidelines, with fresh tools sanitized before each appointment.",
    },
  ];

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) errs.name = "Please enter your name.";
    const cleanPhone = formState.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!formState.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (formState.email && formState.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email.trim())) {
        errs.email = "Please enter a valid email address (e.g. name@domain.com).";
      }
    }

    if (!formState.message.trim()) errs.message = "Please enter your enquiry message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct WhatsApp message formatting for demo
    const msg = `*DEMO GENERAL ENQUIRY — ${BUSINESS_CONFIG.name}*\n` +
      `---------------------------------------\n` +
      `*Name:* ${formState.name}\n` +
      `*Phone:* ${formState.phone}\n` +
      (formState.email ? `*Email:* ${formState.email}\n` : "") +
      `*Subject:* ${formState.subject}\n` +
      `*Message:* ${formState.message}\n` +
      `---------------------------------------\n` +
      `_Note: This is a sample enquiry message for demonstration purposes._`;

    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setIsSent(true);
  };

  return (
    <main id="main-content">
      {/* 1. Header Banner */}
      <section
        style={{
          backgroundColor: "#181716",
          color: "#ffffff",
          padding: "70px 0 50px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="badge-gold" style={{ marginBottom: "12px" }}>
              Get In Touch
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
                fontWeight: "700",
                lineHeight: "1.15",
                marginBottom: "14px",
              }}
            >
              Contact {BUSINESS_CONFIG.name}
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#ded9d0", lineHeight: "1.65" }}>
              Have a question about our sample services, pricing, or bridal packages? Connect with our reception team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards & Form Grid */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
          {/* Quick Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {/* Call Us */}
            <div className="card-luxury" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(197, 168, 128, 0.15)",
                  color: "var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                Call Reception
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                Direct front desk assistance
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a
                  href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
                  style={{ color: "var(--color-primary)", fontWeight: "700", fontSize: "0.95rem" }}
                >
                  {BUSINESS_CONFIG.primaryPhone}
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.secondaryPhoneRaw}`}
                  style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "0.95rem" }}
                >
                  {BUSINESS_CONFIG.secondaryPhone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card-luxury" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(37, 211, 102, 0.15)",
                  color: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <MessageCircle size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                WhatsApp Us
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                Fast replies during business hours
              </p>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  BUSINESS_CONFIG.whatsapp.defaultGreeting
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  padding: "10px 20px",
                }}
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* Email */}
            <div className="card-luxury" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(197, 168, 128, 0.15)",
                  color: "var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Mail size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                Email Salon
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "16px" }}>
                Corporate &amp; bridal packages
              </p>
              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "0.88rem", wordBreak: "break-all" }}
              >
                {BUSINESS_CONFIG.email}
              </a>
            </div>

            {/* Working Hours */}
            <div className="card-luxury" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(197, 168, 128, 0.15)",
                  color: "var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                Salon Hours
              </h3>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                <div>Mon – Sat: 9:30 AM – 8:30 PM</div>
                <div>Sunday: 10:00 AM – 8:00 PM</div>
              </div>
            </div>
          </div>

          {/* Form & Both Branches Detailed Box */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Quick Contact Form */}
            <div
              className="card-luxury"
              style={{
                padding: "36px 32px",
                border: "1px solid rgba(197, 168, 128, 0.3)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--color-primary)",
                  marginBottom: "8px",
                }}
              >
                Send Us a Message
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "24px" }}>
                Leave your details below, and our front desk will respond promptly.
              </p>

              {isSent ? (
                <div
                  style={{
                    padding: "30px 20px",
                    textAlign: "center",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #86efac",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <CheckCircle2 size={40} style={{ color: "#16a34a", margin: "0 auto 12px" }} />
                  <h3 style={{ fontSize: "1.3rem", color: "#166534", marginBottom: "8px" }}>
                    Enquiry Dispatched!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#15803d", marginBottom: "18px" }}>
                    Thank you! Your message was prepared and launched. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormState({ name: "", phone: "", email: "", subject: "General Enquiry", message: "" });
                    }}
                    className="btn btn-outline-gold"
                    style={{ padding: "8px 20px" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Rahul Krishnan"
                      className={`form-input ${errors.name ? "error" : ""}`}
                      required
                    />
                    {errors.name && <div className="form-error"><AlertCircle size={13} /> {errors.name}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +91 90000 00001"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      required
                    />
                    {errors.phone && <div className="form-error"><AlertCircle size={13} /> {errors.phone}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email (Optional)</label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className={`form-input ${errors.email ? "error" : ""}`}
                    />
                    {errors.email && <div className="form-error"><AlertCircle size={13} /> {errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className={`form-textarea ${errors.message ? "error" : ""}`}
                      required
                    />
                    {errors.message && <div className="form-error"><AlertCircle size={13} /> {errors.message}</div>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: "100%", padding: "14px", marginTop: "8px" }}
                  >
                    <Send size={16} /> Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Branches List & Directions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {BUSINESS_CONFIG.branches.map((b) => (
                <div
                  key={b.id}
                  className="card-luxury"
                  style={{
                    padding: "28px 24px",
                    border: "1px solid var(--border-gold-subtle)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: "700" }}>
                      {b.name}
                    </h3>
                    <span className="badge-gold" style={{ fontSize: "0.72rem" }}>
                      Kochi
                    </span>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                    {b.fullAddress}
                  </p>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a
                      href={b.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold"
                      style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                    >
                      <ExternalLink size={13} /> Google Maps
                    </a>

                    <a
                      href={`tel:${b.phoneRaw}`}
                      className="btn btn-outline-gold"
                      style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                    >
                      <Phone size={13} /> Call {b.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) */}
      <section className="section-py" style={{ backgroundColor: "#ffffff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <SectionHeading
            kicker="Help &amp; Answers"
            title="Frequently Asked Questions"
            subtitle={`Common questions about visiting ${BUSINESS_CONFIG.name}.`}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-luxury"
                  style={{
                    overflow: "hidden",
                    border: isOpen ? "1px solid var(--border-gold-subtle)" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "1.05rem",
                      fontWeight: "600",
                      color: "var(--color-primary)",
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--color-gold)" /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 20px",
                        fontSize: "0.95rem",
                        color: "var(--color-text-muted)",
                        lineHeight: "1.65",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                        paddingTop: "16px",
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
