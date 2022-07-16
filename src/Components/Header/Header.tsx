import React from 'react';
import { Input } from '../../UI/Input/Input';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
import avatar from '../../assets/images/avatar.png';
import { useLocation } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const Header: React.FC = () => {
  let location = useLocation();
  const { isAuthorization, fullName } = useTypeSelector((state) => state.auth);

  const logoutHandler = (event: React.MouseEvent) => {};
  // event?.preventDefault();

  return (
    <>
      {location.pathname === '/main' ? (
        <div className={styles.headerContainer}>
          <div className={styles.headerContainer__search}>
            <Input placeholder='Search' icon='icon-search' />
          </div>
          <div className={styles.infoPannel}>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-bell' />
            </div>
            <div className={styles.infoPannel__item}>
              <img
                className={styles.infoPannel__item_elips}
                src={avatar}
                alt='avatar'
              />
            </div>
            <div className={styles.infoPannel__item}>{fullName}</div>
            <button
              onClick={logoutHandler}
              className={styles.infoPannel__button}
            >
              <Icon iconName='icon-log-out' />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.headerContainer}>
          <div className={styles.infoPannel}>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-bell' />
            </div>
            <div className={styles.infoPannel__item}>
              <img
                className={styles.infoPannel__item_elips}
                src={avatar}
                alt='avatar'
              />
            </div>
            <div className={styles.infoPannel__item}>Ivan Ivanov</div>
            <div className={styles.infoPannel__item}>
              <Icon iconName='icon-log-out' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
