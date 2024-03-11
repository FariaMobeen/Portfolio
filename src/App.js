import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import About from './components/About';
import Projects from './components/Projects';
import ToTop from './components/ToTop';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App bg-bg1">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ToTop/>
      <Footer/>
    </div>
  );
}

export default App;
