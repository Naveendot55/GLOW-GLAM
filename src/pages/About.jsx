import React from "react";
import { Link } from "react-router-dom";
import { Award, Sparkles, CheckCircle2, ShieldCheck, Heart, Users, FileDown, Calendar, ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BUSINESS_CONFIG } from "../config/business";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../components/WhyChooseUs";

export default function About() {
  useSEO(
    "About Us — Heritage, Philosophy & Craftsmanship (Demo)",
    `Learn about ${BUSINESS_CONFIG.name}. Discover our commitment to customer-centric beauty, hygienic protocols, and certified styling craftsmanship.`
  );

  return (
    <main id="main-content">
      {/* 1. Header Hero Banner */}
      <section
        style={{
          backgroundColor: "#181716",
          backgroundImage: "linear-gradient(to right, rgba(24, 23, 22, 0.95), rgba(24, 23, 22, 0.8)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          padding: "80px 0 60px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="badge-gold" style={{ marginBottom: "14px" }}>
              Our Story &amp; Philosophy
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
                fontWeight: "700",
                lineHeight: "1.15",
                marginBottom: "16px",
              }}
            >
              Crafting Confidence Through Precision Artistry
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#ded9d0",
                lineHeight: "1.7",
              }}
            >
              Dedicated to delivering an inspiring salon experience of luxury, strict hygiene, and personalized beauty care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Story & Vision */}
      <section className="section-py" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="badge-gold" style={{ marginBottom: "12px" }}>
                Our Vision
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: "700",
                  color: "var(--color-primary)",
                  marginBottom: "20px",
                  lineHeight: "1.25",
                }}
              >
                Customer-Centric Beauty for All
              </h2>

              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--color-text-main)",
                  lineHeight: "1.75",
                  marginBottom: "18px",
                }}
              >
                To be a truly customer-centric studio, {BUSINESS_CONFIG.name} warmly welcomes every client into a world-class environment designed to make your day fabulous. We ensure high-quality hair, skin, and grooming services in a hygienic, relaxed, and comfortable atmosphere.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                Whether you need a quick executive refresh before an important business meeting or an indulgent full-day bridal spa transformation, our team respects your time and uniqueness. We take time to understand your lifestyle before picking up a pair of shears or applying a restorative formula.
              </p>

              <div
                style={{
                  padding: "20px",
                  backgroundColor: "rgba(197, 168, 128, 0.12)",
                  borderLeft: "4px solid var(--color-gold)",
                  borderRadius: "4px",
                  marginBottom: "28px",
                }}
              >
                <p style={{ fontStyle: "italic", color: "var(--color-primary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  "We believe in personalized beauty. Hair is a live fabric that speaks to your personality. Our mission is to enhance your natural beauty while protecting its strength."
                </p>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link to="/book-appointment" className="btn btn-gold">
                  <Calendar size={16} /> Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline-gold">
                  Browse Rituals <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Mosaic Images */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                  alt="Styling area at salon demo"
                  loading="lazy"
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  marginTop: "24px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
                  alt="L'Oréal Hair Care Products and Spa"
                  loading="lazy"
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  marginTop: "-24px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                  alt="Men's grooming section"
                  loading="lazy"
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
                  alt="Skin aesthetics and Hydra Facial room"
                  loading="lazy"
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. L'Oréal Education Team Partnership */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
          <div
            className="card-luxury"
            style={{
              padding: "48px 36px",
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              border: "1px solid rgba(197, 168, 128, 0.3)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "36px",
                alignItems: "center",
              }}
            >
              <div>
                <span className="badge-gold" style={{ marginBottom: "14px" }}>
                  World-Class Training
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: "700",
                    marginBottom: "16px",
                    color: "#ffffff",
                  }}
                >
                  Certified Professional Styling Standards
                </h3>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "#d9d4cc",
                    lineHeight: "1.7",
                    marginBottom: "16px",
                  }}
                >
                  Our hairdressers and aesthetic experts hold certified training across international styling techniques, chemical treatments, and skin therapy. This ensures every procedure adheres strictly to hygiene, safety, and modern aesthetic standards.
                </p>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#b0aba2",
                    lineHeight: "1.6",
                  }}
                >
                  We demonstrate premium salon care with professional products and personalized after-care recommendations.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(197, 168, 128, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    textAlign: "center",
                  }}
                >
                  <Award size={32} style={{ color: "var(--color-gold)", margin: "0 auto 10px" }} />
                  <strong style={{ display: "block", fontSize: "1.1rem" }}>L'Oréal Certified</strong>
                  <span style={{ fontSize: "0.8rem", color: "#a8a29a" }}>Master Colorists</span>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(197, 168, 128, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    textAlign: "center",
                  }}
                >
                  <ShieldCheck size={32} style={{ color: "var(--color-gold)", margin: "0 auto 10px" }} />
                  <strong style={{ display: "block", fontSize: "1.1rem" }}>Zero Fumes</strong>
                  <span style={{ fontSize: "0.8rem", color: "#a8a29a" }}>Formaldehyde Free</span>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(197, 168, 128, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    textAlign: "center",
                  }}
                >
                  <Sparkles size={32} style={{ color: "var(--color-gold)", margin: "0 auto 10px" }} />
                  <strong style={{ display: "block", fontSize: "1.1rem" }}>O3+ Certified</strong>
                  <span style={{ fontSize: "0.8rem", color: "#a8a29a" }}>Skin Aesthetics</span>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(197, 168, 128, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    textAlign: "center",
                  }}
                >
                  <Users size={32} style={{ color: "var(--color-gold)", margin: "0 auto 10px" }} />
                  <strong style={{ display: "block", fontSize: "1.1rem" }}>Unisex Focus</strong>
                  <span style={{ fontSize: "0.8rem", color: "#a8a29a" }}>Men &amp; Women</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars */}
      <WhyChooseUs />

      {/* 5. Booking CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#ffffff",
          textAlign: "center",
          borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.9rem",
              fontWeight: "700",
              color: "var(--color-primary)",
              marginBottom: "12px",
            }}
          >
            Visit Our Studio Locations in Kochi (Demo)
          </h3>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
            Experience the difference of dedicated craftsmanship, attentive service, and relaxing ambiance.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/book-appointment" className="btn btn-gold">
              Book Your Appointment
            </Link>
            <Link to="/contact" className="btn btn-outline-gold">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
