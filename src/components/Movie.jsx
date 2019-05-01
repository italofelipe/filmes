import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Movie extends Component {
	state = {
		filme: {
			movie: null,
			image: null,
			description: null,
			release: null
		},
		elenco: []
	};
	componentDidMount = () => {
		const { movie, image, description, release } = this.state;
		const ID = this.props.match.params.id;
		console.log(`ID: ${ID}`);
		axios.get('http://localhost:3001/data/' + ID).then((res) => {
			this.setState({
				filme: {
					movie: res.data.movie,
					image: res.data.image,
					description: res.data.description,
					release: res.data.description
				},
				elenco: res.data.elenco
			});
			console.log(this.state.filme);
		});
		// console.log(`Data: ${dados.data}`);
	};
	render() {
		const { movie, image, description, release } = this.state.filme;
		const { nome, nascimento, foto } = this.state.elenco;
		const elencoFilme = this.state.elenco.map((itens) => {
			return (
				<div className="card mt-3 pl-2 pt-3 pb-3 pr-2">
					<div className="row">
						<div className="col-md-6">
							<img className="card-img elenco-img" src={itens.foto} alt={itens.nome} />
						</div>

						<div className="col-md-6">
							<p className="card-title elenco-nome">Nome: {itens.nome}</p>
							<span className="nascimento">Data de nascimento: {itens.nascimento}</span>
						</div>
					</div>
				</div>
			);
		});

		console.log(this.state.elenco);

		return (
			<div className="container">
				<div className="row">
					<button className="btn btn-primary">
						<Link to="/">Voltar</Link>
					</button>
				</div>
				<div className="row">
					<div className="card mt-5">
						<div className="col-md-10">
							<div className="row">
								<div className="col-md-4">
									<img src={image} alt={description} className="card-img mt-1 mb-1" />
								</div>

								<div className="col-md-8">
									<h2 className="movie-title">{movie}</h2>
									<p className="movie-description">{description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<h3>Elenco:</h3>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-6">{elencoFilme}</div>
				</div>
			</div>
		);
	}
}

export default Movie;
