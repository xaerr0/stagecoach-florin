# Stagecoach Restaurant: Site Audit

Comparison of the current site (stagecoachflorin.com, built on GoDaddy Website Builder) against the replacement in this repo. Everything below was observed directly on the live site on 2026-09-29.

## 1. The homepage is one 26,000-pixel-tall page

The entire site (hero, full menu of over 130 items, photo galleries, reviews, about section, catering menu, and a contact form) is stacked on a single URL. A full-page screenshot of the homepage measures **1,027 × 26,231 pixels**. A visitor who wants today's hours has to scroll past the entire breakfast menu to find it near the bottom.

The new site splits this into four pages (Home, Menu, Catering, Contact), and the menu itself is organized into seven clickable categories instead of one unbroken scroll. "What's in the omelets" is a tab click away, not a few thousand pixels of scrolling.

## 2. Unfilled template placeholders are live on the site right now

Two GoDaddy Website Builder placeholder prompts were never replaced with real copy and are visible to every visitor:

- Homepage, "About Us" widget: **"What's something exciting your business offers? Say it here."**
- Homepage, "Huge menu" widget: **"Give customers a reason to do business with you."**
- Two separate menu sections also carry the builder's default note: **"Add a footnote if this applies to your business."**

These are template scaffolding, not content, left over from however the site was originally assembled. The new site replaces every section with real copy about this specific restaurant: 40-plus years on Florin Road, scratch-made gravy, the actual signature dishes.

## 3. The photo gallery doesn't load

The homepage has three separate "Photo Gallery" sections. On inspection, every gallery image resolves to `transparent_placeholder.png`, a blank 1×1 tracking pixel, rather than an actual photo. Visitors scrolling past these sections see empty tiles with captions like "SHRIMP N' ANDOUILLE SAUSAGE GRITS!! WEEKEND ONLY SPECIAL" sitting over nothing. Only one image on the entire site (the hero exterior shot) actually renders at full size.

The new site uses that same real exterior photo plus an actual plated dish photo pulled from the restaurant's own Instagram, and doesn't promise a gallery it can't deliver.

## 4. Page weight and third-party bloat

A single homepage load pulls **53 network requests**, including:
- 29 separate GoDaddy widget JavaScript bundles (`bs-layout11`, `bs-index`, `bs-index2`, `bs-index3`, `bs-loaders`, `bs-navigationDrawer`, etc.) just to render the page shell
- A 404 to `/markup/ad`
- Three separate tracking beacons to `csp.secureserver.net` on every visit
- Two custom web fonts loaded from GoDaddy's font proxy rather than a CDN

The new site is plain HTML/CSS with one small JavaScript file for the nav and menu tabs: no third-party widget framework, no ad-tracking beacons, and a fraction of the requests.

## 5. Basic SEO is missing or wrong

- **No structured data.** A restaurant with a name, address, phone number, and hours has zero `LocalBusiness`/`Restaurant` schema markup, so Google can't build a rich result (map card, hours, price range) from it. The new site includes full `Restaurant` JSON-LD with address, phone, hours, and cuisine.
- **No canonical tag** on any page.
- **14 of 18 images have no alt text.** That's meaningless for screen readers and for image search.
- **Meta description has a typo**: it currently reads *"we specialize in home cooked food , gots , liver n onions..."*, with "gots" in place of a real word. The new site ships a clean, accurate description on every page.
- **The homepage `<h1>` has a typo baked into the markup**: "Welcome to Stagec**OACH**", inconsistent capitalization that reads as broken, not stylized.
- Only one page (the homepage) has any meta description at all; Menu, About, and Catering-equivalent content have none.

## 6. Mobile experience

To its credit, the mobile layout mostly doesn't visually break: GoDaddy's builder handles reflow reasonably. But because everything lives on one page, a phone visitor scrolls through the full 130-item menu, three broken photo galleries, and a Google-widget review embed just to reach the address and hours at the very bottom. The new site puts hours, phone, and address in a header strip that's visible on every page from the first screen.

## What the new site adds

- Four focused pages instead of one endless scroll: Home, Menu (tabbed by category), Catering, Contact (with an embedded map).
- Full `Restaurant` schema markup, real meta descriptions and canonical tags on every page, and alt text on every image.
- The complete existing menu, transcribed and organized, with nothing dropped and nothing invented.
- The real storefront photo and a real plated dish, both sourced from the restaurant's own site and Instagram: no stock photography.
- A dedicated Catering page laying out the after-hours event package (pricing, menu choices, booking terms) that's currently buried in a scroll on the homepage.
- Zero third-party trackers, zero widget bloat, and a static site that deploys with no build step.

## Recommendation for launch

The current photo gallery is broken, so real photography is a gap on both sites. Beyond the hero and the one dish photo used here, a phone-shot batch of the exterior, the dining room, and 4–5 signature plates (chicken fried steak, biscuits n' gravy, the Sunday specials) would let the new site's gallery and menu pages do more visual work than either site currently can.
