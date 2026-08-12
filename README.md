# Sanskar Rai — Portfolio Page

A resume/portfolio landing page built with plain **HTML, CSS, and JavaScript**, using a classic `<frameset>` layout to split the page into two fixed regions: a 30% header band and a 70% content band.

Live look: open `index.html` directly in a browser (no build step, no dependencies).

---

## Project Structure

```
.
├── index.html              # Frameset shell — splits the page 30% / 70%
├── top.html                 # Top frame (30%): name, objective, social links
├── bottom.html               # Bottom frame (70%): skills, certificates, education, contact, resume button
├── style.css                 # Shared styling for both frames
├── script.js                  # Shared JS (resume button hook)
└── SanskarRaiResume.pdf        # Downloadable resume (add your own)
```

---

## Features

- **30:70 split layout** using `<frameset rows="30%,70%">` — objective and socials up top, everything else below.
- **Career objective + social links** (LinkedIn, GitHub, email) as styled `<div>` cards.
- **Skill sets** split into Technical and Soft skills.
- **Certificates**, **education history**, and **contact info** sections.
- **Download Resume** button that triggers a direct file download via the HTML `download` attribute — no JS required for the download itself.
- Fully responsive within each frame using CSS Flexbox (`flex-wrap`).
- Subtle hover animations on links and buttons.

---

## Tech Stack

- HTML5 (`<frameset>` / `<frame>`)
- CSS3 (Flexbox, gradients, transitions)
- Vanilla JavaScript (no frameworks, no build tools)

---

## 🚀 Getting Started

No installation needed — this is a static, dependency-free site.

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Add your resume PDF to the project folder, named to match the `href` in `bottom.html` (currently `SanskarRaiResume.pdf`).
3. Open `index.html` in your browser:
   ```bash
   # macOS
   open index.html
   # Windows
   start index.html
   # Linux
   xdg-open index.html
   ```

That's it — no server required, though you can optionally serve it with any static server (e.g. `npx serve .` or the VS Code "Live Server" extension) if you prefer.

---

##  Customizing

| What to change | Where |
|---|---|
| Name, title, objective text | `top.html` → `.objective` |
| LinkedIn / GitHub / email links | `top.html` → `.socials` |
| Technical / Soft skills | `bottom.html` → `.skills-grid` |
| Certificates | `bottom.html` → `.cert-list` |
| Education history | `bottom.html` → `.edu-item` |
| Contact details | `bottom.html` → `.contact-grid` |
| Resume file | `bottom.html` → `#resumeBtn` `href`/`download`, plus the actual PDF in the project folder |
| Colors, fonts, spacing | `style.css` |

---

## A Note on `<frameset>`

`<frameset>` and `<frame>` were removed from the HTML5 specification and are considered deprecated. Most modern desktop browsers still render them, but:

- They are **not guaranteed to work in every browser** going forward.
- They can behave inconsistently on **mobile browsers**.
- Search engines and accessibility tools generally handle framed content poorly.

This project uses frames intentionally, as a deliberate layout choice. If you'd prefer a modern, future-proof equivalent of the same 30:70 layout, it can be rebuilt as a single-page site using CSS Grid or Flexbox instead of `<frameset>` — same visual result, without the legacy caveats.

---

## 📄 License

Feel free to fork and adapt this template for your own portfolio.
