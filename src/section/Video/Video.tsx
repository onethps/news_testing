import { ReactElement } from 'react';

import { useMedia } from 'react-use';

import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';

import s from './Video.module.scss';
import { mockCards } from '../../mocks/mockCards';

export const Video = (): ReactElement => {
  const isMobile = useMedia('(min-width: 376px)', false);

  return (
    <section className={s.root}>
      <Container>
        <div className={s.header}>
          <h1>Відео</h1>
          {!isMobile ? (
            <span className={s.subButton}>Більше відео</span>
          ) : (
            <Button customStyle="secondary">
              <span className={s.buttonNext}>Більше новин</span>
            </Button>
          )}
        </div>
        <div className={s.content}>
          <div className={s.side}>
            <Card
              category={null}
              video
              colorText={s.textColor}
              colorDate={s.dateColor}
              large={isMobile && mockCards[0].id === 1}
              key={mockCards[0].id}
              image={mockCards[0].image}
              date={mockCards[0].date}
              text={mockCards[0].text}
            />
          </div>
          <div className={s.main}>
            {mockCards.map(el => (
              <Card
                category={null}
                video
                colorText={s.textColor}
                colorDate={s.dateColor}
                key={el.id}
                image={el.image}
                date={el.date}
                text={el.text}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
