import React, { useContext, useState } from 'react';
import './EventCards.css';
import { AppContext } from '../context/AppContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

//
const EventCards = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  //Bring in ticketMasterEvents (Prepped API Data) from Context
  const { ticketMasterEvents } = useContext(AppContext);

  console.log('hovered event', hoveredEvent);

  return (
    <>
      <div className="card-container">
        {ticketMasterEvents &&
          ticketMasterEvents.map((item, key) => (
            <div className="event-container" style={{ height: 400 }}>
              {hoveredEvent && hoveredEvent.name === item.name && (
                <div style={{ height: '20%' }} className="hover-details">
                  <p>Name: {hoveredEvent.name}</p>
                </div>
              )}
              <Card
                style={{ height: '80%' }}
                onMouseEnter={() => setHoveredEvent(item)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
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
            </div>
          ))}
      </div>
    </>
  );
};

export default EventCards;
