import React, { useState } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";

const SearchBox = () => {
  const [jobDesc, setJobDesc] = useState([]);
  return (
    <Container fluid>
      <Form>
        <Row className="align-items-center justify-content-center my-3">
          <Col xs="6" lg="4">
            <Form.Label htmlFor="inlineFormInputDescription">
              Job Description
            </Form.Label>
            <Form.Control
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              className="mb-2"
              id="inlineFormInputDescription"
              placeholder="Search by Title, Companies"
            />
          </Col>
          <Col xs="6" lg="4">
            <Form.Label htmlFor="inlineFormInputLocation">Location</Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                id="inlineFormInputLocation"
                placeholder="Filter by Cities, State"
              />
            </InputGroup>
          </Col>
          <Col xs="5" lg="auto">
            <Form.Check
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2 mt-4"
              label="Full Time Only"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2 mt-4">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBox;
