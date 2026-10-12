import React from "react";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  theme = "light",
  action,
}) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      style={{
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? "720px" : "100%",
        marginLeft: isCenter ? "auto" : 0,
        marginRight: isCenter ? "auto" : 0,
        marginBottom: "3rem",
      }}
    >
      {kicker && (
        <span
          className="badge-gold"
          style={{
            marginBottom: "12px",
            fontSize: "0.78rem",
          }}
        >
          {kicker}
        </span>
      )}

      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: "700",
          color: isDark ? "#ffffff" : "var(--color-primary)",
          lineHeight: 1.2,
          marginBottom: "14px",
        }}
      >
        {title}
      </h2>

      <div
        className={isCenter ? "gold-divider gold-divider-center" : "gold-divider"}
        style={{ marginBottom: "16px" }}
      />

      {subtitle && (
        <p
          style={{
            color: isDark ? "#b5b0a7" : "var(--color-text-muted)",
            fontSize: "1.05rem",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}

      {action && (
        <div style={{ marginTop: "20px" }}>
          {action}
        </div>
      )}
    </div>
  );
}
