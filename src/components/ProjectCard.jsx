import { Col } from "react-bootstrap";


const ProjectCard =({ title, imageUrl, githubRepo, websiteLink}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img className="proj-img"src={ imageUrl } alt={title}/>
                <div className="proj-txt">
                    <h4>{ title }</h4>
                    <p>Github Repo: <a href= { githubRepo } target="_blank">github</a></p>
                    <p>Deployed App: <a href= { websiteLink } target="_blank">website</a></p>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;
