import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import SectionHeading from "../components/SectionHeading";

const GALLERY_CATEGORIES = [
  { id: "all", name: "All Works" },
  { id: "hair-styling", name: "Hairstyles & Cuts" },
  { id: "color", name: "Color & Balayage" },
  { id: "texture", name: "Nanoplastia & Texture" },
  { id: "mens", name: "Men's Grooming" },
  { id: "bridal", name: "Bridal & Glow" },
  { id: "salon", name: "Salon Ambience" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Signature Layered Blowdry & Cut",
    category: "hair-styling",
    categoryName: "Hairstyles & Cuts",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    description: "Custom framing face layers finished with bouncy voluminous blowdry.",
  },
  {
    id: 2,
    title: "Honey Caramel Balayage Transformation",
    category: "color",
    categoryName: "Color & Balayage",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1200&q=80",
    description: "Seamless freehand painted balayage with Olaplex bond protection.",
  },
  {
    id: 3,
    title: "Nanoplastia Mirror Glass Realignment",
    category: "texture",
    categoryName: "Nanoplastia & Texture",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    description: "Formaldehyde-free organic straightening delivering velvety softness.",
  },
  {
    id: 4,
    title: "Men's Executive Taper & Scissor Cut",
    category: "mens",
    categoryName: "Men's Grooming",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    description: "Clean side taper fade with textured top scissor work.",
  },
  {
    id: 5,
    title: "Medi Hydra-Facial Dewy Radiance",
    category: "bridal",
    categoryName: "Bridal & Glow",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    description: "Vortex vacuum extraction and hyaluronic acid infusion for glass skin.",
  },
  {
    id: 6,
    title: "Modern Studio Styling Suite",
    category: "salon",
    categoryName: "Salon Ambience",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    description: "Ergonomic leather chairs, warm gold accents, and sanitized equipment.",
  },
  {
    id: 7,
    title: "Precision Beard Architecture & Edging",
    category: "mens",
    categoryName: "Men's Grooming",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
    description: "Hot towel wrap, razor contouring, and organic beard softening oil.",
  },
  {
    id: 8,
    title: "Luxury Hair Spa Ritual",
    category: "bridal",
    categoryName: "Bridal & Glow",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80",
    description: "Deep nourishing creambath with gentle micro-mist steam.",
  },
  {
    id: 9,
    title: "Gloss Global Color & Highlights",
    category: "color",
    categoryName: "Color & Balayage",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    description: "Rich ammonia-free shade with lasting multidimensional shine.",
  },
  {
    id: 10,
    title: "Luxury Spa Pedicure Suite",
    category: "salon",
    categoryName: "Salon Ambience",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=80",
    description: "Jacuzzi foot soak and diamond file callus care station.",
  },
  {
    id: 11,
    title: "Nourishing Smoothing Therapy",
    category: "texture",
    categoryName: "Nanoplastia & Texture",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    description: "Eliminates frizz and restores natural gloss and softness.",
  },
  {
    id: 12,
    title: "Bridal Styling & Makeover Lounge",
    category: "bridal",
    categoryName: "Bridal & Glow",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    description: "Private bridal styling and makeup lounge.",
  },
];

export default function GalleryPage() {
  useSEO(
    "Studio Gallery — Hair Transformations & Ambiance (Demo)",
    `Explore photo gallery of sample client transformations, haircuts, coloring, and studio interior at ${BUSINESS_CONFIG.name}.`
  );

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  // Keyboard navigation for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <main id="main-content">
      {/* 1. Header Hero */}
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
              Visual Portfolio
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
              Our Gallery &amp; Transformations
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#ded9d0", lineHeight: "1.65" }}>
              Explore real work created by our certified hairdressers and aesthetic experts, alongside glimpses of our hygienic salon spaces in Kochi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Gallery Content */}
      <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
        <div className="container">
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
            aria-label="Filter gallery images by category"
          >
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveLightboxIndex(null);
                  }}
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

          {/* Responsive Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View enlarged photo of ${item.title}`}
                onClick={() => setActiveLightboxIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveLightboxIndex(index);
                  }
                }}
                className="card-luxury"
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "320px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(18,17,16,0.85) 0%, rgba(18,17,16,0.1) 60%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                    color: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: "700",
                      marginBottom: "4px",
                    }}
                  >
                    {item.categoryName}
                  </span>

                  <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-heading)", fontWeight: "600", marginBottom: "4px" }}>
                    {item.title}
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#d9d4cc" }}>
                    <ZoomIn size={14} style={{ color: "var(--color-gold)" }} />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "rgba(10, 10, 10, 0.95)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Lightbox Container */}
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close image lightbox"
              style={{
                position: "absolute",
                top: "-48px",
                right: "0",
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.9rem",
              }}
            >
              <span>Close</span>
              <X size={24} />
            </button>

            {/* Previous Image Button */}
            <button
              onClick={() =>
                setActiveLightboxIndex((prev) =>
                  prev > 0 ? prev - 1 : filteredItems.length - 1
                )
              }
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "-56px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(197, 168, 128, 0.3)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Image Button */}
            <button
              onClick={() =>
                setActiveLightboxIndex((prev) =>
                  prev < filteredItems.length - 1 ? prev + 1 : 0
                )
              }
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "-56px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(197, 168, 128, 0.3)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid rgba(197, 168, 128, 0.3)",
                maxHeight: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000",
              }}
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Caption & Navigation Counter */}
            <div
              style={{
                marginTop: "16px",
                textAlign: "center",
                color: "#ffffff",
                width: "100%",
              }}
            >
              <span className="badge-gold" style={{ marginBottom: "8px" }}>
                {activeItem.categoryName} • Image {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", marginBottom: "4px" }}>
                {activeItem.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#d9d4cc" }}>
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom Booking CTA */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#181716",
          color: "#ffffff",
          textAlign: "center",
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
            Inspired by Our Portfolio?
          </h3>
          <p style={{ color: "#d9d4cc", marginBottom: "24px" }}>
            Book your styling or treatment consultation at our studio locations in Kochi.
          </p>
          <Link to="/book-appointment" className="btn btn-gold">
            <Calendar size={16} /> Book Appointment Enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
