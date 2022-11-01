import { FC, HTMLAttributes, ReactElement, ReactNode } from 'react';

import s from './Container.module.scss';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Container: FC<Props> = ({ children, ...restProps }): ReactElement => {
  return (
    <div {...restProps} className={s.root}>
      {children}
    </div>
  );
};
