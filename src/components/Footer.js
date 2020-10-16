
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Row>
                        <Col>
                            <a href="mailto:chiragcharania@gmail.com">
                                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/chiragcharania/?hl=en">
                                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/chiragcharania">
                                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.facebook.com/chirag.charania">
                                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                            </a>
                        </Col>
                        <Col>
                            <a className href="https://twitter.com/chiragcharania">
                                <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                            </a>
                        </Col>
                    </Row>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        All Rights Reserved © 2020 Chirag Charania
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;