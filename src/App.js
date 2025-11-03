import Navbar from './components/navbar';
import Home from './components/home';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import Certificates from './components/certificates';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;