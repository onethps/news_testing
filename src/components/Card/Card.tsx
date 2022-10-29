import { FC, ReactElement } from 'react';

import s from './Card.module.scss';

type Props = {
  image: string;
  date: string;
  text: string;
};

export const Card: FC<Props> = ({ image, date, text }): ReactElement => {
  return (
    <div className={s.root}>
      <img className={s.image} src={image} alt="card_img" />
      <span>{date}</span>
      <h3>{text}</h3>
    </div>
  );
};
