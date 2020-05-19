import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import EventCards from './components/EventCards';
import SearchComponent from './components/Search';
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';

const App = () => {
  return (
    <AppContextProvider>
      <HomePage />
      <Navbar />
      <SearchComponent />
      <EventCards />
    </AppContextProvider>
  );
};

export default App;
