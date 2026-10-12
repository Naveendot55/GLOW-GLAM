import { useEffect } from "react";
import { BUSINESS_CONFIG } from "../config/business";

/**
 * Custom hook to update document title and meta tags for on-page SEO
 * @param {string} title - Page title suffix
 * @param {string} description - Page meta description
 */
export function useSEO(title, description) {
  useEffect(() => {
    // Set document title
    const fullTitle = title 
      ? `${title} | ${BUSINESS_CONFIG.name}` 
      : `${BUSINESS_CONFIG.name} — ${BUSINESS_CONFIG.tagline}`;
    document.title = fullTitle;

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
    }

    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description]);
}
