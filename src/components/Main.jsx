import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Pagination from "../utils/Pagination";
import Paginate from "../utils/Paginate";
import axios from "axios";
import lupa from "../assets/u1.png";
class Main extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    movieId: null,
    pageSize: 2,
    currentPage: 1,
    input: ""
  };
  componentDidMount = async () => {
    const API = await axios.get("http://localhost:3003/data");
    this.setState({ movies: API.data });
  };

  selectedMovieHandler = async id => {
    console.log(id);
    this.setState({ movieId: id });
    const verificar = await axios.get(`http://localhost:3003/data/${id}`);
    console.log(verificar.data);
  };

  handlePageChange = async page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleSearch = e => {
    this.setState({
      input: e.target.value
    });
  };
  render() {
    const { pageSize, currentPage, movies } = this.state;
    const count = this.state.movies.length;
    const total = Paginate(movies, currentPage, pageSize);
    const lista = total.map(filme => {
      return (
        <Link to={`/filme/${filme.id}`}>
          <SingleMovie
            key={filme.id}
            name={filme.movie}
            capa={filme.image}
            sinopse={filme.description}
            release={filme.release}
            selected={() => this.selectedMovieHandler(filme.id)}
          />
        </Link>
      );
    });
    return (
      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <div className="row">
              <input
                className="col-8 form-control"
                type="text"
                onInput={e => this.handleSearch(e)}
                placeholder="O que você procura?"
                value={this.state.input}
              />
              <img src={lupa} alt="procurar" className="lupa" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">{lista}</div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Main;
