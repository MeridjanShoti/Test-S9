import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class MyFilmRow extends Component {
  state = { movies: [] };
  componentDidMount() {
    const search = this.props.search;
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ movies: data.Search.slice(0, 6) });
      })
      .catch((error) => console.error("ERRORE:", error));
  }
  render() {
    return (
      <Row>
        {this.state.movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} md={4} lg={2} className="p-1">
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
              className="filmPoster"
            ></img>
          </Col>
        ))}
      </Row>
    );
  }
}
export default MyFilmRow;
