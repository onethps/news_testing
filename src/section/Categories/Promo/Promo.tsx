import { ReactElement, useRef } from 'react';

import { useMedia } from 'react-use';

import rightArrow from '../../../assets/sprites/rightarrowfill.svg';
import { mockBullets } from '../../../mocks/mockBullets';
import { mockCards } from '../../../mocks/mockCards';

import s from './Promo.module.scss';

const SCROLL_OFFSET_NUMBER = 300;

export const Promo = (): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  const ref = useRef<HTMLInputElement | null>(null);

  const scroll = (scrollOffset: any): void => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className={s.root}>
      <div className={s.header}>
        <h1>Промо</h1>
        <span>Всі матеріали</span>
      </div>
      <div className={s.card}>
        <img
          alt="card_img"
          src="https://akket.com/wp-content/uploads/2021/12/Proshivka-MIUI-13-vyi-det-dlya-etih-smartfonov-Xiaomi-uzhe-28-dekabrya.-Polnyi-spisok-9.jpg"
          className={s.image}
        />
        <div className={s.cardContent}>
          <div className={s.date}>
            <span>{mockCards[0].date}</span>
            <img src={mockCards[0].category?.icon} alt="icon" />
            <span>{mockCards[0].category?.title}</span>
          </div>
          <h1 className={s.text}>{mockCards[0].text}</h1>
        </div>
      </div>

      <div className={s.bullets} ref={ref}>
        {mockBullets.map(el => (
          <div key={el.id} className={s.bullet}>
            <span className={s.date}>{el.date}</span>

            <p className={s.bulletText}>{el.text}</p>
          </div>
        ))}
      </div>
      {isMobileWith && (
        <>
          <div className={s.shadow} />
          <button onClick={() => scroll(SCROLL_OFFSET_NUMBER)} type="button">
            <img src={rightArrow} alt="arrow" />
          </button>
        </>
      )}
    </section>
  );
};
