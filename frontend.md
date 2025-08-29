````markdown
# case-grid: Project Overview

This document outlines the requirements for building **case-grid**, a web application that lists Acts and Rules for Indian states and makes the official PDFs easy to find, filter, and download.

---

## Feature Requirements

### 1) Acts & Rules Listing
- Display a browsable catalog of **Acts** and **Rules** organized by **State**.
- Each entry shows: Title, Enacting Authority (if available), Year, Short Description (optional), and file size (if known).
- Every item includes a **Download PDF** button that links to the official/source PDF.

### 2) Landing Page
- A clean landing page introducing case-grid with:
  - Brief value proposition ("Find, filter, and download Acts & Rules by state").
  - Prominent **Search** input and **State filter** (quick-start panel).
  - Featured/Recently added Acts or popular states (optional).

### 3) Acts/Rules Detail Link
- Each list item links to a **detail page** with:
  - Full title, metadata (state, year, category if applicable), and source.
  - Direct **Download PDF** action (primary).
  - Related Acts/Rules suggestions (same state or topic) (optional).

### 4) Text Search
- Full-text search across titles (and optionally summaries/metadata).
- Instant search results with debounced input.
- Highlight matched terms in results (optional).

### 5) State Filter
- Filter list by **State** using dropdown, chips, or sidebar list.
- Allow multi-select (optional) and a clear **Reset** control.
- Persist the selected state(s) in the URL query string for shareable links.

### 6) Downloadable PDFs
- All Acts/Rules must provide a **direct, valid PDF link**.
- If PDFs are proxied through our server, stream with appropriate headers.
- Handle missing/invalid links gracefully with a fallback message.

---

## Non-Functional & UX Notes
- Responsive design for desktop, tablet, and mobile.
- Accessible controls (ARIA labels, keyboard navigation, readable contrast).
- Fast loading lists with pagination or infinite scroll.
- URL-driven state (search and filters reflected in query params).
- Basic analytics for searches and downloads (optional).

---

## Relevant Documentation
- **Data Sources / APIs:**
  - _Paste links to official government portals or open data endpoints here._
- **PDF Handling / Streaming:**
  - _Paste your server/storage documentation here._

> Replace placeholders with the documentation you plan to use.

---

## Current File Structure

_Paste a screenshot of your project folder structure here._

---

## Rules for File Organization
- All **new components** go in the `/components` folder and follow a consistent naming pattern (e.g., `StateFilter.tsx`, `SearchBar.tsx`, `ActsGrid.tsx`, `ActCard.tsx`, `DownloadButton.tsx`).
- All **pages** live in the `app` folder using the App Router.
- Keep **server actions** or API routes in `app/api/*` if needed.
- Shared types/constants in `/lib` (e.g., `types.ts`, `states.ts`).
- Assets (icons, logos) in `/public`.

---

## Suggested Pages & Components

### Pages (in `app/`)
- `/` — Landing page with hero, search, and state filter.
- `/acts` — List view (accepts `?q=` for search and `?state=` for filters).
- `/acts/[slug]` — Detail page with metadata and download.

### Core Components (in `/components`)
- `SearchBar` — Debounced input, updates URL `q` param.
- `StateFilter` — Dropdown/chips; updates URL `state` param.
- `ActsGrid` — Responsive grid list with pagination.
- `ActCard` — Title, metadata, and primary **Download PDF** action.
- `EmptyState` — No results found UI.
- `Loader` — Loading indicator during fetch.

---

## Data Model (suggestion)
```ts
// types.ts
export type Act = {
  id: string;
  slug: string;
  title: string;
  state: string; // e.g., "Tamil Nadu"
  year?: number;
  category?: string; // Act | Rule
  pdfUrl: string;
  sizeBytes?: number;
  summary?: string;
  source?: string; // origin website
  createdAt?: string;
  updatedAt?: string;
};
````

---

## Routing & URL Conventions

* Search: `/acts?q=contract`
* Filter by state: `/acts?state=Tamil%20Nadu`
* Combined: `/acts?q=labour&state=Karnataka`

---

## Acceptance Criteria

* Users can land on `/`, discover the purpose, and immediately search or filter by state.
* `/acts` returns relevant results for a given text query and/or state filter.
* Every result has a working **Download PDF** link.
* Detail pages exist for each item with a clear d
