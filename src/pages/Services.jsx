import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, Filter, Calendar } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { SERVICES, SERVICE_CATEGORIES } from "../data/services";
import { BUSINESS_CONFIG } from "../config/business";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";

export default function Services() {
  useSEO(
    "Services & Sample Pricing — Haircuts, Spa, Facials & Makeup (Demo)",
    `Explore sample service offerings at ${BUSINESS_CONFIG.name}. Haircut, hair spa, facials, manicure, pedicure, and bridal makeup.`
  );

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main id="main-content">
      {/* 1. Header Banner */}
      <section
        style={{
          backgroundColor: "#181716",
          backgroundImage: "linear-gradient(to right, rgba(24, 23, 22, 0.95), rgba(24, 23, 22, 0.8)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          padding: "70px 0 50px",
          borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="badge-gold" style={{ marginBottom: "12px" }}>
              Our Unisex Offerings
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
              Salon Services &amp; Rituals Menu
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#ded9d0",
                lineHeight: "1.65",
              }}
            >
              Tailored hair styling, chemical realignment, skin aesthetics, and precision grooming delivered by certified artists using genuine international products.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Services Listing */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
          {/* Search & Filter Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "280px", flexGrow: 1, maxWidth: "450px" }}>
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-text-muted)",
                }}
              />
              <input
                type="text"
                placeholder="Search services (e.g. Nanoplastia, Beard, Hydra)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 42px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(0, 0, 0, 0.15)",
                  backgroundColor: "#ffffff",
                  fontSize: "0.92rem",
                  color: "var(--color-text-main)",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              Showing <strong>{filteredServices.length}</strong> of <strong>{SERVICES.length}</strong> services
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              overflowX: "auto",
              paddingBottom: "16px",
              marginBottom: "36px",
            }}
            role="tablist"
            aria-label="Filter services by category"
          >
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  style={{
                    padding: "9px 18px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    border: isActive ? "1px solid var(--color-gold)" : "1px solid rgba(0, 0, 0, 0.1)",
                    backgroundColor: isActive ? "var(--color-primary)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--color-text-main)",
                    boxShadow: isActive ? "var(--shadow-sm)" : "none",
                    transition: "var(--transition-smooth)",
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            /* No Results Found */
            <div
              className="card-luxury"
              style={{
                textAlign: "center",
                padding: "60px 20px",
                maxWidth: "500px",
                margin: "40px auto",
              }}
            >
              <Sparkles size={40} style={{ color: "var(--color-gold)", margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                No Services Found
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                We couldn't find any services matching "{searchQuery}". Try selecting another category or resetting your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="btn btn-gold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom Consultation CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#181716",
          color: "#ffffff",
          textAlign: "center",
          borderTop: "1px solid rgba(197, 168, 128, 0.2)",
        }}
      >
        <div className="container" style={{ maxWidth: "600px" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.9rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            Not Sure Which Treatment You Need?
          </h3>
          <p style={{ color: "#d9d4cc", marginBottom: "24px", lineHeight: "1.6" }}>
            Book a complimentary in-person consultation with our stylists at our studio locations in Kochi.
          </p>
          <Link to="/book-appointment" className="btn btn-gold">
            <Calendar size={16} /> Book Consultation Enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
