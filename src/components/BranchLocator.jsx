import React, { useState } from "react";
import { MapPin, Phone, Clock, ExternalLink, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BUSINESS_CONFIG } from "../config/business";

export default function BranchLocator() {
  const [activeBranchId, setActiveBranchId] = useState(BUSINESS_CONFIG.branches[0].id);

  const activeBranch = BUSINESS_CONFIG.branches.find((b) => b.id === activeBranchId) || BUSINESS_CONFIG.branches[0];

  return (
    <section className="section-py" style={{ backgroundColor: "#faf7f2" }}>
      <div className="container">
        <SectionHeading
          kicker="Visit Our Salons"
          title="Two Premium Locations in Kochi"
          subtitle={`Experience luxury styling at our state-of-the-art facilities in ${BUSINESS_CONFIG.branches.map((b) => b.area).join(" and ")}.`}
        />

        {/* Branch Toggle Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "36px",
            flexWrap: "wrap",
          }}
        >
          {BUSINESS_CONFIG.branches.map((branch) => {
            const isActive = branch.id === activeBranchId;
            return (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                style={{
                  padding: "12px 28px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  border: isActive ? "2px solid var(--color-gold)" : "1px solid rgba(0, 0, 0, 0.15)",
                  backgroundColor: isActive ? "var(--color-primary)" : "#ffffff",
                  color: isActive ? "#ffffff" : "var(--color-text-main)",
                  boxShadow: isActive ? "var(--shadow-md)" : "none",
                  transition: "var(--transition-smooth)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <MapPin size={16} style={{ color: isActive ? "var(--color-gold)" : "inherit" }} />
                <span>{branch.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Branch Display Card */}
        <div
          className="card-luxury"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid rgba(197, 168, 128, 0.3)",
          }}
        >
          {/* Details Column */}
          <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: "12px" }}>
                Kochi Salon Center
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "var(--color-primary)",
                  marginBottom: "8px",
                }}
              >
                {activeBranch.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  marginBottom: "20px",
                  lineHeight: 1.6,
                }}
              >
                <MapPin size={18} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "4px" }} />
                <span>{activeBranch.fullAddress}</span>
              </div>

              {/* Contact & Hours */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <a
                  href={`tel:${activeBranch.phoneRaw}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--color-primary)",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                  }}
                >
                  <Phone size={17} style={{ color: "var(--color-gold)" }} />
                  <span>Call Reception: {activeBranch.phone}</span>
                </a>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--color-text-muted)",
                    fontSize: "0.92rem",
                  }}
                >
                  <Clock size={17} style={{ color: "var(--color-gold)" }} />
                  <span>Mon – Sat: 9:30 AM – 8:30 PM | Sun: 10:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* Branch Features */}
              <div style={{ marginBottom: "28px" }}>
                <h4 style={{ fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "12px", fontWeight: "700" }}>
                  Location Highlights:
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {activeBranch.features.map((feat, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.84rem", color: "var(--color-text-main)" }}>
                      <CheckCircle size={14} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", paddingTop: "20px", borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
              <a
                href={activeBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ padding: "12px 24px" }}
              >
                <ExternalLink size={16} />
                Open in Google Maps
              </a>

              <a
                href={`tel:${activeBranch.phoneRaw}`}
                className="btn btn-outline-gold"
                style={{ padding: "12px 24px" }}
              >
                <Phone size={16} />
                Call Branch
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div
            style={{
              position: "relative",
              minHeight: "360px",
              backgroundColor: "#eee",
            }}
          >
            <iframe
              title={`Google Map Location for ${activeBranch.name}`}
              src={activeBranch.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "360px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
