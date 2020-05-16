import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('01');
  const [city, setCity] = useState('Miami')
  const [ticketMasterEvents, setTicketMasterEvents] = useState([{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
},{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers2",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
},{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers3",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
},{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers4",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
},{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers5",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
},{
    "id": "vvG1VZpkl0TLfV",
    "name": "The Killers6",
    "localDate": "2020-09-15",
    "localTime": "19:30:00",
    "url": "https://www.ticketmaster.com/the-killers-miami-florida-09-15-2020/event/0D00586AE4FDF534",
    "image": "https://s1.ticketm.net/dam/a/f9d/36308f81-1df2-4150-aab6-e37e3f945f9d_1326441_CUSTOM.jpg",
    "genre": "Rock",
    "subgenre": "Alternative Rock",
    "city": "Miami",
    "Venue": "AmericanAirlines Arena",
    "postalCode": "33132"
}])

  return (
    <AppContext.Provider value={{contextMessage, ticketMasterEvents}}>
      {children}
    </AppContext.Provider>
  );
};