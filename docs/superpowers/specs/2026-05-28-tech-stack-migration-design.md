# YanJing 技术栈迁移设计文档

## 概述

将 YanJing 项目从 Next.js + FastAPI 迁移到 Turborepo monorepo 架构，前端使用 Vite + React 18，后端使用 Express + TypeScript，数据库从 PostgreSQL 切换到 MariaDB。

## 动机

- 前后端统一 TypeScript，减少上下文切换
- Vite 开发体验更好（热更新快、启动快）
- Turborepo 管理 monorepo，便于类型共享和代码复用
- MariaDB 替代 PostgreSQL，满足部署环境需求

## 项目结构

```
yanjing-ai/
├── apps/
│   ├── web/                    # 前端
│   │   ├── src/
│   │   │   ├── components/     # UI 组件
│   │   │   ├── pages/          # 页面组件
│   │   │   ├── hooks/          # 自定义 hooks
│   │   │   ├── lib/            # 工具函数
│   │   │   ├── styles/         # 全局样式
│   │   │   └── main.tsx        # 入口
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   └── package.json
│   │
│   └── api/                    # 后端
│       ├── src/
│       │   ├── routes/         # Express 路由
│       │   ├── services/       # 业务逻辑
│       │   ├── entities/       # TypeORM 实体
│       │   ├── middleware/     # 中间件
│       │   ├── prompts/        # LLM 提示词模板
│       │   └── index.ts        # 入口
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── shared/                 # 共享类型和常量
│       ├── src/
│       │   ├── types/          # TypeScript 类型定义
│       │   └── constants/      # 共享常量
│       ├── tsconfig.json
│       └── package.json
│
├── docker-compose.yml
├── package.json                # 根 package.json
├── turbo.json                  # Turborepo 配置
└── pnpm-workspace.yaml
```

## 技术栈

### 前端 (apps/web)

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18 | UI 框架 |
| TypeScript | 5 | 类型安全 |
| Vite | 6 | 构建工具 |
| TailwindCSS | 3 | 样式 |
| shadcn/ui | latest | 组件库 |
| wouter | 3 | 路由 |
| TanStack Query | 5 | 服务端状态管理 |
| framer-motion | 12 | 动画 |

### 后端 (apps/api)

| 技术 | 版本 | 用途 |
|------|------|------|
| Express | 4 | Web 框架 |
| TypeScript | 5 | 类型安全 |
| TypeORM | 0.3 | ORM |
| MariaDB | 11 | 数据库 |
| multer | latest | 文件上传 |
| pdf-parse | latest | PDF 解析 |

### 共享 (packages/shared)

- TypeScript 类型定义（API 请求/响应接口）
- 共享常量（错误码、配置项）

### 基础设施

| 服务 | 版本 | 用途 |
|------|------|------|
| MariaDB | 11 | 主数据库 |
| Redis | 7 | 缓存/Session（后续启用）|

## API 路由

| 方法 | 路径 | 功能 | 状态 |
|------|------|------|------|
| GET | `/health` | 健康检查 | 实现 |
| POST | `/api/auth/login` | 用户登录 | stub |
| POST | `/api/resume/upload` | 简历上传 | 实现 |
| POST | `/api/interview/question` | 生成面试题 | stub |
| POST | `/api/evaluation/answer` | 评估答案 | stub |
| GET | `/api/report/session/:id` | 获取报告 | stub |

### 共享类型示例

```typescript
// packages/shared/src/types/resume.ts
export interface ResumeUploadResponse {
  filename: string;
  sizeBytes: number;
  pageCount: number;
  rawText: string;
}

export interface ApiError {
  message: string;
  code?: string;
}
```

## 数据库实体

### User 用户表

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Session, session => session.user)
  sessions: Session[];
}
```

### Session 面试会话表

```typescript
@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.sessions)
  user: User;

  @Column('text')
  resumeText: string;

  @Column()
  jobTitle: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Message, message => session)
  messages: Message[];
}
```

### Message 面试消息表

```typescript
@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Session, session => session.messages)
  session: Session;

  @Column({ type: 'enum', enum: ['user', 'assistant'] })
  role: 'user' | 'assistant';

  @Column('text')
  content: string;

  @Column({ nullable: true })
  score: number;

  @CreateDateColumn()
  createdAt: Date;
}
```

## Docker 配置

```yaml
services:
  mariadb:
    image: mariadb:11
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: yanjing
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

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动所有服务（前端 + 后端 + DB）
pnpm dev

# 单独启动前端
pnpm --filter web dev

# 单独启动后端
pnpm --filter api dev

# 启动数据库
docker compose up -d

# 类型检查
pnpm typecheck

# 构建
pnpm build
```

## 端口分配

| 服务 | 端口 |
|------|------|
| 前端 (Vite) | 5173 |
| 后端 (Express) | 8000 |
| MariaDB | 3306 |
| Redis | 6379 |

## 迁移策略

采用全新重写策略，保留以下内容：

1. **Prompt 模板** — 从 `yanjing-api/app/prompts/` 迁移到 `apps/api/src/prompts/`
2. **前端 UI 设计** — 复用页面布局和样式设计
3. **Docker 配置** — 调整为 MariaDB，保留 Redis

## 实现阶段

1. **Phase 1: 基础架构** — Turborepo 脚手架、前后端项目初始化、Docker 配置
2. **Phase 2: 核心功能** — 简历上传、PDF 解析、数据库连接
3. **Phase 3: 业务功能** — 面试问答、评估、报告生成
4. **Phase 4: 完善** — 认证、错误处理、测试
