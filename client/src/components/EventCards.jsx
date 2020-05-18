import React, { useContext, useEffect } from 'react';
import './EventCards.css';
import { AppContext } from '../context/AppContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

//
const EventCards = () => {
  //Bring in ticketMasterEvents (Prepped API Data) from Context
  const { ticketMasterEvents } = useContext(AppContext);

  return (
    <>
      {ticketMasterEvents && ticketMasterEvents.map((item) => (
        <Card style={{ width: '30rem' }}>
          <Card.Img
            src={item.image}
            alt={`Image of ${item.name}, the music band`}
            style={{ width: 200, height: 200 }}
          />
          <Card.Title>{item.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.date}</ListGroupItem>
            <ListGroupItem>{item.time}</ListGroupItem>
          </ListGroup>
        </Card>
      ))}
    </>
  );
};

export default EventCards;
