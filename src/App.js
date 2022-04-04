import Nav from './components/Nav';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // Set view to about on page load
  useEffect(() => {
    setView('about');
  }, []);

  // Hash URL will load via direct link
  const [ view, setView ] = useState(() => {
    return document.location.hash.slice(1);
  })

  return (
    <>
      <Nav view={view} setView={setView} />
      { view === "about" && <Bio /> }
      { view === "work" && <Projects /> }
      { view === "contact" && <Contact /> }
      <Footer />
    </>
  );
}

export default App;