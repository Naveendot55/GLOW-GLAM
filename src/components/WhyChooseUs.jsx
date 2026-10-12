import React from "react";
import { Award, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BUSINESS_CONFIG } from "../config/business";

export default function WhyChooseUs({ theme = "light" }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Award":
        return <Award size={28} style={{ color: "var(--color-gold)" }} />;
      case "ShieldCheck":
        return <ShieldCheck size={28} style={{ color: "var(--color-gold)" }} />;
      case "Sparkles":
        return <Sparkles size={28} style={{ color: "var(--color-gold)" }} />;
      case "HeartHandshake":
      default:
        return <HeartHandshake size={28} style={{ color: "var(--color-gold)" }} />;
    }
  };

  const isDark = theme === "dark";

  return (
    <section
      className="section-py"
      style={{
        backgroundColor: isDark ? "var(--color-bg-dark)" : "#faf7f2",
      }}
    >
      <div className="container">
        <SectionHeading
          kicker="Studio Standards"
          title={`Why Choose ${BUSINESS_CONFIG.name}`}
          subtitle="We combine personalized styling craftsmanship with strict hygiene and premium salon products."
          theme={isDark ? "dark" : "light"}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {BUSINESS_CONFIG.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={isDark ? "card-dark" : "card-luxury"}
              style={{
                padding: "36px 28px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: isDark ? "rgba(197, 168, 128, 0.12)" : "rgba(197, 168, 128, 0.15)",
                  border: "1px solid var(--border-gold-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {getIcon(pillar.icon)}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: isDark ? "#ffffff" : "var(--color-primary)",
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: "0.92rem",
                  color: isDark ? "#c2bdb5" : "var(--color-text-muted)",
                  lineHeight: "1.65",
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
