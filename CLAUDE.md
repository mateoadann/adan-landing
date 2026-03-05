# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ADAIN landing page — a single-page site for an AI automation consulting company targeting SMEs. Built with React 19 + Vite + Tailwind CSS. All content is in Spanish.

## Commands

- `npm run dev` — Start dev server with HMR
- `npm run build` — Production build
- `npm run lint` — ESLint (JS/JSX)
- `npm run preview` — Preview production build locally

No test framework is configured.

## Architecture

Single-page app with no routing library. Navigation uses hash-based scroll anchors (`#home`, `#valor`, `#proceso`, `#clientes`, `#contacto`).

**`src/App.jsx`** — Contains the entire landing page: header, all sections, and footer. Sub-components (`SectionValor`, `SectionProceso`, `SectionClientes`) and inline SVG icon components are defined within this file.

**`src/index.css`** — Tailwind directives plus custom keyframe animations (`marquee`, `blob`, `gradientSoft`) with corresponding utility classes.

**`index.html`** — Entry point with SEO meta tags (Open Graph, Twitter Card, Google Site Verification, canonical URL).

**`public/`** — Static assets: favicon, OG image, robots.txt, sitemap.xml.

## Styling

- Tailwind CSS utility-first, no custom design system or theme extensions
- Color palette: slate grays, orange-500 accent, sky/blue secondary
- Responsive: mobile-first with `md:` breakpoints
- Custom animations defined in `index.css` (marquee scroll, blob morph, gradient)

## Key Constants (in App.jsx)

CTA links (`CALENDLY_LINK`, `WHATSAPP_LINK`, `EMAIL`, `EMAIL1`) are defined as top-level constants.

## State

Minimal local state via `useState` for UI only: header compact mode on scroll (40px threshold) and nav link visibility (160px threshold).
