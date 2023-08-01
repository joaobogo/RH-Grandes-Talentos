import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidatesContainer from "../Candidates/Candidates.styles";
import simpleshr from "../../assets/simpleshr.png";
import juniortosenior from "../../assets/juniortosenior.png";
import rhintegracao from "../../assets/rhintegracao.png";
import brazil from "../../assets/brazil.png";
import Contact from "../../components/Contact/Contact";
import Whatsapp from '../../components/Whatsapp/Whatsapp'


function Companies() {
  return (
    <>
      <Header />
      <CandidatesContainer>
        <h1>Quer facilitar seu processo de contratação?</h1>
        <h4>
          A RH Grandes Talentos oferece um conjunto abrangente de serviços para
          simplificar e otimizar seu processo de aquisição de talentos.
          Disponibilizamos acesso a um diversificado conjunto de candidatos em
          todos os níveis, integração perfeita com seu departamento de RH,
          parcerias em todo o Brasil e suporte personalizado para potencializar
          sua empresa com talentos de primeira linha. Confie em nós para
          encontrar os candidatos perfeitos, para que você possa se concentrar
          no que faz de melhor - administrar sua empresa. Vamos trabalhar juntos
          para moldar um futuro brilhante para sua empresa.
        </h4>

        <div className="main">
          <div className="card">
            <img src={simpleshr}></img>
            <div className="content">
              <h3>Simplificando o Processo de Aquisição de Talentos</h3>
              <p>
                Na RH Grandes Talentos, compreendemos os desafios enfrentados
                pelas empresas na busca por candidatos qualificados de forma
                ágil. Especializamo-nos em oferecer serviços de recrutamento
                terceirizados para empresas, agilizando o processo de busca por
                talentos de alto nível na área desejada. Ao firmar parceria
                conosco, você pode agilizar o processo de contratação e receber
                candidatos pré-selecionados para entrevistas em menos de uma
                semana. Deixe-nos mostrar como nossos serviços podem beneficiar
                sua empresa.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={juniortosenior}></img>
            <div className="content">
              <h3>Um Diversificado Conjunto de Talentos em Todos os Níveis</h3>
              <p>
                Nos orgulhamos de ter acesso a uma ampla gama de candidatos em
                todos os níveis profissionais. Seja para estagiários,
                profissionais em início de carreira ou experientes, temos os
                talentos certos para você. Nossa extensa rede e abrangente banco
                de dados nos permitem combinar suas necessidades específicas com
                candidatos qualificados de forma eficiente. Poupe tempo e
                esforço nos confiando a tarefa de encontrar o ajuste perfeito
                para a sua organização.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={rhintegracao}></img>
            <div className="content">
              <h3>Integração Perfeita com o Departamento de RH</h3>
              <p>
                Nossa missão na RH Grandes Talentos é simplificar os processos
                de RH da sua empresa. Ao trabalhar conosco, você pode se
                concentrar no que realmente importa: entrevistar candidatos de
                alto nível. Cuidamos da triagem inicial, avaliação de
                habilidades e verificações de antecedentes, apresentando-lhe uma
                seleção cuidadosamente curada de candidatos. Essa abordagem
                colaborativa garante uma integração perfeita com o seu
                departamento de RH, permitindo que você tome decisões de
                contratação informadas de forma rápida.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={brazil}></img>
            <div className="content">
              <h3>Parcerias em Todo o Brasil</h3>
              <p>
                Como uma empresa que valoriza relacionamentos sólidos, a RH
                Grandes Talentos cultivou parcerias com várias empresas em todo
                o Brasil. Nossa extensa rede de clientes e candidatos nos
                permite acessar talentos de diversas regiões e setores. Nos
                orgulhamos de nossa experiência local, compreendendo as demandas
                únicas do mercado de trabalho brasileiro e adaptando nossos
                serviços de acordo. Não importa onde você esteja localizado,
                nossas parcerias nacionais garantem que você tenha acesso aos
                melhores candidatos.
              </p>
            </div>
          </div>
        </div>
        <Contact/>
      </CandidatesContainer>
      <Footer />
<Whatsapp/>
    </>
  );
}

export default Companies;
