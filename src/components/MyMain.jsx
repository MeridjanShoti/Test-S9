import { Component } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { GridFill, TextLeft } from "react-bootstrap-icons";

class MyMain extends Component {
  render() {
    return (
      <Container>
        <Row className="text-light">
          <Col>
            <div className="d-flex">
              <h1 className="fs-3 fw-bold">TV Shows</h1>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="btn btn-dark border-light dropdown-toggle mx-2 rounded-0 bg-black"
                >
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Thriller</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Romantic</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Documentary</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col d-flex align-items-center justify-content-end">
              <span className="py-1 px-2 border border-white d-flex align-items-center">
                <TextLeft />
              </span>
              <span className="py-1 px-2 border border-secondary d-flex align-items-center">
                <GridFill />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MyMain;
