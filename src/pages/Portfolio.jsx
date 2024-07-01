// src/pages/Portfolio.jsx
import React from 'react';
import Projects from '../components/Projects'; // Adjust the path if necessary

const Portfolio = () => {
  return (
    <section>
        <div>
        <h1>Portfolio</h1>
        <p>Welcome to my portfolio page! <br></br>Below are a couple of the projects I have created during my first year as a web developer. Click on the links provided to see the github repositories and links to the deployed applications.</p>
        <Projects />
        </div>
    </section>
  );
};

export default Portfolio;

