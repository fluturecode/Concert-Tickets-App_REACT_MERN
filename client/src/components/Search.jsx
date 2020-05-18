import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'
import { AppContext } from '../context/AppContext';
import './search.css'

const SearchComponent = () => {
  const { ticketMasterEvents, setTicketMasterEvents } = useContext(AppContext);
  const {city, setCity} = useContext(AppContext);

  useEffect(() => {
    //API Call to pull from TMApi
    const getData = () => {
      axios
        .get(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=wZj91AYLQHBLYDdZ6ZctyDZLcB7BOqq0&classificationName=music&city=miami&size=5`
        )
        .then((response) => {
          let sample = [];
          //cycle through response for ?
          response.data._embedded.events.map((tmEvent) => {
            let testResponse = {};

            // tmEvent = ticket master event
            testResponse.id = tmEvent.id;
            testResponse.name = tmEvent.name;
            testResponse.url = tmEvent.url;
            testResponse.image = tmEvent.images[0].url;
            testResponse.date = tmEvent.dates.start.localDate;
            testResponse.time = tmEvent.dates.start.localTime;
            testResponse.venue = tmEvent._embedded.venues[0].name;
            testResponse.zipCode = tmEvent.postalCode;
            sample.push(testResponse);
          });
          console.log('End Search Comp');
          setTicketMasterEvents(sample);
          //console.log(ticketMasterEvents);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  //Requesting events from Server
  const handleSubmit = (event) => {
    event.preventDefault();
    
     axios.get(`/${city}`)
      .then(response => {
        console.log(response.data)
        setTicketMasterEvents(response.data)
        console.log(ticketMasterEvents)
      }).catch(error => {
        console.error(error)
      })
  }
    
  return(
    <div>
      <Form onSubmit={handleSubmit} class="search-form">
        <Form.Row>
          <Form.Control
            onChange={(e) => setCity(e.target.value)}
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Enter City">
          </Form.Control>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
