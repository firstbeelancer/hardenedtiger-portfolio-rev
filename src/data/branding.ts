export interface BrandingItem {
  title: string;
  description: string;
  icon: string;
}

export const brandingItems: BrandingItem[] = [
  {
    title: 'Логотип и знак',
    description: 'Разработка логотипа, знака и фирменного блока для цифровой и печатной среды.',
    icon: 'fingerprint',
  },
  {
    title: 'Айдентика',
    description: 'Полная визуальная система: цвета, типографика, паттерны, стили фотоконтента.',
    icon: 'palette',
  },
  {
    title: 'Мерч и полиграфия',
    description: 'Дизайн мерча, буклетов, визиток, упаковки и выставочных материалов.',
    icon: 'shirt',
  },
  {
    title: 'Гайдлайны',
    description: 'Брендбук и руководство по использованию визуальной системы на всех носителях.',
    icon: 'book-open',
  },
  {
    title: 'Упаковка',
    description: 'Дизайн продуктовой упаковки от концепции до подготовки к производству.',
    icon: 'package',
  },
];
