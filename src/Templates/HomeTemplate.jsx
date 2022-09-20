import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Layouts/Footer/Footer';
import Header from '../Components/Layouts/Header/Header';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
