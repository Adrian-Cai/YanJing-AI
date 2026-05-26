# YanJing-AI（言镜）

言镜第一阶段定位：**Web 版 AI 面试陪练系统（MVP）**。

## 技术栈

- 前端：Next.js + React + TypeScript
- 后端：Python + FastAPI
- 数据库：PostgreSQL
- 缓存：Redis
- 文件存储：S3 / MinIO / OSS（后续接入）
- AI 能力：LLM API + 语音转文本 API（P1）
- 部署：Docker / Docker Compose

## 项目结构

```text
yanjing/
  yanjing-web/
  yanjing-api/
  docker-compose.yml
  README.md
```

## MVP 闭环

1. 上传简历
2. 选择目标岗位
3. 简历结构化诊断
4. 生成个性化面试题
5. 用户文本回答
6. AI 评分与反馈
7. 输出优化后口语答案
8. 保存面试记录

## 当前已初始化模块

### 前端路由（yanjing-web/app）

- `/` 首页
- `/login` 登录页
- `/resume` 简历上传页
- `/diagnosis` 简历诊断页
- `/interview` 模拟面试页
- `/report` 回答反馈页

### 后端路由（yanjing-api/app/api）

- `POST /api/auth/login`
- `POST /api/resume/upload`
- `POST /api/interview/question`
- `POST /api/evaluation/answer`
- `GET /api/report/session/{session_id}`
- `GET /health`

## Prompt 资产（初始化）

- `resume_analysis.md`
- `question_generation.md`
- `answer_evaluation.md`
- `answer_rewrite.md`

## 运行（开发环境）

```bash
docker compose up
```
