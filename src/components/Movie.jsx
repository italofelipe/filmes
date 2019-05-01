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
				<div className="card mt-2 p-3">
					<p className="card-title elenco-nome">Nome: {itens.nome}</p>
					<img className="card-img elenco-img" src={itens.foto} alt={itens.nome} />
					<span className="nascimento">Data de nascimento: {itens.nascimento}</span>
				</div>
			);
		});

		console.log(this.state.elenco);

		return (
			<div className="container">
				<div className="row">
					<Link to="/">
						<button className="btn btn-primary">Voltar</button>
					</Link>
					<div className="col-md-10">
						<div className="card mt-5">
							<div className="row">
								<div className="col-md-4">
									<img src={image} alt={description} className="card-img" />
								</div>
								<div className="col-md-8">
									<div className="card-title m-4">
										<h2>{movie}</h2>
									</div>
								</div>
							</div>

							<div className="card-body m-4">
								<p>{description}</p>
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
