import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

import pwaTextEditor from '../assets/images/pwaTextEditor.png';
import datasnake from '../assets/images/datasnake.png';
import timedQuiz from '../assets/images/timedQuiz.png';
import sqlEmployeeTracker from '../assets/images/sqlEmployeeTracker.png';
import ormEcommerce from '../assets/images/ormEcommerce.png';
import practiceWebpage from '../assets/images/practicewebpage.png';

const Projects = () => {
  const projects = [
    {
      title: 'PWA Text Editor',
      gitHub: 'https://github.com/sandyvzqz/pwaTextEditor',
      deployedApp: 'https://pwa-texteditor-l4id.onrender.com/',
      imageUrl: pwaTextEditor,
    },
    {
      title: 'SQL Employee Tracker',
      gitHub: 'https://github.com/sandyvzqz/SqlEmployeeTracker',
      deployedApp: 'https://github.com/sandyvzqz/SqlEmployeeTracker',
      imageUrl: sqlEmployeeTracker,
    },
    {
      title: 'ORM E-commerce',
      gitHub: 'https://github.com/sandyvzqz/ORM-E-CommerceBackEnd',
      deployedApp: 'https://github.com/sandyvzqz/ORM-E-CommerceBackEnd',
      imageUrl: ormEcommerce,
    },
    {
      title: 'DataSnake',
      gitHub: 'https://github.com/ajprobel/datasnake',
      deployedApp: 'https://group4-project2-c23a5470e6d9.herokuapp.com/login',
      imageUrl: datasnake,
    },
    {
      title: 'Timed Quiz',
      gitHub: 'https://github.com/sandyvzqz/timedQuiz',
      deployedApp: 'https://sandyvzqz.github.io/timedQuiz/',
      imageUrl: timedQuiz,
    },
    {
      title: 'Practice Webpage',
      gitHub: 'https://github.com/sandyvzqz/practice-webpage',
      deployedApp: 'https://sandyvzqz.github.io/practice-webpage/',
      imageUrl: practiceWebpage,
    },
  ];

  return (
    // <section>
      <Container>
        <Row>
          <Col>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"></Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    // </section>
  );
};

export default Projects;
