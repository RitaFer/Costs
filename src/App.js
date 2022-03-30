import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Home from './components/views/Home';
import Projects from './components/views/Projects';
import Company from './components/views/Company';
import Contact from './components/views/Contact';
import NewProject from './components/views/NewProject';
import Project from './components/views/Project';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/projects" element={<Projects />} > </Route>
          <Route path="/company" element={<Company />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
          <Route path="/newproject" element={<NewProject />} > </Route>
          <Route path="/project/:id" element={<Project />} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App