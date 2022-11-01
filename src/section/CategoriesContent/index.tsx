import React, { ReactElement } from 'react';

import { useMedia } from 'react-use';

import { Container } from '../../components/Container/Container';

import { CategoriesColumn } from './CategoriesColumn/CategoriesColumn';
import { ContentCard } from './ContentCard/ContentCard';
import s from './index.module.scss';
import { mockCategoriesContent } from './mock';
import { Promo } from './Promo/Promo';

export const CategoriesContent = (): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <section className={s.root}>
      <Container>
        <div className={s.contentBox}>
          <aside className={s.side}>
            <div className={s.header}>
              <h3>Колонки</h3>
              <span>Всі колонки</span>
            </div>
            <div className={s.sideContent}>
              <CategoriesColumn />
            </div>
            {isMobileWith && <button type="button">Всі колонки</button>}
          </aside>
          <div className={s.content}>
            {mockCategoriesContent.map(({ id, title, cards, news, promo }) => (
              <div key={id}>
                <ContentCard
                  key={id}
                  title={title}
                  bigCard={cards[0]}
                  cards={cards}
                  news={news}
                />
                {promo ? <Promo /> : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
