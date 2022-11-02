import { FC, ReactElement } from 'react';

import { useMedia } from 'react-use';

import { Button } from '../../../../components/Button/Button';
import { FeedItem } from '../../../../components/FeedItem/FeedItem';
import { newsType } from '../../../../mocks/mockColumns';

import s from './AsideBlock.module.scss';

type Props = {
  news: newsType[];
};

export const AsideBlock: FC<Props> = ({ news }): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <div className={s.root}>
      {isMobileWith && <h3>Новини розділу</h3>}
      {news.map(el => (
        <FeedItem key={el.id} time={el.time} text={el.text} label={el.label} />
      ))}
      <Button customStyle="secondary">Більше </Button>
    </div>
  );
};
