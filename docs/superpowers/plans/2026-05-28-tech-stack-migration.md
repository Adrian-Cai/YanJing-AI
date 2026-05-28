# YanJing 技术栈迁移实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 YanJing 从 Next.js + FastAPI 迁移到 Turborepo monorepo（Vite + React 18 + Express + TypeScript + MariaDB）

**Architecture:** Turborepo monorepo 包含 3 个包：apps/web（前端）、apps/api（后端）、packages/shared（共享类型）。前端使用 Vite + React 18 + shadcn/ui，后端使用 Express + TypeORM + MariaDB。

**Tech Stack:** React 18, Vite 6, TypeScript 5, TailwindCSS 3, shadcn/ui, wouter, TanStack Query 5, Express 4, TypeORM 0.3, MariaDB 11, pnpm, Turborepo

---

## 文件结构总览

```
yanjing-ai/                          # 新项目根目录
├── apps/
│   ├── web/                         # 前端应用
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/              # shadcn/ui 组件
│   │   │   │   ├── layout/          # 布局组件
│   │   │   │   └── resume/          # 业务组件
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── Resume.tsx
│   │   │   │   ├── Interview.tsx
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Diagnosis.tsx
│   │   │   │   └── Report.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useResume.ts
│   │   │   ├── lib/
│   │   │   │   ├── api.ts
│   │   │   │   └── queryClient.ts
│   │   │   ├── styles/
│   │   │   │   └── globals.css
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── components.json          # shadcn/ui 配置
│   │   ├── index.html
│   │   ├── postcss.config.js
│   │   ├── tailwind.config.js
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   └── api/                         # 后端应用
│       ├── src/
│       │   ├── routes/
│       │   │   ├── health.ts
│       │   │   ├── auth.ts
│       │   │   ├── resume.ts
│       │   │   ├── interview.ts
│       │   │   ├── evaluation.ts
│       │   │   └── report.ts
│       │   ├── services/
│       │   │   └── pdfService.ts
│       │   ├── entities/
│       │   │   ├── User.ts
│       │   │   ├── Session.ts
│       │   │   └── Message.ts
│       │   ├── middleware/
│       │   │   └── errorHandler.ts
│       │   ├── prompts/
│       │   │   ├── resume_analysis.md
│       │   │   ├── question_generation.md
│       │   │   ├── answer_evaluation.md
│       │   │   └── answer_rewrite.md
│       │   ├── data-source.ts
│       │   └── index.ts
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── shared/
│       ├── src/
│       │   ├── types/
│       │   │   ├── resume.ts
│       │   │   ├── interview.ts
│       │   │   └── api.ts
│       │   └── index.ts
│       ├── tsconfig.json
│       └── package.json
│
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── .gitignore
```

---

## Task 1: 初始化 Turborepo Monorepo 脚手架

**Files:**
- Create: `yanjing-ai/package.json`
- Create: `yanjing-ai/pnpm-workspace.yaml`
- Create: `yanjing-ai/turbo.json`
- Create: `yanjing-ai/.gitignore`

- [ ] **Step 1: 创建项目根目录**

```bash
mkdir yanjing-ai
cd yanjing-ai
git init
```

- [ ] **Step 2: 创建根 package.json**

```json
{
  "name": "yanjing-ai",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "typecheck": "turbo typecheck",
    "lint": "turbo lint"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  },
  "packageManager": "pnpm@9.0.0"
}
```

- [ ] **Step 3: 创建 pnpm-workspace.yaml**

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

- [ ] **Step 4: 创建 turbo.json**

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "typecheck": {
      "dependsOn": ["^build"]
    },
    "lint": {
      "dependsOn": ["^build"]
    }
  }
}
```

- [ ] **Step 5: 创建 .gitignore**

```gitignore
node_modules/
dist/
.next/
.env
.env.local
*.log
.DS_Store
```

- [ ] **Step 6: 安装依赖并验证**

```bash
pnpm install
```

Expected: turbo 安装成功，无报错

- [ ] **Step 7: 提交**

```bash
git add .
git commit -chore: init turborepo monorepo scaffold"
```

---

## Task 2: 创建共享类型包 (packages/shared)

**Files:**
- Create: `yanjing-ai/packages/shared/package.json`
- Create: `yanjing-ai/packages/shared/tsconfig.json`
- Create: `yanjing-ai/packages/shared/src/index.ts`
- Create: `yanjing-ai/packages/shared/src/types/resume.ts`
- Create: `yanjing-ai/packages/shared/src/types/interview.ts`
- Create: `yanjing-ai/packages/shared/src/types/api.ts`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "@yanjing/shared",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

- [ ] **Step 2: 创建 tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: 创建 API 通用类型**

```typescript
// packages/shared/src/types/api.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
}
```

- [ ] **Step 4: 创建简历类型**

```typescript
// packages/shared/src/types/resume.ts
export interface ResumeUploadResponse {
  filename: string;
  sizeBytes: number;
  pageCount: number;
  rawText: string;
}
```

- [ ] **Step 5: 创建面试类型**

```typescript
// packages/shared/src/types/interview.ts
export interface QuestionRequest {
  resumeText: string;
  jobTitle: string;
  previousQuestions?: string[];
}

