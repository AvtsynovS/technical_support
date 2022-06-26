import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { Label } from '../../UI/Label/Label';
import styles from './styles.module.scss';

const CreateClaimPage: React.FC = () => {
  const [titleClaimDirty, setTitleClaimDirty] = useState(false);
  const [typeClaimDirty, setTypeClaimDirty] = useState(false);
  const [descriptionClaimDirty, setDescriptionClaimDirty] = useState(false);

  const [titleClaim, setTitleClaim] = useState('');
  const [typeClaim, setTypeClaim] = useState('Select type');
  const [descriptionClaim, setDescriptionClaim] = useState('');

  const [titleClaimError, setTitleClaimError] = useState('Wrong title');
  const [typeClaimError, setTypeClaimError] = useState('Wrong type');
  const [descriptionClaimError, setDescriptionClaimError] =
    useState('Wrong description');

  const [formValid, setFormValid] = useState(false);

  //validation
  useEffect(() => {
    if (titleClaimError || typeClaimError || descriptionClaimError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleClaimError, typeClaimError, descriptionClaimError]);

  const blurHandler = (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement>
  ) => {
    switch (event.target.name) {
      case 'titleClaim':
        setTitleClaimDirty(true);
        break;
      case 'typeClaim':
        setTypeClaimDirty(true);
        break;
      case 'descriptionClaim':
        setDescriptionClaimDirty(true);
        break;
    }
  };

  const titleClaimHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleClaim(event.target.value);
    event.target.value.length < 3
      ? setTitleClaimError('Wrong title')
      : setTitleClaimError('');
  };

  const typeClaimHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeClaim(event.target.value);
    event.target.value === 'Select type'
      ? setTypeClaimError('Wrong type')
      : setTypeClaimError('');
  };

  const descriptionClaimHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionClaim(event.target.value);
    event.target.value.length < 10
      ? setDescriptionClaimError('Wrong description')
      : setDescriptionClaimError('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Creating new claim</h1>
      <form action='' id='newClaim' className={styles.createClaim__form}>
        {titleClaimDirty && titleClaimError ? (
          <Label htmlFor='titleClaim'>
            TITLE
            <Input
              required
              name='titleClaim'
              placeholder='Type claim title'
              value={titleClaim}
              onBlur={blurHandler}
              onChange={titleClaimHandler}
              warning={true}
            />
            <div className={styles.errorMessage}>{titleClaimError}</div>
          </Label>
        ) : (
          <Label htmlFor='titleClaim'>
            TITLE
            <Input
              required
              name='titleClaim'
              placeholder='Type claim title'
              value={titleClaim}
              onBlur={blurHandler}
              onChange={titleClaimHandler}
            />
          </Label>
        )}
        {typeClaimDirty && typeClaimError ? (
          <Label htmlFor='typeClaim'>
            TYPE
            <select
              className={clsx(styles.typeClime, styles.typeClimeError)}
              id='typeClaim'
              required
              form='newClaim'
              name='typeClaim'
              value={typeClaim}
              onBlur={blurHandler}
              onChange={typeClaimHandler}
            >
              <option value={typeClaim}>{typeClaim}</option>
              <option value='Hardware'>Hardware</option>
              <option value='Software'>Software</option>
              <option value='Troubleshooting'>Troubleshooting</option>
              <option value='Networking'>Networking</option>
            </select>
            <div className={styles.errorMessage}>{typeClaimError}</div>
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
              value={typeClaim}
              onBlur={blurHandler}
              onChange={typeClaimHandler}
            >
              <option value={typeClaim}>{typeClaim}</option>
              <option value='Hardware'>Hardware</option>
              <option value='Software'>Software</option>
              <option value='Troubleshooting'>Troubleshooting</option>
              <option value='Networking'>Networking</option>
            </select>
          </Label>
        )}
        {descriptionClaimDirty && descriptionClaimError ? (
          <Label htmlFor='descriptionClaim'>
            DESCRIPTION
            <Input
              required
              name='descriptionClaim'
              placeholder='Type claim description'
              value={descriptionClaim}
              onBlur={blurHandler}
              onChange={descriptionClaimHandler}
              warning={true}
            />
            <div className={styles.errorMessage}>{descriptionClaimError}</div>
          </Label>
        ) : (
          <Label htmlFor='descriptionClaim'>
            DESCRIPTION
            <Input
              required
              name='descriptionClaim'
              placeholder='Type claim description'
              value={descriptionClaim}
              onBlur={blurHandler}
              onChange={descriptionClaimHandler}
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
