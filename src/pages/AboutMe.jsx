import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/images/profilepic.jpg';

const About = () => {
    return (
    <section className="about">
        <h1>About Me</h1>
        <Container>
        {/* className="align-items-center" */}
            <Row>
                <Col>
                    <img className="profilePic" src={profilePic} alt="profile picture"/>
                    <p> This year I began my journey to become a web developer, and it has not been easy. There were many times that I thought about giving up because it was too hard, but I am proud of myself for overcoming those feelings of failure and learning from them.</p>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default About;