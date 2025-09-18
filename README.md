# 📊 Tracksy

Tracksy is a lightweight time and task tracking MVP designed for freelancers, teams, and small businesses.  
The goal is to provide a **clean, fast, and intuitive** way to track work hours, manage tasks, and gain insights.

---

## 🚀 Tech Stack

- **Frontend:** Next.js + TypeScript + TailwindCSS + MUI
- **Backend:** Node.js (Express, TypeScript)
- **Database:** MongoDB (User data, notes, learning progress)
- **Auth:** NextAuth.js (Sign up, Sign in, Session management) and JWT-based authentication
- **Monorepo:** Managed with [pnpm](https://pnpm.io/) + `pnpm-workspace.yaml`

---

## 🎯 MVP Features

✅ User registration & login (NextAuth)

✅ Create & store notes

✅ Track learning progress

✅ Simple, clean dashboard UI

---

## ✅ Milestones

- **Milestone 0:** Setup monorepo + Hello World deploy (frontend + backend)

- **Milestone 1:** Authentication (NextAuth + MongoDB)

- **Milestone 2:** Notes & Learning Progress APIs (Express + MongoDB)

- **Milestone 3:** Frontend integration with backend

- **Milestone 4:** Deploy full-stack app

---

## 📂 Project Structure

```bash
.
├── apps/
│   ├── frontend/   # Next.js (UI + NextAuth)
│   └── backend/    # Node.js + Express.js (API + MongoDB)
├── packages/       # Shared utilities (e.g., types, configs)
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

---

## 🔑 Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
NEXT_PUBLIC_API_URL=http://localhost:3001
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

### Backend (`backend/.env`)

```env
PORT=3001
MONGODB_URI=your_mongodb_atlas_uri
NEXTAUTH_SECRET=your_secret_here
```

---

## ⚡ Quick Start

**Clone the repo**

```bash
git clone https://github.com/<your-username>/tracksy.git
cd tracksy
```

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run frontend (Next.js)

```bash
pnpm run dev:frontend
# or:
# pnpm --filter ./frontend run dev
```

Visit: http://localhost:3000

### 3. Run backend (Express)

```bash
pnpm run dev:backend
# or:
# pnpm --filter ./backend run dev
```

Visit: http://localhost:3001/health

---

## 🌍 Deployment

- **Frontend:** Vercel (free tier, Git-based CI/CD)

- **Backend:** Render / Railway (free tier for Express + MongoDB Atlas)

- **Database:** MongoDB Atlas (free cluster)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📜 License

This project is licensed under the MIT License.

---

## 📌 Notes

- Root .gitignore covers both frontend and backend (node_modules, .next, dist, .env, etc.).
- Keep pnpm-lock.yaml at the root for consistent dependency management.
- For CI/CD, rely on Vercel + Render auto-deploys (GitHub push triggers build).
