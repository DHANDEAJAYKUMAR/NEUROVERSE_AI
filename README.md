# NeuroVerse AI: Intelligence SaaS Platform

A full-stack AI-powered SaaS platform that offers a suite of intelligent tools
like article generation, AI image creation, resume analysis, and more. 
Built using the **PERN Stack** with secure authentication and subscription billing.

##  Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Future Improvements](#future-improvements)

---

##  Features

<ul>
  <li>Clerk-powered Authentication (Signup/Login/Profile)</li>
  <li>Stripe-based Premium Subscription Billing</li>
  <li>PostgreSQL Database via Neon</li>
  <li>Modern UI with Tailwind CSS + ShadCN/UI</li>
  <li>Article Generator (via OpenAI)</li>
  <li>Blog Title Generator</li>
  <li>AI Image Generator (via Replicate API)</li>
  <li>Background Remover Tool</li>
  <li>Image Object Remover</li>
  <li>Resume Analyzer Tool</li>
</ul>

---

##  Tech Stack

### Frontend
<ul>
 <li>React.js – Frontend Framework</li>
 <li>Tailwind CSS – Utility-First Styling</li>
 <li>ShadCN/UI – Component Library</li>
 <li>Axios – API Requests</li>
</ul>

### Backend
<ul>
 <li>Node.js + Express – Server-Side Logic</li>
 <li>PostgreSQL – Relational Database (Neon)</li>
 <li>Clerk – Authentication & User Management</li>
 <li>Stripe – Subscription Billing</li>
 <li>OpenAI + Replicate APIs – AI Services</li>
</ul>

---

##  Installation

### Prerequisites
<ul>
<li>Node.js & npm</li>
<li>Neon PostgreSQL DB Setup</li>
<li>Vite for frontend build</li>
</ul>

### Clone the Repository

git clone https://github.com/DHANDEAJAYKUMAR/NEUROVERSE_AI.git

cd NEUROVERSE_AI

**Frontend Setup**
```
cd client
npm install
npm run dev
```
**Backend Setup**
```
cd server
npm init -y
npm run dev
```
**Note**: Create a .env file in the root directory with the following:

```
CLERK_SECRET_KEY=your_clerk_secret
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token
STRIPE_SECRET_KEY=your_stripe_key
UPLOADTHING_SECRET=your_uploadthing_key
DATABASE_URL=your_neon_postgres_url
```

## Usage
<ul>
<li>Sign up or login using Clerk</li>
 <li>Choose from AI tools like Article Generator, Blog Title Generator, etc.</li>
 <li>Use file upload tools like Resume Analyzer and Image Removers</li>
 <li>Upgrade to premium to unlock all features</li>
 </ul>


## Project Structure
```
├──  client/                 → [Frontend Code - React App]
│   ├── node_modules/       → [Frontend dependencies]
│   ├──  public/             → [Static files like index.html, icons]
│   ├──  src/                → [Main source code]
│   │   ├──  components/     → [Reusable UI components] 
│   │   ├──  pages/          → [Page-level components] 
│   │   ├── App.jsx           → [Main component & routes] 
│   │   ├── main.jsx          → [App root entry file] 
│   │   ├── index.css         → [Global styles] 
│   ├── .env                  → [Frontend environment variables] 
│   ├── .gitignore            → [Ignore files in Git] 
│   ├── eslint.config.js     → [Linting config] 
│   ├── index.html            → [HTML template] 
│   ├── package.json          → [Frontend dependencies/scripts] 
│   ├── package-lock.json     → [Package versions lock] 
│   ├── README.md             → [Project overview] 

├──  server/                 → [Backend Code - Node.js/Express]
│   ├──  configs/           → [Database/config files] 
│   ├──  controllers/       → [Logic for APIs] 
│   ├──  middlewares/       → [Authentication, error handling]
│   ├──  routes/            → [API routes definitions] 
│   ├── .env                  → [Backend environment variables] 
│   ├── server.js             → [Main backend entry point] 
│   ├── package.json          → [Backend dependencies/scripts] 
│   ├── package-lock.json     → [Locked backend versions] 
│   ├── vercel.json           → [Vercel deployment config] 

```




## Live Demo
<p>Try it Live Here → <a href="https://neuroverse-ai-blond.vercel.app/" target="_blank">
https://quickai-gs.vercel.app/</a></p>
Demo Video
→ <a href="https://drive.google.com/file/d/1XCuUwn24CenQydvDWCmekKhsERpMIKEd/view?usp=drive_link" target="_blank">Click to Watch</a>


## Future Improvements
<ul>
  <li>Integrate AI Image Generator & Code Completion</li>
  <li>Add User Dashboards with Usage History</li>
  <li>Stripe for Subscription Plans (SaaS Model)</li>
  <li>Team Collaboration Features</li>
  <li>Theme Support (Dark/Light Mode)</li>
  <li>Voice-to-Text & AI Video Generation</li>
</ul>
