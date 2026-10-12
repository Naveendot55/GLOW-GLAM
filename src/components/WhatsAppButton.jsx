import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsapp.defaultGreeting
  )}`;

  return (
    <aside aria-label="WhatsApp live chat assistance">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label={`Chat with ${BUSINESS_CONFIG.name} Reception on WhatsApp`}
      >
        <span className="whatsapp-tooltip">
          Chat with Reception
        </span>
        <div className="floating-whatsapp-btn">
          <span className="whatsapp-pulse"></span>
          <MessageCircle size={30} fill="#ffffff" color="#25D366" />
        </div>
      </a>
    </aside>
  );
}
