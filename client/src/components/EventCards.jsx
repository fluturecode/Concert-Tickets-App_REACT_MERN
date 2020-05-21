import React, { useContext  } from 'react';
import '../css/EventCards.css';
import { AppContext } from '../context/AppContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const EventCards = () => {
	//Bring in ticketMasterEvents (Prepped API Data) from Context
	const { ticketMasterEvents } = useContext(AppContext);
	
	return (
		<div className="card-container">
			{ticketMasterEvents &&
				ticketMasterEvents.map((item) => (
					<Card className='event-card'>
						<Card.Img
							src={item.image}
							alt={`Image of ${item.name}, the music band`}
							className='image-card'
						/>
						<Card.Title className="title-card">{item.name}</Card.Title>
						<ListGroup className="list-group-flush">
							<ListGroupItem>{item.date}</ListGroupItem>
							<ListGroupItem>{item.time}</ListGroupItem>
							<ListGroupItem id="event-card-venue">{item.venue}</ListGroupItem>
							<ListGroupItem>
								<a target="_blank" href={item.url} rel="noopener noreferrer">
									Tickets for tonight's show!
								</a>
							</ListGroupItem>
						</ListGroup>
					</Card>
				))}
		</div>
	);
};

export default EventCards;
