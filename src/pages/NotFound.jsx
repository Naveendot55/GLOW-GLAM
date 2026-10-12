import React from "react";
import { Link } from "react-router-dom";
import { Scissors, ArrowLeft, Home, Calendar } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function NotFound() {
  useSEO("Page Not Found", "The requested page could not be found.");

  return (
    <main
      id="main-content"
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf7f2",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "560px" }}>
        <div
          className="card-luxury"
          style={{
            padding: "54px 36px",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-gold-subtle)",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "2px solid var(--color-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-gold)",
              margin: "0 auto 20px",
              backgroundColor: "rgba(197, 168, 128, 0.12)",
            }}
          >
            <Scissors size={34} />
          </div>

          <span className="badge-gold" style={{ marginBottom: "12px" }}>
            404 Error
          </span>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.4rem",
              fontWeight: "700",
              color: "var(--color-primary)",
              marginBottom: "12px",
            }}
          >
            Page Not Found
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1rem",
              lineHeight: "1.65",
              marginBottom: "32px",
            }}
          >
            The link you followed may be broken or the page may have been moved. Let's guide you back to our salon rituals.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link to="/" className="btn btn-gold">
              <Home size={16} /> Return Home
            </Link>
            <Link to="/services" className="btn btn-outline-gold">
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
