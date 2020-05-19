import React from 'react';
import { AppContextProvider } from '../context/AppContext';
import SearchComponent from './Search';
import EventCards from './EventCards';
import Navbar from './Navbar';

const CitySearchPage = () => {
  return (
    <AppContextProvider>
      <Navbar />
      <SearchComponent />
      <EventCards />
    </AppContextProvider>
  );
};

export default CitySearchPage;
