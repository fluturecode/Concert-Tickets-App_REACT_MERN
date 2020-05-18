if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const axios = require('axios')

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.use(cors());
// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});

app.get('/:city', (request, res) =>{
  //Set front end city variable 
  const {city} = request.params

    axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=wZj91AYLQHBLYDdZ6ZctyDZLcB7BOqq0&classificationName=music&city=${city}&size=5`
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
      console.log('Sending Sample Data to Front End!');
      console.log(sample)
      res.send(sample)
    })
    .catch((error) => console.log(error));

  console.log("The Server is working!")
});
// END DEMO

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
