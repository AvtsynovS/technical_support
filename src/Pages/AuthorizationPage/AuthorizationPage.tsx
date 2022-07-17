import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import brand from '../../assets/images/brand.png';
import authorizationImage from '../../assets/images/authorizationImage.png';
import Footer from '../../Components/Footer/Footer';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { Label } from '../../UI/Label/Label';
import { useActions } from '../../hooks/useActions';

const AuthorizationPage: React.FC = () => {
  // validation
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const [formValid, setFormValid] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setError((prev) => {
      const validate = { ...prev, [name]: '' };

      switch (name) {
        case 'email':
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!value || !re.test(String(value).toLowerCase())) {
            validate[name] = 'Wrong email';
          }
          break;
        case 'password':
          !value || value.length < 3 || value.length > 10
            ? (validate[name] = 'Wrong Password.')
            : (validate[name] = '');
          break;
      }
      return validate;
    });
  };

  useEffect(() => {
    if (
      input.email === '' ||
      input.password === '' ||
      error.email ||
      error.password
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [input, error]);

  // authorization
  const { login } = useActions();
  let navigation = useNavigate();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    login({
      email: input.email,
      password: input.password,
    });
    navigation('/main');
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
            onSubmit={submitHandler}
          >
            {error.email ? (
              <Label htmlFor='email'>
                E-MAIL
                <Input
                  name='email'
                  placeholder='Type your e-mail'
                  icon='icon-mail'
                  value={input.email}
                  onBlur={validateInput}
                  onChange={onInputChange}
                  warning={true}
                />
                <div className={styles.errorMessage}>{error.email}</div>
              </Label>
            ) : (
              <Label htmlFor='email'>
                E-MAIL
                <Input
                  name='email'
                  placeholder='Type your e-mail'
                  icon='icon-mail'
                  value={input.email}
                  onBlur={validateInput}
                  onChange={onInputChange}
                />
              </Label>
            )}
            {error.password ? (
              <Label htmlFor='password'>
                PASSWORD
                <Input
                  name='password'
                  placeholder='Type your password'
                  icon='icon-lock'
                  value={input.password}
                  onBlur={validateInput}
                  onChange={onInputChange}
                  warning={true}
                />
                <div className={styles.errorMessage}>{error.password}</div>
              </Label>
            ) : (
              <Label htmlFor='password'>
                PASSWORD
                <Input
                  name='password'
                  placeholder='Type your password'
                  icon='icon-lock'
                  value={input.password}
                  onBlur={validateInput}
                  onChange={onInputChange}
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
