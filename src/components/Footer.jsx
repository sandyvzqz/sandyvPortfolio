import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import github from '../assets/images/github.svg';
import linkedIn from '../assets/images/linkedIn.svg';
import stackOverflow from '../assets/images/stackOverflow.svg';
import '../App.css';

const Footer = ()=> {
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="text-center"> 
                        <div className="social-icon">
                            <a href="https://github.com/sandyvzqz" target="_blank"><img src={github} alt="github logo"/></a>
                            <a href="https://linkedin.com" target="_blank"><img src={linkedIn} alt="linkedIn logo"/></a>
                            <a href="https://stackoverflow.com" target="_blank"><img src={stackOverflow} alt="stackOverflow logo"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;