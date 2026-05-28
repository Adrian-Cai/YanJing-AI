# YanJing-AI（言镜）

[English](./README.en.md) | 简体中文

当前仓库已按新技术栈完成**基础框架初始化**：

- 前端：Next.js + TypeScript + Tailwind CSS
- 后端：Java（Spring Boot）
- 数据库：MongoDB
- 缓存：Redis
- 文件：MinIO（可平替云 OSS）
- AI：预留大模型 API 环境变量
- 语音：先录音后转文本（ASR batch 模式）

## 目录结构

```text
yanjing-web/             # Next.js 前端
yanjing-api-java/        # Spring Boot 后端
docker-compose.yml       # MongoDB + Redis + MinIO
.env.example             # 环境变量模板
```

## 快速开始

1. 复制环境变量：

```bash
cp .env.example .env
```

2. 启动基础依赖服务：

```bash
docker compose up -d
```

3. 启动前端：

```bash
cd yanjing-web
npm install
npm run dev
```

4. 启动后端：

```bash
cd yanjing-api-java
./mvnw spring-boot:run
# 或已安装 maven 时: mvn spring-boot:run
```

## 已配置的关键项

- MongoDB 已启用认证，默认 root 用户通过 `.env` 注入。
- Redis 支持密码模式（`--requirepass`）。
- MinIO 控制台默认 `http://localhost:9001`。
- 后端已配置 `application.yml` 读取 MongoDB/Redis 连接。

