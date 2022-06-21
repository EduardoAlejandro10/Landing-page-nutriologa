import React from 'react';
import '../styles/NavBar.css';


const NavBar = () => {
  return (
    <div>    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <p className="navbar-brand nav" ></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href='/'>Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#social">Redes</a>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
      
    </div>
  );
};

export default NavBar;