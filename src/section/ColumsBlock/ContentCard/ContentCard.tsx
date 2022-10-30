import { FC, ReactElement } from 'react';

import { Card } from '../../../components/Card/Card';
import { CardType } from '../../../components/Card/mockCards';
import { newsType } from '../../../components/FeedItem/mockAllNews';
import { SectionNews } from '../../SectionNews/SectionNews';

import s from './ContentCard.module.scss';

type Props = {
  title: string;
  bigCard: CardType;
  cards: CardType[];
  news: newsType[];
};

export const ContentCard: FC<Props> = ({ title, bigCard, cards, news }): ReactElement => {
  return (
    <section className={s.root}>
      <div className={s.main}>
        <h1>{title}</h1>
        <div className={s.content}>
          <div className={s.mainCard}>
            <Card
              large={bigCard.id === 1}
              image={bigCard.image}
              date={bigCard.date}
              text={bigCard.text}
            />
          </div>
          <div className={s.second}>
            {cards.map(({ id, image, date, text }) => (
              <Card key={id} image={image} date={date} text={text} />
            ))}
          </div>
          <div className={s.sidebar}>
            <SectionNews news={news} />
          </div>
        </div>
      </div>
    </section>
  );
};
