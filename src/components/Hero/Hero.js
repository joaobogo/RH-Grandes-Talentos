import React from "react";
import vid from "../../assets/videoback.mp4";
import HeroContainer from "./Hero.styles";

function Hero() {
  return (
    <HeroContainer>
      <video src={vid} autoPlay loop muted />
      <div className="content">
        <h1>Bem-Vindo a RH Grandes Talentos</h1>
        <p>
          Somos o seu parceiro de confiança no mundo do recrutamento, dedicado a
          ajudar candidatos a encontrar oportunidades gratificantes em suas
          áreas e a ajudar as empresas a encontrar os funcionários perfeitos
          para atender às suas necessidades específicas. Junte-se a nós nesta
          jornada, onde as carreiras são elevadas e as empresas florescem.
        </p>
      </div>
    </HeroContainer>
  );
}

export default Hero;
