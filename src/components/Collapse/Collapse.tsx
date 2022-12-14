import { FC, ReactElement, useState } from 'react';

import { useMedia } from 'react-use';

import arrowDown from '../../assets/sprites/mobile/arrowdown.svg';
import arrowUp from '../../assets/sprites/mobile/arrowup.svg';
import { subCategoriesType } from '../../section/Footer/Footer';

import s from './Collapse.module.scss';

type Props = {
  title: string;
  categories: subCategoriesType[] | [];
};

export const Collapse: FC<Props> = ({ title, categories }): ReactElement => {
  const [toggle, setToggle] = useState(false);

  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <div className={`${s.root} ${!isMobileWith && categories.length ? s.border : ''}`}>
      {categories.length ? (
        <div>
          <div className={s.toggler}>
            <h3 className={s.title}>{title}</h3>
            <button type="button" onClick={() => setToggle(!toggle)}>
              {!isMobileWith && (
                <img src={!toggle ? arrowDown : arrowUp} alt="arrow_down" />
              )}
            </button>
          </div>
          {toggle && !isMobileWith ? (
            <ul>
              {categories.map(el => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ul>
          ) : null}
          {isMobileWith && (
            <ul>
              {categories.map(el => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <h3 className={s.title}>{title}</h3>
      )}
    </div>
  );
};
