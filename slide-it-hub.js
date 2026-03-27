/**
 * Slide IT Hub — Shared JS
 * https://jake-slide.github.io/slide-it-hub-assets/slide-it-hub.js
 *
 * Add to every IT Hub page <head> (before any other scripts):
 *   <script src="https://jake-slide.github.io/slide-it-hub-assets/slide-it-hub.js"></script>
 */

// ── Theme initialisation ────────────────────────────────────────────────────
// Runs immediately on load to apply saved theme before paint — prevents flash.
(function () {
  var saved = localStorage.getItem('slide-theme');
  var dark = saved ? saved === 'dark' : true; // default: dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
})();

// ── Toggle function — call this from the toggle button's onclick ────────────
function slideToggleTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('slide-theme', next);

  // Update all toggle button labels on the page
  document.querySelectorAll('.theme-toggle-label').forEach(function (el) {
    el.textContent = next === 'dark' ? 'Light' : 'Dark';
  });

  // Swap sun/moon icon
  document.querySelectorAll('.theme-toggle-icon').forEach(function (el) {
    el.textContent = next === 'dark' ? '☀' : '🌙';
  });
}

// ── Back navigation ─────────────────────────────────────────────────────────
// Auto-injects an "← IT Hub" bar below the header on every page.
// Add data-hub-root to <body> on the Hub Launcher itself to suppress it.
document.addEventListener('DOMContentLoaded', function () {
  if (!document.body.hasAttribute('data-hub-root')) {
    var header = document.querySelector('.slide-header');
    if (header) {
      var nav = document.createElement('div');
      nav.className = 'slide-back-nav';
      nav.innerHTML = '<a class="slide-back-link" href="https://sites.google.com/slide.tech/it-hub-launcher/home" target="_blank" rel="noopener">'
        + '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L4 7l5-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        + ' IT Hub</a>';
      header.insertAdjacentElement('afterend', nav);
    }
  }
});

// ── Standard header HTML ────────────────────────────────────────────────────
// Call slideRenderHeader(title, subtitle) to inject the standard header
// into an element with id="slide-header-mount".
// Or just write the HTML manually using the pattern below.
//
// Manual HTML pattern for each page:
//
// <div class="slide-header">
//   <div class="slide-header-bg">
//     <div class="slide-header-bg-mid"></div>
//     <div class="slide-header-bg-grain"></div>
//     <div class="slide-header-accent"></div>
//   </div>
//   <div class="slide-header-inner">
//     <div class="slide-header-top">
//       <div class="slide-header-brand">
//         <img class="slide-header-logo"
//              src="https://slide.tech/wp-content/uploads/2025/03/transblue.png"
//              alt="Slide" />
//         <div class="slide-header-divider"></div>
//         <div>
//           <div class="slide-header-title">PAGE TITLE</div>
//           <div class="slide-header-subtitle">Page subtitle</div>
//         </div>
//       </div>
//       <button class="theme-toggle" onclick="slideToggleTheme()">
//         <span class="theme-toggle-icon">🌙</span>
//         <span class="theme-toggle-label">Light</span>
//       </button>
//     </div>
//     <!-- any page-specific header content (search bar, progress, etc.) -->
//   </div>
// </div>
