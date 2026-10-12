import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles, CheckCircle, Phone, Award, ShieldCheck, HeartHandshake, Scissors } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { BUSINESS_CONFIG } from "../config/business";
import { SERVICES } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BranchLocator from "../components/BranchLocator";

export default function Home() {
  useSEO(
    "Your Beauty, Your Confidence (Demo)",
    `Welcome to ${BUSINESS_CONFIG.name}. Experience sample hair styling, nourishing hair spas, skin facials, manicure, pedicure, and party makeup.`
  );

  const featuredServices = SERVICES.filter((s) => s.isPopular).slice(0, 6);

  const galleryPreview = [
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      title: "Precision Haircut & Blowdry",
      category: "Hair Styling",
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      title: "Nourishing Hair Spa Creambath",
      category: "Hair Care",
    },
    {
      url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
      title: "Hair Colouring & Highlights",
      category: "Hair Colour",
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      title: "Revitalizing Skin Facial",
      category: "Skin Care",
    },
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      title: "Men's Precision Cut & Taper",
      category: "Men's Grooming",
    },
    {
      url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      title: "Bridal Makeup & Styling",
      category: "Bridal Makeover",
    },
  ];

  return (
    <main id="main-content">
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#141312",
          backgroundImage: "linear-gradient(to right, rgba(18, 17, 16, 0.94) 35%, rgba(18, 17, 16, 0.65) 100%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          color: "#ffffff",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "720px" }}>
            {/* Top Accent Badge */}
            <div className="badge-gold" style={{ marginBottom: "20px" }}>
              <Sparkles size={13} />
              Premier Unisex Studio • Demonstration Site
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: "700",
                lineHeight: "1.15",
                marginBottom: "20px",
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Your Beauty, Your Confidence &amp;{" "}
              <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>
                Signature Style
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "#ded9d0",
                lineHeight: "1.7",
                marginBottom: "36px",
                fontWeight: "400",
              }}
            >
              Discover personalized hair artistry, nourishing hair spas, refreshing facials, manicure, pedicure, and bridal styling in our demonstration studio.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "44px",
              }}
            >
              <Link
                to="/book-appointment"
                className="btn btn-gold"
                style={{ padding: "16px 36px", fontSize: "0.95rem" }}
              >
                <Calendar size={18} />
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="btn btn-outline-white"
                style={{ padding: "16px 32px", fontSize: "0.95rem" }}
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "18px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={20} style={{ color: "var(--color-gold)" }} />
                <span style={{ fontSize: "0.85rem", color: "#d9d4cc" }}>Certified Stylists</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ShieldCheck size={20} style={{ color: "var(--color-gold)" }} />
                <span style={{ fontSize: "0.85rem", color: "#d9d4cc" }}>100% Hygienic Protocols</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Scissors size={20} style={{ color: "var(--color-gold)" }} />
                <span style={{ fontSize: "0.85rem", color: "#d9d4cc" }}>Two Sample Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
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
            {/* Visual Mosaic Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border-gold-subtle)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                  alt={`${BUSINESS_CONFIG.name} sample interior`}
                  loading="lazy"
                  style={{ width: "100%", height: "460px", objectFit: "cover" }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "20px",
                  backgroundColor: "var(--color-primary)",
                  color: "#ffffff",
                  padding: "18px 24px",
                  borderRadius: "var(--radius-md)",
                  border: "2px solid var(--color-gold)",
                  boxShadow: "var(--shadow-lg)",
                  maxWidth: "240px",
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--color-gold)", fontWeight: "700", lineHeight: "1" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.82rem", color: "#dcd7cf", marginTop: "4px" }}>
                  Hygienic Standards &amp; Professional Salon Products
                </div>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div>
              <span className="badge-gold" style={{ marginBottom: "14px" }}>
                About {BUSINESS_CONFIG.name}
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  fontWeight: "700",
                  color: "var(--color-primary)",
                  marginBottom: "18px",
                  lineHeight: "1.2",
                }}
              >
                Redefining Haircare &amp; Beauty for Every Individual
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                  marginBottom: "16px",
                }}
              >
                {BUSINESS_CONFIG.name} is a demonstration salon website showcasing contemporary hairdressing and beauty aesthetics. Our philosophy celebrates personal beauty with tailored rituals that enhance hair health and personal style.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                }}
              >
                We demonstrate professional salon care using quality hair and skin products to guarantee consistent results. Our demo showcases cutting-edge styling, spa pampering, and bridal makeup.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn-outline-gold">
                  Our Full Story <ArrowRight size={15} />
                </Link>
                <Link to="/book-appointment" className="btn btn-gold">
                  Book an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES SECTION */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
          <SectionHeading
            kicker="Our Rituals &amp; Treatments"
            title="Signature Unisex Services"
            subtitle="From organic smoothing therapies to precision cuts and medi-facials, experience bespoke care for hair, skin, and grooming."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              marginBottom: "44px",
            }}
          >
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/services"
              className="btn btn-dark"
              style={{ padding: "16px 36px" }}
            >
              View Complete Services Menu ({SERVICES.length} Services)
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US PILLARS */}
      <WhyChooseUs theme="dark" />

      {/* 5. GALLERY PREVIEW */}
      <section className="section-py" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <SectionHeading
            kicker="Visual Portfolio"
            title="Artistry in Every Detail"
            subtitle="Explore real client transformations, styling creations, and our welcoming salon ambiance."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            {galleryPreview.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  paddingTop: "75%",
                  boxShadow: "var(--shadow-sm)",
                  cursor: "pointer",
                }}
                className="gallery-preview-item"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(18,17,16,0.85) 0%, transparent 100%)",
                    padding: "20px 16px 14px",
                    color: "#ffffff",
                  }}
                >
                  <span style={{ fontSize: "0.72rem", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "600", display: "block" }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: "0.95rem", fontWeight: "600" }}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/gallery" className="btn btn-outline-gold">
              Explore Full Gallery &amp; Transformations <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED TESTIMONIALS */}
      <Testimonials />

      {/* 7. TWO LOCATIONS BRANCH LOCATOR */}
      <BranchLocator />

      {/* 8. PERSUASIVE BOOKING CTA BANNER */}
      <section
        style={{
          backgroundColor: "#181716",
          backgroundImage: "linear-gradient(rgba(24, 23, 22, 0.92), rgba(24, 23, 22, 0.92)), url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          padding: "80px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <span className="badge-gold" style={{ marginBottom: "16px" }}>
            Ready For Your Transformation?
          </span>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Experience the {BUSINESS_CONFIG.name} Difference
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#c9c4bc",
              lineHeight: "1.7",
              marginBottom: "32px",
            }}
          >
            Explore our demo treatments—from hair styling and spas to skincare and bridal makeovers at our sample studio locations.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link
              to="/book-appointment"
              className="btn btn-gold"
              style={{ padding: "16px 36px" }}
            >
              <Calendar size={18} />
              Book Appointment Enquiry
            </Link>

            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              className="btn btn-outline-white"
              style={{ padding: "16px 28px" }}
            >
              <Phone size={17} style={{ color: "var(--color-gold)" }} />
              Call Reception: {BUSINESS_CONFIG.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
