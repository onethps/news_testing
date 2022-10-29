import { ReactElement } from 'react';

import { SlArrowRightCircle } from 'react-icons/sl';
import { Card } from '../../components/Card/Card';

import { Container } from '../../components/Container/Container';

import s from './Video.module.scss';

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
];

export const Video = (): ReactElement => {
  return (
    <section className={s.root}>
      <Container>
        <div className={s.header}>
          <h1>Відео</h1>
          <div className={s.subButton}>
            <span>Більше новин</span>
            <SlArrowRightCircle />
          </div>
        </div>
        <div className={s.content}>
          <div className={s.side}>
            <Card
              key={mockCards[0].id}
              image={mockCards[0].image}
              date={mockCards[0].date}
              text={mockCards[0].text}
            />
          </div>
          <div className={s.main}>
            {mockCards.map(el => (
              <Card key={el.id} image={el.image} date={el.date} text={el.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
