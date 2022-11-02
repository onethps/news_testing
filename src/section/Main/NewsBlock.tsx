import { ReactElement } from 'react';

import { useMedia } from 'react-use';

import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { mockCards } from '../../mocks/mockCards';
import { mockRegions } from '../../mocks/mockRegions';

import { AllNewsCard } from './AllNewsCard/AllNewsCard';
import s from './NewsBlock.module.scss';
import { RegionCard } from './RegionCard/RegionCard';

export const NewsBlock = (): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <main>
      <Container>
        <div className={s.root}>
          <div className={s.sideBlock}>
            <AllNewsCard />
          </div>

          <div className={s.mainBlock}>
            <h1 className={s.categoryTitle}>Вибір редакції</h1>
            {mockCards.map(({ id, image, date, text }) => (
              <Card category={null} key={id} image={image} date={date} text={text} />
            ))}
            {!isMobileWith && <Button customStyle="primary">Завантажити ще</Button>}
          </div>

          <div className={s.bottomBlock}>
            <div className={s.categoryHeader}>
              <h1 className={s.categoryTitle}>Регіони</h1>
              <span className={s.categorySubTitle}>Всі новини регіону</span>
            </div>
            {!isMobileWith && (
              <div>
                <ul className={s.categoryList}>
                  <li>Київ</li>
                  <li>Харків</li>
                  <li>Одеса</li>
                </ul>
              </div>
            )}
            <div className={s.bottomColumns}>
              {mockRegions.map(({ id, region, news }) => (
                <RegionCard key={id} region={region} news={news} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
