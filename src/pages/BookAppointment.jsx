import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Calendar, Clock, ShieldCheck, Sparkles, Phone, Award, CheckCircle2, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BUSINESS_CONFIG } from "../config/business";
import AppointmentForm from "../components/AppointmentForm";

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const branchParam = searchParams.get("branch") || "";
  const promoParam = searchParams.get("promo") || "";

  useSEO(
    `Book Appointment Enquiry — ${BUSINESS_CONFIG.name}`,
    `Request your hair styling, hair spa, or facial appointment at ${BUSINESS_CONFIG.name}. Choose preferred branch in Example Nagar or Sample Junction.`
  );

  return (
    <main id="main-content">
      {/* 1. Page Header */}
      <section
        style={{
          backgroundColor: "#181716",
          color: "#ffffff",
          padding: "60px 0 45px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="badge-gold" style={{ marginBottom: "12px" }}>
              Easy Appointment Enquiry
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.3rem, 4.5vw, 3.2rem)",
                fontWeight: "700",
                lineHeight: "1.15",
                marginBottom: "14px",
              }}
            >
              Reserve Your Salon Ritual
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#ded9d0", lineHeight: "1.65" }}>
              Submit your preferred date and time. Our salon front desk will verify chair availability and contact you promptly to confirm your scheduled slot.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Booking Section */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
          {promoParam && (
            <div
              style={{
                backgroundColor: "rgba(197, 168, 128, 0.15)",
                border: "1px solid var(--color-gold)",
                borderRadius: "var(--radius-sm)",
                padding: "12px 18px",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.92rem",
                color: "var(--color-primary)",
              }}
            >
              <Sparkles size={18} style={{ color: "var(--color-gold)" }} />
              <span>
                <strong>Promo Code Applied:</strong> You have selected the promotion <code>{promoParam}</code>. Please mention this during your visit!
              </span>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* The Appointment Enquiry Form */}
            <div>
              <AppointmentForm
                initialService={serviceParam}
                initialBranch={branchParam}
              />
            </div>

            {/* Sidebar Guide & Trust Badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* How it Works Card */}
              <div
                className="card-luxury"
                style={{
                  padding: "32px 28px",
                  border: "1px solid var(--border-gold-subtle)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    fontWeight: "700",
                    color: "var(--color-primary)",
                    marginBottom: "20px",
                  }}
                >
                  How Booking Works
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      1
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.95rem", display: "block", color: "var(--color-primary)" }}>
                        Submit Preferred Time
                      </strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                        Choose your preferred branch, ritual, date, and preferred time window.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      2
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.95rem", display: "block", color: "var(--color-primary)" }}>
                        Salon Confirms Availability
                      </strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                        Our front desk reception reviews stylist schedules and verifies your slot via phone or WhatsApp.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      3
                    </div>
                    <div>
                      <strong style={{ fontSize: "0.95rem", display: "block", color: "var(--color-primary)" }}>
                        Enjoy Your Pampering
                      </strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                        Arrive at your scheduled time for a relaxing diagnostic, expert service, and complimentary beverage.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Assistance Box */}
              <div
                className="card-dark"
                style={{
                  padding: "28px 24px",
                  border: "1px solid rgba(197, 168, 128, 0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-gold)", marginBottom: "8px" }}>
                  <Phone size={18} />
                  <strong style={{ fontSize: "1rem" }}>Need Immediate or Same-Day Booking?</strong>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#c9c4bc", lineHeight: "1.6", marginBottom: "18px" }}>
                  If you require an urgent appointment within the next 2 hours, please call our front desk directly for real-time chair availability:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a
                    href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
                    className="btn btn-gold"
                    style={{ padding: "10px 18px", fontSize: "0.85rem" }}
                  >
                    <Phone size={14} /> Call {BUSINESS_CONFIG.branches[0].area}: {BUSINESS_CONFIG.primaryPhone}
                  </a>

                  <a
                    href={`tel:${BUSINESS_CONFIG.secondaryPhoneRaw}`}
                    className="btn btn-outline-white"
                    style={{ padding: "10px 18px", fontSize: "0.85rem" }}
                  >
                    <Phone size={14} /> Call {BUSINESS_CONFIG.branches[1].area}: {BUSINESS_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>

              {/* Safety & Hygiene Guarantee */}
              <div
                style={{
                  padding: "20px 24px",
                  backgroundColor: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-primary)", fontWeight: "700", marginBottom: "8px" }}>
                  <ShieldCheck size={18} style={{ color: "var(--color-gold)" }} />
                  <span>The Studio Guarantee</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={13} style={{ color: "var(--color-gold)" }} /> 100% genuine L'Oréal, Kérastase &amp; O3+ products
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={13} style={{ color: "var(--color-gold)" }} /> Freshly sterilized tools and single-use aprons
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <CheckCircle2 size={13} style={{ color: "var(--color-gold)" }} /> No cancellation fees for advance rescheduling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
