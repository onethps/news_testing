import { ReactElement } from 'react';

import s from './RegionCard.module.scss';

const mockCards = [
  {
    id: 1,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '05 Серпня',
  },
  {
    id: 2,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '05 Серпня',
  },
  {
    id: 3,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '',
  },
  {
    id: 4,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '',
  },
  {
    id: 5,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '',
  },
  {
    id: 6,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    date: '05 Серпня',
  },
];

export const RegionCard = (): ReactElement => {
  return (
    <div className={s.root}>
      <h1>Київ</h1>
      {mockCards.map(el => (
        <div key={el.id} className={s.item}>
          {el.date ? <span className={s.date}>{el.date}</span> : null}
          <div className={s.newsBox}>
            <span className={s.timeNews}>{el.time}</span>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
