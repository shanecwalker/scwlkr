# scwlkr — Link Page

A clean, fast, single-file link-in-bio page for **scwlkr**. Drop this into a GitHub repo (or your Hostinger file manager) and you're live.

## Featured Projects
- **The Media Hangar** - Real estate media & production
- **DFFW Daily** - News, local stories & updates
- **Dink Boys** - dinkboys.com

## 🔧 How to use
1. **Replace your profile image:** put your photo at `assets/img/profile.jpg` (or `.png`). Keep the name `profile.jpg` (or update the HTML `src`).
2. **Edit links & bio:** open `index.html` and update the text/URLs in the LINKS section.
3. **Colors & theme:** tweak CSS variables at the top of `assets/css/styles.css`.
4. **Favicon:** replace `assets/img/favicon.svg` (and `favicon.ico` if you add one) for your brand icon.
5. **Custom domain:** if you use GitHub Pages, add a `CNAME` file with your domain; or just upload the files to Hostinger public web root.

## 🚀 Deploy options
### GitHub Pages
- Create a repo and push these files to the `main` branch.
- In **Settings → Pages**, choose **Deploy from a branch**, and set **Branch: main / root**.
- Optional: add `CNAME` file with your custom domain.

### Hostinger (or any cPanel/FTP host)
- Upload the contents of this folder to your site's web root (often `public_html`).
- If you previously had WordPress and no longer use it, remove WordPress files (e.g., `wp-admin`, `wp-content`, `wp-includes`, and WP-specific PHP files). You only need this project's files (like `index.html`, `assets/`).
- If you still use WordPress elsewhere on the domain, put this page in a subfolder or a subdomain.

## 🖼️ Updating your profile picture
Replace `assets/img/profile.jpg` with your photo. Use a square image (e.g. 800×800). The site will auto-crop it into a circle.

## 🧩 Notes
- No external JS dependencies. Optional Google Fonts are loaded via `<link>` tags — remove them if you prefer system fonts.
- Lighthouse-friendly: semantic HTML, accessible labels, reduced motion preference respected.# scwlkr_website