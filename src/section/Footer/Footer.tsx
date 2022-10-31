import { ReactElement } from 'react';

import { Collapse } from '../../components/Collapse/Collapse';

import s from './Footer.module.scss';

import tg from '../../assets/sprites/socials/telegram.svg';
import fb from '../../assets/sprites/socials/facebook.svg';
import insta from '../../assets/sprites/socials/insta.svg';
import tiktok from '../../assets/sprites/socials/tiktok.svg';
import youtube from '../../assets/sprites/socials/youtube.svg';
import news from '../../assets/sprites/socials/googlenews.svg';

const categoriesMock: FooterCategoriesType[] = [
  { id: 1, title: 'Всі новини', subCategories: [] },
  { id: 2, title: 'COVID-19', subCategories: [] },
  {
    id: 3,
    title: 'Війна',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 4,
    title: 'Політика',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 5,
    title: 'Події',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 6,
    title: 'Лайфстайл',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 7,
    title: 'Суспільство',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 8,
    title: 'Регіони',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
];

const aboutCompanyCategories = [
  { id: 1, title: 'про нас' },
  { id: 2, title: 'контакти' },
  { id: 3, title: 'структура власності' },
  { id: 4, title: 'команда' },
  { id: 5, title: 'медіакіт' },
];

const socials = [
  { id: 1, title: 'Youtube', icon: youtube },
  { id: 2, title: 'Facebook', icon: fb },
  { id: 3, title: 'Telegram', icon: tg },
  { id: 4, title: 'TikTok', icon: tiktok },
  { id: 4, title: 'Instagram', icon: insta },
  { id: 4, title: 'Google News', icon: news },
];

export type FooterCategoriesType = {
  id: number;
  title: string;
  subCategories: subCategoriesType[] | [];
};

export type subCategoriesType = {
  id: number;
  title: string;
};

export const Footer = (): ReactElement => {
  return (
    <section className={s.root}>
      {categoriesMock.map(({ id, title, subCategories }) => (
        <Collapse key={id} title={title} categories={subCategories} />
      ))}
      <ul className={s.companyCategories}>
        {aboutCompanyCategories.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <div className={s.socials}>
        <h3>Новини у зручному форматі</h3>
        <ul>
          {socials.map(({ id, title, icon }) => (
            <li key={id}>
              <img src={icon} alt="icon" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.policy}>
        <h4>© 2020-2022, ТОВ «Медіа Мережі»</h4>
        <div className={s.links}>
          <a href="/">Політика користувача</a>
          <a href="/">Політика конфіденційності</a>
          <a href="/">Політика Cookie-файлів</a>
        </div>
      </div>
    </section>
  );
};
