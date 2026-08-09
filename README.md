# 🌐 Ashish Kalsara Portfolio

A premium, modern, and responsive personal portfolio website built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion** to showcase my professional developer journey, technical skillset, projects, academic foundation, and contacts.

## 🚀 Live Demo

**Website Link:** [ashishkalsara.vercel.app](https://ashishkalsara.vercel.app/)

---

## 👨‍💻 About Me

Hi! I'm **Ashish Kalsara**, an MCA student and aspiring **Full Stack Developer** specializing in building modern, scalable web applications and desktop tools.

I focus on crafting pixel-perfect, responsive user interfaces and developing high-performance RESTful APIs.

---

## ✨ Features

- **Responsive Design & Modern UI/UX:** Built with Tailwind CSS, offering a premium and professional dark/light responsive interface.
- **Micro-interactions:** Interactive hover states, custom cursor tracking, and smooth transitions powered by Framer Motion.
- **Command Menu (CMD + K):** Interactive search console component (`CommandSearch.tsx`) allowing visitors to navigate the site using keyboard shortcut commands.
- **Tech Stack Filter:** Dynamically categorizes skills into Frontend, Backend, and Developer Tools.
- **Featured Projects Dialogs:** Shows interactive, detailed modal breakdowns of key projects.
- **SEO & Performance Optimized:** Leveraging Next.js App Router for optimal performance, meta descriptions, and structural semantic markup.

---

## 🛠 Tech Stack

### Frontend & Styling

- **Next.js 14** (App Router)
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Fluid Animations)
- **Radix UI Primitives** (Accessible UI blocks)
- **Lucide Icons**

### Backend & Databases

- **ASP.NET Core Web API**
- **C#**
- **SQL Server**

### Developer Tools & Workflows

- **Git & GitHub**
- **Visual Studio** / **VS Code**
- **Postman** (API Client Testing)
- **Vercel** (Cloud Deployment)

---

## 📁 Project Structure

```text
portfolio-ashish/
├── app/
│   ├── globals.css         # Tailwind directives & CSS variable tokens
│   ├── layout.tsx          # Root layout with ThemeProvider & fonts
│   └── page.tsx            # Main entry point importing component layouts
│
├── components/
│   ├── ui/                 # Accessible Radix primitives and styling cards
│   ├── About.tsx           # Story summary, key metrics, and CTA
│   ├── CommandSearch.tsx   # CMD/CTRL + K command menu component
│   ├── Contact.tsx         # SMTP and email outreach contact form
│   ├── CustomCursor.tsx    # Immersive cursor circle effect
│   ├── Education.tsx       # Timeline of academic achievements
│   ├── Footer.tsx          # Bottom branding and address references
│   ├── Hero.tsx            # Landing viewport, dynamic greetings, resume CTA
│   ├── Navbar.tsx          # Sticky responsive header with page anchors
│   ├── Projects.tsx        # Grid & popup details for work samples
│   ├── Skills.tsx          # Skill cards list tabbed by tech domain
│   └── theme-provider.tsx  # Next-Themes provider wrapper
│
├── lib/
│   └── utils.ts            # Classnames merging helper (clsx & tailwind-merge)
│
├── public/                 # Static icons, favicons, project assets
├── package.json            # Target scripts & NPM dependencies
├── tailwind.config.ts      # Tailored theme configs & keyframes
└── tsconfig.json           # TS rulesets and folder alias mappings
```

---

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+ recommended) and npm installed.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kalsaraashish/Portfolio.git
   ```

2. **Navigate into the Project Folder**

   ```bash
   cd Portfolio
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Launch the Development Server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` inside your browser to view the application.

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🚀 Highlighted Projects

### 🎓 College Event Management System

- **Role:** Full Stack Web Application
- **Tech Stack:** React, ASP.NET Core Web API, C#, SQL Server, Tailwind CSS
- **Features:** Role-based access control, registration statuses, and custom REST API endpoints.
- **Repository:** [College Event Management System](https://github.com/kalsaraashish/College-Event-Management-System)

### 📄 AllEdit Desktop Application

- **Role:** Offline Document Conversion Tool
- **Tech Stack:** .NET 8, WPF, C#, LibreOffice, Ghostscript
- **Features:** Local file merges, conversions, splits, ensuring 100% offline data privacy.
- **Repository:** [AllEdit Desktop App](https://github.com/kalsaraashish/AllEdit-DesktopApp)

---

## 📫 Let's Connect!

- **Email:** [ashishkalsara@gmail.com](mailto:ashishkalsara@gmail.com)
- **LinkedIn:** [linkedin.com/in/ashish-kalsara-dot-net](https://www.linkedin.com/in/ashish-kalsara-dot-net)
- **GitHub:** [github.com/kalsaraashish](https://github.com/kalsaraashish)
- **Live Portfolio:** [ashishkalsara.vercel.app](https://ashishkalsara.vercel.app/)

---

## ⭐ Support

If you find this project helpful or inspiring, please consider giving it a ⭐ on GitHub!

_Made with ❤️ by Ashish Kalsara_
