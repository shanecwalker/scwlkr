# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static link-in-bio website for scwlkr (Shane Walker). It's a fully self-contained single-page site with no build process, no dependencies, and no runtime requirements beyond a web browser. All functionality is embedded directly in `index.html`.

## Architecture

### Core File
- **index.html** - Self-contained HTML page with embedded CSS and JavaScript. This is the entire production site.

### Alternative/Unused Assets
- **assets/css/styles.css** - Alternative stylesheet with different theme approach (NOT linked in index.html)
- **assets/js/main.js** - Utility functions for copy-to-clipboard and reduced motion (NOT linked in index.html)

### Images
- **assets/img/pfp-square.jpeg** (139KB) - Currently used profile photo
- **assets/img/dink-boys-logo.png** - Dink Boys brand logo
- **logo/scwlkr-logo_144px.png** (2.2KB) - Currently used favicon
- **Unused images**: pfp.jpeg, favicon.png, favicon.svg, profile.svg, instagram_logo.png

### Brand Assets
- **logo/scwlkr-logo_V1.png** - Full-size brand logo (35KB)
- **logo/scwlkr-logo_V1.ai** - Adobe Illustrator source file (245KB PDF format)

### Deployment
- **public_html/** - Empty directory for Hostinger/FTP deployment staging

## index.html - Complete Feature Reference

### HTML Structure
- Semantic HTML5 with proper ARIA labels and accessibility attributes
- Meta tags for SEO, Open Graph, and Twitter Cards
- Multiple favicon sizes (16x16, 32x32, 180x180, 192x192)
- Google Fonts: JetBrains Mono (weights: 400, 600, 700) with preconnect optimization
- External icon resources from cdn.simpleicons.org and api.iconify.design

### Content Sections
1. **Header** - Profile photo, name, bio, theme toggle
2. **Featured Links** (4 large cards with shimmer effect):
   - The Media Hangar (themediahangar.com)
   - DFFW Daily (dffwdaily.com)
   - Dink Boys (dinkboys.com)
   - Email (scwlkr8@gmail.com)
3. **Social Grid** (6 links in responsive grid):
   - Instagram (@scwlkr_)
   - TikTok (@scwlkr)
   - X/Twitter (@scwlkr)
   - LinkedIn (shane-walker-384a671a3)
   - Letterboxd (movieswitboat)
   - Discord (@scwlkr)
4. **Footer** - Copyright with dynamic year, icon links (Instagram, Email, X, LinkedIn)

### CSS Features (Embedded)

**Theme System:**
- Dual theme: dark (default) and light modes
- Toggle via `data-theme="light"` attribute on `<html>` element
- CSS custom properties for all colors and spacing
- Brand colors:
  - `--bg-dark: #08090A` (near-black background)
  - `--text-muted: #797B84` (gray text)
  - `--accent: #23CE6B` (brand green - primary action color)
  - Light mode: `#F2F5EA` (off-white background), `#0a0a0a` (text)

**Visual Design:**
- Radial gradient backgrounds with layered accent colors
- Card-based layout with shadows, borders, and hover effects
- Featured links have special styling with larger size and visual prominence
- Smooth transitions (100-300ms) on all interactive elements
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`

**Animations:**
- `@keyframes shimmer` - 3-second infinite shimmer effect on featured links (horizontal gradient sweep)
- Hover transforms: `translateY(-1px)` lift effect on links
- Focus ring animation (300ms) for keyboard navigation feedback

**Responsive Design:**
- **Desktop (>560px)**: Two-column social grid, horizontal header layout
- **Tablet (≤560px)**: Single-column grid, vertical header layout
- **Mobile (≤400px)**: Reduced sizes (avatar 70px, smaller padding)

### JavaScript Features (Embedded)

1. **Theme Toggle System:**
   - Toggles between dark and light themes on button click
   - Persists preference in `localStorage.setItem('theme', ...)`
   - Loads saved preference on page load: `localStorage.getItem('theme')`
   - Defaults to light mode if no preference saved
   - Updates button `aria-pressed` attribute for accessibility
   - Updates button label text ("Dark" or "Light")

2. **Dynamic Copyright Year:**
   - Auto-updates footer year using `new Date().getFullYear()`
   - Eliminates need for annual manual updates

3. **UTM Parameter Forwarding:**
   - Captures all URL query parameters on page load
   - Automatically appends them to all outbound HTTP links (not mailto/tel)
   - Enables analytics tracking of traffic sources (e.g., ?utm_source=instagram)
   - Error-safe with try/catch around URL parsing
   - Preserves original link behavior if parameter addition fails

4. **Keyboard Navigation:**
   - Press number keys 1-9 to focus corresponding links
   - Visual feedback: Adds `focus-ring` class with animation (removed after 300ms)
   - Accessibility enhancement for power users
   - Window-level keydown event listener

5. **Initialization:**
   - Runs on DOMContentLoaded to ensure DOM is ready
   - Initializes theme from localStorage
   - Sets up all event listeners
   - Applies UTM parameters to links

## Alternative Files (Not Currently Used)

### assets/css/styles.css
An alternative stylesheet with a different design approach:
- **Theme Method:** Uses `@media (prefers-color-scheme: light)` instead of toggle button
- **Colors:** `#0a0a0a`, `#F7F5F2` (parchment), `#6B4C47` (mahogany) - warmer palette
- **Typography:** System font stack instead of Google Fonts
- **Layout:** Three-column header, no featured links concept (all links equal)
- **Modern CSS:** Uses `color-mix()` function and oklab color space
- **Animation:** `@keyframes pop` with cubic-bezier easing
- **Utility:** Includes `.visually-hidden` class and copy button styles

### assets/js/main.js
Utility functions for potential future use:
- **Copy-to-Clipboard:** Finds elements with `data-copy` attribute, uses `navigator.clipboard.writeText()`, provides "Copied!" feedback for 1400ms
- **Reduced Motion:** Detects `prefers-reduced-motion: reduce` and disables ALL animations/transitions via injected `<style>` tag
- **Note:** More aggressive accessibility approach than index.html's CSS-only method

## Development Workflow

### Making Changes
1. Edit `index.html` directly - it's the entire site
2. Open in browser to test (no server required for local testing)
3. Test both themes with the toggle button
4. Test keyboard navigation (press 1-9 keys)
5. Test responsive design at various screen sizes (560px and 400px breakpoints)
6. Verify reduced motion support in browser settings

### Adding Links
- **Featured links:** Add to `.featured-links` section (large cards with shimmer)
- **Social links:** Add to `.social-grid` section (smaller grid items)
- **Footer icons:** Add to `footer .social-icons` (minimal icon-only links)
- **Important:** Maintain `rel="noopener"` on external links for security
- **Note:** Keyboard navigation supports up to 9 links (1-9 keys)

### Modifying Theme Colors
Edit CSS custom properties in `index.html`:
- **Dark theme:** `:root` selector (lines ~40-50)
- **Light theme:** `html[data-theme="light"]` selector (lines ~55-65)
- **Brand green:** `--accent: #23CE6B` - used for buttons, featured links, hover states

### Testing UTM Parameters
Add query parameters to URL (e.g., `index.html?utm_source=test&utm_campaign=launch`) and verify they're appended to outbound links.

## Deployment

### GitHub Pages
1. Push to main branch
2. Enable Pages in repository settings
3. Set source to main branch root
4. Access at `https://username.github.io/repo-name/`
5. Add CNAME file to root for custom domain

### Hostinger/FTP
1. Upload all files to web root (typically `public_html/`)
2. Ensure `index.html` is in the root
3. Upload `assets/` and `logo/` directories with their contents
4. Set file permissions (644 for files, 755 for directories)

### Deployment Checklist
- Verify all image paths are correct
- Test theme toggle functionality
- Check all external links
- Validate HTML (validator.w3.org)
- Test on mobile devices
- Verify favicon appears correctly
- Check Open Graph preview (opengraph.xyz)

## Technical Notes

### Dependencies
- **Zero npm packages** - No package.json or node_modules
- **No build process** - No webpack, vite, gulp, or bundlers
- **External resources:**
  - Google Fonts API (fonts.googleapis.com, fonts.gstatic.com)
  - Simple Icons CDN (cdn.simpleicons.org)
  - Iconify API (api.iconify.design)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Requires JavaScript for theme toggle, UTM forwarding, and keyboard nav
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- LocalStorage API for theme persistence

### Performance
- Minimal external requests (Google Fonts + icons only)
- No JavaScript frameworks or libraries
- Inline CSS/JS eliminates round trips
- Small page weight: ~10-15KB HTML + ~220KB images
- Fast First Contentful Paint (no render-blocking resources)

### Security
- All external links use `rel="noopener"` to prevent reverse tabnabbing
- No user input or forms (no XSS risk)
- No server-side code (static HTML only)
- No cookies or tracking (privacy-friendly)

### Accessibility
- Semantic HTML5 elements
- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Enter, 1-9 keys)
- Focus indicators on all focusable elements
- Reduced motion support for animations
- Sufficient color contrast in both themes
- Alt text on all images

## File Structure Reference

```
/Users/shanewalker/Desktop/scwlkr/
├── index.html                    # Main site (production-ready)
├── README.md                     # Project documentation
├── CLAUDE.md                     # This file (Claude Code instructions)
├── .gitignore                    # Git ignore rules (macOS files)
├── public_html/                  # Empty (FTP deployment staging)
├── assets/
│   ├── css/
│   │   └── styles.css           # Alternative stylesheet (unused)
│   ├── js/
│   │   └── main.js              # Utility functions (unused)
│   └── img/
│       ├── pfp-square.jpeg      # Profile photo (USED)
│       ├── pfp.jpeg             # Alternative photo (unused)
│       ├── favicon.png          # Alternative favicon (unused)
│       ├── favicon.svg          # SVG favicon (unused)
│       ├── profile.svg          # SVG placeholder (unused)
│       └── instagram_logo.png   # Local icon (unused)
└── logo/
    ├── scwlkr-logo_144px.png    # Favicon (USED)
    ├── scwlkr-logo_V1.png       # Full-size brand logo
    └── scwlkr-logo_V1.ai        # Illustrator source file
```

## Maintenance

### Regular Updates
- Update social media links/handles as needed
- Add/remove featured links based on current projects
- Update bio text in header
- Refresh profile photo if desired

### Seasonal/Periodic Tasks
- No manual year updates needed (JavaScript handles copyright year)
- Monitor external CDN uptime (Google Fonts, Simple Icons)
- Check for broken links periodically
- Update Open Graph image if changing branding

### Code Quality
- Validate HTML after changes: https://validator.w3.org/
- Test accessibility: https://wave.webaim.org/
- Check performance: https://pagespeed.web.dev/
- Verify mobile responsive: Use browser DevTools

## Common Tasks

### Change Profile Photo
Replace `/assets/img/pfp-square.jpeg` with new image (square aspect ratio recommended, ~82-100px display size).

### Add New Social Platform
1. Find icon on Simple Icons (simpleicons.org) or Iconify
2. Add new `<a>` tag to `.social-grid` in index.html
3. Use brand color for icon: `?color=%2323ce6b`
4. Add appropriate `aria-label` for accessibility

### Modify Shimmer Effect
Edit `@keyframes shimmer` in `<style>` section (around line 130-140). Adjust timing, gradient stops, or remove `animation` property from `.featured-link` class.

### Disable UTM Forwarding
Comment out or remove the UTM parameter forwarding code in the `<script>` section (around lines 350-365).

### Switch to Alternative Stylesheet
1. Link `assets/css/styles.css` in `<head>`
2. Remove or comment out embedded `<style>` block
3. Note: Will require significant HTML changes for full compatibility

## Version Control

This project uses Git with GitHub remote. The `.gitignore` excludes macOS system files (.DS_Store, etc.).

### Git Workflow
- **Branch:** `master` (main branch)
- **No specific branch strategy** - direct commits to master acceptable for solo project
- **Commit style:** Concise messages describing changes
