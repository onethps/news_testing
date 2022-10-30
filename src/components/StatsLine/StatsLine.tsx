import { ReactElement } from 'react';

import Marquee from 'react-fast-marquee';
import { GiTank } from 'react-icons/gi';

import { Container } from '../Container/Container';

import s from './StatsLine.module.scss';

const mockStats = [
  {
    id: 1,
    title: 'танки',
    stats: '3465',
  },
  {
    id: 2,
    title: 'артсистеми',
    stats: '4515',
  },
  {
    id: 3,
    title: 'літаки',
    stats: '220',
  },
];

export const StatsLine = (): ReactElement => {
  return (
    <section className={s.root}>
      <Container>
        <div className={s.block}>
          <span className={s.statsName}>131 день війни:</span>
          <Marquee gradient={false} className={s.runningLine}>
            {mockStats.map(el => (
              <div key={el.id} className={s.lineItem}>
                <GiTank />
                <div>
                  <span>{el.title}</span>
                  <span>{el.stats}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};
