import React, { useContext } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import './homeSearchCss.css';
import buttonImg from '../imgs/music-note.png';

const SearchComponent = () => {
  const { ticketMasterEvents, setTicketMasterEvents } = useContext(AppContext);
  const { city, setCity } = useContext(AppContext);

  //Requesting events from Serverc
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`/${city}`)
      .then((response) => {
        console.log(response.data);
        setTicketMasterEvents(response.data);
        console.log(ticketMasterEvents);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //onChange={(e) => setCity(e.target.value)}

  return (
    <div id="home-page-search-main">
      <Form onSubmit={handleSubmit} class="search-form">
        <Form.Row>
          <div class="form-row-container">
            <Form.Control
              id="searchinput-field"
              size="lg"
              type="text"
              placeholder="Enter City"
            ></Form.Control>
            <img src={buttonImg} id="search-button" onclick={handleSubmit} />
          </div>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
