# COMP229 Assignment 1 - React Portfolio Session Notes
**Date:** January 21, 2026

## Project Overview
Created a personal portfolio website using React for COMP229 Web Application Development course.

## What Was Built

### Pages (5 total)
1. **Home** - Welcome message, mission statement, quick links
2. **About Me** - Profile photo, bio, skills, resume download
3. **Projects** - 3 projects showcased
4. **Services** - 4 services offered
5. **Contact** - Contact info panel + form (redirects to Home on submit)

### Features
- Custom hexagon logo with "AA" initials (SVG)
- Responsive navigation bar
- Footer with LinkedIn and email links
- Downloadable PDF resume

## Projects Showcased
1. **GCC Tenant Tracker** - Real estate management system
   - Link: https://gcctenanttracker.com/
   - Tech: VB.NET, MS SQL Server, REST API, WhatsApp API

2. **Noor Muslim Radio** - Islamic lifestyle app
   - Link: https://noormuslimradio.com/
   - Tech: Flutter, MySQL, PHP API, Swift (iOS)

3. **Markad Racing** - Mobile video game
   - Link: https://www.markadracing.com/
   - Tech: Unity, C#, iOS SDK, Android SDK

## Services Listed
- Web Application Development
- Mobile App Development
- Real Estate Software
- IoT & Embedded Systems

## Final Project Structure
```
portfolio/
├── src/
│   ├── App.jsx         (with Navbar & Footer)
│   ├── App.css         (all styles in one file)
│   ├── main.jsx
│   ├── assets/
│   │   └── owner.png
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       └── Contact.jsx
├── public/
│   ├── resume.pdf
│   └── favicon.svg
└── index.html
```

## Commands Used
```bash
# Create project
npm create vite@latest portfolio -- --template react

# Install dependencies
npm install
npm install react-router-dom

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment
- **Live Site:** https://comp229w002-js-reviewlab1.vercel.app
- **GitHub:** https://github.com/jackorta1/comp229.w002-js-review/tree/main/webApplictionsemesterIII/labAssignment1/portfolio

## Git Commits Made
1. `Add React portfolio website for COMP229 Assignment 1`
2. `Simplify project structure - merge CSS and components`
3. `Increase profile image size to show full head and cap`

## Submission Requirements Met
- [x] ZIP archive of project files
- [x] GitHub link
- [x] Live site URL (Vercel)
- [x] 5 pages with required content
- [x] Navigation bar with custom logo
- [x] Contact form with redirect
- [x] Resume PDF link
- [x] Internal documentation (comments)
- [x] Responsive design

## Personal Info Used
- **Name:** Aboud Abdalla
- **Email:** mraboodez@hotmail.com
- **Phone:** (437) 262-4025
- **Location:** Markham, Ontario, Canada
- **LinkedIn:** https://www.linkedin.com/in/aelzubair/
