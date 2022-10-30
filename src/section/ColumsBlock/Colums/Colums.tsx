import React, { ReactElement } from 'react';

import s from './Colums.module.scss';
import { mockColums } from './mockColums';

export const Colums = (): ReactElement => {
  return (
    <div>
      <div className={s.header}>
        <h3>Колонки</h3>
        <span>Всі колонки</span>
      </div>
      <div className={s.c}>
        {mockColums.map(el => (
          <div key={el.id} className={s.item}>
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
    </div>
  );
};
