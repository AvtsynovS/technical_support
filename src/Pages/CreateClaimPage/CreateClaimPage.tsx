import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { Label } from '../../UI/Label/Label';
import styles from './styles.module.scss';

const CreateClaimPage: React.FC = () => {
  const [input, setInput] = useState({
    titleClaim: '',
    typeClaim: 'Select type',
    descriptionClaim: '',
  });

  const [error, setError] = useState({
    titleClaim: '',
    typeClaim: '',
    descriptionClaim: '',
  });

  const [selectType, setSelectType] = useState('Select type');

  const [formValid, setFormValid] = useState(false);

  const claimType = (value: string) => {
    switch (value) {
      case 'hard': {
        return setSelectType('Hardware');
      }
      case 'soft': {
        return setSelectType('Software');
      }
      case 'troublesh': {
        return setSelectType('Troubleshooting');
      }
      case 'net': {
        return setSelectType('Networking');
      }
      default: {
        return setSelectType('Select type');
      }
    }
  };

  //validation

  const onSelectChange = (e: React.FocusEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateSelect(e);
    claimType(value);
  };

  const validateSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
    let { name, value } = e.target;
    setError((prev) => {
      const validate = { ...prev, [name]: '' };

      switch (name) {
        case 'typeClaim':
          value === 'Select type'
            ? (validate[name] = 'Wrong type claim')
            : (validate[name] = '');
          break;
      }
      return validate;
    });
  };

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
        case 'titleClaim':
          !value || value.length < 3
            ? (validate[name] = 'Wrong title')
            : (validate[name] = '');
          break;
        case 'typeClaim':
          value === 'Select type'
            ? (validate[name] = 'Wrong type claim')
            : (validate[name] = '');
          break;
        case 'descriptionClaim':
          !value || value.length < 10
            ? (validate[name] = 'Wrong description')
            : (validate[name] = '');
          break;
      }
      return validate;
    });
  };
  useEffect(() => {
    if (
      input.titleClaim === '' ||
      input.typeClaim === 'Select type' ||
      input.descriptionClaim === '' ||
      error.titleClaim ||
      error.typeClaim ||
      error.descriptionClaim
    ) {
      setFormValid(false);
    } else setFormValid(true);
  }, [input, error]);

  // createClaim
  const { createClaim } = useActions();
  let navigation = useNavigate();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    createClaim({
      title: input.titleClaim,
      type: input.typeClaim,
      description: input.descriptionClaim,
      status: 'new',
    });
    navigation('/main');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Creating new claim</h1>
      <form
        action='http://localhost:3001'
        method='post'
        id='newClaim'
        className={styles.createClaim__form}
        onSubmit={submitHandler}
      >
        {error.titleClaim ? (
          <Label htmlFor='titleClaim'>
            TITLE
            <Input
              required
              name='titleClaim'
              placeholder='Type claim title'
              value={input.titleClaim}
              onBlur={validateInput}
              onChange={onInputChange}
              warning={true}
            />
            <div className={styles.errorMessage}>{error.titleClaim}</div>
          </Label>
        ) : (
          <Label htmlFor='titleClaim'>
            TITLE
            <Input
              required
              name='titleClaim'
              placeholder='Type claim title'
              value={input.titleClaim}
              onBlur={validateInput}
              onChange={onInputChange}
            />
          </Label>
        )}
        {error.typeClaim ? (
          <Label htmlFor='typeClaim'>
            TYPE
            <select
              className={clsx(styles.typeClime, styles.typeClimeError)}
              id='typeClaim'
              required
              form='newClaim'
              name='typeClaim'
              value={input.typeClaim}
              onBlur={validateSelect}
              onChange={onSelectChange}
            >
              <option value={input.typeClaim} hidden>
                {selectType}
              </option>
              <option value='hard' label='Hardware'>
                Hardware
              </option>
              <option value='soft' label='Software'>
                Software
              </option>
              <option value='troublesh' label='Troubleshooting'>
                Troubleshooting
              </option>
              <option value='net' label='Networking'>
                Networking
              </option>
            </select>
            <div className={styles.errorMessage}>{error.typeClaim}</div>
          </Label>
        ) : (
          <Label htmlFor='typeClaim'>
            TYPE
            <select
              className={styles.typeClime}
              id='typeClaim'
              required
              form='newClaim'
              name='typeClaim'
              value={input.typeClaim}
              onBlur={validateSelect}
              onChange={onSelectChange}
            >
              <option value={input.typeClaim} hidden>
                {selectType}
              </option>
              <option value='hard' label='Hardware'>
                Hardware
              </option>
              <option value='soft' label='Software'>
                Software
              </option>
              <option value='troublesh' label='Troubleshooting'>
                Troubleshooting
              </option>
              <option value='net' label='Networking'>
                Networking
              </option>
            </select>
          </Label>
        )}
        {error.descriptionClaim ? (
          <Label htmlFor='descriptionClaim'>
            DESCRIPTION
            <Input
              required
              name='descriptionClaim'
              placeholder='Type claim description'
              value={input.descriptionClaim}
              onBlur={validateInput}
              onChange={onInputChange}
              warning={true}
            />
            <div className={styles.errorMessage}>{error.descriptionClaim}</div>
          </Label>
        ) : (
          <Label htmlFor='descriptionClaim'>
            DESCRIPTION
            <Input
              required
              name='descriptionClaim'
              placeholder='Type claim description'
              value={input.descriptionClaim}
              onBlur={validateInput}
              onChange={onInputChange}
            />
          </Label>
        )}
        <div className={styles.buttonForm}>
          <Link to='/main'>
            <Button bgColor='secondary' color='secondary'>
              Cancel
            </Button>
          </Link>
          <Button
            bgColor='primary'
            type='submit'
            form='newClaim'
            disabled={!formValid}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateClaimPage;
