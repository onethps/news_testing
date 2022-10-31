import { FC, ReactElement } from 'react';

import { useMedia } from 'react-use';

import { FeedItem } from '../../../../components/FeedItem/FeedItem';
import { newsType } from '../../../../components/FeedItem/mockAllNews';

import s from './AsideBlock.module.scss';

type Props = {
  news: newsType[];
};

export const AsideBlock: FC<Props> = ({ news }): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <div className={s.root}>
      {isMobileWith && <h2>Новини розділу</h2>}
      {news.map(el => (
        <FeedItem key={el.id} time={el.time} text={el.text} label={el.label} />
      ))}
    </div>
  );
};
