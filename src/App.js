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
    <div className="App bg-bg1" style={{ background: 'black' }}>
    <Navbar style={{ background: 'black' }} />
    <Intro style={{ background: 'black' }} />
    <About style={{ background: 'black' }} />
    <Skills style={{ background: 'black' }} />
    <Experience style={{ background: 'black' }} />
    <Projects style={{ background: 'black' }} />
    <ToTop style={{ background: 'black' }} />
    <Footer style={{ background: 'black' }} />
  </div>
  
  );
}

export default App;
