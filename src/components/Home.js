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
                Soy Brenda Cherety Lic. En Nutrición y me dedico a acompañarte
                mientras cumples tus objetivos físicos y/o de salud Algunos de
                ellos son pérdida de grasa, aumento de masa muscular, control de
                diabetes, hipertensión, control de niveles de colesterol,
                triglicéridos, ácido úrico, salud hormonal, mejora de hábitos,
                entre otros. Siempre a tu paso y de forma personalizada.
              </p>
              <div className="checked-abilities-card">
                <div className="p-about-container">
                  <p >
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
          <section className="about-location-container">
            <div id="about-me" className="img-carousel-container">
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
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/274059514_1886542664871456_2299413864784605198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHF--KVLRJ2e5hSZNbK8vXu6dTZCe3_KVPp1NkJ7f8pU8rJ-4eY7wa8Pd0ykCnE2APnTbUPeAhu6SFTx01_ZC6N&_nc_ohc=D0J1P4Ok9JMAX-H8yht&tn=StPZrkkq0Ovc5hwk&_nc_ht=scontent.fmty1-1.fna&oh=00_AT-xOZpfPfEkX1VRKOzOTSsR-fha4UEF4XpJZBsKXp696Q&oe=62B71693"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/274069489_1886542674871455_6937756377942505575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH1YVVXgYQddBNASFrv3pcXxQeN4K51frTFB43grnV-tM1n5u_GhZjBwJ4HLI7FZR46c27o2cHF6hvV_d0Ig_7O&_nc_ohc=_dLPd1iDGI4AX9Wf5Jb&_nc_ht=scontent.fmty1-1.fna&oh=00_AT9KMzTeQRtjujOUH1TKrhP-lPbf12APblviq3lBrUSUOw&oe=62B66F77"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273499099_1880750332117356_8927106348851331370_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGnCgno9zwfN36-24JQz5qmqNdRKLcaGvKo11Eotxoa8uKA4dmhagZCCYdjJku2ihS80-ffj7YSXU0Xxd3strsO&_nc_ohc=U7nN8DdSaNYAX8G6rH2&_nc_ht=scontent.fmty1-1.fna&oh=00_AT9ctbOvVabq_uSwX5i-7K_R9PLvABi8c1aUi8qW4rUu-g&oe=62B7A5D5"
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273406598_1880750322117357_8820616124001476361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmol8y5pt1JTWL5qDfOTMSJGJ0FoQ3ii4kYnQWhDeKLt-KpCUx455_gaDxyozKjCHEouslrpKhhosJ7F9BO8NF&_nc_ohc=8w4vMOGrEWIAX8FtahN&_nc_ht=scontent.fmty1-1.fna&oh=00_AT-O1x5G6mn0YRFfnhEtrmVHZZMLLTqx-08Gsa-FkNo0OA&oe=62B80FBD"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273515391_1880750275450695_5470847458141127482_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG_Vbo9Ess3LEfnJX2e2mrsBLSf3Cm63REEtJ_cKbrdERiy1RUwN3nb2sJEul-vu2DcloVEk223jVBaMunsUrlE&_nc_ohc=IDpyFoxY1xgAX8IKaf7&_nc_ht=scontent.fmty1-1.fna&oh=00_AT_U9ewuiK9IIO92QI76wAstFQnY5ACfVwywtPpJqB17fg&oe=62B65763"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273532175_1880750302117359_8077315646411381423_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHEjNmURczKI0-aGFNbLKoahKmlHmz5fWOEqaUebPl9YzxWjl-FnRUnZru3VvLTZS1synD6aYStwvtFRYnB0-7P&_nc_ohc=v8st972Ak-oAX_7weIu&_nc_ht=scontent.fmty1-1.fna&oh=00_AT-8LUbkX5hlFmIsRgnvQ4UBqr5dZNtyjcglW0PRWq7oCw&oe=62B6A9C2"
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273406598_1880750322117357_8820616124001476361_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmol8y5pt1JTWL5qDfOTMSJGJ0FoQ3ii4kYnQWhDeKLt-KpCUx455_gaDxyozKjCHEouslrpKhhosJ7F9BO8NF&_nc_ohc=8w4vMOGrEWIAX8FtahN&_nc_ht=scontent.fmty1-1.fna&oh=00_AT-O1x5G6mn0YRFfnhEtrmVHZZMLLTqx-08Gsa-FkNo0OA&oe=62B80FBD"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273386363_1880750318784024_5594206205033691181_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHv3QXINGvZUt5CpvuXTL6e6B-BNRFTNIHoH4E1EVM0gRMfB5RdpCjx99MRzwCVWV-2w71fgAt_33ik3Zwvk9rh&_nc_ohc=18gTFzgPRCIAX8LJKcg&_nc_ht=scontent.fmty1-1.fna&oh=00_AT_qXZeZCjzZKIobvhR3Rb33U4wnlfz1sWhMehXVGIrNXA&oe=62B7BF0F"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/273442245_1880750292117360_657499255426323709_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEB1H45rrSvg9ELb1tzfkXhP3Bkkzb-SBU_cGSTNv5IFbu0XIgaLgoLIUKFpsZ8EIf92GdJiyflBBOfEk_rzQZ8&_nc_ohc=I1M22oK5DEEAX8IvA_8&_nc_ht=scontent.fmty1-1.fna&oh=00_AT9tLZGDmrc9r2FT6pwDGC6U4xJXaKr6YTjjNGGWwX2bBg&oe=62B7F841"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/267168349_1842400662618990_8217903597278941663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFUgtZpF1zqDwgal_b1VT7c2QRrHUHyGW7ZBGsdQfIZbqNh3dQ1X6-YyRIL1iWxDqlNabm1pp98qHN0KVoflY1k&_nc_ohc=TBdX7wg2-DkAX-_gVLm&_nc_ht=scontent.fmty1-1.fna&oh=00_AT82XYH4wJTaTLcFEuQW80YRU8ZAjkqcty5qcUGdgz8Qsg&oe=62B711BB"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/268484438_1842400682618988_6514794360323531125_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGe6F9lPor0V3RciQzQcGEuHFodmzrykxYcWh2bOvKTFreAyk6HokvKitDe9s_nrjLtHH-hkruxOaFJQy1YCPhN&_nc_ohc=hUtzAXkwdfkAX-GrbuS&_nc_ht=scontent.fmty1-1.fna&oh=00_AT9NumjC34iLVkhC8ku30nb_O8YNrqhpbIxFcR30OU8x2A&oe=62B67765"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/267577439_1842400679285655_1579818067268751029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEV_tw5Ns29CzsiKF6jybYnLYtt52Jyb48ti23nYnJvjyqJjqGTI6e68KjcexXFxerTI1zjKUVjGy4Ay97b5UBG&_nc_ohc=sV8IhfH5868AX-_n9oE&_nc_ht=scontent.fmty1-1.fna&oh=00_AT-sAeOjDtjFDqAEcwzolCVI2viK-UvCuuvIh-Gv11P-nQ&oe=62B66465"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://scontent.fmty1-1.fna.fbcdn.net/v/t39.30808-6/267962213_1842400672618989_1780328851358396455_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGrNUuZpzarkaDzqAz1pMhVE8BVLAfzHroTwFUsB_MeumaNKhVfRqGHHo4gmaV7LmgMTJGOkrUJawT3gsO85a26&_nc_ohc=d23wXDOKX1EAX8O69mW&_nc_ht=scontent.fmty1-1.fna&oh=00_AT8Ee5sx4YwHUYSWMTx8i3HQRMT3EgcNJeGp-QS3XJ_0yQ&oe=62B73D1F"
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
            <i  className="fa-solid fa-person-walking person"></i>
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
