import { ReactElement } from 'react';

import { mockUserColumns } from '../../../mocks/mockUserComuns';

import s from './CategoriesColumn.module.scss';

export const CategoriesColumn = (): ReactElement => {
  return (
    <div className={s.cardsRow}>
      {mockUserColumns.map(el => (
        <div key={el.id} className={s.card}>
          <div className={s.headerCard}>
            <img alt="avatar_img" src={el.image} />
            <div className={s.author}>
              <h4>{el.name}</h4>
              <span>{el.job}</span>
            </div>
          </div>
          <p>{el.text}</p>
          <span>{el.date}</span>
        </div>
      ))}
    </div>
  );
};
