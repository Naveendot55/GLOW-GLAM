import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Calendar, Menu, X, Scissors, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? "rgba(24, 23, 22, 0.96)" : "#181716",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(197, 168, 128, 0.2)",
        transition: "var(--transition-smooth)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Logo & Brand */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#ffffff",
              textDecoration: "none",
            }}
            aria-label={`${BUSINESS_CONFIG.name} Home`}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "2px solid var(--color-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(197, 168, 128, 0.1)",
                color: "var(--color-gold)",
              }}
            >
              <Scissors size={22} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                  display: "block",
                  lineHeight: "1.1",
                }}
              >
                GLOW &amp; GLAM
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  display: "block",
                }}
              >
                STUDIO (DEMO)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-gold)" : "#d9d4cc",
                  fontSize: "0.92rem",
                  fontWeight: isActive ? "600" : "500",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  position: "relative",
                  padding: "6px 0",
                  borderBottom: isActive ? "2px solid var(--color-gold)" : "2px solid transparent",
                  transition: "var(--transition-smooth)",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "16px",
            }}
            className="desktop-actions"
          >
            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#e8e4de",
                fontSize: "0.88rem",
                fontWeight: "600",
                padding: "8px 14px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
              }}
              title={`Call ${BUSINESS_CONFIG.name} Reception`}
            >
              <Phone size={15} style={{ color: "var(--color-gold)" }} />
              <span>{BUSINESS_CONFIG.primaryPhone}</span>
            </a>

            <Link
              to="/book-appointment"
              className="btn btn-gold"
              style={{
                padding: "10px 22px",
                fontSize: "0.85rem",
              }}
            >
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="mobile-toggle-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              background: "rgba(197, 168, 128, 0.12)",
              border: "1px solid var(--border-gold-subtle)",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-gold)",
              cursor: "pointer",
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#181716",
            borderTop: "1px solid rgba(197, 168, 128, 0.2)",
            padding: "24px 20px 32px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          }}
          className="mobile-drawer"
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-gold)" : "#f0ece6",
                  fontSize: "1.1rem",
                  fontWeight: isActive ? "600" : "500",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "rgba(197, 168, 128, 0.12)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <span>{link.label}</span>
                <span style={{ color: "var(--color-gold)", opacity: 0.6 }}>→</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Branches Info */}
          <div
            style={{
              padding: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(197, 168, 128, 0.2)",
              borderRadius: "var(--radius-md)",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: "600", marginBottom: "8px" }}>
              <MapPin size={15} />
              <span>Studio Locations:</span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "#b8b2a8" }}>
              {BUSINESS_CONFIG.branches.map((b) => b.name).join(" | ")}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              to="/book-appointment"
              className="btn btn-gold"
              style={{ width: "100%", padding: "14px" }}
            >
              <Calendar size={18} />
              Book Appointment
            </Link>

            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              className="btn btn-outline-white"
              style={{ width: "100%", padding: "12px" }}
            >
              <Phone size={17} style={{ color: "var(--color-gold)" }} />
              Call Reception: {BUSINESS_CONFIG.primaryPhone}
            </a>
          </div>
        </div>
      )}

      {/* Responsive Style Tag for Navbar media queries */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </header>
  );
}
