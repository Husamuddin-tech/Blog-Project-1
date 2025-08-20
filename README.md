# Blog‑Project‑1

Your go‑to Vite + JavaScript blog starter. Easily write, preview, and publish blog posts with modern tooling.

##  Project Overview

This project is a lightweight blog built with [Vite](https://vitejs.dev/) and vanilla JavaScript:

- Fast and minimal setup
- Live reloading and modern build tools
- Modular structure—`public/` for static assets, `src/` for your application logic

---

##  Features

- **Fast dev experience** via Vite
- **Simple JS architecture**—no frameworks required
- **Static-friendly**—ideal for seamless deployment on GitHub Pages, Netlify, etc.
- **Scalable structure**—expand with routing, Markdown, or a headless CMS as needed

---

##  Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (comes bundled with Node.js)

### Setup & Run

```bash
git clone https://github.com/Husamuddin-tech/Blog‑Project‑1.git
cd Blog‑Project‑1
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the blog in action, with live reload as you code.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory—perfect for static hosting.

---

##  Project Structure

```
/
├── public/         ← Static assets (images, index.html template)
├── src/
│   ├── main.js     ← Entry point
│   └── styles.css  ← Styles
├── .gitignore      ← Files to omit from Git (e.g., node_modules, .env)
├── package.json    ← Dependencies & scripts
├── vite.config.js  ← Vite configuration
└── README.md       ← You’re here!
```

---

##  Appwrite Notice: Image Preview Quirk

> **Heads‑up for Appwrite users**:  
> If you’re using the latest version of Appwrite, you might notice that image **previews don’t display properly**—especially for formats like `.webp`. Instead, you may get a blank placeholder or no thumbnail at all.

###  Workarounds:

- Use `getFileView()` instead of `getFilePreview()` for `.webp` files—though note, this may skip client-side optimizations.
- For other formats, double-check your bucket settings and permissions. Some users experience inconsistent behavior based on the bucket or preview parameters.

Feel free to customize this section depending on your exact Appwrite setup or share any relevant error messages in issues for collaborative troubleshooting.

---

##  Future Enhancements

- Add Markdown support or a CDN
- Use a UI framework (e.g., React, Vue)
- Integrate Appwrite (Auth/DB/Storage) for dynamic content
- Bring in CI/CD for auto-deployments

---

##  Contributing

Contributions are welcome! Please:

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/my-cool-feature`)  
3. Commit and push  
4. Open a Pull Request with context and screenshots, if applicable

---

##  License

[MIT License](LICENSE)

---

**Enjoy building!**  
Need help configuring Appwrite previews or extending the blog? Just say the word—I’d love to help.
