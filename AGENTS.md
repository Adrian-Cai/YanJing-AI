# AGENTS.md

## Project

YanJing (言镜) — AI interview simulator. Upload a resume, get role-specific interview questions, evaluate answers, receive feedback.

**Status:** V0.1 — Initial scaffold. Frontend (Next.js) and backend (Spring Boot) ready. MongoDB/Redis/MinIO via Docker. Business logic mostly stubs.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, React 18, TypeScript 5, TailwindCSS 3, motion (framer) |
| Backend | Java 21, Spring Boot 3.3.5, Spring Data MongoDB, Spring Data Redis |
| Database | MongoDB 7 |
| Cache | Redis 7 |
| File Storage | MinIO |
| AI | LLM API (env-configurable, not wired) |
| Monorepo | Root `concurrently` (NOT Turborepo/pnpm — see Gotchas) |

## Directory Layout

```
yanjing-ai/
├── yanjing-web/              # Next.js frontend
│   ├── app/
│   │   ├── (auth)/           # Auth pages (login, register)
│   │   ├── (dashboard)/      # Dashboard pages
│   │   ├── (marketing)/      # Public pages (home, about)
│   │   ├── globals.css
│   │   └── layout.tsx        # Root layout (lang="zh-CN")
│   ├── components/
│   ├── lib/
│   ├── types/
│   ├── next.config.mjs
│   ├── tailwind.config.ts
│   └── package.json          # "yanjing-web"
│
├── yanjing-api-java/         # Spring Boot backend
│   ├── src/main/java/com/yanjing/api/
│   │   ├── YanJingApiApplication.java
│   │   └── HealthController.java
│   ├── src/main/resources/
│   │   └── application.yml
│   ├── pom.xml               # Java 21, Spring Boot 3.3.5
│   └── target/
│
├── docker-compose.yml        # MongoDB + Redis + MinIO
├── .env.example              # Environment variable template
├── package.json              # Root scripts via concurrently
└── docs/superpowers/         # Migration plan/spec (stale — see Gotchas)
```

## Commands

```bash
# Copy env vars (required first)
cp .env.example .env

# Start infra services
docker compose up -d

# Start everything (frontend + backend)
npm run dev

# Frontend only
cd yanjing-web && npm run dev    # http://localhost:3000

# Backend only
cd yanjing-api-java && mvn spring-boot:run   # http://localhost:8000

# Frontend lint
npm run lint
```

No `pnpm`, no `turbo`, no `typecheck` script at root. The root `package.json` uses `concurrently` to run both apps.

## Backend Configuration

`yanjing-api-java/src/main/resources/application.yml`:
- Server port: `${API_PORT:8000}`
- MongoDB URI: from env `MONGODB_URI`
- Redis: from env `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
- Actuator: health + info endpoints exposed

## Frontend Structure

Next.js App Router with route groups:
- `(auth)/` — login/register pages
- `(dashboard)/` — authenticated dashboard (sidebar layout placeholder)
- `(marketing)/` — public landing page, about

Root layout: `lang="zh-CN"`, metadata title "言镜 YanJing - AI 面试陪练教练"

## API Endpoints (Backend)

| Method | Path | Status |
|--------|------|--------|
| GET | `/actuator/health` | Working |
| POST | `/api/resume/upload` | Stub |

## Gotchas

- **`docs/superpowers/` contains a stale migration plan** — it describes migrating to Turborepo + Vite + Express + MariaDB. This was never executed. Ignore it; this file is authoritative.
- **Root `package.json` is NOT a pnpm workspace** — it uses plain `npm` + `concurrently`. Do not run `pnpm install` or `turbo` commands.
- **Java 21 is required** for the backend — check `pom.xml` `<java.version>21</java.version>`.
- **`.env` files are gitignored** — never commit secrets. `.env.example` has the template.
- **Docker Compose** maps MongoDB to `27017`, Redis to `6379`, MinIO to `9000`/`9001`.
- **Frontend runs on port 3000**, backend on port 8000.
- **MinIO console** at `http://localhost:9001`.
- **`yanjing-web/` has its own `node_modules/`** — run `npm install` inside it, not at root.
- **No shared types package** exists yet — frontend and backend are independent.
