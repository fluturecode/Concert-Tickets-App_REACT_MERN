import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import EventCards from './components/EventCards';
import SearchForm from './components/Search';

const App = () => {
  return (
    <AppContextProvider>
      <SearchForm />
      <EventCards />
    </AppContextProvider>
  );
};

export default App;
