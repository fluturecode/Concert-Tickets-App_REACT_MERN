import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import './search.css';
import './navbar.

const SearchComponent = () => {
  const { ticketMasterEvents, setTicketMasterEvents } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState('');
  //Requesting events from Server
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchInput) {
      return;
    }

    axios
      .get(`/${searchInput}`)
      .then((response) => {
        console.log(response.data);
        setTicketMasterEvents(response.data);
        console.log(ticketMasterEvents);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} class="search-form">
        <Form.Row>
          <div class="form-row-container">
            <Form.Control
              onChange={handleChange}
              id="searchinput-field"
              size="lg"
              type="text"
              placeholder="Enter new City"
            ></Form.Control>
            <button id="search-button" type="submit">
              Search
            </button>
          </div>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
