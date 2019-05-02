import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import estrela from '../assets/u6.png';

class SinglePost extends Component {
	state = {};
	render() {
		const image = this.props.capa;
		return (
			<div className="col-md-12 mt-3" onClick={this.props.selected}>
				<div className="card">
					<div className="cartao">
						<div className="row">
							<div className="col-md-3">
								<img className="card-img imagem m-3" src={this.props.capa} alt={this.props.name} />
							</div>

							<div className="col-md-9">
								<span className="release m-3">{this.props.release}</span>
								<h5 className="card-title titulo m-3">{this.props.name}</h5>
								<img src={estrela} alt="rating" />
								<p className="card-body">{this.props.sinopse}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SinglePost;
