<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0f766e&height=170&section=header&text=react%20error%20boundary%20lab&fontSize=36&fontColor=ffffff&animation=twinkling" alt="Animated wave header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=react%20error%20boundary%20lab%20%7C%20inspect%2C%20understand%2C%20improve" alt="Animated title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/react-error-boundary-lab?style=for-the-badge" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/react-error-boundary-lab?style=for-the-badge" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/react-error-boundary-lab?style=for-the-badge" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/react-error-boundary-lab?style=for-the-badge" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" alt="react-error-boundary-lab project mark" width="520"/></p>

## 🧭 Overview

`react-error-boundary-lab` demonstrates how a React class error boundary catches errors thrown while rendering descendants, presents a fallback, and recovers after a reset. It also contrasts render errors with event-handler errors, which error boundaries do not catch.

## ✨ Features

- 🧯 Trigger a deliberate render error inside a child component
- 🪟 Inspect the fallback UI and error summary
- 🔄 Reset the boundary and recover the child tree
- 🧭 Compare render-time errors with event-handler errors
- 🧩 Uses a small, readable TypeScript component structure

## 🧪 Demo

Install dependencies, start Vite, and open the local URL. Use **Trigger render error** to show the fallback, then reset. The separate event-handler example handles its error with ordinary `try/catch`. No hosted demo is published.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Run `npm run build` for a production build. Requires Node.js 18 or newer.

## 🧰 Tech Stack

- **Stack:** React 18, TypeScript, Vite, and browser JavaScript
- **Approach:** small, local-first tooling with clear output

## 🗂️ Folder Structure

```text
react-error-boundary-lab/
├── assets/mark.svg
├── src/App.tsx
├── src/ErrorBoundary.tsx
├── src/main.tsx
├── src/styles.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap

- Add reset-key examples and multiple independent boundaries
- Add a compact comparison of boundary placement strategies

## 🤝 Contributing

Issues and focused pull requests are welcome. Explain the use case, keep changes small, and add tests for behavior changes. Run the project using the Quick Start instructions before submitting.

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0f172a&height=120&section=footer&animation=twinkling" alt="Animated wave footer"/></p>
