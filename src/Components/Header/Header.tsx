import React from 'react';
import { Input } from '../../UI/Input/Input';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
import avatar from '../../assets/images/avatar.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { logout } from '../../store/ActionCreators/auth';

const Header: React.FC = () => {
  let location = useLocation();
  let nvigation = useNavigate();
  const { isAuthorization, fullName } = useTypeSelector((state) => state.auth);

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    logout();
    nvigation('/');
  };

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
            <div className={styles.infoPannel__item}>{fullName}</div>
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
