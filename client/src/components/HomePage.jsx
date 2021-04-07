import React from 'react';
import '../css/HomePage.css';
import '../css/search.css';
import video from '../imgs/slowbackgroundVideo1.mp4';
import Search from './HomePageSearch';
import logo from '../imgs/Logo.png';
import videoStill from '../imgs/videoStill-2.jpg';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="center-main">
        <img src={logo} alt="Evented logo" id="home-logo" />
        <div id="home-info">
          <h1 style={{}}> Welcome to Evented! </h1>
          <h3>
            To search all music events for this evening, please enter your city
            and click on the note.
          </h3>
        </div>
        <Search />
      </div>

      <div id="color-overlay">
        <div className="videoDiv">
          <video
            id="background-video"
            autoPlay={true}
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
