import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import '../css/search.css';
import '../css/navbar.css';

const SearchComponent = () => {
  const params = useParams();
  const { setTicketMasterEvents } = useContext(AppContext);
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
        setTicketMasterEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (params.city) {
      axios
        .get(`/${params.city}`)
        .then((response) => {
          setTicketMasterEvents(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

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