export interface QuestionResponse {
  question: string;
  category: string;
}

export interface AnswerRequest {
  sessionId: string;
  question: string;
  answer: string;
}

export interface AnswerResponse {
  score: number;
  feedback: string;
  improvedAnswer?: string;
}
```

- [ ] **Step 6: 创建导出入口**

```typescript
// packages/shared/src/index.ts
export * from './types/api';
export * from './types/resume';
export * from './types/interview';
```

- [ ] **Step 7: 验证类型检查**

```bash
pnpm --filter @yanjing/shared typecheck
```

Expected: 无报错

- [ ] **Step 8: 提交**

```bash
git add packages/shared
git commit -m "feat: add shared types package"
```

---

## Task 3: 创建后端应用 (apps/api) 基础框架

**Files:**
- Create: `yanjing-ai/apps/api/package.json`
- Create: `yanjing-ai/apps/api/tsconfig.json`
- Create: `yanjing-ai/apps/api/src/index.ts`
- Create: `yanjing-ai/apps/api/src/routes/health.ts`
- Create: `yanjing-ai/apps/api/src/middleware/errorHandler.ts`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "@yanjing/api",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@yanjing/shared": "workspace:*",
    "cors": "^2.8.5",
    "express": "^4.18.0",
    "reflect-metadata": "^0.2.0",
    "typeorm": "^0.3.0",
    "mariadb": "^3.0.0",
    "multer": "^1.4.5-lts.1",
    "pdf-parse": "^1.1.1"
  },
  "devDependencies": {
    "@types/cors": "^2.8.0",
    "@types/express": "^4.17.0",
    "@types/multer": "^1.4.0",
    "@types/node": "^20.0.0",
    "tsx": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

- [ ] **Step 2: 创建 tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 3: 创建错误处理中间件**

```typescript
// apps/api/src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error('Error:', err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
    });
  }

  return res.status(500).json({
    message: 'Internal Server Error',
  });
}
```

- [ ] **Step 4: 创建健康检查路由**

```typescript
// apps/api/src/routes/health.ts
import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default router;
```

- [ ] **Step 5: 创建 Express 入口**

```typescript
// apps/api/src/index.ts
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(healthRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

export default app;
```

- [ ] **Step 6: 安装依赖并验证**

```bash
pnpm install
pnpm --filter @yanjing/api typecheck
```

Expected: 无类型错误

- [ ] **Step 7: 测试启动**

```bash
pnpm --filter @yanjing/api dev
```

Expected: 控制台显示 "API server running on http://localhost:8000"

访问 http://localhost:8000/health 返回 `{"status":"ok"}`

- [ ] **Step 8: 提交**

```bash
git add apps/api
git commit -m "feat: add Express API server scaffold"
```

---

## Task 4: 配置 TypeORM 和 MariaDB 数据库

**Files:**
- Create: `yanjing-ai/apps/api/src/data-source.ts`
- Create: `yanjing-ai/apps/api/src/entities/User.ts`
- Create: `yanjing-ai/apps/api/src/entities/Session.ts`
- Create: `yanjing-ai/apps/api/src/entities/Message.ts`
- Create: `yanjing-ai/docker-compose.yml`

- [ ] **Step 1: 创建 docker-compose.yml**

```yaml
services:
  mariadb:
    image: mariadb:11
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: yanjing
      MYSQL_USER: yanjing
      MYSQL_PASSWORD: yanjing
    ports:
      - "3306:3306"
    volumes:
      - mariadb_data:/var/lib/mysql

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  mariadb_data:
```

- [ ] **Step 2: 创建 User 实体**

```typescript
// apps/api/src/entities/User.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Session } from './Session';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Session, (session) => session.user)
  sessions!: Session[];
}
```

- [ ] **Step 3: 创建 Session 实体**

```typescript
// apps/api/src/entities/Session.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Message } from './Message';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.sessions)
  user!: User;

  @Column('text')
  resumeText!: string;

  @Column()
  jobTitle!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Message, (message) => message.session)
  messages!: Message[];
}
```

- [ ] **Step 4: 创建 Message 实体**

```typescript
// apps/api/src/entities/Message.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Session } from './Session';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Session, (session) => session.messages)
  session!: Session;

  @Column({ type: 'enum', enum: ['user', 'assistant'] })
  role!: 'user' | 'assistant';

  @Column('text')
  content!: string;

  @Column({ nullable: true })
  score!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
