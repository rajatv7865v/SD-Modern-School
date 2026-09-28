# Excellence Academy - School Website

A modern, feature-rich school website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Hero section, key features, statistics, and news preview
- 📖 **About Page** - Mission, vision, history, values, and facilities
- 📚 **Academics** - Academic programs, curriculum highlights, and academic calendar
- 👨‍🏫 **Faculty** - Faculty members organized by departments with profiles
- 📝 **Admissions** - Admission process, requirements, and application form
- 📰 **News & Events** - Latest news, upcoming events, and newsletter signup
- 🖼️ **Gallery** - Photo gallery with category filters and video highlights
- 📞 **Contact** - Contact information, contact form, and map location
- 🔐 **Student Portal** - Login system and student dashboard with grades, assignments, and quick links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
school website/
├── app/
│   ├── about/          # About page
│   ├── academics/      # Academics page
│   ├── admissions/     # Admissions page
│   ├── contact/        # Contact page
│   ├── trust/          # Trust & Society (Parmal Singh Welfare and Educational Trust)
│   ├── academic-planner/# Academic Planner & Governance (Yearly Planner, Fees, SMC, PTA)
│   ├── gallery/        # Gallery page
│   ├── news/           # News & Events page
│   ├── portal/         # Student Portal
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── ...config files
```

## Features Overview

### Responsive Design
- Fully responsive layout that works on all devices
- Mobile-friendly navigation with hamburger menu
- Optimized for tablets and desktops

### Modern UI/UX
- Clean and professional design
- Smooth transitions and hover effects
- Accessible color schemes and typography

### Interactive Components
- Contact forms with validation
- Student portal with login functionality
- Gallery with category filtering
- Newsletter signup

## Customization

### Colors
Edit `tailwind.config.ts` to customize the primary color scheme.

### Content
All content can be easily modified in the respective page components.

### Styling
Tailwind CSS classes are used throughout for easy customization.

## License

This project is open source and available for educational purposes.

