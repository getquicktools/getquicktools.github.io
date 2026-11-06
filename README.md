# ⚡ QuickTools — Free Online Tools

QuickTools is a free, privacy-first collection of everyday online tools built with plain HTML, CSS and vanilla JavaScript — no build step, no sign-up and no server uploads. Every tool runs 100% in the visitor's browser, so files and text never leave the user's device. Hosted on GitHub Pages at <https://saeed00120.github.io/quicktools/>.

## Tools

1. **Image Compressor** (`image-compressor.html`) — shrink JPG/PNG/WebP images with a quality slider, format choice, size comparison and preview.
2. **Image Converter** (`image-converter.html`) — convert images between PNG, JPG and WebP via canvas.
3. **Merge PDF** (`merge-pdf.html`) — combine multiple PDFs in a chosen order using pdf-lib (CDN), with reorder/remove controls.
4. **Word Counter** (`word-counter.html`) — live word/character/sentence/paragraph counts, reading time and top-5 frequent words.
5. **QR Code Generator** (`qr-code-generator.html`) — create QR codes from text/URLs at 256/512/1024px and download as PNG (qrcodejs, CDN).
6. **Password Generator** (`password-generator.html`) — crypto-random passwords (8–64 chars) with character toggles, strength meter and copy button.
7. **Age Calculator** (`age-calculator.html`) — exact age in years/months/days, total days lived, weekday of birth and next-birthday countdown.
8. **BMI Calculator** (`bmi-calculator.html`) — BMI with metric/imperial toggle, category label and a colour scale.
9. **Percentage Calculator** (`percentage-calculator.html`) — X% of Y, X as a percent of Y, and percentage increase/decrease.
10. **Case Converter** (`case-converter.html`) — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and aLtErNaTiNg, with copy button and live counts.
11. **Unit Converter** (`unit-converter.html`) — length, weight and temperature conversions with instant results and unit swap.

## Structure

- `index.html` — home page with the tool grid and FAQ.
- `style.css` — all styling (shared).
- `script.js` — shared helpers only (footer year, active nav highlight); each tool's logic lives inline in its own page.
- `sitemap.xml` / `robots.txt` — SEO files for the GitHub Pages deployment.
