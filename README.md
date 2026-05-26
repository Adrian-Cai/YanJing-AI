# YanJing-AI（言镜）

V0.1 目标：只做 **PDF 上传 + 安全校验 + 文本提取**。

## 技术栈

- 前端：Next.js + React + TypeScript
- 后端：Python + FastAPI
- 数据库：PostgreSQL（后续接入）
- 缓存：Redis（后续接入）

## 当前功能（V0.1）

- Web 简历上传页 `/resume`
- 仅支持 PDF 文件上传
- 后端安全校验：扩展名、Content-Type、文件头、大小、页数、加密状态
- PDF 文本提取并返回结构化响应

## API

- `POST /api/resume/upload`
  - form-data: `file`
  - 返回：`filename`、`size_bytes`、`page_count`、`raw_text`

## 运行

```bash
docker compose up
```