```

- [ ] **Step 5: 创建数据源配置**

```typescript
// apps/api/src/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Session } from './entities/Session';
import { Message } from './entities/Message';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'yanjing',
  password: process.env.DB_PASSWORD || 'yanjing',
  database: process.env.DB_NAME || 'yanjing',
  synchronize: true, // 开发环境自动同步 schema
  logging: true,
  entities: [User, Session, Message],
});
```

- [ ] **Step 6: 更新入口文件连接数据库**

```typescript
// apps/api/src/index.ts
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import { errorHandler } from './middleware/errorHandler';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(healthRouter);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`API server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });

export default app;
```

- [ ] **Step 7: 启动数据库并测试**

```bash
docker compose up -d
pnpm --filter @yanjing/api dev
```

Expected: 控制台显示 "Database connected" 和 "API server running on http://localhost:8000"

- [ ] **Step 8: 提交**

```bash
git add apps/api docker-compose.yml
git commit -m "feat: add TypeORM entities and MariaDB connection"
```

---

## Task 5: 实现 PDF 上传服务

**Files:**
- Create: `yanjing-ai/apps/api/src/services/pdfService.ts`
- Create: `yanjing-ai/apps/api/src/routes/resume.ts`

- [ ] **Step 1: 创建 PDF 服务**

```typescript
// apps/api/src/services/pdfService.ts
import pdf from 'pdf-parse';
import { AppError } from '../middleware/errorHandler';

const MAX_PDF_BYTES = 5 * 1024 * 1024; // 5MB
const MAX_PDF_PAGES = 20;
const PDF_MAGIC = Buffer.from('%PDF-');

export interface PdfExtractionResult {
  pageCount: number;
  rawText: string;
}

export function validatePdfBuffer(
  filename: string | undefined,
  mimetype: string | undefined,
  buffer: Buffer
): void {
  if (!filename || !filename.toLowerCase().endsWith('.pdf')) {
    throw new AppError('仅支持 PDF 文件上传。', 400);
  }

  if (mimetype && !['application/pdf', 'application/octet-stream'].includes(mimetype)) {
    throw new AppError('文件 Content-Type 非 PDF。', 400);
  }

  if (buffer.length === 0) {
    throw new AppError('上传文件为空。', 400);
  }

  if (buffer.length > MAX_PDF_BYTES) {
    throw new AppError(`PDF 文件过大，最大支持 ${MAX_PDF_BYTES / (1024 * 1024)}MB。`, 400);
  }

  if (!buffer.subarray(0, 5).equals(PDF_MAGIC)) {
    throw new AppError('文件头校验失败，不是合法 PDF。', 400);
  }
}

function normalizeText(text: string): string {
  return text
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0)
    .join('\n');
}

export async function extractPdfText(buffer: Buffer): Promise<PdfExtractionResult> {
  let data;
  try {
    data = await pdf(buffer);
  } catch {
    throw new AppError('PDF 解析失败，请检查文件是否损坏。', 400);
  }

  const pageCount = data.numpages;
  if (pageCount === 0) {
    throw new AppError('PDF 不包含可读取页面。', 400);
  }
  if (pageCount > MAX_PDF_PAGES) {
    throw new AppError(`PDF 页数过多，最大支持 ${MAX_PDF_PAGES} 页。`, 400);
  }

  const normalized = normalizeText(data.text);
  if (!normalized) {
    throw new AppError('未提取到有效文本，请确认 PDF 为文本型简历。', 400);
  }

  return { pageCount, rawText: normalized };
}
```

- [ ] **Step 2: 创建简历上传路由**

