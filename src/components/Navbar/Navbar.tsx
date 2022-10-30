import { ReactElement } from 'react';

import { useMedia } from 'react-use';

import fbIcon from '../../assets/sprites/fb_icon.svg';
import instIcon from '../../assets/sprites/inst_icon.svg';
import MenuIcon from '../../assets/sprites/nav_menu.svg';
import searchIcon from '../../assets/sprites/search.svg';
import tgIcon from '../../assets/sprites/tg_icon.svg';
import ytIcon from '../../assets/sprites/yt_icon.svg';
import { Container } from '../Container/Container';

import s from './Navbar.module.scss';

export const Navbar = (): ReactElement => {
  const isMobileWith = useMedia('(min-width: 620px)', false);

  return (
    <Container>
      {/* top navbar */}
      {/* leftmenu */}
      <div className={s.topNav}>
        <div className={s.leftSide}>
          <button type="button" className={s.menuButton}>
            <img alt="menu_icon" src={MenuIcon} />
            <span>Меню</span>
          </button>
          <ul className={s.list}>
            <li>Київ</li>
            <li>Одесса</li>
            <li>Харків</li>
          </ul>
        </div>

        {/* rightmenu */}
        <div className={s.rightSide}>
          <div className={s.righhtMobile}>
            {isMobileWith ? (
              <div className={s.search}>
                <img alt="a" src={searchIcon} />
                <input placeholder="пошук новин" />
              </div>
            ) : (
              <div className={s.mobileRightSide}>
                <img alt="a" src={searchIcon} />
                <select>
                  <option>UA</option>
                  <option>RU</option>
                </select>
              </div>
            )}
          </div>

          <ul className={s.list}>
            <li>
              <img alt="tg" src={tgIcon} />
            </li>
            <li>
              <img alt="fb" src={fbIcon} />
            </li>
            <li>
              <img alt="inst" src={instIcon} />
            </li>
            <li>
              <img alt="yt" src={ytIcon} />
            </li>
          </ul>

          {/* <div className={s.lang}>
            <span>RU</span>
            <span className={s.border} />
            <span>UA</span>
          </div> */}
        </div>
      </div>

      <div className={s.bottomNav}>
        <ul className={s.list}>
          <li>ВІЙНА</li>
          <li>НОВИНИ</li>
          <li>ПОЛІТИКА</li>
          <li>ЕКОНОМІКА</li>
          <li>СУСПІЛЬСТВО</li>
          <li>ПОГЛЯДИ</li>
          <li>СВІТ</li>
        </ul>
        <div>
          <span className={s.live}>Live</span>
        </div>
      </div>
    </Container>
  );
};
