import React from "react";
import FooterContainer from "./Footer.styles";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <FooterContainer>
      <img src={logo}></img>

      <p>2012-2023 RH Grandes Talentos. Todos Direitos Reservados.</p>
    </FooterContainer>
  );
}

export default Footer;
