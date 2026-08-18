# Rebrand "EINCODE" to "Vexora Studios"

This plan outlines the steps to transition the digital laboratory from the "EINCODE" brand to "Vexora Studios", focusing on FiveM scripts, custom MLOs, and optimized solutions, matching the aesthetic of Luma Node Studios.

## Context
The user wants to rebrand their personal portfolio/laboratory to a professional studio brand called "Vexora Studios". The new brand focuses on gaming development (FiveM), providing scripts and MLOs (Map Level Objects).

## Proposed Changes

### 1. Global Metadata & Layout
- **File**: `app/layout.tsx`
  - Update `title` from "EINCODE — Ehsan Ghaffar's Digital Laboratory" to "Vexora Studios — Premium FiveM Scripts & Custom MLOs".
  - Update `description` to reflect the new studio focus.
  - Update `keywords` to include "FiveM", "MLO", "GTAV Scripts", "Vexora Studios".
  - Update `authors`, `creator`, and `publisher`.
  - Update OpenGraph and Twitter metadata (titles, descriptions, site names).
  - Update `metadataBase` URL (if known, otherwise keep it configurable).

### 2. Header Rebranding
- **File**: `components/header.tsx`
  - Update the logo text from "EINCODE" to "VEXORA STUDIOS".
  - Update the navigation items:
    - Home -> Home
    - Projects -> Store (or Scripts)
    - Workbench -> Docs
    - Blog -> Discord (or keep Blog if they want)
  - Update social links to point to Vexora Studios' GitHub, Twitter, and potentially add a Discord link.
  - Update the status indicator text (e.g., "status: forging" -> "status: active").

### 3. Hero Section Transformation
- **File**: `components/hero-section.tsx`
  - Update the small tagline: "Vexora Studios — Where Innovation Meets Performance".
  - Update the main heading to something like "Forging premium FiveM experiences".
  - Update the typing text roles: ["building scripts", "crafting MLOs", "optimizing performance", "designing interiors", "forging systems"].
  - Update the ASCII Art to show "VS" or "VEXORA" instead of "CODE".
  - Update the terminal path: `terminal://vexora`.
  - Update the description text to reflect a studio instead of a personal workshop.

### 4. Projects (Featured Scripts) Update
- **File**: `components/projects-grid.tsx`
  - Replace the current "Ein" projects with placeholders for Vexora's scripts/MLOs.
  - Update descriptions, tags (e.g., "FiveM", "Lua", "MLO"), and URLs.
  - Change section title to "Featured Scripts & Artifacts".

### 5. Footer & Branding Consistency
- **File**: `components/footer.tsx`
  - Update branding text and copyright.
  - Update social links and handle references.
  - Change "Forged with Heart & code" to something studio-appropriate.

### 6. Structured Data
- **File**: `lib/structured-data.ts`
  - Update `generateWebsiteStructuredData` and `generatePersonStructuredData` (or change to `generateOrganizationStructuredData`).

### 7. Global Styles & Themes
- **File**: `app/globals.css`
  - Update the primary color variables (`--primary`) to a more studio-aligned color (e.g., a bright cyan or sleek white/black).
- **File**: `lib/themes.ts`
  - Update theme definitions to align with Vexora's branding.

## Verification Plan

### Automated Tests
- Run `npm run lint` to ensure no breaking changes in syntax.
- Run `npm run build` to verify the production build succeeds.

### Manual Verification
- **Visual Check**: Open the app and verify the header, hero, and footer show "Vexora Studios" correctly.
- **Link Check**: Verify all navigation and social links point to the correct destinations.
- **Metadata Check**: Use browser dev tools to inspect the `<title>` and `<meta>` tags.
- **Responsiveness**: Ensure the new logo text and navigation items fit well on mobile.
