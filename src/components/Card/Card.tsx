import { FC, ReactElement } from 'react';

import videoIcon from '../../assets/sprites/play.svg';

import s from './Card.module.scss';
import { categoryType } from '../../mocks/mockCards';

type Props = {
  image: string;
  date: string;
  text: string;
  large?: boolean;
  colorText?: string;
  colorDate?: string;
  video?: boolean;
  category: categoryType | null;
};

export const Card: FC<Props> = ({
  image,
  date,
  text,
  large,
  colorText,
  colorDate,
  video,
  category,
}): ReactElement => {
  return (
    <div className={`${s.root} ${large ? s.large : ''}`}>
      <div className={s.imgBox}>
        {video ? (
          <img
            src={videoIcon}
            alt="video_icon"
            className={`${s.videoIcon} ${!large ? s.opacityIcon : ''}`}
          />
        ) : null}
        <img
          className={`${s.image} ${large ? s.largeImg : ''}`}
          src={image}
          alt="card_img"
        />
      </div>

      <div className={`${colorDate && colorDate} ${s.aboutInfo}`}>
        <span>{date}</span>
        {category && (
          <>
            <img alt="icon" src={category.icon} />
            <span>{category.title}</span>
          </>
        )}
      </div>
      <p className={`${large ? s.largeText : s.text} ${colorText && colorText}`}>
        {text}
      </p>
    </div>
  );
};
