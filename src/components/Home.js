import React from "react";
import "../styles/Home.css";

import {
  docAbout,
  docPhoto,
  logo,
  blog3,
  blog2,
  blog5,
  facebook,
  instagram,
  tiktok,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  
} from "../assets/index";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="main-container">
      <div className="landing-photo-interface">
        <div className='img-landing-container'> 
           <img src={logo} alt="" />
        </div>
       
        <div className="interface-img-container">
          <img src={docPhoto} alt="" />
        </div>

        <div className="landing-description">
          <h1>
            {" "}
            Hola, Soy <br /> La Nutriologa Cherety
          </h1>
          <p> Lic. en Salud Publica y En Nutriologia</p>
          <a
            href="https://wa.me/message/LNRP3UDQDY5QC1"
            className="hover-landing"
          >
            Contactame  <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="social-media-container">
        <a
          href="https://www.instagram.com/nutriologacherety/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-instagram-square"></i>
        </a>
        <a
          href="https://www.facebook.com/Nutri%C3%B3loga-Cherety-529362917256111"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.tiktok.com/@nutriologacherety"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
      <div className="absolute-buttons-container">
        <button onClick={() => setToggle(true)}>Sobre Mi</button>
        <button onClick={() => setToggle(false)}>Vida Saludable</button>
      </div>
      {toggle ? (
        <>
          <section className="about-location-container">
            <div id="about-me" className="img-about-container">
              <img src={docAbout} alt="" />
            </div>
            <div className="about-description">
              <div className="vector-container">
                <i className="fa-regular fa-window-minimize"></i>
                <span>Sobre Mi</span>
              </div>

              <h2>
                +5 Años <br /> De Experiencia En Salud
              </h2>
              <p className="about-p">
              Soy Brenda Cherety, soy Nutrióloga y me dedico a acompañarte
                mientras cumples tus objetivos físicos y/o de salud.  Algunos de
                ellos son pérdida de grasa, aumento de masa muscular, control de
                diabetes, hipertensión, control de niveles de colesterol,
                triglicéridos, ácido úrico, salud hormonal, mejora de hábitos,
                entre otros. Siempre a tu paso y de forma personalizada.
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section id="about-me" className="about-location-container">
            <div  className="img-carousel-container">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={gallery1}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery2}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery3}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery4}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery5}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery6}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery7}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery8}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery9}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery10}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery11}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery12}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={gallery13}
                      alt="First slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="about-description">
              <div className="vector-container">
                <i className="fa-regular fa-window-minimize"></i>
                <span>Vida Saludable</span>
              </div>

              <h2>
                Consejos <br /> para tener una alimentacion saludable
              </h2>
              <p className="about-p">
                Resalta la importancia de las frutas, las verduras, los cereales
                integrales, la leche y los productos lácteos sin grasa o bajos
                en grasa. Incluye una variedad de alimentos con proteínas como
                mariscos, carnes magras, huevos, legumbres (frijoles y
                guisantes), productos de soya, nueces y semillas.
              </p>
            </div>
          </section>
        </>
      )}
      <section>
      <div className="services">
        <div className="title">
          <div className="vector-container-services">
            <i className="fa-regular fa-window-minimize"></i>
            <span>Servicios</span>
            <i className="fa-regular fa-window-minimize"></i>
          </div>
          <h2>La Consulta es Para Ti Si</h2>
        </div>
        <div className="boxes-container">
          <div className="box carrot">
          <i className="fa-solid fa-weight-scale"></i>
            <h3>Buscas perder grasa </h3>
              <p>si tu objetivo es perder grasa</p>
          </div>
          <div className="box heart">
          <i className="fa-solid fa-dumbbell"></i>
            <h3>Buscas aumentar masa muscular</h3>
              <p> si tu objetivo es aumentar masa muscular</p>
          </div>

          <div className="box excercise">
          <i className="fa-solid fa-syringe"></i>
            <h3>Si Padeces SOP/ Resistencia a la insulina</h3>
                <p>si padeces de una de estas condiciones</p>
          </div>

          <div className="box weight">
          <i className="fa-solid fa-face-frown"></i>
            <h3>Padeces de estreñimiento, colitis, gastritis o reflujo</h3> 
           <p>si padeces de una de estas condiciones </p>
          </div>
          <div className="box whats">
          <i className="fa-solid fa-hand-holding-heart"></i>
            <h3>Necesitas controlar tu diabetes </h3>
            <p>si necesitas controlar tu diabetes</p>
           
          </div>
          <div className="box food">
          <i className="fa-solid fa-heart"></i>
            <h3> Padeces hipertensión Colesterol u otros parámetros elevados  </h3>
                  <p>si padeces de una de estas condiciones</p>
          </div>
         
        </div>
        <div className="services-contact-button">
          <a href="https://wa.me/message/LNRP3UDQDY5QC1">
                  <p className="second-a-contact">
                  Contactame  <i className="fa-solid fa-arrow-right"></i>
                  </p>
                  </a>
          </div>
      </div>
 
      </section>
      <section id="blog" className="blog">
        <div className="vector-container-blog">
          <span>
            <i className="fa-regular fa-window-minimize"></i>
            Blog Personal
            <i className="fa-regular fa-window-minimize"></i>
          </span>
        </div>
        <h2>Mi Blog Personal</h2>
        <div className="cards-container">
          <div className="card">
            <div className="img-container">
              <video controls src={blog3}></video>
            </div>
            <div className="description-card">
              <h4>Food</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> march 16
              </span>
            </div>
            <a className="hover-container"
              href="https://www.instagram.com/nutriologacherety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mas <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          <div className="card">
            <div className="img-container">
           <video controls src={blog2}></video>
            </div>
            <div className="description-card">
              <h4>Food</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> may 22
              </span>
            </div>
            <a
            className="hover-container"
              href="https://www.instagram.com/nutriologacherety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mas <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="card">
            <div className="img-container">
              <video controls src={blog5}></video>
            </div>
            <div className="description-card">
              <h4>Fit Life</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> march 14
              </span>
            </div>
            <a
            className="hover-container"
              href="https://www.instagram.com/nutriologacherety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mas <i className="fa-brands fa-instagram"></i>{" "}
            </a>
          </div>
        </div>
        <section id="social" className="social-media">
          <div className="follow-container">
            <div className="vector-container-social">
              <i className="fa-regular fa-window-minimize"></i>
              <span>Sigueme</span>
            </div>
            <h2>Sigueme En Mis Redes</h2>
            <p>Mantente conectado conmigo, sigueme en mis redes sociales</p>
          </div>
          <div className="social-media-icons-container">
            <div className="social-box">
              <div className="pic-container">
                <img className="face" src={facebook} alt="" />
              </div>
              <div className="followers-container">
                <span className="amount">+20k</span>
                <span>Followers</span>
              </div>

              <div className="upcount-container">
                <a
                  href="https://www.facebook.com/Nutri%C3%B3loga-Cherety-529362917256111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="social-box">
              <div className="pic-container">
                <img className="insta" src={instagram} alt="" />
              </div>
              <div className="followers-container">
                <span className="amount">+3k</span>
                <span>Followers</span>
              </div>

              <div className="upcount-container">
                <a
                  href="https://www.instagram.com/nutriologacherety/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="social-box">
              <div className="pic-container">
                <img className="insta" src={tiktok} alt="" />
              </div>
              <div className="followers-container">
                <span className="amount">+1k</span>
                <span>Followers</span>
              </div>

              <div className="upcount-container">
                <a
                  href="https://www.tiktok.com/@nutriologacherety"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer>
            <div className="footer-contact-container">
                <span>Contact Me</span>
                <span></span>
                <span><i className="fa-solid fa-location-dot"></i> Hidalgo 514 A Poniente, Centro, 67480 </span>
                <span><i className="fa-solid fa-envelope"></i> brendacheretynutricion@gmail.com</span>
                <span><i className="fa-solid fa-phone-flip"></i> 828-105-6153</span>
            </div>
            <div className="copy">
              <p><i className="fa-solid fa-copyright"></i> Nutriologa Cherety 2022</p>
            </div>
            
      </footer>
    </div>
  );
};

export default Home;
