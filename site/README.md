# Сайт Unit Architecture

`site/` содержит VitePress-конфигурацию, тему и статические ресурсы. Владельцем опубликованного содержания остаётся [`docs/`](../docs/README.md): VitePress читает Markdown-файлы напрямую, без отдельной копии внутри сайта.

## Локальный запуск

```bash
npm run docs:dev
```

## Сборка

```bash
npm run docs:build
npm run docs:preview
```

Собранный сайт находится в `site/.vitepress/dist/` и публикуется в GitHub Pages workflow при изменениях ветки `main`.
