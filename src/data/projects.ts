export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'MVP' | 'В разработке' | 'Прототип' | 'Реализовано' | 'Концепт';
  category: string;
  tags: string[];
  image: string;
  type: 'app' | 'site';
}

export const projects: Project[] = [
  {
    slug: 'sales-letter-engine',
    title: 'Sales Letter Engine',
    subtitle: 'Приложение для продаж',
    description: 'Кроссплатформенное приложение для отдела продаж: официальные письма, квоты и КП без ручной сборки.',
    status: 'MVP',
    category: 'Приложение для продаж',
    tags: ['Sales', 'B2B', 'Документы'],
    image: '/assets/app-sales.jpg',
    type: 'app',
  },
  {
    slug: 'tigerpromt-studio',
    title: 'TigerPromt Studio',
    subtitle: 'AI-инструмент',
    description: 'Цех многослойных AI-паттернов: версионирование, улучшение, голосовой ввод, превью и поиск.',
    status: 'В разработке',
    category: 'AI-инструмент',
    tags: ['AI', 'Промтинг', 'Кроссплатформа'],
    image: '/assets/app-promt.jpg',
    type: 'app',
  },
  {
    slug: 'tigertask',
    title: 'TigerTask',
    subtitle: 'Продуктивность',
    description: 'Таск-менеджер для задач, заметок и быта. Голос, теги, производственный календарь, мгновенный поиск.',
    status: 'В разработке',
    category: 'Продуктивность',
    tags: ['Productivity', 'Voice', 'Mobile'],
    image: '/assets/app-task.jpg',
    type: 'app',
  },
  {
    slug: 'tigerroi',
    title: 'TigerROI Marketing Analytics',
    subtitle: 'Аналитика и финансы',
    description: 'Маркетинговые расходы и расходы на AI под микроскопом. Дашборды, анализ чеков и договоров, экспорт.',
    status: 'Прототип',
    category: 'Аналитика и финансы',
    tags: ['Analytics', 'ROI', 'Финансы'],
    image: '/assets/app-roi.jpg',
    type: 'app',
  },
  {
    slug: 'stashpass',
    title: 'StashPass',
    subtitle: 'Безопасность',
    description: 'Защищённое хранилище цифровых секретов: пароли, API-ключи, конфигурации, подписки, заметки.',
    status: 'Реализовано',
    category: 'Безопасность',
    tags: ['Security', 'Vault', 'E2E'],
    image: '/assets/app-stash.jpg',
    type: 'app',
  },
  {
    slug: 'tigerwiki',
    title: 'TigerWiki',
    subtitle: 'Инструмент для AI-разработки',
    description: 'Операционная система для AI-разработки: архитектура, инструкции, история, правила работы с AI-билдерами.',
    status: 'Концепт',
    category: 'Инструмент для AI-разработки',
    tags: ['AI Dev', 'Knowledge Base', 'Vibecoding'],
    image: '/assets/app-wiki.jpg',
    type: 'app',
  },
  {
    slug: 'web-ui-kit',
    title: 'Корпоративный Web UI Kit',
    subtitle: 'Дизайн-система',
    description: 'Корпоративное приложение с правилами и регламентами веб- и UI-оформления: визуал, код, копирование стилей.',
    status: 'Реализовано',
    category: 'Дизайн-система',
    tags: ['Design System', 'Brand', 'UI Kit'],
    image: '/assets/app-uikit.jpg',
    type: 'app',
  },
  {
    slug: 'sovuq-master',
    title: 'Sovuq-Master',
    subtitle: 'Сайт компании по ремонту холодильников',
    description: 'Лендинг для сервисной компании: быстрая заявка, прозрачные цены, доверие с первого экрана.',
    status: 'Реализовано',
    category: 'Сайт компании',
    tags: ['Лендинг', 'Сервис', 'B2C'],
    image: '/assets/site-sovuq.jpg',
    type: 'site',
  },
  {
    slug: 'coco-salon',
    title: 'Coco — салон красоты и маникюра',
    subtitle: 'Сайт салона',
    description: 'Эстетичный сайт салона красоты: услуги, мастера, онлайн-запись и атмосфера бренда.',
    status: 'В разработке',
    category: 'Сайт салона',
    tags: ['Beauty', 'Лендинг', 'Запись'],
    image: '/assets/site-coco.jpg',
    type: 'site',
  },
  {
    slug: 'alex3stroy',
    title: 'Alex3stroy — строительство и ремонт',
    subtitle: 'Сайт строительной компании',
    description: 'Сайт компании по строительству и ремонту квартир, домов и помещений. Услуги, кейсы, прайс.',
    status: 'Реализовано',
    category: 'Сайт строительной компании',
    tags: ['Стройка', 'B2C', 'Кейсы'],
    image: '/assets/site-alex3stroy.jpg',
    type: 'site',
  },
  {
    slug: 'tehgid',
    title: 'Tehgid — IT-интегратор',
    subtitle: 'Корпоративный сайт',
    description: 'Сайт IT-компании, предоставляющей услуги интеграции, автоматизации и цифровизации бизнеса.',
    status: 'Реализовано',
    category: 'Корпоративный сайт',
    tags: ['IT', 'Интеграция', 'B2B'],
    image: '/assets/site-tehgid.jpg',
    type: 'site',
  },
];

export const apps = projects.filter(p => p.type === 'app');
export const sites = projects.filter(p => p.type === 'site');
