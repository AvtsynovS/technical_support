import React from 'react';
import { Button } from '../../UI/Button/Button';
// import styles from './styles.module.scss';

const AuthorizationPage: React.FC = () => {
  return (
    <div>
      <div>AuthorizationPage</div>
      <Button bgColor='secondary' color='secondary'>
        Secondary Button
      </Button>
      <Button bgColor='prymary'>Prymary Button</Button>
      <Button>Warning Button</Button>
    </div>
  );
};

export default AuthorizationPage;
