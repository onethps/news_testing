import { ReactElement } from 'react';

import { FeedItem } from '../../../components/FeedItem/FeedItem';
import { mockAllNews } from '../../../components/FeedItem/mockAllNews';

import s from './AllNewsCard.module.scss';

export const AllNewsCard = (): ReactElement => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Всі новини</h2>
        <span>Архів</span>
      </div>
      <ul>
        <li>Всі</li>
        <li>Новини</li>
        <li>Статті</li>
      </ul>

      <div>
        {mockAllNews.map(({ id, time, label, text }) => (
          <FeedItem key={id} time={time} label={label} text={text} />
        ))}
      </div>
    </div>
  );
};
