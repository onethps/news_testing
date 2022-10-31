import { mockCards } from '../../components/Card/mockCards';
import { mockAllNews } from '../../components/FeedItem/mockAllNews';

export const mockCategoriesContent = [
  { id: 1, title: 'Политика', cards: mockCards, news: mockAllNews, promo: true },
  { id: 2, title: 'Економіка', cards: mockCards, news: mockAllNews, promo: false },
  { id: 3, title: 'Лайфстайл', cards: mockCards, news: mockAllNews, promo: false },
];
