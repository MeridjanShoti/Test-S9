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
  state = { searchBarShow: false };
  showSearch = () => {
    if (this.state.searchBarShow === false) {
      this.setState({ searchBarShow: true });
    } else {
      this.setState({ searchBarShow: false });
    }
  };
  render() {
    return (
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Brand href="#home">
            <a href="index.html">
              <img src={logo} alt="logo" width="100px" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
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
            <Form inline className="d-flex ms-auto">
              <Search className="text-white align-self-center fs-4 mx-2" onClick={this.showSearch} />

              <Row className="me-auto align-items-center">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className={this.state.searchBarShow === true ? "mr-sm-2" : "mr-sm-2 d-none"}
                    id="searchBar"
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
                      <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavBar;
