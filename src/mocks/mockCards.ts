import inteview from '../assets/sprites/interview.svg';
import promo from '../assets/sprites/promo.svg';

import { mockAllNews, newsType } from './mockColumns';

export type categoryType = {
  title: string;
  icon: string;
};

export type CardType = {
  id?: number;
  image: string;
  date: string;
  text: string;
  category: categoryType | null;
};

export const mockCards: CardType[] = [
  {
    id: 1,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
    category: {
      title: 'Промо',
      icon: promo,
    },
  },
  {
    id: 2,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
    category: {
      title: 'Інтервью',
      icon: inteview,
    },
  },
  {
    id: 3,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
    category: null,
  },
];

type CategoriesContentType = {
  id: number;
  title: string;
  cards: CardType[];
  news: newsType[];
  promo: boolean;
};

export const mockCategoriesContent: CategoriesContentType[] = [
  { id: 1, title: 'Политика', cards: mockCards, news: mockAllNews, promo: true },
  { id: 2, title: 'Економіка', cards: mockCards, news: mockAllNews, promo: false },
  { id: 3, title: 'Лайфстайл', cards: mockCards, news: mockAllNews, promo: false },
];
