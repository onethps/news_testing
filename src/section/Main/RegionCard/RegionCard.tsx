import { FC, ReactElement } from 'react';

import { Button } from '../../../components/Button/Button';
import { FeedItem } from '../../../components/FeedItem/FeedItem';
import { RegionType } from '../../../mocks/mockRegions';

import s from './RegionCard.module.scss';

type Props = {
  region: string;
  news: RegionType[];
};

export const RegionCard: FC<Props> = ({ region, news }): ReactElement => {
  return (
    <div className={s.root}>
      <h1>{region}</h1>
      {news.map(({ id, date, time, text }, i) => (
        <div key={id} className={`${i === news.length - 1 ? s.noBorder : s.border}`}>
          <FeedItem date={date} time={time} text={text} label="" />
        </div>
      ))}
      <Button customStyle="secondary">Більне новин</Button>
    </div>
  );
};
