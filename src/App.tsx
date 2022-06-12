import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
// import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import CreateClaimPage from './Pages/CreateClaimPage/CreateClaimPage';
import MainPage from './Pages/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import IncomingClaimPage from './Pages/IncomingClaimPage/IncomingClaimPage';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<AuthorizationPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      ) : (
        <div className={styles.container}>
          <Navbar />
          <div className={styles.wrapper}>
            <Header />
            <Routes>
              <Route path='/createclaim' element={<CreateClaimPage />} />
              <Route path='/incomingclaim' element={<IncomingClaimPage />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
