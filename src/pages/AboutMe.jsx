import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/images/profilepic.jpg';

const About = () => {
    return (
    <section className="about" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <p> This year I began my journey to become a web developer, and it has not been easy. There were many times that I thought about giving up because it was too hard, but I am proud of myself for overcoming those feelings of failure and learning from them.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={profilePic} alt="profile picture"/>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default About;