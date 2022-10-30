import React, { ReactElement, useState } from 'react';

// Import Swiper React components
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

import { Container } from '../../components/Container/Container';
import { SliderPub } from '../../components/SliderPub/SliderPub';

import s from './Hero.module.scss';
import { mockHeroNews } from './mockNews';

export const Hero = (): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = (): void => {
    if (currentSlide === mockHeroNews.length - 1) {
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
      <img
        className={s.bannerBG}
        src={mockHeroNews[currentSlide].image}
        alt="banner_bg"
      />
      <Container>
        <div className={s.contentBox}>
          <h1>{mockHeroNews[currentSlide].text}</h1>
          <div className={s.slideSwiperButtons}>
            <AiOutlineLeftCircle onClick={() => handlePrevSlide()} />
            <div className={s.buttonsCounts}>
              <span>{mockHeroNews[currentSlide].id}</span>
              <span>/</span>
              <span>{mockHeroNews.length}</span>
            </div>
            <AiOutlineRightCircle onClick={() => handleNextSlide()} />
          </div>
          <div className={s.sliderPubsBox}>
            {mockHeroNews.map((el, index) => (
              <SliderPub
                isCurrentSlide={currentSlide === index}
                key={el.id}
                text={el.text}
                image={el.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
