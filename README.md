# 🚀 Beniel J | Developer Portfolio

Welcome to my personal developer portfolio repository! This is a modern, high-performance, responsive single-page web application designed to showcase my projects, skills, and technical background. 

Built using **React**, optimized with **Vite**, and styled elegantly using **Tailwind CSS**.

---

## 🌐 Live Demo
👉 [View My Live Portfolio Here](YOUR_LIVE_DEPLOYMENT_LINK_HERE)

---

## ✨ Features

*   **Cinematic Hero Experience:** Includes a responsive background video wrapper with custom programmatic play/pause playback controls.
*   **Fluid Animations:** Integrated with **AOS (Animate On Scroll)** for sleek, hardware-accelerated transitions.
*   **Production-Ready Asset Management:** Custom-built pipelines handling secure static asset distributions (such as PDF resume generation and optimized media asset queries).
*   **Fully Responsive Layout:** Tailored layouts across mobile, tablet, and desktop environments utilizing Tailwind CSS utility classes.
*   **Dynamic Data Architecture:** Modular construction separating structural components from dataset configurations (`portfolioData.js`) for seamless maintenance.

---

## 🛠️ Tech Stack & Dependencies

*   **Core Framework:** React 18
*   **Build Tool & Dev Server:** Vite
*   **Styling Engine:** Tailwind CSS
*   **Animation Engine:** AOS (Animate On Scroll)
*   **Iconography:** Native SVG assets for performance optimization

---

## ⚙️ Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
2. Install Dependencies
Bash
npm install
3. Run the Development Server
Bash
npm run dev
Open your browser and navigate to http://localhost:5173 to see it in action.

4. Build for Production
To bundle and optimize the application for live hosting deployments:

Bash
npm run build
This generates a production-ready dist folder containing optimized HTML, JS, CSS, and structural static assets.

📁 Project Directory Structure
Plaintext
Portfolio/
├── public/
│   └── Beniel_J_Resume.pdf    # Statically hosted resume asset
├── src/
│   ├── assets/                # Structural media (videos, structural imagery)
│   ├── components/            # Reusable UI modules (Hero.jsx, etc.)
│   ├── data/                  # Core text data configuration files
│   ├── App.jsx                # Main application wrapper
│   └── main.jsx               # React DOM initialization anchor
├── package.json               # Manifest file detailing build engines & tools
└── vite.config.js             # Vite configuration engine definitions

