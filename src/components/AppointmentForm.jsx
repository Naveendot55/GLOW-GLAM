import React, { useState } from "react";
import { Calendar, Clock, Phone, User, MessageSquare, MapPin, CheckCircle, AlertCircle, Send, MessageCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { BUSINESS_CONFIG } from "../config/business";
import { SERVICES } from "../data/services";

export default function AppointmentForm({ initialService = "", initialBranch = "" }) {
  // Today's date in YYYY-MM-DD format for min date
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    branch: initialBranch || BUSINESS_CONFIG.branches[0].name,
    service: initialService || "",
    date: todayStr,
    timeSlot: "11:00 AM - 01:00 PM",
    notes: "",
    consent: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const timeSlots = [
    "09:30 AM - 11:00 AM (Morning)",
    "11:00 AM - 01:00 PM (Midday)",
    "02:00 PM - 04:00 PM (Afternoon)",
    "04:00 PM - 06:30 PM (Evening)",
    "06:30 PM - 08:30 PM (Night)",
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you are interested in.";
    }

    if (!formData.date) {
      newErrors.date = "Please select your preferred appointment date.";
    } else if (formData.date < todayStr) {
      newErrors.date = "Preferred date cannot be in the past.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted regarding this appointment enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Submit via WhatsApp Pre-filled Structured Flow
  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const enquiryRef = `DEMO-${Math.floor(100000 + Math.random() * 900000)}`;

    const message = `*DEMO APPOINTMENT ENQUIRY — ${BUSINESS_CONFIG.name}*\n` +
      `---------------------------------------\n` +
      `*Enquiry Ref:* ${enquiryRef}\n` +
      `*Client Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : "") +
      `*Branch:* ${formData.branch}\n` +
      `*Service Requested:* ${formData.service}\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Preferred Time Slot:* ${formData.timeSlot}\n` +
      (formData.notes ? `*Special Notes:* ${formData.notes}\n` : "") +
      `---------------------------------------\n` +
      `_Note: This is a sample enquiry message for demonstration purposes._`;

    const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;

    // Trigger celebration
    try {
      confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    } catch (_) {}

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmissionResult({
      type: "whatsapp",
      reference: enquiryRef,
      message: "Your pre-filled demo enquiry has opened in WhatsApp using the sample studio number. In this demo mode, sending this message simulates the enquiry flow without making a live booking.",
    });

    setIsSubmitting(false);
  };

  // Submit via Form Endpoint (External service or local confirmation)
  const handleWebFormEnquiry = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const enquiryRef = `DEMO-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      if (BUSINESS_CONFIG.booking.formEndpoint) {
        // Send real POST request if client provided endpoint
        const response = await fetch(BUSINESS_CONFIG.booking.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...formData,
            enquiryRef,
            salon: BUSINESS_CONFIG.name,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to submit form. Please use the WhatsApp demo option.");
        }
      }

      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch (_) {}

      setSubmissionResult({
        type: "web",
        reference: enquiryRef,
        message: "Your demo appointment enquiry has been submitted. In demonstration mode, this verifies the enquiry workflow. No live salon booking has been recorded.",
      });
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        form: err.message || "Submission failed. Please contact us via phone or WhatsApp.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      branch: BUSINESS_CONFIG.branches[0].name,
      service: "",
      date: todayStr,
      timeSlot: "11:00 AM - 01:00 PM",
      notes: "",
      consent: true,
    });
  };

  return (
    <div
      className="card-luxury"
      style={{
        padding: "36px 32px",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid rgba(197, 168, 128, 0.3)",
      }}
    >
      {submissionResult ? (
        /* Confirmed Enquiry Summary View */
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(197, 168, 128, 0.15)",
              color: "var(--color-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <CheckCircle size={42} />
          </div>

          <span className="badge-gold" style={{ marginBottom: "12px" }}>
            Enquiry Received • Status: Pending Salon Confirmation
          </span>

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "var(--color-primary)",
              marginBottom: "12px",
            }}
          >
            Thank You, {formData.fullName}!
          </h3>

          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--color-text-muted)",
              lineHeight: "1.65",
              maxWidth: "540px",
              margin: "0 auto 24px",
            }}
          >
            {submissionResult.message}
          </p>

          {/* Enquiry Summary Card */}
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              border: "1px solid rgba(197, 168, 128, 0.3)",
              borderRadius: "var(--radius-md)",
              padding: "24px",
              textAlign: "left",
              maxWidth: "500px",
              margin: "0 auto 28px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Enquiry Reference:</span>
              <strong style={{ fontSize: "0.9rem", color: "var(--color-gold)" }}>{submissionResult.reference}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Branch:</span>
              <strong style={{ fontSize: "0.9rem" }}>{formData.branch}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Requested Service:</span>
              <strong style={{ fontSize: "0.9rem" }}>{formData.service}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Preferred Date:</span>
              <strong style={{ fontSize: "0.9rem" }}>{formData.date}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Preferred Time:</span>
              <strong style={{ fontSize: "0.9rem" }}>{formData.timeSlot}</strong>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={handleReset}
              className="btn btn-outline-gold"
              style={{ padding: "10px 24px" }}
            >
              Submit Another Enquiry
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              className="btn btn-gold"
              style={{ padding: "10px 24px" }}
            >
              <Phone size={15} />
              Call Salon Desk
            </a>
          </div>
        </div>
      ) : (
        /* The Booking Enquiry Form */
        <form noValidate>
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.65rem",
                fontWeight: "700",
                color: "var(--color-primary)",
                marginBottom: "6px",
              }}
            >
              Request an Appointment
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
              Select your preferred date, branch, and service. Our front desk will confirm your scheduled slot.
            </p>
          </div>

          {errors.form && (
            <div
              style={{
                padding: "12px 16px",
                backgroundColor: "#fef2f2",
                border: "1px solid #f87171",
                borderRadius: "var(--radius-sm)",
                color: "#b91c1c",
                fontSize: "0.88rem",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <AlertCircle size={18} />
              <span>{errors.form}</span>
            </div>
          )}

          {/* Form Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Nair"
                  className={`form-input ${errors.fullName ? "error" : ""}`}
                  required
                />
              </div>
              {errors.fullName && <div className="form-error"><AlertCircle size={13} /> {errors.fullName}</div>}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`form-input ${errors.phone ? "error" : ""}`}
                required
              />
              {errors.phone && <div className="form-error"><AlertCircle size={13} /> {errors.phone}</div>}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Branch Selection */}
            <div className="form-group">
              <label htmlFor="branch" className="form-label">
                Select Salon Branch *
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="form-select"
              >
                {BUSINESS_CONFIG.branches.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name} ({b.area})
                  </option>
                ))}
              </select>
            </div>

            {/* Email Address (Optional) */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="priya@example.com"
                className={`form-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <div className="form-error"><AlertCircle size={13} /> {errors.email}</div>}
            </div>
          </div>

          {/* Service Selection */}
          <div className="form-group">
            <label htmlFor="service" className="form-label">
              Service Requested *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`form-select ${errors.service ? "error" : ""}`}
              required
            >
              <option value="">-- Choose a Ritual or Service --</option>
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.name} {srv.startingPrice ? `(From ${srv.startingPrice})` : ""}
                </option>
              ))}
            </select>
            {errors.service && <div className="form-error"><AlertCircle size={13} /> {errors.service}</div>}
          </div>

          {/* Date & Time Slot */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Preferred Date */}
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={todayStr}
                value={formData.date}
                onChange={handleChange}
                className={`form-input ${errors.date ? "error" : ""}`}
                required
              />
              {errors.date && <div className="form-error"><AlertCircle size={13} /> {errors.date}</div>}
            </div>

            {/* Time Slot */}
            <div className="form-group">
              <label htmlFor="timeSlot" className="form-label">
                Preferred Time Slot *
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="form-select"
              >
                {timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Optional Message / Special Request */}
          <div className="form-group">
            <label htmlFor="notes" className="form-label">
              Special Requests or Hair/Skin Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g. Inquiring about previous color history, bridal trial, or preferred senior stylist."
              className="form-textarea"
            />
          </div>

          {/* Consent Checkbox */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "0.84rem",
                color: "var(--color-text-muted)",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{ marginTop: "3px" }}
              />
              <span>
                I agree to let {BUSINESS_CONFIG.name} contact me via phone or WhatsApp regarding this appointment enquiry.
              </span>
            </label>
            {errors.consent && <div className="form-error"><AlertCircle size={13} /> {errors.consent}</div>}
          </div>

          {/* Clear Disclaimer Note */}
          <div
            style={{
              padding: "12px 14px",
              backgroundColor: "rgba(197, 168, 128, 0.12)",
              border: "1px solid var(--border-gold-subtle)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.8rem",
              color: "var(--color-text-main)",
              marginBottom: "24px",
              lineHeight: "1.5",
            }}
          >
            <strong>Important:</strong> {BUSINESS_CONFIG.booking.noticeText}
          </div>

          {/* Dual Submission Actions */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {/* Action 1: Instant WhatsApp Enquiry */}
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              disabled={isSubmitting}
              className="btn"
              style={{
                backgroundColor: "#25D366",
                color: "#ffffff",
                border: "none",
                padding: "14px 20px",
                fontSize: "0.92rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "var(--radius-full)",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageCircle size={18} />
              Enquire via WhatsApp
            </button>

            {/* Action 2: Direct Web Submission */}
            <button
              type="button"
              onClick={handleWebFormEnquiry}
              disabled={isSubmitting}
              className="btn btn-gold"
              style={{
                padding: "14px 20px",
                fontSize: "0.92rem",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              <Send size={16} />
              {isSubmitting ? "Submitting..." : "Submit Web Enquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
