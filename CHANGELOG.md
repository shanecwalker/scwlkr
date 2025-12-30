# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Comprehensive CLAUDE.md documentation with complete feature reference
- CHANGELOG.md file for version tracking

## [1.0.0] - 2025-10-04

### Added
- Initial release of scwlkr link-in-bio website
- Self-contained single-page HTML architecture with embedded CSS and JavaScript
- Dual theme system (dark/light) with localStorage persistence
- Featured links section with shimmer animation effect
- Social media grid with 6 platform links
- Theme toggle button with accessibility support (ARIA labels)
- UTM parameter forwarding for analytics tracking
- Keyboard navigation (press 1-9 to focus links)
- Dynamic copyright year using JavaScript
- Responsive design with mobile, tablet, and desktop layouts
- Reduced motion support for accessibility
- Focus ring animation for keyboard navigation feedback
- Profile photo and brand favicon integration
- Footer with social icon links
- External icon integration via CDN (Simple Icons, Iconify)
- Google Fonts integration (JetBrains Mono)
- SEO meta tags, Open Graph, and Twitter Card support

### Technical
- Brand color palette: #23CE6B (brand green), #08090A (dark), #F2F5EA (light)
- Responsive breakpoints at 560px and 400px
- CSS Grid and Flexbox layout system
- Radial gradient backgrounds with accent colors
- Smooth transitions and hover effects (100-300ms timing)
- Security: `rel="noopener"` on all external links

### Files
- `index.html` - Main production site (self-contained)
- `assets/img/pfp-square.jpeg` - Profile photo
- `logo/scwlkr-logo_144px.png` - Brand favicon
- `logo/scwlkr-logo_V1.png` - Full-size brand logo
- `logo/scwlkr-logo_V1.ai` - Adobe Illustrator source file
- `assets/css/styles.css` - Alternative stylesheet (not linked)
- `assets/js/main.js` - Utility functions (not linked)
- `.gitignore` - Git ignore rules for macOS files
- `README.md` - Project documentation
- `CLAUDE.md` - Claude Code instructions

### Content
- **Featured Links:**
  - The Media Hangar (themediahangar.com)
  - DFFW Daily (dffwdaily.com)
  - Email (scwlkr8@gmail.com)
- **Social Platforms:**
  - Instagram (@scwlkr_)
  - TikTok (@scwlkr)
  - X/Twitter (@scwlkr)
  - LinkedIn (shane-walker-384a671a3)
  - Letterboxd (movieswitboat)
  - Discord (@scwlkr)

## [0.9.0] - 2025-10-04

### Changed
- Updated Discord name and link
- Updated bio text
- Changed various text elements during development
- Reorganized folder structure

### Fixed
- Moved files back to correct directory structure
- Removed .DS_Store files from repository

### Added
- Git repository initialization
- .gitignore file for macOS system files

## Development History

**2025-10-04:**
- Multiple iterative updates to Discord integration
- Bio text refinements
- Directory structure optimization
- Git repository setup and cleanup

---

## Categories Reference

This changelog uses the following categories:

- **Added** - New features or functionality
- **Changed** - Changes to existing features
- **Deprecated** - Features that will be removed in future versions
- **Removed** - Features that have been removed
- **Fixed** - Bug fixes
- **Security** - Security-related changes
- **Technical** - Technical implementation details
- **Files** - File additions, removals, or reorganizations
- **Content** - Content updates (links, text, images)

## Version Numbering

This project follows semantic versioning principles:
- **Major version (X.0.0)** - Significant redesigns or breaking changes
- **Minor version (0.X.0)** - New features or substantial updates
- **Patch version (0.0.X)** - Bug fixes and minor tweaks

Current version: 1.0.0 (stable release)
