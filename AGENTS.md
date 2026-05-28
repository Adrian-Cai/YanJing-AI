# AGENTS.md

## Project

YanJing (言镜) — AI interview simulator. Upload a resume, get role-specific interview questions, evaluate answers, receive feedback.

**Status:** V0.1 — Turborepo monorepo initialized. Frontend (Vite + React) and backend (Express + TypeORM) scaffolds ready. PDF upload service implemented. Other endpoints are stubs.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Vite 6, React 18, TypeScript 5, TailwindCSS 3, shadcn/ui, wouter, TanStack Query 5 |
| Backend | Express 4, TypeScript 5, TypeORM 0.3, MariaDB 11 |
| PDF | pdf-parse |
| Infra | Docker Compose — MariaDB 11, Redis 7 |
| Monorepo | Turborepo, pnpm workspaces |

## Monorepo Layout

```
yanjing-ai/
├── apps/
│   ├── web/          # Vite + React frontend
│   │   ├── src/
│   │   │   ├── components/   # UI components (shadcn/ui)
│   │   │   ├── pages/        # Route pages
│   │   │   ├── hooks/        # Custom hooks
│   │   │   ├── lib/          # Utilities, API client
│   │   │   └── styles/       # Global CSS
│   │   └── package.json
│   │
│   └── api/          # Express backend
│       ├── src/
│       │   ├── routes/       # API routes
│       │   ├── services/     # Business logic
│       │   ├── entities/     # TypeORM entities
│       │   ├── middleware/   # Express middleware
│       │   └── prompts/      # LLM prompt templates
│       └── package.json
│
├── packages/
│   └── shared/       # Shared TypeScript types
│       └── src/
│           └── types/        # API interfaces
│
├── docker-compose.yml
├── turbo.json
└── pnpm-workspace.yaml
```

## Commands

```bash
# Start everything (web + api + db)
docker compose up -d    # Start MariaDB + Redis
pnpm dev                # Start frontend + backend

# Frontend only (from yanjing-ai/)
pnpm --filter @yanjing/web dev

# Backend only (from yanjing-ai/)
pnpm --filter @yanjing/api dev

# Type check all packages
pnpm typecheck

# Build all packages
pnpm build
```

## API Entry Point

`yanjing-ai/apps/api/src/index.ts` — registers all routers:

- `GET /health` — Health check
- `POST /api/auth/login` (stub)
- `POST /api/resume/upload` (working — validates + extracts PDF text)
- `POST /api/interview/question` (stub)
- `POST /api/evaluation/answer` (stub)
- `GET /api/report/session/:id` (stub)

## Architecture Notes

- Turborepo monorepo with pnpm workspaces
- Frontend uses Vite with React 18, wouter for routing, TanStack Query for state
- Backend uses Express with TypeORM for database access
- Shared types in packages/shared are consumed by both apps
- PDF validation checks: extension, mimetype, file header, size, page count
- LLM integration planned via prompt templates in apps/api/src/prompts/ (not yet wired)
- MariaDB and Redis are in docker-compose
- Frontend proxies /api requests to backend via Vite dev server proxy

## Conventions

- Backend: routes in src/routes/, services in src/services/, entities in src/entities/
- Frontend: pages in src/pages/, components in src/components/, hooks in src/hooks/
- Prompt templates are markdown files in apps/api/src/prompts/
- Use AppError class for API error handling (see middleware/errorHandler.ts)
- shadcn/ui components in src/components/ui/

## Gotchas

- `CLAUDE.md` is stale — it describes a different project. Ignore it; this file is authoritative.
- `node_modules/` is in `.gitignore` — do NOT commit it.
- `.env` files are gitignored — never commit secrets.
- Docker maps MariaDB to port 3306 and Redis to port 6379.
- Frontend dev server runs on port 5173, backend on port 8000.
