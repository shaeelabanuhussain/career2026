# Hearts Academy

Hearts Academy's Industry Readiness Program website, built with [Next.js](https://nextjs.org) 16, [React](https://react.dev) 19, and [Tailwind CSS](https://tailwindcss.com) 4. Deployed on [Netlify](https://www.netlify.com).

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Deployment

The site is deployed on Netlify with static export. Configuration is in [netlify.toml](netlify.toml).

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** 20

## Project Structure

```
app/            # Next.js App Router pages and layouts
  contact/      # Contact page
components/     # Reusable UI components
hooks/          # Custom React hooks
public/         # Static assets (images, icons)
```
