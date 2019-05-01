import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/1.png';
import '../css/App.css';

class SinglePost extends Component {
	state = {};
	render() {
		const image = this.props.capa;
		return (
			<div className="col-md-12 mt-3" onClick={this.props.selected}>
				<div className="card cartao">
					<h5 className="card-title m-3">{this.props.name}</h5>
					<span className="release m-3">{this.props.release}</span>
					<img className="card-img imagem m-3" src={this.props.capa} alt={this.props.name} />
					<p className="card-body">{this.props.sinopse}</p>
				</div>
			</div>
		);
	}
}

export default SinglePost;
