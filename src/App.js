
import "bootswatch/dist/journal/bootstrap.min.css";

import Home from "./components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components'
import { Container } from "react-bootstrap";



function App() {
  return (
    <HashRouter>
      <NavBar />
      <Container>
       
        <Routes> 
        <Route path="/" element={<Home />} />
      </Routes>
    
      </Container>
    </HashRouter>
  );
}

export default App;
