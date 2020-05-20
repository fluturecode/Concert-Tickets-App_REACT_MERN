import React, { useContext, useState, Component } from 'react';
import './EventCards.css';
import { AppContext } from '../context/AppContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactHover from 'react-hover'


const EventCards = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  //Bring in ticketMasterEvents (Prepped API Data) from Context
  const { ticketMasterEvents } = useContext(AppContext);
  console.log('hovered event', hoveredEvent);

const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
  }

  return (
    <div className="card-container">
      {ticketMasterEvents &&
        ticketMasterEvents.map((item, key) => (
          <ReactHover options={optionsCursorTrueWithMargin}>
            <ReactHover.Trigger type='trigger'>
          <Card
           style={{zIndex:`calc((-${key}) - 9)`}}>
            <Card.Img
              src={item.image}
              alt={`Image of ${item.name}, the music band`}
              style={{ 
                width: 200, 
                height: 200, 
              }}
            />
            <Card.Title>{item.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{item.date}</ListGroupItem>
              <ListGroupItem>{item.time}</ListGroupItem>
            </ListGroup>
          </Card>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
              <h1> Hello</h1>
            </ReactHover.Hover>
          </ReactHover>
        ))}
    </div>
  );




  
};

export default EventCards;
