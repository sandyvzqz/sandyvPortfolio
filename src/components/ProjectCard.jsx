import React from 'react';
import { Col } from "react-bootstrap";


const ProjectCard =({ title, description, imageUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="proj-img"src={ imageUrl }/>
                <div className="proj-txtx">
                    <h4>{ title }</h4>
                    <span>{ description }</span>
                </div>
            </div>
        </Col>
    )
};
export default ProjectCard;
