import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FaqContainer from "./Faq.styles";

function Faq() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  return (
    <>
      <Header />
      <FaqContainer>
        <h1>Perguntas Frequentes</h1>
        <h2>
          Bem-vindo à nossa página de Perguntas Frequentes! Aqui você
          encontrará informações valiosas sobre nossas soluções completas de RH.
          Na RH Grandes Talentos, nossa equipe experiente está pronta para
          ajudar sua empresa a crescer. Desde recrutamento até desenvolvimento
          de funcionários, estamos aqui para impulsionar o sucesso do seu
          negócio. Se tiver dúvidas, entre em contato com nossa equipe - estamos
          aqui para ajudar!
        </h2>

        <div className="card">
          <div className="titlecard">
            <h3 onClick={() => setIsClicked(!isClicked)}>
              Quem é o HeadHunter?
            </h3>
          </div>
          {isClicked ? (
            <p>
              Em um mercado de trabalho cada vez mais competitivo, encontrar os
              melhores profissionais para a sua empresa pode ser um desafio. É
              nesse contexto que entra em cena o Headhunter da RH Grandes
              Talentos, um especialista dedicado a auxiliá-lo nesse processo. O
              Headhunter é um profissional experiente e altamente qualificado,
              com uma extensa rede de contatos e profundo conhecimento do
              mercado. Sua principal missão é identificar, atrair e recrutar
              talentos excepcionais que se alinhem perfeitamente com as
              necessidades e valores da sua empresa. Com as habilidades de um
              Headhunter à disposição, você pode contar com um processo seletivo
              mais eficiente e bem-sucedido, garantindo a contratação dos
              melhores candidatos para impulsionar o crescimento e o sucesso do
              seu negócio.
            </p>
          ) : null}
        </div>

        <div className="card">
          <div className="titlecard">
            <h3 onClick={() => setIsClicked2(!isClicked2)}>
              O que faz o HeadHunter?
            </h3>
          </div>
          {isClicked2 ? (
            <p>
              O headhunter é um profissional com características primordiais que
              desempenha um papel fundamental no desenvolvimento de um trabalho
              de excelência no dia a dia. Sua principal responsabilidade é
              identificar e selecionar os melhores colaboradores para atender às
              necessidades específicas de sua empresa. Como especialista em
              recrutamento, o headhunter busca profissionais talentosos e
              altamente qualificados, alinhando suas habilidades e experiências
              com as demandas do mercado em que a empresa atua. Com uma extensa
              rede de contatos e conhecimento aprofundado do setor, o headhunter
              é capaz de identificar candidatos ideais, garantindo que sua
              empresa se destaque e alcance o sucesso. Sua atuação permite que
              as organizações economizem tempo e recursos preciosos, focando em
              outras atividades estratégicas, enquanto o headhunter cuida do
              processo seletivo, trazendo os melhores talentos para impulsionar
              o crescimento e a competitividade da empresa.
            </p>
          ) : null}
        </div>

        <div className="card">
          <div className="titlecard">
            <h3 onClick={() => setIsClicked3(!isClicked3)}>O que o RH faz?</h3>
          </div>
          {isClicked3 ? (
            <p>
              O profissional que atua na área de Recursos Humanos (RH)
              desempenha um papel fundamental no desenvolvimento de um trabalho
              de excelência no dia a dia. O RH tem a importante responsabilidade
              de selecionar os melhores colaboradores para a empresa,
              contribuindo diretamente para o seu destaque no mercado. Esse
              profissional realiza diversas atividades essenciais, como análise
              minuciosa de candidatos, busca por talentos qualificados, condução
              de entrevistas, organização de processos seletivos e finalização
              das contratações. Ao executar todas essas etapas com precisão e
              atenção, o RH garante que a empresa conte com uma equipe talentosa
              e alinhada aos objetivos organizacionais, impulsionando o
              crescimento e o sucesso do negócio.
            </p>
          ) : null}
        </div>
      </FaqContainer>
      <Footer />
    </>
  );
}

export default Faq;
