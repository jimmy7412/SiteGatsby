import React, { Component } from "react";
import {Col, Row, Container} from 'reactstrap';
import Me from '../../images/mePicture.jpg';
import './summaryStyle.css'

export class Summary extends Component {
  static displayName = Summary.name;

  render() {
    return(
      <div id={'summary'}>
        <Container fluid>
          <h1>James Pierce</h1>
          <Row className={'flex'}>
            <Col sm={"3"}><img className={'img-fluid'} src={Me} alt='Me'/></Col>
            <Col className={'text-center align-middle lead'} id={'aboutMe'}><p>I just finished College and am looking to move in to the private sector. After eleven years in the public sector of being in the U.S. Army, and then going to the University of Washington, I’m looking to move in to employment that will allow me to continue learning and improving the world. </p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}