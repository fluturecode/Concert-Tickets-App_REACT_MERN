import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import EventCards from './components/EventCards';
import SearchComponent from './components/Search';

const App = () => {
  return (
    <AppContextProvider>
      <SearchComponent />
      <EventCards />
    </AppContextProvider>
  );
};

export default App;
