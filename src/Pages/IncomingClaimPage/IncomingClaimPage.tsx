import React from 'react';
import styles from './styles.module.scss';
import { Input } from './../../UI/Input/Input';
import { Button } from './../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { Label } from '../../UI/Label/Label';

const IncomingClaimPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Incoming claim</h1>
      <form action='' id='IncomingClaim' className={styles.createClaim__form}>
        <Label>
          TITLE
          <Input required name='titleClaim' placeholder='Type claim title' />
        </Label>
        <label htmlFor='typeClaim' className={styles.lable}>
          TYPE
        </label>
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
          <Button bgColor='primary' type='submit' form='IncomingClaim'>
            Create
          </Button>
          <Button>Decline</Button>
        </div>
      </form>
    </div>
  );
};

export default IncomingClaimPage;
