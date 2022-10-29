import { ReactElement } from 'react';

import fireIcon from '../../../assets/sprites/fire.svg';
import camPhoto from '../../../assets/sprites/camera.svg';

import s from './AllNewsCard.module.scss';

const mockCards = [
  {
    id: 1,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: false,
    hotNews: false,
  },
  {
    id: 2,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: false,
    hotNews: false,
  },
  {
    id: 3,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: false,
    hotNews: false,
  },
  {
    id: 4,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: true,
    hotNews: false,
  },
  {
    id: 5,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: false,
    hotNews: true,
  },
  {
    id: 6,
    time: '14:59',
    text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
    isPhoto: false,
    hotNews: false,
  },
];

export const AllNewsCard = (): ReactElement => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <h1>Всі новини</h1>
        <span>Архів</span>
      </div>
      <ul>
        <li>Всі</li>
        <li>Новини</li>
        <li>Статті</li>
      </ul>

      <div>
        {mockCards.map(el => (
          <div key={el.id} className={s.item}>
            {el.hotNews ? (
              <div className={s.hotNewsTag}>
                <img src={fireIcon} alt="fire_icon" />
                <h4>Термінова новина</h4>
              </div>
            ) : null}
            {el.isPhoto ? (
              <div className={s.photoNewsTag}>
                <img src={camPhoto} alt="cam_photo" />
                <h4>Новина с фото</h4>
              </div>
            ) : null}
            <span className={s.timeNews}>{el.time}</span>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
