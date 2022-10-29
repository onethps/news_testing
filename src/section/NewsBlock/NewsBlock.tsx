import { ReactElement } from 'react';
import { Card } from '../../components/Card/Card';

import { Container } from '../../components/Container/Container';
import { AllNewsCard } from './AllNewsCard/AllNewsCard';

import s from './NewsBlock.module.scss';
import { RegionCard } from './RegionCard/RegionCard';

const mockCards = [
  {
    id: 1,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
  {
    id: 2,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
  {
    id: 3,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
  {
    id: 4,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
  {
    id: 5,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
  {
    id: 6,
    image: 'https://www.rbc.ua/static/img/_/p/_pro_golovne_5_13_480x270.jpg',
    date: '05 СЕРПНЯ 11:00',
    text: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.',
  },
];

export const NewsBlock = (): ReactElement => {
  return (
    <section>
      <Container>
        <div className={s.root}>
          <div className={s.side}>
            <AllNewsCard />
          </div>

          <div className={s.mainBox}>
            <h1 className={s.categoryTitle}>Вибір редакції</h1>
            <div className={s.main}>
              {mockCards.map(el => (
                <Card key={el.id} image={el.image} date={el.date} text={el.text} />
              ))}
            </div>

            <div className={s.categoryHeader}>
              <h1 className={s.categoryTitle}>Регіони</h1>
              <span className={s.categorySubTitle}>Всі новини регіону</span>
            </div>
            <div className={s.regions}>
              <RegionCard />
              <RegionCard />
              <RegionCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
