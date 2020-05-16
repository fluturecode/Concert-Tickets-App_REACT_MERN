import React, { useContext  } from 'react'
import './EventCards.css';
import { AppContext } from '../context/AppContext';

const EventCards = () => {

    const {ticketMasterEvents } = useContext(AppContext)

    const SampleEventCards = ({ name,localDate, localTime, image, Venue}) => {
        return(
            <div className="event-card-md">
                <img src={image} alt={`Image of ${name}, the music band`} style={{width:200, height:200}}></img>
                <h1>{name}</h1>
                <h2>{Venue}</h2>
                <h2>{localDate}</h2>
                <h2>{localTime}</h2> 
                {console.log("Hello " + name)}    
            </div>
        )    
    }

    const EventCards = () => {
        return (
            <div className="event-card-body">
            {
                ticketMasterEvents.map(items => <SampleEventCards {...items} key={items.name}/>)
            }    
            </div>
        )
    }
    
    return( 
        <div>
            <EventCards />
        </div>
    )
}

export default EventCards