import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css'
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      < Navigation />
      < Header />
      < Project />
      {/* project will need a nested project card component */}
      < Footer />
    </div>
  )
}

export default App;
