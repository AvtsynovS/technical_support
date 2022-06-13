import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';
import { Label } from '../../UI/Label/Label';
import styles from './styles.module.scss';

const CreateClaimPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Creating new claim</h1>
      <form action='' id='newClaim' className={styles.createClaim__form}>
        <Label>
          TITLE
          <Input required name='titleClaim' placeholder='Type claim title' />
        </Label>
        <Label htmlFor='typeClaim'>
          TYPE
          <select
            className={styles.typeClime}
            id='typeClaim'
            required
            form='newClaim'
            name='typeClaim'
          >
            <option defaultValue='Select type'>Select type</option>
            <option value='Hardware'>Hardware</option>
            <option value='Software'>Software</option>
            <option value='Troubleshooting'>Troubleshooting</option>
            <option value='Networking'>Networking</option>
          </select>
        </Label>
        <Label>
          DESCRIPTION
          <Input
            required
            name='descriptionClaim'
            placeholder='Type claim description'
          />
        </Label>
        <div className={styles.buttonForm}>
          <Link to='/main'>
            <Button bgColor='secondary' color='secondary'>
              Cancel
            </Button>
          </Link>
          <Button bgColor='primary' type='submit' form='newClaim'>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateClaimPage;
