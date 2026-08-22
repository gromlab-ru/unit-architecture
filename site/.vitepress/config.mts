import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { slugifyHeading } from '../../scripts/lib/slugify-heading.mjs'

const repositoryUrl = 'https://github.com/gromlab-ru/unit-architecture'
const viteConfigPath = fileURLToPath(new URL('../vite.config.mts', import.meta.url))

const documentationSidebar = [
  {
    text: 'Архитектурная модель',
    items: [
      { text: 'Владение и структура', link: '/architecture/' },
      { text: 'Юниты', link: '/architecture/units' },
      { text: 'Колокация и рост', link: '/architecture/colocation' },
      { text: 'Физическая структура', link: '/architecture/structure' },
      { text: 'Слои', link: '/architecture/layers' },
      { text: 'Публичный API и фасеты', link: '/architecture/facets' },
      { text: 'Зависимости', link: '/architecture/dependencies' },
      { text: 'Доменные юниты', link: '/architecture/domains' },
    ],
  },
  {
    text: 'Справочные материалы',
    items: [
      { text: 'Терминология', link: '/reference/terminology' },
      { text: 'Проверка решения', link: '/reference/validation' },
    ],
  },
  {
    text: 'Примеры',
    items: [
      { text: 'Карта примеров', link: '/examples/' },
      { text: 'Базовый юнит', link: '/examples/basic-unit' },
      { text: 'Рост через колокацию', link: '/examples/colocation-growth' },
      { text: 'Layout и widgets', link: '/examples/layout-projection' },
      { text: 'Доменный UI', link: '/examples/domain-ui' },
      { text: 'Инфраструктурный Provider', link: '/examples/infra-provider' },
      { text: 'SPA-фасет', link: '/examples/spa-facets' },
      { text: 'SSR-фасеты', link: '/examples/ssr-facets' },
      { text: 'Направление зависимостей', link: '/examples/dependency-direction' },
    ],
  },
]

export default defineConfig({
  srcDir: '../docs',
  rewrites: {
    'README.md': 'index.md',
    'architecture/README.md': 'architecture/index.md',
    'examples/README.md': 'examples/index.md',
  },
  title: 'Unit Architecture',
  description: 'Frontend-архитектура через рекурсивных владельцев ответственности',
  lang: 'ru-RU',
  base: '/unit-architecture/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://gromlab-ru.github.io/unit-architecture/',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/unit-architecture/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#d97706' }],
  ],
  markdown: {
    anchor: {
      slugify: slugifyHeading,
    },
  },
  vite: {
    configFile: viteConfigPath,
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Unit Architecture',
    nav: [
      { text: 'Архитектура', link: '/architecture/' },
      { text: 'Примеры', link: '/examples/' },
      { text: 'Проверка', link: '/reference/validation' },
    ],
    sidebar: documentationSidebar,
    socialLinks: [{ icon: 'github', link: repositoryUrl }],
    search: {
      provider: 'local',
      options: {
        detailedView: false,
        disableQueryPersistence: true,
        translations: {
          button: {
            buttonText: 'Найти в Unit Architecture',
            buttonAriaLabel: 'Искать по архитектуре, терминам и примерам',
          },
          modal: {
            displayDetails: 'Показать контекст',
            resetButtonTitle: 'Очистить запрос',
            backButtonTitle: 'Закрыть',
            noResultsText: 'Совпадений нет',
            footer: {
              selectText: 'выбрать',
              navigateText: 'перейти',
              closeText: 'закрыть',
            },
          },
        },
      },
    },
    outline: { level: [2, 3], label: 'В этом разделе' },
    notFound: {
      code: '404',
      title: 'Такой страницы нет',
      quote: 'Этот путь не относится к текущей структуре документации.',
      linkLabel: 'Открыть главную страницу',
      linkText: 'К началу документации',
    },
    editLink: {
      pattern: `${repositoryUrl}/edit/main/docs/:path`,
      text: 'Уточнить документацию',
    },
    lastUpdated: {
      text: 'Последнее изменение',
      formatOptions: { dateStyle: 'medium' },
    },
    docFooter: {
      prev: 'Назад',
      next: 'Далее',
    },
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Содержание',
    returnToTopLabel: 'Наверх',
    skipToContentLabel: 'Перейти к содержанию',
    footer: {
      message: 'Документация Unit Architecture',
      copyright: 'Открытая архитектурная модель',
    },
  },
})
