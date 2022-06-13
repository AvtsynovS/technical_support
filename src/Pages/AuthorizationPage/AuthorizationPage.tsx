import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import brand from '../../assets/images/brand.png';
import authorizationImage from '../../assets/images/authorizationImage.png';
import Footer from '../../Components/Footer/Footer';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { Label } from '../../UI/Label/Label';

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
            <Label>
              E-MAIL
              <Input placeholder='Type your e-mail' icon='icon-mail' />
            </Label>
            <Label>
              PASSWORD
              <Input placeholder='Type your password' icon='icon-lock' />
            </Label>
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
      <Footer></Footer>
    </div>
  );
};

export default AuthorizationPage;