```typescript
// apps/api/src/routes/resume.ts
import { Router } from 'express';
import multer from 'multer';
import { validatePdfBuffer, extractPdfText } from '../services/pdfService';
import { AppError } from '../middleware/errorHandler';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const router = Router();

router.post('/api/resume/upload', upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) {
      throw new AppError('请上传文件。', 400);
    }

    validatePdfBuffer(req.file.originalname, req.file.mimetype, req.file.buffer);
    const extraction = await extractPdfText(req.file.buffer);

    res.json({
      filename: req.file.originalname || 'resume.pdf',
      sizeBytes: req.file.size,
      pageCount: extraction.pageCount,
      rawText: extraction.rawText,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
```

- [ ] **Step 3: 注册路由到入口文件**

```typescript
// apps/api/src/index.ts (添加 import)
import resumeRouter from './routes/resume';

// 在 app.use(healthRouter); 后添加
app.use(resumeRouter);
```

- [ ] **Step 4: 测试 PDF 上传**

```bash
pnpm --filter @yanjing/api dev
```

使用 curl 或 Postman 测试：
```bash
curl -X POST http://localhost:8000/api/resume/upload \
  -F "file=@test.pdf"
```

Expected: 返回 JSON 包含 filename, sizeBytes, pageCount, rawText

- [ ] **Step 5: 提交**

```bash
git add apps/api
git commit -m "feat: implement PDF upload and text extraction"
```

---

## Task 6: 创建前端应用 (apps/web) 基础框架

**Files:**
- Create: `yanjing-ai/apps/web/package.json`
- Create: `yanjing-ai/apps/web/tsconfig.json`
- Create: `yanjing-ai/apps/web/vite.config.ts`
- Create: `yanjing-ai/apps/web/tailwind.config.js`
- Create: `yanjing-ai/apps/web/postcss.config.js`
- Create: `yanjing-ai/apps/web/index.html`
- Create: `yanjing-ai/apps/web/src/main.tsx`
- Create: `yanjing-ai/apps/web/src/App.tsx`
- Create: `yanjing-ai/apps/web/src/styles/globals.css`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "@yanjing/web",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@yanjing/shared": "workspace:*",
    "@tanstack/react-query": "^5.0.0",
    "framer-motion": "^12.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "wouter": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: 创建 vite.config.ts**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

- [ ] **Step 3: 创建 tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

- [ ] **Step 4: 创建 Tailwind 配置**

```javascript
// apps/web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] **Step 5: 创建 PostCSS 配置**

```javascript
// apps/web/postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 6: 创建全局样式**

```css
/* apps/web/src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-[#f8fbff] text-slate-950;
}
```

- [ ] **Step 7: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>言镜 | AI 面试陪练教练</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 8: 创建入口文件**

```tsx
// apps/web/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './styles/globals.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```

- [ ] **Step 9: 创建 App 组件**

```tsx
// apps/web/src/App.tsx
import { Route, Switch } from 'wouter';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">言镜 - AI 面试陪练教练</h1>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>404 Not Found</Route>
    </Switch>
  );
}
```

- [ ] **Step 10: 安装依赖并验证**

```bash
pnpm install
pnpm --filter @yanjing/web typecheck
pnpm --filter @yanjing/web dev
```

Expected: 浏览器打开 http://localhost:5173 显示 "言镜 - AI 面试陪练教练"

- [ ] **Step 11: 提交**

```bash
git add apps/web
git commit -m "feat: add Vite + React frontend scaffold"
```

---

## Task 7: 安装和配置 shadcn/ui

**Files:**
- Create: `yanjing-ai/apps/web/components.json`
- Create: `yanjing-ai/apps/web/src/lib/utils.ts`
- Create: `yanjing-ai/apps/web/src/components/ui/button.tsx`

- [ ] **Step 1: 创建 utils.ts**

```typescript
// apps/web/src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: 安装 shadcn/ui 依赖**

```bash
pnpm --filter @yanjing/web add clsx tailwind-merge class-variance-authority
pnpm --filter @yanjing/web add -D @types/node
```

- [ ] **Step 3: 创建 components.json**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

- [ ] **Step 4: 创建 Button 组件**

```tsx
// apps/web/src/components/ui/button.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
        destructive: 'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline: 'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

- [ ] **Step 5: 更新 Tailwind 配置支持 shadcn/ui**

```javascript
// apps/web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... 其他颜色变量
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 6: 验证组件**

```bash
pnpm --filter @yanjing/web dev
```

在 App.tsx 中使用 Button 组件测试

- [ ] **Step 7: 提交**

```bash
git add apps/web
git commit -m "feat: add shadcn/ui configuration and Button component"
```

---

## Task 8: 实现前端 API 客户端和 TanStack Query

**Files:**
- Create: `yanjing-ai/apps/web/src/lib/api.ts`
- Create: `yanjing-ai/apps/web/src/lib/queryClient.ts`
- Create: `yanjing-ai/apps/web/src/hooks/useResume.ts`

- [ ] **Step 1: 创建 API 客户端**

```typescript
// apps/web/src/lib/api.ts
const API_BASE = '/api';

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
}

