import React from 'react';
import styles from './styles.module.scss';
import brand from '../../assets/images/brand.png';
import authorizationImage from '../../assets/images/authorizationImage.png';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import Footer from '../../Components/Footer/Footer';
import footerBrand from '../../assets/images/footerBrand.png';
import { Link } from 'react-router-dom';
import mail from '../../assets/icons/icon-mail.svg';
import password from '../../assets/icons/icon-lock.svg';

const AuthorizationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.authorizationImage}>
          <img src={authorizationImage} alt='authorizationImage' />
        </div>
        <div className={styles.authorizationForm}>
          <div className={styles.authorizationForm__brand}>
            <img src={brand} alt='brand' />
          </div>
          <form action='' className={styles.authorizationForm__form}>
            <label htmlFor='E-MAIL' className={styles.label}>
              E-MAIL
              <div className={styles.input__wrapper}>
                <input
                  type='e-mail'
                  placeholder='Type your e-mail'
                  name='e-mail'
                  className={styles.input__mail}
                />
                <img src={mail} alt='e-mail' />
              </div>
            </label>
            <label htmlFor='PASSWORD' className={styles.label}>
              PASSWORD
              <div className={styles.input__wrapper}>
                <input
                  type='password'
                  placeholder='Type your password'
                  name='password'
                  className={styles.input__mail}
                />
                <img src={password} alt='password' />
              </div>
            </label>
            <label htmlFor='checkbox' className={styles.label__checkbox}>
              <input
                type='checkbox'
                name='checkbox'
                className={styles.input__checkbox}
              />
              Keep me logged in
            </label>
            <Button bgColor='primary'>Login</Button>
            <p>
              Not a member?{' '}
              <Link to='/' className={styles.registrationLink}>
                Request registration.
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* <Footer></Footer> */}
      <footer className={styles.footer}>
        <img src={footerBrand} alt='brand' />
      </footer>
    </div>
  );
};

export default AuthorizationPage;
