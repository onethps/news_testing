import { ReactElement } from 'react';

import { useMedia } from 'react-use';

import fbIcon from '../../assets/sprites/fb_icon.svg';
import fireIcon from '../../assets/sprites/fire.svg';
import instIcon from '../../assets/sprites/inst_icon.svg';
import searchMobileIcon from '../../assets/sprites/mobile/search.svg';
import MenuIcon from '../../assets/sprites/nav_menu.svg';
import searchIcon from '../../assets/sprites/search.svg';
import tgIcon from '../../assets/sprites/tg_icon.svg';
import ytIcon from '../../assets/sprites/yt_icon.svg';
import { Container } from '../Container/Container';

import s from './Navbar.module.scss';

export const Navbar = (): ReactElement => {
  const isMobileWith = useMedia('(min-width: 376px)', false);

  return (
    <>
      {/* top navbar */}
      {/* leftmenu */}
      <nav className={s.topNav}>
        <Container>
          <div className={s.topInner}>
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
              <div className={s.rightMobile}>
                {isMobileWith ? (
                  <div className={s.search}>
                    <img alt="a" src={searchIcon} />
                    <input placeholder="пошук новин" />
                  </div>
                ) : (
                  <div className={s.mobileRightSide}>
                    <img alt="a" src={searchMobileIcon} />
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

              {isMobileWith && (
                <div className={s.lang}>
                  <span>RU</span>
                  <span>UA</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>

      <nav className={s.bottomNav}>
        <Container>
          <div className={s.bottomInner}>
            <ul className={s.list}>
              <li>
                <img src={fireIcon} alt="fire_icon" />
                <span>ВІЙНА</span>
              </li>
              <li>НОВИНИ</li>
              <li>ПОЛІТИКА</li>
              <li>ЕКОНОМІКА</li>
              <li>СУСПІЛЬСТВО</li>
              <li>ПОГЛЯДИ</li>
              <li>СВІТ</li>
            </ul>
            {isMobileWith && <span className={s.live}>Live</span>}
          </div>
        </Container>
      </nav>
    </>
  );
};
