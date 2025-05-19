
# 📘 React Personal Study Planning Website

This project is the **frontend application** of a Personal Study Planning web app, built entirely in **React.js**. It allows users to create study goals, manage tasks per subject, track progress, and maintain a structured daily study routine—all through an intuitive and responsive interface.

> 🛑 Note: This repository covers only the **frontend (React.js)** part of the full-stack application. The backend is assumed to be built using Express.js and MongoDB (connected via API calls).

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Detailed Step-by-Step Explanation](#detailed-step-by-step-explanation)
- [Routing and Navigation](#routing-and-navigation)
- [Handling Authentication](#handling-authentication)
- [Security Practices in Frontend](#security-practices-in-frontend)
- [Environment Variables](#environment-variables)
- [UI/UX Design](#uiux-design)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 📖 Overview

This React.js application provides a fully functional interface for users to manage their study schedules. It enables user registration, login, and dashboard features where they can:

- Add subjects
- Create study tasks
- Mark tasks as complete
- Visualize progress

This frontend communicates with a backend server via **RESTful API calls** using `axios`. JWT-based session management is handled via **HTTP-only cookies** to ensure secure authentication.

---

## 🌟 Features

- 🔐 Secure login/signup interface
- 🧠 Personalized dashboard
- 🗂️ Subject-wise task organization
- ✅ Task creation, update, delete
- 📈 Progress tracking
- 🧾 Responsive design using Tailwind CSS
- 🔄 Persistent login via session cookies

---

## 🧰 Tech Stack

- **React.js** (v18+)
- **React Router DOM** for SPA routing
- **Axios** for API communication
- **Tailwind CSS** for design and layout
- **Context API / Redux** (optional) for auth state
- **dotenv** for managing environment variables

---

## 📁 Folder Structure

/frontend
│
├── /public
│ └── index.html
├── /src
│ ├── /components
│ │ └── Navbar.jsx, TaskCard.jsx, etc.
│ ├── /pages
│ │ └── LoginPage.jsx, DashboardPage.jsx, etc.
│ ├── /services
│ │ └── api.js (axios setup), authService.js, taskService.js
│ ├── /context
│ │ └── AuthContext.jsx
│ ├── App.js
│ ├── index.js
│ └── .env




---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/neeraj chauhan/react-study-planner.git
cd react-study-planner
