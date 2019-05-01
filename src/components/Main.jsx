import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Movie from './Movie';
import axios from 'axios';
// import API from '../utils/API.json';
class Main extends Component {
	state = {
		movies: [],
		selectedMovie: null,
		movieId: null
	};

	componentDidMount = async () => {
		const API = await axios.get('http://localhost:3001/data');
		this.setState({ movies: API.data });
	};

	selectedMovieHandler = async (id) => {
		console.log(id);
		this.setState({ movieId: id });

		const verificar = await axios.get(`http://localhost:3001/data/${id}`);

		console.log(verificar.data);
	};
	render() {
		// console.log(this.state.movies);
		const lista = this.state.movies.map((filme) => {
			return (
				// <Link to={`/filme/${filme.id}`}>
				<SingleMovie
					key={filme.id}
					name={filme.movie}
					capa={filme.image}
					sinopse={filme.description}
					release={filme.release}
					selected={() => this.selectedMovieHandler(filme.id)}
				/>
				// </Link>
			);
		});

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<input type="text" onInput={(e) => this.handleSearch(e)} placeholder="O que você procura?" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<h3>Main Component</h3>
							{lista}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
