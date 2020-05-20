import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import './homeSearchCss.css';
import buttonImg from '../imgs/music-note.png';

const SearchComponent = () => {
  const history = useHistory();
  const {
    city,
    setCity,
    ticketMasterEvents,
    setTicketMasterEvents
  } = useContext(AppContext);

  //Requesting events from Serverc
  const onChange = (event) => {
    setCity(event.target.value);
  };

  const fetchCity = () => {
    axios
      .get(`/${city}`)
      .then((response) => {
        setTicketMasterEvents(response.data);
        history.push('/city');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCity();
  };

  const onButtonClick = () => {
    if (!city) {
      return;
    }

    fetchCity();
  };

  //onChange={(e) => setCity(e.target.value)}

  return (
    <div id="home-page-search-main">
      <Form onSubmit={handleSubmit} class="search-form">
        <Form.Row>
          <div class="form-row-container">
            <Form.Control
              onChange={onChange}
              id="searchinput-field"
              size="lg"
              type="text"
              placeholder="Please Enter City"
            ></Form.Control>
            <img src={buttonImg} id="search-button" onClick={onButtonClick} />
          </div>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
