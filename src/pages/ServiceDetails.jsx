import React from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Tag, Calendar, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Phone, HelpCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { SERVICES } from "../data/services";
import { BUSINESS_CONFIG } from "../config/business";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = SERVICES.find((s) => s.slug === slug);

  useSEO(
    service ? `${service.name} — Ritual Details` : "Service Details",
    service ? service.shortDescription : "Detailed salon service information and booking."
  );

  // If slug is invalid
  if (!service) {
    return (
      <main className="section-py" style={{ textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ maxWidth: "550px" }}>
          <div className="card-luxury" style={{ padding: "48px 32px" }}>
            <Sparkles size={48} style={{ color: "var(--color-gold)", margin: "0 auto 16px" }} />
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "12px", color: "var(--color-primary)" }}>
              Service Not Found
            </h1>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "28px", lineHeight: "1.6" }}>
              The service you are looking for may have been updated, renamed, or moved. Please explore our complete service catalog.
            </p>
            <Link to="/services" className="btn btn-gold">
              <ArrowLeft size={16} /> Back to All Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Related services in the same category (excluding current)
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  return (
    <main id="main-content">
      {/* 1. Breadcrumbs & Service Hero */}
      <section
        style={{
          backgroundColor: "#181716",
          color: "#ffffff",
          padding: "50px 0 60px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "24px", fontSize: "0.85rem", color: "#a8a29a" }}>
            <Link to="/" style={{ color: "#d9d4cc" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link to="/services" style={{ color: "#d9d4cc" }}>Services</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "var(--color-gold)" }}>{service.name}</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="badge-gold" style={{ marginBottom: "16px" }}>
                {service.categoryName}
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                  color: "#ffffff",
                }}
              >
                {service.name}
              </h1>

              <p
                style={{
                  fontSize: "1.08rem",
                  color: "#ded9d0",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                }}
              >
                {service.shortDescription}
              </p>

              {/* Meta Badges */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  padding: "16px 20px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(197, 168, 128, 0.2)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "32px",
                }}
              >
                {service.startingPrice && (
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "#a8a29a", display: "block", textTransform: "uppercase" }}>
                      Estimated Starting Price
                    </span>
                    <strong style={{ fontSize: "1.3rem", color: "var(--color-gold)", fontFamily: "var(--font-heading)" }}>
                      {service.startingPrice}
                    </strong>
                  </div>
                )}

                {service.duration && (
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "#a8a29a", display: "block", textTransform: "uppercase" }}>
                      Service Duration
                    </span>
                    <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Clock size={16} style={{ color: "var(--color-gold)" }} />
                      {service.duration}
                    </strong>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  to={`/book-appointment?service=${encodeURIComponent(service.name)}`}
                  className="btn btn-gold"
                  style={{ padding: "14px 32px" }}
                >
                  <Calendar size={18} /> Book This Service
                </Link>

                <a
                  href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
                  className="btn btn-outline-white"
                  style={{ padding: "14px 24px" }}
                >
                  <Phone size={16} style={{ color: "var(--color-gold)" }} />
                  Speak to Stylist
                </a>
              </div>
            </div>

            {/* Service High-res Image */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border-gold-subtle)",
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. In-Depth Details, Benefits & What's Included */}
      <section className="section-py" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Left: Comprehensive Description & What is Included */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.85rem",
                  fontWeight: "700",
                  color: "var(--color-primary)",
                  marginBottom: "16px",
                }}
              >
                About The Ritual
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--color-text-main)",
                  lineHeight: "1.8",
                  marginBottom: "32px",
                }}
              >
                {service.fullDescription}
              </p>

              {/* Included Steps / Inclusions */}
              {service.includes && service.includes.length > 0 && (
                <div style={{ marginBottom: "36px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.35rem",
                      fontWeight: "700",
                      color: "var(--color-primary)",
                      marginBottom: "16px",
                    }}
                  >
                    What This Service Includes
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                    {service.includes.map((inc, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          backgroundColor: "#faf7f2",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <CheckCircle2 size={18} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.95rem", color: "var(--color-text-main)", fontWeight: "500" }}>
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Key Benefits Card & Salon Advisory */}
            <div>
              {/* Benefits Box */}
              {service.benefits && service.benefits.length > 0 && (
                <div
                  className="card-luxury"
                  style={{
                    padding: "32px 28px",
                    backgroundColor: "#faf7f2",
                    border: "1px solid var(--border-gold-subtle)",
                    marginBottom: "28px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      color: "var(--color-primary)",
                      marginBottom: "16px",
                    }}
                  >
                    Key Benefits
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {service.benefits.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <Sparkles size={16} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "4px" }} />
                        <span style={{ fontSize: "0.92rem", color: "var(--color-text-main)", lineHeight: "1.5" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Consultation Note */}
              <div
                style={{
                  padding: "24px",
                  backgroundColor: "rgba(197, 168, 128, 0.12)",
                  border: "1px solid var(--border-gold-subtle)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-primary)", fontWeight: "700", marginBottom: "8px", fontSize: "0.95rem" }}>
                  <HelpCircle size={18} style={{ color: "var(--color-gold)" }} />
                  <span>Important Salon Note</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                  Starting prices apply to short/standard hair lengths and standard sessions. Final pricing for texture realignment, balayage, and advanced facials depends on hair length, density, and individual product consumption evaluated during your in-chair consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
          <div className="container">
            <SectionHeading
              kicker="Complementary Treatments"
              title="Related Services You May Like"
              subtitle="Pair your appointment with these popular complementary rituals."
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
