import React, { useState } from "react";

import "./style.css";
import homeImg from "../../assets/images/contaxium-specialiste-accueil-externalise-sur-mesure.jpg";
import blog from "../../assets/images/le-blog-contaxium.png";
import Contact from "../../component/contact/contact";
import { motion } from "framer-motion";
const Home = () => {
  const [showaccordion, setShowAccordion] = useState(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: [0, 1] }}
        className="grid banner"
      >
        <div className="left c_flex">
          <h2>
            Contaxium, spécialiste de l’accueil externalisé{" "}
            <span>sur mesure</span>
          </h2>
          <h3>Opérationnel 24/7</h3>
          <div className="btn-box ">
            <button className="btn">Demander un devis</button>
            <button className="btn">Nous contacter</button>
          </div>
        </div>

        <div className="right">
          <img alt="" src={homeImg} />
        </div>
      </motion.section>
      <section className="white-section">
        <h3>
          <span>+ de 300</span> clients nous font confiance
        </h3>
        <div className="grid white-container">
          <div className="white-left c_flex">
            <h3>
              Les métiers de <span>Emerix</span>
            </h3>
            <p>
              Emerix réalise cinq types de prestation, chacune tournée vers
              l’accueil ou l’assistance de vos clients.
            </p>
            <button className="btn ">Nos Services</button>
          </div>
          <div className="white-right">
            <div className="accordion s_flex">
              <p>Gestion des interventions</p>
              <i
                onClick={() => setShowAccordion(!showaccordion)}
                className={
                  showaccordion
                    ? "fa-sharp fa-solid fa-chevron-up icon"
                    : "fa-sharp fa-solid fa-chevron-down icon"
                }
              ></i>
            </div>
            {showaccordion ? (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                className="accordion-content"
              >
                <p>
                  Nous gérons en 24/7 les contacts de vos clients (appels,
                  mails, sms, alarmes, …) et mandatons vos intervenants. Nous
                  pouvons incrémenter vos systèmes de suivi par interface ou
                  lien RPA*
                </p>
                <a>En savoir +</a>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>

        <h3>
          Emerix, <span>en chiffres</span>
        </h3>
        <p>
          Emerix c’est une infrastructure I.T. puissante au service de millions
          de contacts clients.
        </p>
      </section>
      <section className="blue-section ">
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: [500, 0], opacity: [0, 1] }}
          className="box-row s_flex"
        >
          <div className="box">
            <div className="blue icon-box">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>600</h2>
              <p>Client nous font confiance</p>
            </div>
          </div>
          <div className="box">
            <div className="yellow icon-box">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>20 tera octets</h2>
              <p>Gérés par nos outils</p>
            </div>
          </div>
          <div className="box">
            <div className="orange icon-box">
              <i className="fa-solid fa-desktop"></i>
            </div>
            <div className="text">
              <span>plus de</span>
              <h2>1.5 million</h2>
              <p>De contacts traités par an</p>
            </div>
          </div>
          <div className="box">
            <div className="light icon-box">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="text">
              <div className="text">
                <span>plus de</span>
                <h2>99,9%</h2>
                <p>De disponibilité de nos systèmes</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="left">
          <img alt="blog" src={blog} />
        </div>
        <div className="right">
          <h2>Tout savoir sur le standard téléphonique externalisé !</h2>
          <p>
            Depuis les années 1990, les organisations choisissent de
            sous-traiter certaines fonctions périphériques de leur activité afin
            de se concentrer sur leur cœur de métier. L’externalisation de ces
            aspects secondaires peut porter sur la sécurité, la comptabilité,
            l’accueil téléphonique des appels entrants, etc. En confiant ces
            tâches à des sociétés spécialisées, les entreprises gagnent en
            productivité, en flexibilité et en notoriété.{" "}
          </p>
          <button className="btn">Voir le blog</button>
        </div>
      </section>

      <section className="white-section  row">
        <h2>
          Les arguments de <span>Emerix</span>
        </h2>
        <div className="grid">
          <div className="left">
            <p className="para">
              Emerix est un spécialiste de l’accueil externalisé sur mesure.
              Experts en solutions complexes personnalisées, nous opérons en
              24/7 et nous sommes basés en France.
            </p>
            <p className="bold">
              Les bases de nos prestations reposent sur quatre fondements
              solides
            </p>

            <ul>
              <li>
                <span>Qualité :</span> label Qualiserve et Iso 18295-1 en cours
              </li>
              <li>
                <span>Sécurité :</span> infrastructure robuste et prestations
                duo sites
              </li>
              <li>
                <span>Technicité :</span> automatisme, I.A., interface avec vos
                systèmes
              </li>
            </ul>

            <button className="btn">Nos services</button>
          </div>
          <div className="right">
            <div className="f_flex">
              <div className="img-i">
                <i className="fa-solid fa-users"></i>
              </div>
              <p>L'esprit de service</p>
            </div>
            <div className="f_flex">
              <div className="img-i">
                <i className="fa-solid fa-smile"></i>
              </div>
              <p>L'esprit de service</p>
            </div>
            <div className="f_flex">
              <div className="img-i">
                <i className="fa-solid fa-laptop"></i>
              </div>
              <p>L'esprit de service</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: [500, 0], opacity: [0, 1] }}
          className=""
        >
          <h2 className="center">
            Ils nous font <span>avancer</span>
          </h2>
          <p className="last">
            Emerix appuie son développement sur une collaboration étroite avec
            des experts des sujets stratégiques pour son activité (téléphonie,
            automatisme et sécurité informatique, RSE).
          </p>
        </motion.div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
