import React from 'react';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
// import { Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Icon iconName='white-brand' />
      <ul className={styles.navbarList}>
        <li>
          <Icon iconName='icon-home' />
        </li>
        <li>
          <Icon iconName='icon-globe' />
        </li>
        <li>
          <Icon iconName='icon-archive' />
        </li>
        <li>
          <Icon iconName='icon-pie-chart' />
        </li>
        <li>
          <Icon iconName='icon-dollar-sign' />
        </li>
        <li>
          <Icon iconName='icon-database' />
        </li>
        <li>
          <Icon iconName='icon-navigation' />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
