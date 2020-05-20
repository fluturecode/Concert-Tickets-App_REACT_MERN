import React from 'react';
import './HomePage.css';
import './search.css';
import video from '../imgs/slowbackgroundVideo1.mp4';
import Search from './HomePageSearch';
import logo from '../imgs/Logo.png';
import videoStill from '../imgs/videoStill-2.jpg';

const HomePage = () => {
  return (
    <div className="homePage">
      <div class="center-main">
          <img src={logo} id="home-logo" />
          <h1 id="home-info">
            Welcome to Evented! <br/> To search all music events for this evening,
            please enter your city and click on the note.
          </h1>
          <Search />
      </div>

      <div id="color-overlay">
        <div className="videoDiv">
          <video
            id="background-video"
            autoPlay="true"
            loop={true}
            poster={videoStill}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
