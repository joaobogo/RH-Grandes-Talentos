import React from "react";
import Header from "../../components/Header/Header";
import CandidatesContainer from "./Candidates.styles";
import cv from "../../assets/cv.png";
import linked from "../../assets/linked.png";
import interview from "../../assets/interview.png";
import network from "../../assets/network.png";
import talk from "../../assets/talk.png";
import money from "../../assets/pay.png";
import Footer from "../../components/Footer/Footer";

function Candidates() {
  return (
    <>
      <Header />
      <CandidatesContainer>
        <h1>Quer fazer um upgrade na sua carreira?</h1>
        <h4>
          Na RH Grandes Talentos, nós somos dedicados a fornecer serviços
          abrangentes aos nossos clientes, garantindo o sucesso em todo o
          processo de busca por emprego. Nosso objetivo é garantir as melhores
          oportunidades de emprego possíveis para você no mercado altamente
          competitivo atual. Para alcançar esse objetivo, oferecemos uma
          variedade de serviços personalizados de acordo com suas necessidades.
        </h4>

        <div className="main">
          <div className="card">
            <img src={cv}></img>
            <div className="content">
              <h3>Otimização de Currículo</h3>
              <p>
                Entendemos a importância de um currículo bem elaborado, que
                destaque efetivamente suas habilidades e experiências. Nossa
                equipe de especialistas aperfeiçoa meticulosamente seu
                currículo, garantindo que cada detalhe esteja perfeito. Além
                disso, se você estiver se candidatando a empresas
                internacionais, fornecemos uma versão em inglês do seu
                currículo, aumentando suas chances de sucesso no mercado de
                trabalho global.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={linked}></img>
            <div className="content">
              <h3>Aprimoramento do Perfil do LinkedIn</h3>
              <p>
                Na era digital de hoje, uma presença online sólida é crucial.
                Nossos profissionais são especializados em reconstruir e
                otimizar seu perfil do LinkedIn. Utilizando as melhores
                palavras-chave e estratégias comprovadas, tornamos seu perfil
                destacado para recrutadores. Com um perfil atrativo, você
                aumenta sua visibilidade e atrai mais oportunidades relevantes.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={interview}></img>
            <div className="content">
              <h3>Preparação para Entrevistas</h3>
              <p>
                Acreditamos que a preparação é a chave para o sucesso nas
                entrevistas. Nossa equipe experiente oferece sessões de prática
                de entrevistas personalizadas, equipando você com as habilidades
                necessárias para lidar com confiança com qualquer pergunta que
                surgir. Ao simular cenários de entrevistas reais, ajudamos você
                a aprimorar suas respostas, melhorar suas habilidades de
                comunicação e aumentar seu desempenho geral em entrevistas.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={network}></img>
            <div className="content">
              <h3>Extensa Rede de Contatos e Histórico de Sucesso</h3>
              <p>
                Com um histórico sólido de colocações bem-sucedidas e parcerias
                com mais de 30 empresas, construímos uma extensa rede de
                contatos na indústria de recursos humanos. Nossa experiência e
                conexões nos permitem oferecer oportunidades incomparáveis aos
                nossos clientes. Ao escolher-nos como seu parceiro em recursos
                humanos, você ganha acesso à nossa vasta rede e se beneficia de
                processos eficientes e uma equipe dedicada comprometida em
                oferecer resultados excepcionais.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={talk}></img>
            <div className="content">
              <h3>Planos Personalizados e Negociações Salariais</h3>
              <p>
                Cada candidato é único, e reconhecemos a importância de adaptar
                nossos serviços às necessidades e aspirações individuais.
                Desenvolvemos planos personalizados para cada cliente, levando
                em consideração seus requisitos específicos. Além disso,
                participamos ativamente de negociações salariais, discussões
                sobre data de início e negociações de benefícios em nome de
                nossos clientes. Nosso objetivo é garantir as melhores ofertas
                possíveis, promovendo relacionamentos de trabalho duradouros e
                mutuamente benéficos.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={money}></img>
            <div className="content">
              <h3>Abordagem de Pagamento por Resultados</h3>
              <p>
                Acreditamos firmemente no princípio de pagar pelos resultados
                obtidos. Ao contrário dos modelos tradicionais, só exigimos o
                pagamento após a colocação bem-sucedida de um candidato. Essa
                abordagem única demonstra nossa confiança em nosso processo de
                seleção de candidatos e oferece aos nossos clientes uma
                experiência sem riscos. Ao fazer parceria conosco, você pode ter
                a certeza de que verá resultados tangíveis antes de se
                comprometer financeiramente.
              </p>
            </div>
          </div>
        </div>

       <Footer></Footer>
      </CandidatesContainer>
    </>
  );
}

export default Candidates;
