import fs from "fs";
const outDir = "app/internship";
fs.mkdirSync(outDir, { recursive: true });

const app = fs.readFileSync("bistec-internship/src/App.css", "utf8");

const classes = [
  "cv-btn--outline",
  "cv-btn-icon",
  "cv-section",
  "cv-inner",
  "cv-sub",
  "cv-btn",
  "cv-note",
  "cv-actions",
  "call-section",
  "call-inner",
  "call-btn",
  "contact-location",
  "contact-address",
  "contact-hero",
  "contact-cards",
  "contact-card",
  "contact-icon--gmail",
  "contact-icon--whatsapp",
  "contact-icon",
  "contact-detail",
  "footer-inner",
  "footer-brand",
  "footer-links",
  "footer",
  "form-success",
  "form-sub",
  "form-group",
  "form-row",
  "submit-btn",
  "apply-section",
  "apply-inner",
  "anchor-quote",
  "offer-grid",
  "offer-item",
  "section-divider",
  "section",
  "hero-image",
  "hero-label",
  "hero-sub",
  "hero",
  "nav-links",
  "nav-link",
  "nav-logo",
  "nav",
  "logo-img",
];

let out = app;
for (const c of classes) {
  const re = new RegExp(`\\.${c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
  out = out.replace(re, `.ip-${c}`);
}

const base = `/* Scoped internship pages — /internship */
.ip-wrap {
  --black: #0a0a0a;
  --dark: #1a1a1a;
  --grey-900: #2a2a2a;
  --grey-700: #555;
  --grey-500: #888;
  --grey-300: #bbb;
  --grey-100: #f5f5f5;
  --white: #fff;
  --max-width: 700px;
  min-height: 100vh;
  scroll-behavior: smooth;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--black);
  background: var(--white);
  line-height: 1.7;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

.ip-wrap *,
.ip-wrap *::before,
.ip-wrap *::after {
  box-sizing: border-box;
}

.ip-wrap a {
  color: inherit;
  text-decoration: none;
}

.ip-wrap img {
  max-width: 100%;
  display: block;
}

.ip-wrap ::selection {
  background: var(--black);
  color: var(--white);
}

`;

fs.writeFileSync("app/internship/internship.css", base + out);
