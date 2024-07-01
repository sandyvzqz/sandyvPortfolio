import React from 'react';
import { Col } from "react-bootstrap";


const ProjectCard =({ title, gitHub, deployedApp, imageUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="proj-img"src={ imageUrl }/>
                <div className="proj-txtx">
                    <h4>{ title }</h4>
                    <ul id="projectLinks"> 
                        <li><a href={ gitHub } target="_blank">GitHub repository</a></li>
                        <li><a href={ deployedApp } target="_blank">Deployed Application</a></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
};
export default ProjectCard;
