import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import brand from '../../assets/images/brand.png';
import authorizationImage from '../../assets/images/authorizationImage.png';
import Footer from '../../Components/Footer/Footer';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { Label } from '../../UI/Label/Label';

const AuthorizationPage: React.FC = () => {
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('Wrong email');
  const [passwordError, setPasswordError] = useState('Wrong password');
  const [formValid, setFormValid] = useState(false);

  //validation
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    !re.test(String(event.target.value).toLowerCase())
      ? setEmailError('Wrong email')
      : setEmailError('');
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    event.target.value.length < 3 || event.target.value.length > 10
      ? setPasswordError('Wrong password')
      : setPasswordError('');
  };

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
          <form
            action='http://localhost:3001'
            method='post'
            className={styles.authorizationForm__form}
          >
            {emailDirty && emailError ? (
              <Label htmlFor='email'>
                E-MAIL
                <Input
                  name='email'
                  placeholder='Type your e-mail'
                  icon='icon-mail'
                  value={email}
                  onBlur={blurHandler}
                  onChange={emailHandler}
                  warning={true}
                />
                <div className={styles.errorMessage}>{emailError}</div>
              </Label>
            ) : (
              <Label htmlFor='email'>
                E-MAIL
                <Input
                  name='email'
                  placeholder='Type your e-mail'
                  icon='icon-mail'
                  value={email}
                  onBlur={blurHandler}
                  onChange={emailHandler}
                />
              </Label>
            )}
            {passwordDirty && passwordError ? (
              <Label htmlFor='password'>
                PASSWORD
                <Input
                  name='password'
                  placeholder='Type your password'
                  icon='icon-lock'
                  value={password}
                  onBlur={blurHandler}
                  onChange={passwordHandler}
                  warning={true}
                />
                <div className={styles.errorMessage}>{passwordError}</div>
              </Label>
            ) : (
              <Label htmlFor='password'>
                PASSWORD
                <Input
                  name='password'
                  placeholder='Type your password'
                  icon='icon-lock'
                  value={password}
                  onBlur={blurHandler}
                  onChange={passwordHandler}
                />
              </Label>
            )}
            <label htmlFor='checkbox' className={styles.label__checkbox}>
              <input
                type='checkbox'
                name='checkbox'
                className={styles.input__checkbox}
              />
              Keep me logged in
            </label>
            <Button bgColor='primary' type='submit' disabled={!formValid}>
              Login
            </Button>
            <p>
              Not a member?{' '}
              <Link to='/registration' className={styles.registrationLink}>
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
