# ⚡ QuickTools — Free Online Tools

QuickTools is a free, privacy-first collection of 38 everyday online tools built with plain HTML, CSS and vanilla JavaScript — no build step, no sign-up and no server uploads. Every tool runs 100% in the visitor's browser, so files and text never leave the user's device. Hosted on GitHub Pages at <https://saeed00120.github.io/quicktools/>.

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
16. **Image Resizer** (`resize-image.html`) — resize by exact pixel dimensions with aspect-ratio lock, or by percentage slider/presets; before/after dimensions and size estimate.
17. **Background Remover** (`remove-background.html`) — on-device AI background removal (@imgly/background-removal ES module via jsDelivr) with progress bar and transparent-PNG download; the page states the first use downloads an AI model of tens of MB from the library CDN.

## Video Tools

18. **Video Compressor** (`video-compressor.html`) — ffmpeg.wasm single-thread build (@ffmpeg/ffmpeg + @ffmpeg/core ES modules via jsDelivr) re-encodes to MP4 at Original/720p/480p/360p with CRF 23/28/32 quality, AAC 128k audio, progress bar and before/after sizes; the page notes on-device processing can be slow and recommends files under ~200 MB.

## Finance Calculators

19. **Currency Converter** (`currency-converter.html`) — 33 currencies with live rates fetched from the free open.er-api.com endpoint (no key), swap button, unit-rate line and "rates updated" timestamp; conversion disabled with a clear error if the fetch fails.
20. **Loan / EMI Calculator** (`loan-calculator.html`) — monthly payment, total interest and total payment with a year-by-year amortisation table; currency symbol selector ($/£/€/Rs), years-or-months term, zero-interest guard.
21. **Compound Interest Calculator** (`compound-interest.html`) — future value with yearly/half-yearly/quarterly/monthly/daily compounding plus optional monthly contributions, and a year-by-year growth table.
22. **Tip Calculator** (`tip-calculator.html`) — tip presets (10/15/18/20/25%) plus custom percentage, bill splitting with per-person tip and total.

## Text, Voice, QR & Password

23. **Word Counter** (`word-counter.html`) — live word/character/sentence/paragraph counts, reading time and top-5 frequent words.
24. **Case Converter** (`case-converter.html`) — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and aLtErNaTiNg, with copy button and live counts.
25. **Text to Speech** (`text-to-speech.html`) — reads text aloud with the browser's speechSynthesis voices; voice/rate/pitch controls and pause/resume/stop; notes that voices depend on the visitor's browser and device and no audio file is produced.
26. **QR Code Generator** (`qr-code-generator.html`) — create QR codes from text/URLs at 256/512/1024px and download as PNG (qrcodejs, CDN).
27. **Password Generator** (`password-generator.html`) — crypto-random passwords (8–64 chars) with character toggles, strength meter and copy button.

## Tests & Timers

28. **Typing Test** (`typing-test.html`) — 60-second typing test with 4 built-in paragraphs, per-character highlighting, live WPM/accuracy and final gross/net WPM with correct/incorrect character counts.
29. **Stopwatch & Timer** (`stopwatch-timer.html`) — lap stopwatch (mm:ss.cs) plus a countdown timer with progress bar and a WebAudio beep at zero.

## Developer Tools

30. **JSON Formatter** (`json-formatter.html`) — format (2-space), minify and validate JSON with exact parse-error messages, output character/line counts and copy button.
31. **Base64 Encoder & Decoder** (`base64-encoder-decoder.html`) — UTF-8 safe Base64 encode/decode (TextEncoder/TextDecoder) with swap and copy; invalid input gives a clear error.
32. **Color Converter** (`color-converter.html`) — HEX/RGB/HSL/HSV values with copy buttons and a clickable shades-and-tints row generated from the base color.

## Calculators & Converters

33. **Age Calculator** (`age-calculator.html`) — exact age in years/months/days, total days lived, weekday of birth and next-birthday countdown.
34. **BMI Calculator** (`bmi-calculator.html`) — BMI with metric/imperial toggle, category label and a colour scale.
35. **Calorie Calculator** (`calorie-calculator.html`) — BMR and TDEE via Mifflin-St Jeor with metric/imperial inputs, five activity levels and ±250/±500 loss/gain targets; clearly labelled as an estimate, not medical advice.
36. **Percentage Calculator** (`percentage-calculator.html`) — X% of Y, X as a percent of Y, and percentage increase/decrease.
37. **Date Calculator** (`date-calculator.html`) — days between two dates (total days, weeks, and a years/months/days breakdown) plus add/subtract days with the resulting weekday.
38. **Unit Converter** (`unit-converter.html`) — length, weight and temperature conversions with instant results and unit swap.

## Structure

- `index.html` — home page with the tools grouped into the eight categories above, plus FAQ.
- `style.css` — all styling (shared).
- `script.js` — shared helpers only (footer year, active nav highlight); each tool's logic lives inline in its own page (classic script, or an ES module for the background remover and video compressor).
- `sitemap.xml` / `robots.txt` — SEO files for the GitHub Pages deployment.