export const api = {
  resume: {
    upload: (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return request<{
        filename: string;
        sizeBytes: number;
        pageCount: number;
        rawText: string;
      }>('/resume/upload', {
        method: 'POST',
        body: formData,
      });
    },
  },
};
```

- [ ] **Step 2: 创建 Query Client**

```typescript
// apps/web/src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});
```

- [ ] **Step 3: 创建简历上传 Hook**

```typescript
// apps/web/src/hooks/useResume.ts
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api';

export function useUploadResume() {
  return useMutation({
    mutationFn: (file: File) => api.resume.upload(file),
  });
}
```

- [ ] **Step 4: 更新 main.tsx 使用 queryClient**

```tsx
// apps/web/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```

- [ ] **Step 5: 提交**

```bash
git add apps/web
git commit -m "feat: add API client and TanStack Query hooks"
```

---

## Task 9: 实现前端页面路由

**Files:**
- Create: `yanjing-ai/apps/web/src/pages/Home.tsx`
- Create: `yanjing-ai/apps/web/src/pages/Resume.tsx`
- Create: `yanjing-ai/apps/web/src/pages/Interview.tsx`
- Create: `yanjing-ai/apps/web/src/pages/Login.tsx`
- Create: `yanjing-ai/apps/web/src/pages/Diagnosis.tsx`
- Create: `yanjing-ai/apps/web/src/pages/Report.tsx`
- Modify: `yanjing-ai/apps/web/src/App.tsx`

- [ ] **Step 1: 创建 Home 页面**

```tsx
// apps/web/src/pages/Home.tsx
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">言镜</h1>
      <p className="text-lg text-slate-600">AI 面试陪练教练</p>
      <div className="flex gap-4">
        <Link href="/resume">
          <Button>开始面试</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">登录</Button>
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: 创建 Resume 页面**

```tsx
// apps/web/src/pages/Resume.tsx
export default function Resume() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">上传简历</h1>
      <p>简历上传功能开发中...</p>
    </div>
  );
}
```

- [ ] **Step 3: 创建其他页面占位**

```tsx
// apps/web/src/pages/Interview.tsx
export default function Interview() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">模拟面试</h1>
      <p>面试功能开发中...</p>
    </div>
  );
}
```

```tsx
// apps/web/src/pages/Login.tsx
export default function Login() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">登录</h1>
      <p>登录功能开发中...</p>
    </div>
  );
}
```

```tsx
// apps/web/src/pages/Diagnosis.tsx
export default function Diagnosis() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">面试诊断</h1>
      <p>诊断功能开发中...</p>
    </div>
  );
}
```

```tsx
// apps/web/src/pages/Report.tsx
export default function Report() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">面试报告</h1>
      <p>报告功能开发中...</p>
    </div>
  );
}
```

- [ ] **Step 4: 更新 App.tsx 配置路由**

```tsx
// apps/web/src/App.tsx
import { Route, Switch } from 'wouter';
import Home from '@/pages/Home';
import Resume from '@/pages/Resume';
import Interview from '@/pages/Interview';
import Login from '@/pages/Login';
import Diagnosis from '@/pages/Diagnosis';
import Report from '@/pages/Report';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/interview" component={Interview} />
      <Route path="/login" component={Login} />
      <Route path="/diagnosis" component={Diagnosis} />
      <Route path="/report" component={Report} />
      <Route>404 Not Found</Route>
    </Switch>
  );
}
```

- [ ] **Step 5: 验证路由**

```bash
pnpm --filter @yanjing/web dev
```

访问各页面路径，确认路由正常工作

- [ ] **Step 6: 提交**

```bash
git add apps/web
git commit -m "feat: add page routes with placeholder pages"
```

---

## Task 10: 迁移 Prompt 模板

**Files:**
- Create: `yanjing-ai/apps/api/src/prompts/resume_analysis.md`
- Create: `yanjing-ai/apps/api/src/prompts/question_generation.md`
- Create: `yanjing-ai/apps/api/src/prompts/answer_evaluation.md`
- Create: `yanjing-ai/apps/api/src/prompts/answer_rewrite.md`

- [ ] **Step 1: 复制现有 prompt 模板**

从 `yanjing-api/app/prompts/` 复制所有 .md 文件到 `apps/api/src/prompts/`

- [ ] **Step 2: 创建 Prompt 加载服务**

```typescript
// apps/api/src/services/promptService.ts
import fs from 'fs';
import path from 'path';

