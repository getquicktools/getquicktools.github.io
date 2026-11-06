/* QuickTools — shared helpers only.
   Page-specific tool logic lives in each page's own inline <script>. */
(function () {
  "use strict";

  // Footer copyright year (keeps the footer current with no build step).
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight the nav link for the page currently being viewed.
  var path = window.location.pathname || "";
  var page = path.substring(path.lastIndexOf("/") + 1);
  if (!page) {
    page = "index.html";
  }
  var links = document.querySelectorAll(".main-nav a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("href") === page) {
      links[i].classList.add("active");
    }
  }
})();
