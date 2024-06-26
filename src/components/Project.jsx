// import CSS file for styling
import ProjectCard from './ProjectCard';
import { Container, Row, Col, Tab, Nav} from "react-bootstrap";

// import project images here
import pwaTextEditor from "../assets/images/pwaTextEditor.png";
import datasnake from "../assets/images/datasnake.png";
import timedQuiz from "../assets/images/timedQuiz.png";
import sqlEmployeeTracker from "../assets/images/sqlEmployeeTracker.png";
import ormEcommerce from "../assets/images/ormEcommerce.png";
import practiceWebpage from "../assets/images/practicewebpage.png";

const Project = () => {
    const projects = [
        {
            title: "PWA Text Editor",
            githubRepo: 'https://github.com/sandyvzqz/pwaTextEditor',
            websiteLink: 'https://pwa-texteditor-l4id.onrender.com/',
            imageUrl: pwaTextEditor,
        },
        {
            title: "SQL Employee Tracker",
            githubRepo: 'https://github.com/sandyvzqz/SqlEmployeeTracker',
            websiteLink: 'https://github.com/sandyvzqz/SqlEmployeeTracker',
            imageUrl: sqlEmployeeTracker,
        },
        {
            title: "ORM E-commerce",
            githubRepo: 'https://github.com/sandyvzqz/ORM-E-CommerceBackEnd',
            websiteLink: 'https://github.com/sandyvzqz/ORM-E-CommerceBackEnd',
            imageUrl: ormEcommerce,
        },
        {
            title: "DataSnake",
            githubRepo: 'https://github.com/ajprobel/datasnake',
            websiteLink: 'https://group4-project2-c23a5470e6d9.herokuapp.com/login',
            imageUrl: datasnake ,
        },
        {
            title: "Timed Quiz",
            githubRepo: 'https://github.com/sandyvzqz/timedQuiz',
            websiteLink: 'https://sandyvzqz.github.io/timedQuiz/',
            imageUrl: timedQuiz,
        },
        {
            title: "Practice Webpage",
            githubRepo: 'https://github.com/sandyvzqz/practice-webpage',
            websiteLink: 'https://sandyvzqz.github.io/practice-webpage/',
            imageUrl: practiceWebpage,
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>This is a collection of all projects that I have completed during my coding bootcamp journey.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"></Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}
                                            {...project} />
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Second</Tab.Pane>
                            <Tab.Pane eventKey="third">Third</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Project;
