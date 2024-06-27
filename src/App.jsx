import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css'
//import necessary components and pages for rendering
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutMe';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div>
        <Header />
          <section>
            <Routes>
              <Route path="/" element={<About/>}/>
              {/* <Route path="/portfolio" element={<Portfolio/>}/> */}
              {/* <Route path="/contact" element={<Contact/>}/> */}
              {/* <Route path="/resume" element={<Resume/>}/> */}
            </Routes>
          </section>
          < Footer/>
      </div>
    </Router>
  )
}

export default App;
