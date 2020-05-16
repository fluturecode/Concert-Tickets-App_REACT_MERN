import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import EventCards from './components/EventCards';

const App = () => {
  return (
    <AppContextProvider>
       <EventCards /> 
    </AppContextProvider>
  );
};

export default App;
