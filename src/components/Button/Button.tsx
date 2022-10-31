import { FC, HTMLAttributes, ReactElement } from 'react';
import { ReactNode } from 'react';

import arrowRightIcon from '../../assets/sprites/arrowbutton.svg';
import loadMoreIcon from '../../assets/sprites/loadmoreIcon.svg';

import s from './Button.module.scss';

type Props = {
  children: ReactNode;
  customStyle: 'primary' | 'secondary';
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  children,
  customStyle,
  ...restProps
}): ReactElement => {
  return customStyle === 'primary' ? (
    <button {...restProps} type="button" className={s.loadMoreButton}>
      <img src={loadMoreIcon} alt="loadMore_icon" />
      <span>{children}</span>
    </button>
  ) : (
    <button {...restProps} type="button" className={s.more}>
      <span>{children}</span>
      <img src={arrowRightIcon} alt="arrow_right" />
    </button>
  );
};