const PROMPTS_DIR = path.join(__dirname, '..', 'prompts');

export function loadPrompt(name: string): string {
  const filePath = path.join(PROMPTS_DIR, `${name}.md`);
  return fs.readFileSync(filePath, 'utf-8');
}

export function formatPrompt(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, value),
    template
  );
}
```

- [ ] **Step 3: 提交**

```bash
git add apps/api
git commit -m "feat: migrate prompt templates from Python backend"
```

---

## Task 11: 实现 stub API 路由

**Files:**
- Create: `yanjing-ai/apps/api/src/routes/auth.ts`
- Create: `yanjing-ai/apps/api/src/routes/interview.ts`
- Create: `yanjing-ai/apps/api/src/routes/evaluation.ts`
- Create: `yanjing-ai/apps/api/src/routes/report.ts`

- [ ] **Step 1: 创建 Auth 路由 (stub)**

```typescript
// apps/api/src/routes/auth.ts
import { Router } from 'express';

const router = Router();

router.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint - not implemented yet' });
});

export default router;
```

- [ ] **Step 2: 创建 Interview 路由 (stub)**

```typescript
// apps/api/src/routes/interview.ts
import { Router } from 'express';

const router = Router();

router.post('/api/interview/question', (req, res) => {
  res.json({ message: 'Question generation endpoint - not implemented yet' });
});

export default router;
```

- [ ] **Step 3: 创建 Evaluation 路由 (stub)**

```typescript
// apps/api/src/routes/evaluation.ts
import { Router } from 'express';

const router = Router();

router.post('/api/evaluation/answer', (req, res) => {
  res.json({ message: 'Answer evaluation endpoint - not implemented yet' });
});

export default router;
```

- [ ] **Step 4: 创建 Report 路由 (stub)**

```typescript
// apps/api/src/routes/report.ts
import { Router } from 'express';

const router = Router();

router.get('/api/report/session/:id', (req, res) => {
  res.json({ message: `Report for session ${req.params.id} - not implemented yet` });
});

export default router;
```

- [ ] **Step 5: 注册所有路由**

```typescript
// apps/api/src/index.ts
import authRouter from './routes/auth';
import interviewRouter from './routes/interview';
import evaluationRouter from './routes/evaluation';
import reportRouter from './routes/report';

// 在已有路由后添加
app.use(authRouter);
app.use(interviewRouter);
app.use(evaluationRouter);
app.use(reportRouter);
```

- [ ] **Step 6: 测试所有端点**

```bash
curl http://localhost:8000/health
curl -X POST http://localhost:8000/api/auth/login
curl -X POST http://localhost:8000/api/interview/question
curl -X POST http://localhost:8000/api/evaluation/answer
curl http://localhost:8000/api/report/session/test-id
```

Expected: 所有端点返回 JSON 响应

- [ ] **Step 7: 提交**

```bash
git add apps/api
git commit -m "feat: add stub API routes for auth, interview, evaluation, report"
```

---

## Task 12: 最终验证和文档更新

**Files:**
- Modify: `yanjing-ai/AGENTS.md` (或创建新的项目文档)

- [ ] **Step 1: 运行完整类型检查**

```bash
pnpm typecheck
```

Expected: 所有包无类型错误

- [ ] **Step 2: 启动完整开发环境**

```bash
docker compose up -d
pnpm dev
```

Expected: 前后端都启动成功，可以访问 http://localhost:5173

- [ ] **Step 3: 测试完整流程**

1. 访问首页 http://localhost:5173
2. 点击 "开始面试" 进入简历上传页
3. 上传 PDF 测试文件
4. 验证 API 返回正确数据

- [ ] **Step 4: 更新项目文档**

更新 AGENTS.md 反映新的技术栈和命令

- [ ] **Step 5: 提交**

```bash
git add .
git commit -m "docs: update project documentation for new tech stack"
```

---

## 实施顺序建议

1. Task 1-2: 基础架构（Turborepo + 共享类型）
2. Task 3-5: 后端核心（Express + TypeORM + PDF 服务）
3. Task 6-8: 前端核心（Vite + React + shadcn/ui）
4. Task 9-11: 页面路由和 API 路由
5. Task 12: 最终验证

**预计总时间：** 4-6 小时（单人开发）
