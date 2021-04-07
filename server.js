if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/:city', (request, res) => {
  //Set front end city variable
  const { city } = request.params;

  axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}&classificationName=music&city=${city}&size=20&sort=date,asc`
    )
    .then((response) => {
      let sample = [];
      //cycle through response, conditioning it for clients 
      response.data._embedded.events.forEach((tmEvent) => {
        let testResponse = {};
        // tmEvent = ticket master event
        testResponse.id = tmEvent.id;
        testResponse.name = tmEvent.name;
        testResponse.url = tmEvent.url;
        testResponse.image = tmEvent.images[3].url;
        testResponse.date = tmEvent.dates.start.localDate;
        //Clean date time returns MMMM DD, YYYY
        let date = testResponse.date.split('-')
        switch(date[1]){
          case '01':
            date[1] = "January"
            break;
          case '02':
            date[1] = "Feb"
            break;
          case '03':
            date[1] = "March"
            break;
          case '04':
            date[1] = "April"
            break;
          case '05':
            date[1] = "May"
            break;
          case '06':
            date[1] = "June"
            break;
          case '07':
            date[1] = "July"
            break;
          case '08':
            date[1] = "August"
            break;
          case '09':
            date[1] = "September"
            break;
          case '10':
            date[1] = "October"
            break;
          case '11':
            date[1] = "November"
            break;
          case '12':
            date[1] = "December"
            break;
          default:
            console.log("Something is wrong with date conversion. Send Help!")
        }
        testResponse.date = `${date[1]} ${date[2]}, ${date[0]}`
        
        testResponse.time = tmEvent.dates.start.localTime;
        //Get's API time and turns into hh:min AM/PM format
        if(testResponse.time){
          let time = testResponse.time.split(':');
          let hour = time[0];
          hour = parseInt(hour);
          if(hour > 11){ 
            hour = hour - 12;  
            time[0] = hour
            time.pop();
            time = time.join(':') + ' PM'
            testResponse.time = time;
          }else {
            time.push('AM');
          }}
        else { 
          testResponse.time = "TBD"
          }
        testResponse.venue = tmEvent._embedded.venues[0].name;
        testResponse.zipCode = tmEvent.postalCode;

        sample.push(testResponse);
        
      });
      res.send(sample);
    })
    .catch((error) => console.log(error));

});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
