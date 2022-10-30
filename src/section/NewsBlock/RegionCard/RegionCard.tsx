import { FC, ReactElement } from 'react';

import { FeedItem } from '../../../components/FeedItem/FeedItem';
import { RegionType } from '../../../components/FeedItem/mockRegions';

import s from './RegionCard.module.scss';

type Props = {
  region: string;
  news: RegionType[];
};

export const RegionCard: FC<Props> = ({ region, news }): ReactElement => {
  return (
    <div className={s.root}>
      <h1>{region}</h1>
      {news.map(({ id, date, time, text }) => (
        <FeedItem key={id} date={date} time={time} text={text} label="" />
      ))}
    </div>
  );
};
