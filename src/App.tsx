import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import CreateClaimPage from './Pages/CreateClaimPage/CreateClaimPage';
import EditClaimPage from './Pages/EditClaimPage/EditClaimPage';
import MainPage from './Pages/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<AuthorizationPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/createclaim' element={<CreateClaimPage />} />
        <Route path='/editclaim' element={<EditClaimPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
