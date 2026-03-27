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
