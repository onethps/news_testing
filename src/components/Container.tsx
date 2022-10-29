import { FC, ReactElement, ReactNode } from 'react';

import s from './Container.module.scss';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }): ReactElement => {
  return <div className={s.root}>{children}</div>;
};
