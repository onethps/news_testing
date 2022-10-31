import { FC, ReactElement } from 'react';

import s from './Promo.module.scss';

type Props = {};

const mockCard = {
  id: 1,
  image:
    'https://i.pcmag.com/imagery/roundups/01WOu4NbEnv3pJ54qp7j50k-16.fit_lim.size_1200x630.v1647874749.jpg',
  date: '05 серпня 11:00',
  text: 'Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів',
};

const mockBullets = [
  {
    id: 1,
    date: '05 серпня 11:00',
    text: 'Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки',
  },
  {
    id: 2,
    date: '05 серпня 11:00',
    text: 'Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки',
  },
  {
    id: 3,
    date: '05 серпня 11:00',
    text: 'Замовте нові флагмани Samsung Galaxy Fold4|Flip4 і отримуйте подарунки',
  },
];

export const Promo: FC<Props> = (): ReactElement => {
  return (
    <section className={s.root}>
      <div className={s.header}>
        <h1>Промо</h1>
        <span>Всі матеріали</span>
      </div>
      <div className={s.card}>
        <img alt="card_img" src={mockCard.image} className={s.image} />
        <div className={s.cardContent}>
          <span className={s.date}>{mockCard.date}</span>
          <h1 className={s.text}>{mockCard.text}</h1>
        </div>
      </div>

      <div className={s.bullets}>
        {mockBullets.map(el => (
          <div key={el.id} className={s.bullet}>
            <span className={s.date}>{el.date}</span>
            <p className={s.bulletText}>{el.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
