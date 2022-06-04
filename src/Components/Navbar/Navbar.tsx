import React from 'react';
import { Icon } from '../SvgIcons/Icons';
import styles from './styles.module.scss';
import navbarBrand from '../../assets/images/navbarBrand.png';
// import { Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={navbarBrand} alt='brand' />
      <ul className={styles.navbar__list}>
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
