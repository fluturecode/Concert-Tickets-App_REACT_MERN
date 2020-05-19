import React from 'react';
import './HomePage.css';
import video from '../imgs/slowbackgroundVideo1.mp4';


 
const HomePage = () => {

    return (
        <div class="homePage">
            <main> 
                <h1 style={{color:"white"}}>test</h1>
            </main>

            <div id='color-overlay'>
            <div className="videoDiv">
                <video 
                    id="background-video" 
                    autoPlay="true" 
                    loop={true}
                    poster="../imgs/videoStill-2.jpg"
                >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            </div>
        </div>
    )
};

export default HomePage
