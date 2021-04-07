import React from 'react';
import SearchComponent from './Search';
import EventCards from './EventCards';
import Navbar from './Navbar';

const CitySearchPage = () => {
  return (
    <>
      <Navbar />
      <SearchComponent />
      <EventCards />
    </>
  );
};

export default CitySearchPage;
