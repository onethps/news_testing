import { FC, ReactElement } from 'react';

import { FeedItem } from '../../components/FeedItem/FeedItem';
import { newsType } from '../../components/FeedItem/mockAllNews';

import s from './SectionNews.module.scss';

type Props = {
  news: newsType[];
};

export const SectionNews: FC<Props> = ({ news }): ReactElement => {
  return (
    <div className={s.root}>
      <h2>Новини розділу</h2>
      {news.map(el => (
        <FeedItem key={el.id} time={el.time} text={el.text} label={el.label} />
      ))}
    </div>
  );
};
