# ⚡ QuickTools — Free Online Tools

QuickTools is a free, privacy-first collection of 23 everyday online tools built with plain HTML, CSS and vanilla JavaScript — no build step, no sign-up and no server uploads. Every tool runs 100% in the visitor's browser, so files and text never leave the user's device. Hosted on GitHub Pages at <https://saeed00120.github.io/quicktools/>.

## PDF Tools

1. **Merge PDF** (`merge-pdf.html`) — combine multiple PDFs in a chosen order using pdf-lib (CDN), with reorder/remove controls.
2. **Split PDF** (`split-pdf.html`) — extract a page range into one PDF, or split every page into separate PDFs downloaded as a ZIP (pdf-lib + JSZip, CDN).
3. **Rotate PDF** (`rotate-pdf.html`) — rotate all pages or a page range by 90/180/270 degrees, added to existing rotation (pdf-lib).
4. **Organize PDF** (`organize-pdf.html`) — visual page thumbnails (pdf.js) with move-left/move-right/delete, then save the new order with pdf-lib.
5. **JPG to PDF** (`jpg-to-pdf.html`) — build one PDF from JPG/PNG/WebP images with page size (A4/Letter/Fit), orientation and margin options (pdf-lib).
6. **PDF to JPG** (`pdf-to-jpg.html`) — render each page at 2× with pdf.js, download pages individually or all as a ZIP (JSZip).
7. **Compress PDF** (`compress-pdf.html`) — re-render pages as JPEGs (pdf.js) at a chosen quality and rebuild an image-only PDF (pdf-lib); the page states honestly that text is no longer selectable.
8. **Watermark PDF** (`watermark-pdf.html`) — stamp text on every page with opacity, angle (0/45°), font size and centred or tiled layout (pdf-lib).
9. **Page Numbers** (`page-numbers-pdf.html`) — add "Page X of Y", "X / Y" or "X" in four positions, with start number and font size (pdf-lib).
10. **Crop PDF** (`crop-pdf.html`) — setCropBox on every page using per-side point values, accounting for existing mediabox offsets (pdf-lib).
11. **Sign PDF** (`sign-pdf.html`) — draw a signature on a canvas pad or type a name in a cursive stack, then stamp the PNG on a chosen page and position (pdf-lib).
12. **Edit PDF** (`edit-pdf.html`) — add text and images on top of a page at a clicked position (pdf.js preview, click mapped to PDF coordinates, pdf-lib applies).
13. **PDF to Text** (`pdf-to-text.html`) — extract the text layer of all pages with pdf.js, with copy and .txt download; notes that scanned PDFs have no text layer (no OCR).

## Image Tools

14. **Image Compressor** (`image-compressor.html`) — shrink JPG/PNG/WebP images with a quality slider, format choice, size comparison and preview.
15. **Image Converter** (`image-converter.html`) — convert images between PNG, JPG and WebP via canvas.

## Text, QR & Password

16. **Word Counter** (`word-counter.html`) — live word/character/sentence/paragraph counts, reading time and top-5 frequent words.
17. **Case Converter** (`case-converter.html`) — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and aLtErNaTiNg, with copy button and live counts.
18. **QR Code Generator** (`qr-code-generator.html`) — create QR codes from text/URLs at 256/512/1024px and download as PNG (qrcodejs, CDN).
19. **Password Generator** (`password-generator.html`) — crypto-random passwords (8–64 chars) with character toggles, strength meter and copy button.

## Calculators & Converters

20. **Age Calculator** (`age-calculator.html`) — exact age in years/months/days, total days lived, weekday of birth and next-birthday countdown.
21. **BMI Calculator** (`bmi-calculator.html`) — BMI with metric/imperial toggle, category label and a colour scale.
22. **Percentage Calculator** (`percentage-calculator.html`) — X% of Y, X as a percent of Y, and percentage increase/decrease.
23. **Unit Converter** (`unit-converter.html`) — length, weight and temperature conversions with instant results and unit swap.

## Structure

- `index.html` — home page with the tools grouped into the four categories above, plus FAQ.
- `style.css` — all styling (shared).
- `script.js` — shared helpers only (footer year, active nav highlight); each tool's logic lives inline in its own page.
- `sitemap.xml` / `robots.txt` — SEO files for the GitHub Pages deployment.
