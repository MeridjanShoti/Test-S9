import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/netflix_logo.png";
import { Col, Form, Row } from "react-bootstrap";
import { Component } from "react";
import { Bell, Search } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";
import propic from "../assets/avatar.png";
import kidsIcon from "../assets/kids_icon.png";
class MyNavBar extends Component {
  state = { searchBarShow: false, searchedItem: "", searchedMovies: [] };
  handleSearch = (e) => {
    this.setState({
      searchedItem: e.target.value,
    });
    console.log(this.state.searchedItem);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchedItem);
    this.fetchSearch();
  };
  showSearch = () => {
    if (this.state.searchBarShow === false) {
      this.setState({ searchBarShow: true });
    } else {
      this.setState({ searchBarShow: false });
    }
  };
  fetchSearch = () => {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchedItem}&apikey=9e9a3139`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ searchedMovies: data.Search });
        } else {
          this.setState({ searchedMovies: [] });
          alert("la ricerca non ha prodotto alcun risultato");
        }
      })
      .catch((error) => console.error("ERRORE:", error));
  };
  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-dark navbar-dark">
          <Container>
            <Navbar.Brand href="#home" onClick={() => this.props.changeState("home")}>
              <img src={logo} alt="logo" width="100px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-white" href="#home" onClick={() => this.props.changeState("home")}>
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  Movies
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  Recently Added
                </Nav.Link>
                <Nav.Link className="text-white" href="#link">
                  My List
                </Nav.Link>
              </Nav>
              <Form className="d-flex ms-auto" onSubmit={this.handleSubmit}>
                <Search className="text-white align-self-center fs-4 mx-2" onClick={this.showSearch} />

                <Row className="me-auto align-items-center">
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className={this.state.searchBarShow === true ? "mr-sm-2" : "mr-sm-2 d-none"}
                      id="searchBar"
                      onChange={this.handleSearch}
                    />
                  </Col>
                  <Col>
                    <img src={kidsIcon} height="38px" />
                  </Col>
                  <Col>
                    <Bell className="text-white fs-4" />
                  </Col>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <img src={propic} height="38px" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={() => this.props.changeState("account")}>
                          Edit Profile
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => this.props.changeState("settings")}>
                          Settings
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <div className="col text-start text-light">
            <h2 className="fs-5">{this.state.searchedItem}</h2>
          </div>
          <Row>
            {this.state.searchedMovies !== null &&
              this.state.searchedMovies.map((movie) => (
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
        </Container>
      </>
    );
  }
}

export default MyNavBar;
