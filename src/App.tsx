import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles.module.scss';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import CreateClaimPage from './Pages/CreateClaimPage/CreateClaimPage';
import EditClaimPage from './Pages/EditClaimPage/EditClaimPage';
import MainPage from './Pages/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.wrapper}>
        <Routes>
          <Route path='/' element={<AuthorizationPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/createclaim' element={<CreateClaimPage />} />
          <Route path='/editclaim' element={<EditClaimPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
