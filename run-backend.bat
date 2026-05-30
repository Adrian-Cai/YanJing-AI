@echo off
set MONGODB_URI=mongodb://root:Caijinwei%262026@103.236.97.248:27017/yanjing?authSource=admin
set REDIS_HOST=103.236.97.248
set REDIS_PORT=6379
set REDIS_PASSWORD=Caijinwei&2026
set API_PORT=8000

cd yanjing-api-java
mvn spring-boot:run
