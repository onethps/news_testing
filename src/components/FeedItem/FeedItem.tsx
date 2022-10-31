import { FC, ReactElement } from 'react';

import cameraIcon from '../../assets/sprites/camera.svg';
import exclusiveIcon from '../../assets/sprites/exclusive.svg';
import fireIcon from '../../assets/sprites/fire.svg';
import onlineIcon from '../../assets/sprites/online.svg';

import s from './FeedItem.module.scss';

type Props = {
  time: string;
  text: string;
  label: 'withPhoto' | 'hotNew' | 'online' | 'exclusive' | '';
  date?: string;
};

type Slugs = {
  title: string;
  label: string;
  color: string;
};

type g = {
  withPhoto: Slugs;
  hotNew: Slugs;
  online: Slugs;
  exclusive: Slugs;
};

const slugs: g = {
  withPhoto: {
    title: 'Новина с фото',
    label: cameraIcon,
    color: 'grey',
  },
  hotNew: {
    title: 'Термінова новина',
    label: fireIcon,
    color: 'yellow',
  },
  online: {
    title: 'Онлайн',
    label: onlineIcon,
    color: 'yellow',
  },
  exclusive: {
    title: 'Ексклюзив',
    label: exclusiveIcon,
    color: 'yellow',
  },
};

export const FeedItem: FC<Props> = ({ time, text, label, date }): ReactElement => {
  return (
    <div className={s.root}>
      {label ? (
        <div className={s.labelBox}>
          <img src={label && slugs[label].label} className={`${s.label}`} alt="label" />
          <span className={`${label !== 'withPhoto' ? s.hotTitle : s.normalTitle}`}>
            {slugs[label].title}
          </span>
        </div>
      ) : null}
      {date ? <span className={s.date}>{date}</span> : null}

      <p className={`${label === 'hotNew' ? s.hotText : s.text} `}>
        <span className={s.time}>{time}</span>
        {text}
      </p>
    </div>
  );
};
