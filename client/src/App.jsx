import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import HomePage from './components/HomePage';
import CitySearchPage from './components/CitySearchPage';

const App = () => {
	return (
		<Router>
			<AppContextProvider>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path='/city/:city' component={CitySearchPage} />
				</Switch>
			</AppContextProvider>
		</Router>
	);
};

export default App;
