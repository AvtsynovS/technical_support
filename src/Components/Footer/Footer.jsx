import React from 'react';
import brand from '../../assets/images/footerBrand.png';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={brand} alt='brand' />
    </div>
  );
};

export default Footer;
