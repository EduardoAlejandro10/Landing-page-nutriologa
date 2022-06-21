import React from "react";
import "../styles/Home.css";


import {
  certifications,
  docAbout,
  docPhoto,
  logo,
  blog3,
  blog2,
  blog5,
  facebook,
  instagram,
  tiktok,
} from "../assets/index";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="home">
      <div className="landing-photo-interface">
        <img src={logo} alt="" />
        <div className="interface-img-container">
          <img src={docPhoto} alt="" />
        </div>

        <div className="landing-description">
          <h1>
            {" "}
            Hola, Soy <br /> Brenda Cherety
          </h1>
          <p> Licenciada En Nutriologia</p>
          <a
            href="https://api.whatsapp.com/message/LNRP3UDQDY5QC1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactame <i className="fa-solid fa-arrow-right"></i>
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
        <button onClick={() => setToggle(false)}>Certificaciones</button>
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
                Soy Brenda Cherety Lic. En Nutrición y me dedico a acompañarte
                mientras cumples tus objetivos físicos y/o de salud Algunos de
                ellos son pérdida de grasa, aumento de masa muscular, control de
                diabetes, hipertensión, control de niveles de colesterol,
                triglicéridos, ácido úrico, salud hormonal, mejora de hábitos,
                entre otros. Siempre a tu paso y de forma personalizada.
              </p>
              <div className="checked-abilities-card">
                <div className="p-about-container">
                  <p>
                    {" "}
                    <span>
                      {" "}
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Interpretacion de estudios de <br />
                    laboratorio
                  </p>
                  <p>
                    {" "}
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Evaluacion de composicion corporal{" "}
                  </p>
                  <p>
                    {" "}
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Plan de alimentacion
                  </p>
                </div>
                <div>
                  <p>
                    {" "}
                    <span>
                      <i className="fa-solid fa-check"></i>{" "}
                    </span>{" "}
                    orientacion en Suplementacion
                  </p>
                  <p>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>{" "}
                    Orientacion en entrenamiento{" "}
                  </p>
                  <p>
                    {" "}
                    <span>
                      <i className="fa-solid fa-check"></i>{" "}
                    </span>
                    Lista de equivalentes y Guia de Restaurantes
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="certifications-container">
            <div className="certifications">
              <div className="certification-img-container">
                <img src={certifications} alt="" />
              </div>
              <div className="description-certifications">
                <div className="vector-container">
                  <i className="fa-regular fa-window-minimize"></i>
                  <span>Mis Certificaciones</span>
                </div>
                <h2>Certificaciones</h2>
                <p>
                  Tnego una Licenciatura En Nutriologia Por la Universidad
                  Autonoma De Nuevo Leon, la 5ta mejor universidad del pais,
                  entonces estoy mas que calificada para acompañarte en tu
                  proceso de transformacion.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
      <section className="services">
        <div className="title">
          <div className="vector-container-services">
            <i className="fa-regular fa-window-minimize"></i>
            <span>Servicios</span>
            <i className="fa-regular fa-window-minimize"></i>
          </div>
          <h2>Que Incluye Tu Consulta?</h2>
        </div>
        <div className="boxes-container">
          <div className="box carrot">
            <i className="fa-solid fa-carrot"></i>
            <h3>Plan de alimentación personalizado </h3>
            <p>
              plan personalizado a tu objetivo y gustos hasta donde es posible
            </p>
          </div>
          <div className="box heart">
            <i className="fa-solid fa-heart"></i>
            <h3>Evaluacion De Composicion Corporal</h3>
            <p>
              Porcentaje de grasa total, grasa visceral, masa ósea y edad
              metabólica
            </p>
          </div>

          <div className="box excercise">
            <i className="fa-solid fa-person-walking"></i>
            <h3>Orientacion en entrenamiento</h3>
            <p>
              ejercicios recomendados a tus posibilidades y orientacion a como
              ejecutarlos correctamente{" "}
            </p>
          </div>

          <div className="box weight">
            <i className="fa-solid fa-dumbbell"></i>
            <h3>Orientacion en suplementacion</h3>
            <p>solamente lo que es considerado benéfico y sin riesgos</p>
          </div>
          <div className="box whats">
            <i className="fa-brands fa-whatsapp"></i>
            <h3>Comunicaciones via Whatsapp</h3>
            <p> para resolver las dudas que se te presenten</p>
          </div>
          <div className="box food">
            <i className="fa-solid fa-utensils"></i>
            <h3> lista de alimentos equivalentes y guía de restaurantes</h3>
            <p>
              lista de alimentos quivalentes y guia de restaurantes en cadereyta
            </p>
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
              <img src={blog3} alt="" />
            </div>
            <div className="description-card">
              <h4>Food</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> march 16
              </span>
            </div>
            <a
              href="https://www.instagram.com/nutriologacherety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mas <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          <div className="card">
            <div className="img-container">
              <img src={blog2} alt="" />
            </div>
            <div className="description-card">
              <h4>Travels</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> may 22
              </span>
            </div>
            <a
              href="https://www.instagram.com/nutriologacherety/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mas <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={blog5} alt="" />
            </div>
            <div className="description-card">
              <h4>Travels</h4>
              <span>
                {" "}
                <i className="fa-solid fa-calendar-days"></i> march 14
              </span>
            </div>
            <a
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
          <div  className="social-media-icons-container">
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
                <span className='amount'>+3k</span>
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
                <span className='amount'>+1k</span>
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


          </div>


          
        </section>
      </section>
      <footer></footer>
    </div>
  );
};

export default Home;
