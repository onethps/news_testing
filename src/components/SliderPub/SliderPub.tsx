import { FC, ReactElement } from 'react';

import s from './SliderPub.module.scss';

type Props = {
  text: string;
  image: string;
  isCurrentSlide: boolean;
  index: number;
  setCurrentSlide: (value: number) => void;
};

export const SliderPub: FC<Props> = ({
  text,
  image,
  isCurrentSlide,
  setCurrentSlide,
  index,
}): ReactElement => {
  return (
    <div
      role="presentation"
      onClick={() => setCurrentSlide(index)}
      className={`${s.root} ${isCurrentSlide && s.active}`}
    >
      <img alt="image_slide-thumb" src={image} />
      <p>{text}</p>
    </div>
  );
};
