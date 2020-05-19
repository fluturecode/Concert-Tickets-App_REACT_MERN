import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage] = useState('01');
  const [city, setCity] = useState('Miami');
  const [ticketMasterEvents, setTicketMasterEvents] = useState([]);

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        ticketMasterEvents,
        setTicketMasterEvents,
        city,
        setCity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
