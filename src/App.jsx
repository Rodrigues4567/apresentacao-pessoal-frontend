import './App.css'
import Footer from './layout/Footer';
import Header from './layout/Header';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';

function App() {

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
