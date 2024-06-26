import { useState , useEffect} from 'react';
import  { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';
// importing image/logos from assets library
import github from '../assets/images/github.svg';
import linkedIn from '../assets/images/linkedIn.svg';
import stackOverflow from '../assets/images/stackOverflow.svg';

function Navigation(){
    const [activeLink, setActiveLink] = useState('about-me');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll =() =>{
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
          setScrolled(false);
        }
        }
        window.addEventListener("scroll", onScroll);
        // remove listener if the component gets removed from DOM
        return () => window.removeEventListener("scroll", onScroll);
        }, [])
      
    const onUpdateActiveLink= (value) => {
      setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-me" className={activeLink ==='about-me' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('about-me')}>About Me</Nav.Link>
              <Nav.Link href="#project" className={activeLink ==='project' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Project</Nav.Link>
              <Nav.Link href="#resume" className={activeLink ==='resume' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="#contact" className={activeLink ==='contact' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="github.com/sandyvzqz"><img src={github} alt="github logo"/></a>
                <a href="linkedin.com"><img src={linkedIn} alt="linkedIn logo"/></a>
                <a href="stackoverflow.com"><img src={stackOverflow} alt="stackOverflow logo"/></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
}

export default Navigation;