# Security Audit Report - Orbita Landing Page
**Date:** 2025-12-10
**Target:** Static HTML Landing Page

## Executive Summary
The Orbita landing page is a static site (HTML/CSS/JS) with no server-side backend in this repository. The attack surface is minimal. The primary security considerations are Client-Side vulnerabilities (XSS, Clickjacking) and external resource integrity.

## Findings & Remediation

### 1. External Links Security (Fixed)
*   **Issue:** External links to WhatsApp and Instagram used `target="_blank"` without `rel="noopener noreferrer"`. This exposes the site to "Reverse Tabnabbing," where the linked page could potentially manipulate the originating page.
*   **Status:** ✅ **FIXED**. Added `rel="noopener noreferrer"` to all external links.

### 2. Content Security Policy (CSP)
*   **Issue:** No CSP meta tag potentially allows loading of malicious scripts if XSS were possible (e.g., via compromised 3rd party libraries).
*   **Recommendation:** Implement a strict CSP to allow only known sources (Google Fonts, CDNJS for GSAP).
*   **Action:** Will implement a meta tag CSP.

### 3. Subresource Integrity (SRI)
*   **Issue:** CDN links for GSAP scripts (`cdnjs.cloudflare.com`) do not use Subresource Integrity (SRI) hashes. If the CDN is compromised, malicious code could be injected.
*   **Recommendation:** Use SRI hashes for all external library imports.

### 4. Input Validation
*   **Status:** N/A. The site has no forms or user input fields.

### 5. HTTPS / Deployment
*   **Recommendation:** Ensure Vercel (or hosting provider) forces HTTPS. HSTS headers should be enabled server-side (Vercel does this by default).

## Next Steps
1.  Add CSP Meta Tag.
2.  (Optional) Switch to local NPM packages or add SRI hashes for CDN scripts.
