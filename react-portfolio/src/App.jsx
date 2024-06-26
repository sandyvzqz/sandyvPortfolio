import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
   < Navigation />
   < Header />
  //  project will need a nested project card component
   < Project />
   < Footer />
  )
}

export default App;
