import './App.css';
// import { useState } from 'react';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName';
// import Pearson from './components/Pearson';
// import List from './components/List'
// import Event from './components/Event'
// import Conditional from './components/Conditional';
// import OtherList from './components/OtherList';
// import YourName from './components/YourName';
// import Greeting from './components/Greeting';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/views/home';
import Contact from './components/views/contact';
import Company from './components/views/company';
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';


function App() {

  // const namex = "Cleberson"
  // const myItens = ['React', 'Vue', 'Angular']
  // const [name, setName] = useState()

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/company" element={<Company />} > </Route>
        <Route path="/contact" element={<Contact />} > </Route>
      </Routes>
      <Footer/>
    </Router>
    
    // <div className="App">
    //   <h1>Olá, {namex}!</h1>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <HelloWorld/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <SayMyName name={namex}/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <Pearson 
    //   name="Dennis" 
    //   age='25'
    //   photo="https://via.placeholder.com/150" 
    //   profession="Desenvolvedor"
    //   />
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <List/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <Event/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <h1>Renderização Condicional</h1>
    //   <Conditional/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <h1>Renderização de Listas</h1>
    //   <OtherList title="Array Preenchido" itens={myItens}/>
    //   <OtherList title="Array Vazio" itens={[]}/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    //   <h1>State Lift</h1>
    //   <p>-----------------------------------------------------------------------------------------------------------</p>
    //   <YourName setName={setName}/>
    //   <Greeting name={name}/>
    //   <p>------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    // </div>
  );
}

export default App;
