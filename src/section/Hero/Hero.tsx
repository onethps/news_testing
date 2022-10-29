import React, { ReactElement, useRef, useState } from 'react';
// Import Swiper React components
import { FreeMode, Navigation, Thumbs } from 'swiper';
import banner1 from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.jpeg';

import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

import s from './Hero.module.scss';
import { SliderPub } from '../../components/SliderPub/SliderPub';

const mockNews = [
  {
    id: 1,
    text: 'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
    image: banner1,
  },
  {
    id: 2,
    text: 'Не ми починали цю війну, але це наша трагедія – ми втратили людей, наші міста зруйновані. Тому з нашого боку компромісів точно не буде»',
    image: 'https://i.lb.ua/041/36/63594617df487.jpeg',
  },
  {
    id: 3,
    text: 'Український безпілотний комплекс SHARK запущено у серійне виробництво, – Притула',
    image: 'https://i.lb.ua/060/21/635bfe2f1931d.jpeg',
  },
];

export const Hero = (): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = (): void => {
    if (currentSlide === mockNews.length - 1) {
      setCurrentSlide(0);

      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = (): void => {
    if (currentSlide === 0) {
      return;
    }

    setCurrentSlide(currentSlide - 1);
  };

  return (
    <section className={s.root}>
      <img className={s.bannerBG} src={mockNews[currentSlide].image} alt="banner_bg" />
      <div className={s.contentBox}>
        <h1>{mockNews[currentSlide].text}</h1>
        <div className={s.slideSwiperButtons}>
          <AiOutlineLeftCircle onClick={() => handlePrevSlide()} />
          <div className={s.buttonsCounts}>
            <span>{mockNews[currentSlide].id}</span>
            <span>/</span>
            <span>{mockNews.length}</span>
          </div>
          <AiOutlineRightCircle onClick={() => handleNextSlide()} />
        </div>
        <div className={s.sliderPubsBox}>
          {mockNews.map((el, index) => (
            <SliderPub
              isCurrentSlide={currentSlide === index}
              key={el.id}
              text={el.text}
              image={el.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
