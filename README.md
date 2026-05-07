# TerraGreen Website

Static bilingual website for **TerraGreen** with the slogan **"Зелена поддръжка на терени"**.

The project is built as a safe static website: no backend, no database, no login, no trackers, no third-party scripts, and no user data storage. The contact form opens the visitor's email app with a prepared message.

## Structure

```text
terragreen-site/
├── assets/               # Local SVG logo, favicon and business-style visuals
├── index.html            # SEO, structure and content hooks
├── styles.css            # Responsive design and animations
├── script.js             # BG/EN switch, mobile menu, mailto form, subtle button hover effects
├── package.json          # Optional Vite localhost/build commands
├── robots.txt            # Basic crawler rule
├── .editorconfig         # Consistent formatting
├── .gitattributes        # Consistent line endings for Git
├── .gitignore            # Git ignore rules
└── .vscode/extensions.json
```

## Run locally in VS Code

### Option A: Vite localhost

1. Install Node.js LTS if you do not have it.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open:

```text
http://127.0.0.1:5173/
```

### Option B: VS Code Live Server

1. Install the VS Code extension **Live Server**.
2. Right-click `index.html`.
3. Click **Open with Live Server**.

## Build for publishing

```bash
npm install
npm run build
```

The production files will be generated in `dist/`.

## GitHub repository setup

```bash
git init
git add .
git commit -m "Initial TerraGreen website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

For GitHub Pages, you can either deploy the root static files directly or use the Vite `dist/` build output.

## Current business contact configuration

The contact details are centralized in `script.js`:

```js
const SITE_CONFIG = Object.freeze({
  phoneDisplay: '0879 264 515',
  phoneInternational: '+359879264515',
  contactEmail: 'office@terragreen.bg',
});
```

The only telephone number used is the mobile number from the original flyer: **0879 264 515**.

## Before publishing

- Replace the temporary brand name if needed.
- Confirm the exact service region and update the region text in `script.js`.
- Replace the SVG gallery placeholders with real before/process/after photos when available.
- Replace `office@terragreen.bg` when the final business email is known.
