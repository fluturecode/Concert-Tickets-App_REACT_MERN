import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import '../css/homeSearchCss.css';
import buttonImg from '../imgs/music-note.png';

const SearchComponent = () => {
  const history = useHistory();
  const { city, setCity, setTicketMasterEvents } = useContext(AppContext);

  //Requesting events from Server
  const onChange = (event) => {
    setCity(event.target.value);
  };
  //Make an axios call to fetch data from api for input field city
  const fetchCity = () => {
    axios
      .get(`/${city}`)
      .then((response) => {
        setTicketMasterEvents(response.data);
        history.push(`/city/${city}`);
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
  return (
    <div id="home-page-search-main">
      <Form onSubmit={handleSubmit} className="search-form">
        <Form.Row>
          <div class="form-row-container">
            <Form.Control
              onChange={onChange}
              id="searchinput-field"
              size="lg"
              type="text"
              placeholder="Please Enter City"
            />
            <img
              src={buttonImg}
              alt="city search button"
              id="search-button"
              onClick={onButtonClick}
            />
          </div>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
