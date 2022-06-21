import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


const NavBar = () => {
  return (
    <div>    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link  className="navbar-brand nav" to='/'></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Casos de exito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Redes</a>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
      
    </div>
  );
};

export default NavBar;