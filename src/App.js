import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import './css/App.css';
import axios from 'axios';
import SingleMovie from './components/SingleMovie';
import Movie from './components/Movie';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/filme/:id" component={Movie} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
