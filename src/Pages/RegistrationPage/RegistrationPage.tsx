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

const RegistrationPage: React.FC = () => {
  // validation
  const [input, setInput] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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
        case 'fullName':
          if (!value || value.length < 2) {
            validate[name] = 'Wrong Name';
          }
          break;
        case 'email':
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!value || !re.test(String(value).toLowerCase())) {
            validate[name] = 'Wrong email';
          }
          break;
        case 'password':
          if (!value || value.length < 3 || value.length > 10) {
            validate[name] = 'Wrong Password.';
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            validate['confirmPassword'] =
              'Password and Confirm Password does not match.';
          } else {
            validate['confirmPassword'] = input.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;
        case 'confirmPassword':
          if (!value || value.length < 3 || value.length > 10) {
            validate[name] = 'Please enter Confirm Password.';
          } else if (input.password && value !== input.password) {
            validate[name] = 'Password and Confirm Password does not match.';
          }
          break;
        default:
          break;
      }
      return validate;
    });
  };

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      input.fullName === '' ||
      input.email === '' ||
      input.password === '' ||
      input.confirmPassword === '' ||
      error.fullName ||
      error.email ||
      error.password ||
      error.confirmPassword
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [input, error]);

  // registration
  const { fetchRegistration } = useActions();

  let navigation = useNavigate();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    fetchRegistration({
      fullName: input.fullName,
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
            {error.fullName ? (
              <Label htmlFor='fullName'>
                FULL NAME
                <Input
                  name='fullName'
                  placeholder='Enter your full name'
                  value={input.fullName}
                  onBlur={validateInput}
                  onChange={onInputChange}
                  warning={true}
                />
                <div className={styles.errorMessage}>{error.fullName}</div>
              </Label>
            ) : (
              <Label htmlFor='fullName'>
                FULL NAME
                <Input
                  name='fullName'
                  placeholder='Enter your full name'
                  value={input.fullName}
                  onBlur={validateInput}
                  onChange={onInputChange}
                />
              </Label>
            )}
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

            {error.confirmPassword ? (
              <Label htmlFor='confirmPassword'>
                CONFIRM PASSWORD
                <Input
                  name='confirmPassword'
                  placeholder='Confirm your password'
                  icon='icon-lock'
                  value={input.confirmPassword}
                  onBlur={validateInput}
                  onChange={onInputChange}
                  warning={true}
                />
                <div className={styles.errorMessage}>
                  {error.confirmPassword}
                </div>
              </Label>
            ) : (
              <Label htmlFor='checkPassword'>
                CONFIRM PASSWORD
                <Input
                  name='confirmPassword'
                  placeholder='Confirm your password'
                  icon='icon-lock'
                  value={input.confirmPassword}
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
              or{' '}
              <Link to='/' className={styles.registrationLink}>
                Authorization.
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegistrationPage;
