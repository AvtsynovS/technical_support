import React from 'react';
import { Input } from '../../UI/Input/Input';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
import avatar from '../../assets/images/avatar.png';

const Header: React.FC = () => {
  return (
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
        <div className={styles.infoPannel__fullName}>Ivan Ivanov</div>
        <div className={styles.infoPannel__item}>
          <Icon iconName='icon-log-out' />
        </div>
      </div>
    </div>
  );
};

export default Header;
