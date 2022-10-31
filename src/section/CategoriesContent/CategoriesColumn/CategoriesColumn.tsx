import React, { ReactElement } from 'react';

import s from './CategoriesColumn.module.scss';
import { mockColums } from './mockColums';

export const CategoriesColumn = (): ReactElement => {
  return (
    <div className={s.cardsRow}>
      {mockColums.map(el => (
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
