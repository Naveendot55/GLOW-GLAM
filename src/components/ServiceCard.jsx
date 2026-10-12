import React from "react";
import { Link } from "react-router-dom";
import { Clock, Tag, ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function ServiceCard({ service, onBookNow }) {
  return (
    <article
      className="card-luxury"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Image Thumbnail Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "62%", // 16:10 aspect ratio
          overflow: "hidden",
          backgroundColor: "#e8e4de",
        }}
      >
        <img
          src={service.image}
          alt={service.name}
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
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Category Pill */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "rgba(24, 23, 22, 0.85)",
            backdropFilter: "blur(6px)",
            color: "var(--color-gold)",
            fontSize: "0.72rem",
            fontWeight: "600",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "4px",
            border: "1px solid rgba(197, 168, 128, 0.3)",
          }}
        >
          {service.categoryName}
        </span>

        {/* Popular Badge */}
        {service.isPopular && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "var(--color-gold)",
              color: "#121110",
              fontSize: "0.72rem",
              fontWeight: "700",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <Sparkles size={11} />
            Featured
          </span>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Meta badges: Duration & Price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
            fontSize: "0.85rem",
          }}
        >
          {service.duration && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--color-text-muted)",
              }}
            >
              <Clock size={14} style={{ color: "var(--color-gold)" }} />
              {service.duration}
            </span>
          )}

          {service.startingPrice && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: "700",
                color: "var(--color-primary)",
                fontSize: "1rem",
              }}
            >
              <Tag size={13} style={{ color: "var(--color-gold)" }} />
              Starting {service.startingPrice}
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "var(--color-primary)",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          <Link
            to={`/services/${service.slug}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {service.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            marginBottom: "20px",
            flexGrow: 1,
          }}
        >
          {service.shortDescription}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <Link
            to={`/services/${service.slug}`}
            style={{
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--color-text-main)",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            View Details <ArrowRight size={13} style={{ color: "var(--color-gold)" }} />
          </Link>

          <Link
            to={`/book-appointment?service=${encodeURIComponent(service.name)}`}
            className="btn btn-gold"
            style={{
              padding: "8px 16px",
              fontSize: "0.8rem",
            }}
            onClick={onBookNow}
          >
            <Calendar size={13} />
            Book Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
