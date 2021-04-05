import React from "react"

import { Jumbotron, Container, Row, Col } from "reactstrap"
import './IndexStyle.css'

const FrontHeading = () => (
<>
    <Container fluid>
      <Jumbotron fluid>

        <Row>
          <Col><h1>James Pierce</h1></Col>
        </Row>
        <Row>
          <Col><h4>Software Engineer</h4></Col>
        </Row>
        <Row>
          <Col><h4>Experienced Intelligence Professional</h4></Col>
        </Row>
        <Row>
          <Col><h4>Astronomer</h4></Col>
        </Row>
        <Row>
          <Col><h4>Physicist</h4></Col>
        </Row>
        <Row>
          <Col><h2>Data Scientist</h2></Col>
        </Row>

      </Jumbotron>
    </Container>
  </>
)

export default FrontHeading


