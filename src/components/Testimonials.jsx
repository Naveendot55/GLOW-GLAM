import React from "react";
import { Star, Quote, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BUSINESS_CONFIG } from "../config/business";

export default function Testimonials() {
  const reviews = BUSINESS_CONFIG.reviews || [];

  if (reviews.length === 0) return null;

  return (
    <section className="section-py" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <SectionHeading
          kicker="Verified Client Feedback"
          title="Loved by Our Clients in Kochi"
          subtitle="Real reviews from customers who experienced our hair, skin, and grooming rituals."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((item) => (
            <div
              key={item.id}
              className="card-luxury"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Quote
                size={32}
                style={{
                  color: "var(--color-gold)",
                  opacity: 0.35,
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                }}
              />

              {/* Star Rating */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-gold-bright)"
                    color="var(--color-gold-bright)"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-main)",
                  lineHeight: "1.65",
                  fontStyle: "italic",
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                "{item.review}"
              </p>

              {/* Author & Branch */}
              <div
                style={{
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: "var(--color-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    {item.author}
                  </h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-gold)", fontWeight: "600" }}>
                    {item.service}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.76rem",
                    color: "var(--color-text-muted)",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <MapPin size={12} />
                  {item.branch.split(" ")[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
