import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import Company from './components/views/Company';
import NewProject from './components/views/NewProject';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Projects from './components/views/Projects';
import Project from './components/views/Project';


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