import React, {Component} from "react";
import {Col, Row, Container, Nav, NavItem, NavLink} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './FooterStyle.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return(
            <div>
                <Container className={'border-top'}>
                    <Row className={'mt-5 mb-5'}>
                        <Col>
                            <Nav id={'navBox'}>
                                <NavItem>
                                    <NavLink href={'https://github.com/jimmy7412'}><FontAwesomeIcon icon={['fab', 'github']} size={'3x'} color={'black'} /> </NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink href={'https://www.linkedin.com/in/james-pierce-95b07573/'} color={'black'}><FontAwesomeIcon icon={['fab', 'linkedin']} size={'3x'} color={'black'}/> If you have a career offer, or any questions, please contact me on LinkedIn</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}