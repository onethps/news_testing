import React, { ReactElement } from 'react';

import { mockCards } from '../../components/Card/mockCards';
import { Container } from '../../components/Container/Container';
import { mockAllNews } from '../../components/FeedItem/mockAllNews';

import { Colums } from './Colums/Colums';
import s from './ColumsBlock.module.scss';
import { ContentCard } from './ContentCard/ContentCard';
import { Promo } from './Promo/Promo';

const mockBlocks = [
  { id: 1, title: 'Политика', cards: mockCards, news: mockAllNews, promo: true },
  { id: 2, title: 'Економіка', cards: mockCards, news: mockAllNews, promo: false },
  { id: 3, title: 'Лайфстайл', cards: mockCards, news: mockAllNews, promo: false },
];

export const ColumsBlock = (): ReactElement => {
  return (
    <Container>
      <div className={s.root}>
        <div className={s.side}>
          <Colums />
        </div>
        <div className={s.content}>
          {mockBlocks.map(({ id, title, cards, news, promo }) => (
            <>
              <ContentCard
                key={id}
                title={title}
                bigCard={cards[0]}
                cards={cards}
                news={news}
              />
              {promo ? <Promo /> : null}
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};
