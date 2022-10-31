import { FC, ReactElement } from 'react';

import s from './Card.module.scss';

type Props = {
  image: string;
  date: string;
  text: string;
  large?: boolean;
  colorText?: string;
  colorDate?: string;
};

export const Card: FC<Props> = ({
  image,
  date,
  text,
  large,
  colorText,
  colorDate,
}): ReactElement => {
  return (
    <div className={`${s.root} ${large && s.large}`}>
      <img className={`${s.image} ${large && s.imageLarge}`} src={image} alt="card_img" />
      <span className={`${colorDate && colorDate} ${s.date}`}>{date}</span>
      <h3 className={`${large ? s.largeText : s.text} ${colorText && colorText}`}>
        {text}
      </h3>
    </div>
  );
};
