import { useState , useEffect} from 'react';
import  { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';

const Navigation = ()=> {
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
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="me-auto">
              <Nav.Link href="#about-me" className={activeLink ==='about-me' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('about-me')}>About Me</Nav.Link>
              <Nav.Link href="#project" className={activeLink ==='project' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Project</Nav.Link>
              <Nav.Link href="#resume" className={activeLink ==='resume' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="#contact" className={activeLink ==='contact' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
}

export default Navigation;