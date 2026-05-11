# Next.js Dashboard Starter ⚡

A clean, production-ready **admin dashboard** built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Includes layout system, stats widgets, charts, and a scalable component structure ready to connect to any REST API.

![CI](https://github.com/hamzajamshed/nextjs-dashboard-starter/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- 🗂️ **App Router** — Next.js 14 file-based routing with layouts and loading states
- 🎨 **Tailwind CSS** — Utility-first styling, dark mode ready
- 📊 **Recharts** — Area charts, bar charts with responsive containers
- 🧩 **Component library** — Sidebar, Header, StatsGrid, Charts, Activity feed
- 🔐 **NextAuth.js** — Auth scaffolding ready to connect to your backend
- 🔍 **TypeScript strict mode** — End-to-end type safety
- ✅ **Zod validation** — Form and API response validation
- 🔄 **GitHub Actions** — Type-check, lint, and build on every push

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  🔷 Dashify          [Search...]        [🔔]         │
│ ──────────────────────────────────────────────────── │
│  📊 Overview    │  Overview                          │
│  👤 Users       │                                    │
│  📝 Posts       │  [4,231 Users] [892 Posts]         │
│  📈 Analytics   │  [$18,540 Rev] [3.24% Conv]       │
│  ⚙️ Settings   │                                    │
│                 │  [Revenue Chart ──────]  [Activity]│
│  H Hamza Admin  │                                    │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/hamzajamshed/nextjs-dashboard-starter.git
cd nextjs-dashboard-starter

npm install

cp .env.example .env.local
# Fill in your values

npm run dev
```

Open `http://localhost:3000` — redirects to `/dashboard`.

---

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout (fonts, metadata)
├── page.tsx                # Redirects to /dashboard
├── globals.css             # Tailwind base styles
└── dashboard/
    ├── layout.tsx          # Dashboard shell (Sidebar + Header)
    └── page.tsx            # Overview page

components/
├── layout/
│   ├── Sidebar.tsx         # Navigation sidebar
│   └── Header.tsx          # Top bar with search
└── dashboard/
    ├── StatsGrid.tsx       # 4-column stat cards
    ├── RevenueChart.tsx    # Recharts area chart
    └── RecentActivity.tsx  # Activity feed
```

---

## 🛠️ Tech Stack

| Purpose | Library |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts |
| Icons | Lucide React |
| Auth | NextAuth.js |
| Validation | Zod |
| CI | GitHub Actions |

---

## 🔌 Connecting to an API

Update `NEXT_PUBLIC_API_URL` in `.env.local` to point to your backend (works great with [nestjs-rest-api-starter](https://github.com/hamzajamshed/nestjs-rest-api-starter)):

```ts
// lib/api.ts
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
```

---

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
```

---

## 🧪 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript type check |

---

## 📄 License

MIT — free to use, fork, and build on.

---

Built by [Hamza](https://github.com/hamzajamshed) · Pairs with [nestjs-rest-api-starter](https://github.com/hamzajamshed/nestjs-rest-api-starter)
