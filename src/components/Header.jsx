import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			// <div className="row">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand">Filmes</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExample01"
					aria-controls="navbarsExample01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample01">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Disabled</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="dropdown01"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								<a className="dropdown-item">Action</a>
								<a className="dropdown-item">Another action</a>
								<a className="dropdown-item">Something else here</a>
							</div>
						</li>
					</ul>
					<form className="form-inline my-2 my-md-0">
						<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
					</form>
				</div>
			</nav>
			// </div>
		);
	}
}
export default Header;
