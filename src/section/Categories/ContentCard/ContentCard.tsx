import { FC, ReactElement } from 'react';

import { useMedia } from 'react-use';

import { Card } from '../../../components/Card/Card';
import { CardType } from '../../../mocks/mockCards';
import { newsType } from '../../../mocks/mockColumns';

import { AsideBlock } from './AsideBlock/AsideBlock';
import s from './ContentCard.module.scss';

type Props = {
  title: string;
  bigCard: CardType;
  cards: CardType[];
  news: newsType[];
};

export const ContentCard: FC<Props> = ({ title, bigCard, cards, news }): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <section className={s.root}>
      <div className={s.main}>
        <div className={s.header}>
          <div className={s.title}>
            <h1>{title}</h1>
            <span>Всі новини розділу</span>
          </div>
          {!isMobileWith && (
            <ul className={s.categories}>
              <li>Новини</li>
              <li>Статті</li>
            </ul>
          )}
        </div>

        <div className={s.content}>
          <div className={s.mainCard}>
            <Card
              category={bigCard?.category}
              large={bigCard.id === 1}
              image={bigCard.image}
              date={bigCard.date}
              text={bigCard.text}
            />
          </div>
          <div className={s.second}>
            {cards.map(({ id, image, date, text, category }) => (
              <Card category={category} key={id} image={image} date={date} text={text} />
            ))}
          </div>
          <div className={s.sidebar}>
            <AsideBlock news={news} />
          </div>
        </div>
      </div>
    </section>
  );
};
