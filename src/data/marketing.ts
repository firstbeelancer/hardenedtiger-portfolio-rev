export interface MarketingItem {
  title: string;
  description: string;
  icon: string;
}

export const marketingItems: MarketingItem[] = [
  {
    title: 'Контент-стратегия',
    description: 'Разработка контент-плана, тем, форматов и каналов дистрибуции под бизнес-цели.',
    icon: 'target',
  },
  {
    title: 'SMM и ведение',
    description: 'Ведение социальных сетей: посты, сторис, Reels, сообщества и вовлечение аудитории.',
    icon: 'share-2',
  },
  {
    title: 'Продающие тексты',
    description: 'Копирайтинг для лендингов, рассылок, презентаций и рекламных кампаний.',
    icon: 'pen-tool',
  },
  {
    title: 'Презентации',
    description: 'Создание презентаций для продаж, инвесторов и конференций — от структуры до дизайна.',
    icon: 'presentation',
  },
  {
    title: 'Email-маркетинг',
    description: 'Проектирование цепочек писем, воронок, сегментации и аналитики рассылок.',
    icon: 'mail',
  },
  {
    title: 'Визуальный контент',
    description: 'Создание графики, каруселей, обложек и визуалов для соцсетей и рекламы.',
    icon: 'image',
  },
];
