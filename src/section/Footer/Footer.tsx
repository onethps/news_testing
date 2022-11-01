import { ReactElement } from 'react';

import fb from '../../assets/sprites/socials/facebook.svg';
import news from '../../assets/sprites/socials/googlenews.svg';
import insta from '../../assets/sprites/socials/insta.svg';
import tg from '../../assets/sprites/socials/telegram.svg';
import tiktok from '../../assets/sprites/socials/tiktok.svg';
import youtube from '../../assets/sprites/socials/youtube.svg';
import { Collapse } from '../../components/Collapse/Collapse';
import { Container } from '../../components/Container/Container';

import s from './Footer.module.scss';

const categoriesMock: FooterCategoriesType[] = [
  {
    id: 3,
    title: 'Лайфстайл',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 4,
    title: 'Регіони',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 5,
    title: 'Економіка',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },

  {
    id: 7,
    title: 'Події',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 8,
    title: 'Суспільство',
    subCategories: [
      { id: 1, title: 'Київ' },
      { id: 2, title: 'Харків' },
      { id: 3, title: 'Одеса' },
    ],
  },
  {
    id: 9,
    title: 'Техно',
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
const mainCategoriesMock = [
  { id: 1, title: 'Всі новини', subCategories: [] },
  {
    id: 2,
    title: 'COVID-19',
    subCategories: [],
  },
  {
    id: 3,
    title: 'Війна',
    subCategories: [],
  },
  {
    id: 4,
    title: 'Політика',
    subCategories: [],
  },
];

export const Footer = (): ReactElement => {
  return (
    <footer className={s.root}>
      <Container>
        <div className={s.content}>
          <div className={s.firstCategories}>
            {mainCategoriesMock.map(({ id, title, subCategories }) => (
              <Collapse key={id} title={title} categories={subCategories} />
            ))}
          </div>
          <div className={s.secondCategories}>
            {categoriesMock.map(({ id, title, subCategories }) => (
              <Collapse key={id} title={title} categories={subCategories} />
            ))}
          </div>
          <div className={s.thirdCategories}>
            <ul>
              {aboutCompanyCategories.map(({ id, title }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
          </div>
        </div>

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
      </Container>
    </footer>
  );
};
