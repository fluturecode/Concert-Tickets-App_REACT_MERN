# Evented:
* This is an entertainment app that helps the user map out concert events throughout the local area by linking the user with ticketMaster in a simple and user friendly way. 
* Sometimes it is difficult and overwhelming to navigate through ticketMaster; especially when searching for last minute events near you. With two clicks you will be well on your way to last minute purchasing of your event.

# * Status:
This is a Two phased Project:
 * PhaseOne: Linking the user with last minutes events for a night out or last minute date. This Phase is complete; with current beta testing to ensure user functionality.
 * PhaseTwo: will roll-out in the near future after user tests are complete. This phase will include restaurant  and geolocation ability to allow the user to find last minute reservation  near their current location  if they desire to do so.

# * Who:
  This Project was a collaboration between: Reynold Urena, Elizabeth Eidelson, and Frederick Bain 

# * Dependencies:
  * Ticket Master API:
[Ticketmaster Client SDK](https://www.npmjs.com/package/ticketmaster-client)  [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)**
Client SDK for the **[Ticketmaster Open Platform](http://developer.ticketmaster.com/)**, based on **[Node SDK for the Ticketmaster](https://github.com/ticketmaster-api/sdk-javascript)**.

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster API access key support

## System Requirements for rebild source
 - [NodeJS](https://nodejs.org) (v0.10 or greater),
    - [React-Routing](https://reacttraining.com/react-router/web/guides/quick-start)
    - [React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
    - [Axios](https://alligator.io/react/axios-react/)
    - [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    - [Express](https://expressjs.com/)
    - [Ticketmaster](https://www.npmjs.com/package/ticketmaster) (v0.5.0 or greater)
 - [Webpack](https://www.npmjs.com/package/webpack) (v1.13.1 or greater)
    - [json-loader](https://www.npmjs.com/package/json-loader) for webpack (v0.5.4 or greater)

  # Setup & install
    * `git clone` this repo
    * `cd` into it.
    * `yarn install`
    * `cd client && yarn install`
    *  Create .env file and insert your Ticket Master API

# * Available build commands
  * `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
  * `yarn server`: Runs JUST your Express.JS server.
  * `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## * To deploy
   * `heroku create your-app-name`
   * `git push heroku master`
