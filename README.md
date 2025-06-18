# Тестовое задание для буткемпа «Фланга»

[![Biome Linting and Formatting](https://github.com/MrDomy/bootcamp-pet-task/actions/workflows/biome.yaml/badge.svg)](https://github.com/MrDomy/bootcamp-pet-task/actions/workflows/biome.yaml)

Это REST API виртуального питомца на Экспрессе. Язык — Тайпскрипт. Менеджер пакетов — PNPM. Есть линтинг и форматирование через Биом.

Сделаны задания со звёздочкой: а) [мидлвейр для логирования — `logger.middleware.ts`](https://github.com/MrDomy/bootcamp-pet-task/blob/main/src/middleware/logger.middleware.ts), б) [Докерфайл](https://github.com/MrDomy/bootcamp-pet-task/blob/main/Dockerfile).

## Как развернуть

Нужна 22-я Нода и 10-й PNPM. Вот как начать локальную разработку:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/MrDomy/bootcamp-pet-task.git
cd bootcamp-pet-task
```

2. Установите зависимости:
 
```bash
pnpm install
```

3. Запустите в режиме разработки или запустите сборку:

```bash
pnpm run dev
##
pnpm run build
pnpm run start
```

## Как запустить в Докере

Соберите и запустите контейнер:

```bash
docker-compose up --build
```

## Как исправить ошибки линтера

```bash
pnpm run fix
```
