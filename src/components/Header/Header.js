import React, { useState } from "react";
import HeaderContainer from "./Header.styles";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer id="header">
      <img className="logo" src={logo} alt="Logo" />
      <a className="desktopa" href="/">
        Início
      </a>
      <a
        className="desktopa"
        href="https://jobs.quickin.io/rhgrandestalentos/jobs"
      >
        Oportunidades
      </a>

      <a className="desktopa" href="/companies">
        Empresas
      </a>
      <a className="desktopa" href="/candidates">
        Candidatos
      </a>
      <a className="desktopa" href="/blog">
        Blog
      </a>
      <a className="desktopa" href="/contact">
        Fale Conosco
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburger} alt="Menu" />
      </div>

      <div className={isMenuOpen ? "slidingmenuon" : "slidingmenuoff"}>
        <button className="closemenu" onClick={toggleMenu}>
          X
        </button>

        <div className="main">
          <a className="links" href="/">
            Início
          </a>
          <a
            className="links"
            href="https://jobs.quickin.io/rhgrandestalentos/jobs"
          >
            Oportunidades
          </a>
          <a className="links" href="/companies">
            Empresas
          </a>
          <a className="links" href="/candidates">
            Candidatos
          </a>
          <a className="desktopa" href="/blog">
            Blog
          </a>
          <a className="links" href="/contact">
            Fale Conosco
          </a>
          <div className="icons">
            <a href="https://www.linkedin.com/company/rh-grandes-talentos/">
              <FaLinkedin className="icones2" />
            </a>
            <a href="https://www.instagram.com/rhgrandestalentos/">
              <FaInstagram className="icones2" />
            </a>
            <a href="https://www.facebook.com/people/Rh-Grandes-Talentos/100064795506313/">
              <FaFacebook className="icones2" />
            </a>
            <a href="https://web.whatsapp.com/send?phone=5511991260399&text=Ol%C3%A1,%20Tenho%20interesse%20nos%20servi%C3%A7os%20da%20RH%20Grandes%20Talentos,%20pode%20me%20ajudar?">
              <FaWhatsapp className="icones2" />
            </a>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
