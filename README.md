# 🧑‍💻 Portfolio Builder — React Portfolio Generator

A React + Vite web application that lets users create a structured personal portfolio from a form, switch between portfolio templates, preview changes live, and export their portfolio data as JSON. The project focuses on reusable UI, client-side state management, routing, and a simple browser-based content generation workflow.

## ✨ Features

- 📝 Enter personal information, skills, and projects
- 🎨 Choose between **Classic** and **Modern** portfolio templates
- 👀 Live portfolio preview while editing
- 📦 Export portfolio data as JSON
- 🖨️ Browser print workflow for saving the rendered portfolio as PDF
- 🧩 Reusable React components
- 🔗 Client-side routing with React Router
- ⚡ Fast development and production builds with Vite

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI and component architecture |
| Vite | Development server and build tooling |
| React Router | Client-side navigation |
| UUID | Unique identifiers |
| JavaScript | Application logic |

## 🧠 Application Flow

```text
User Input
    ↓
Portfolio Form
    ↓
Application State
    ↓
Template Selection ──→ Classic / Modern
    ↓
Live Preview
    ↓
JSON Export / Browser Print
```

The application keeps portfolio information on the client side and renders the selected template from the current application state.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/JDjeneel/Portfolio-Generator-app.git
cd Portfolio-Generator-app
npm install
```

### Run locally

```bash
npm run dev
```

Open the Vite URL shown in the terminal.

### Production build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
Portfolio-Generator-app/
├── src/                 # Application source (if present)
├── public/              # Static assets (if present)
├── App.*                # Main application UI
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

> The exact source structure may evolve as the application is refactored; the repository itself is the source of truth.

## 🔍 Engineering Highlights

- **Template-driven rendering:** the same portfolio data can be presented through different visual templates.
- **Live preview:** form changes can be reflected immediately in the rendered portfolio.
- **Reusable UI:** component-based React structure keeps form and presentation logic manageable.
- **Client-side workflow:** the current application does not require a backend service for its core generation flow.
- **Export-friendly output:** portfolio data can be exported as JSON and the rendered page can be printed through the browser.

## 🔮 Future Improvements

- Add portfolio persistence with a backend/database
- Add authentication and saved portfolio profiles
- Add more professional templates and theme customization
- Add PDF generation with controlled page layouts
- Add drag-and-drop section ordering
- Add custom domains and shareable portfolio URLs
- Add automated tests and CI/CD
- Add deployment previews

## 📌 Project Status

**Frontend portfolio-builder project.** The current implementation is client-side and provides template selection, live preview, JSON export, and browser printing. Backend persistence, authentication, server-side PDF generation, and hosted portfolio URLs are future extensions unless implemented elsewhere in the repository.

---

Built with **React + Vite** by **Jeneel Dangi**.