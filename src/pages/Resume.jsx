import React from "react";

const Resume = () => {
    return(
        <section id="resumeContent">
            <h1>Resume</h1>
            <div>
                <h3>Resume</h3>
                <div className="resumeContact">
                    <li>Sandy Vazquez</li>
                    <li>(919)810-5588</li>
                    <li>ssolivares0@gmail.com</li>
                </div>
            </div>
            <div>
                <h3> Professional Experience</h3>
                <p> As an aspiring web developer, I do not have any professional working experience yet.</p>
            </div>
            <div>
                <h3> Career Objective</h3>
                <p>Aspiring web developer looking for an opportunity to work professionally with a team that will allow me room to grow into a more seasoned web developer.</p>
            </div>
            <div>
                <h3>Education</h3>
                <li>UNC Chapel Hill Coding Bootcamp</li>
                <li>January - July 2024</li>
            </div>

            <div>
                <h3> Skills</h3>
                <li>CSS/HTML</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>REST APIs</li>
                <li>Mongo DB</li>
                <li>React </li>
            </div>
        </section>
    )
}
export default Resume;