import { FC, ReactElement } from 'react';

import s from './SliderPub.module.scss';

type Props = {
  text: string;
  image: string;
  isCurrentSlide: boolean;
};

export const SliderPub: FC<Props> = ({ text, image, isCurrentSlide }): ReactElement => {
  return (
    <div className={`${s.root} ${isCurrentSlide && s.active}`}>
      <img alt="image_a" src={image} />
      <p>{text}</p>
    </div>
  );
};
