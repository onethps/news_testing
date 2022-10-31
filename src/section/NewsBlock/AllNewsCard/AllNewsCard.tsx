import { ReactElement } from 'react';

import { Button } from '../../../components/Button/Button';
import { FeedItem } from '../../../components/FeedItem/FeedItem';
import { mockAllNews } from '../../../components/FeedItem/mockAllNews';

import s from './AllNewsCard.module.scss';

export const AllNewsCard = (): ReactElement => {
  return (
    <div className={s.root}>
      <div className={s.blockTitle}>
        <h2>Всі новини</h2>
        <span>Архів</span>
      </div>
      <ul className={s.categories}>
        <li>Всі</li>
        <li>Новини</li>
        <li>Статті</li>
      </ul>
      <div className={s.content}>
        {mockAllNews.map(({ id, time, label, text }) => (
          <FeedItem key={id} time={time} label={label} text={text} />
        ))}
        <Button customStyle="primary">Завантажити ще</Button>
      </div>
    </div>
  );
};
