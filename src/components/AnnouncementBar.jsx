import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(BUSINESS_CONFIG.announcement?.isEnabled ?? true);

  if (!isVisible || !BUSINESS_CONFIG.announcement?.isEnabled) return null;

  return (
    <div 
      style={{
        backgroundColor: "#181716",
        color: "#ffffff",
        borderBottom: "1px solid rgba(197, 168, 128, 0.25)",
        fontSize: "0.82rem",
        padding: "8px 16px",
        position: "relative",
        zIndex: 101,
      }}
      role="region"
      aria-label="Promotion announcement"
    >
      <div 
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <span 
          style={{
            backgroundColor: "rgba(197, 168, 128, 0.2)",
            color: "var(--color-gold)",
            padding: "2px 8px",
            borderRadius: "4px",
            fontWeight: "700",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontSize: "0.72rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Sparkles size={12} />
          {BUSINESS_CONFIG.announcement.badge}
        </span>

        <span style={{ color: "#f3f0ea", fontWeight: "500" }}>
          {BUSINESS_CONFIG.announcement.message}
        </span>

        {BUSINESS_CONFIG.announcement.ctaLink && (
          <Link
            to={BUSINESS_CONFIG.announcement.ctaLink}
            style={{
              color: "var(--color-gold)",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {BUSINESS_CONFIG.announcement.ctaText}
            <ArrowRight size={13} />
          </Link>
        )}

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close promotion announcement"
          style={{
            position: "absolute",
            right: "16px",
            background: "none",
            border: "none",
            color: "rgba(255, 255, 255, 0.6)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
