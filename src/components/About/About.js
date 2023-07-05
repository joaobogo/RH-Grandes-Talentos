import React, { useEffect } from "react";
import AboutContainer from "./AboutStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <AboutContainer>
      <h2>Quem somos nós?</h2>
      <div className="about" data-aos="fade-in">
        <p>
          Somos Especialistas em recolacação profissional e consultoria e
          recrutamento para empresas. Desde 2012, descobrimos grandes talentos e
          inserimos profissionais de sucesso no mercado de trabalho. Muito mais
          que nossa missão, temos como principal objetivo realizar sonhos,
          assessorando todo o processo de recrutamento, seleção e recolocação de
          profissionais. Trabalhamos com ações e processos atitudinais para
          superar as expectativas dos nossos clientes, alcançando resultados de
          forma rápida, estruturada e eficiente.
        </p>
      </div>

      {/* <div className="diferenciais">
        <div className="cards">
          <div className="card">
            <h3>Agilidade</h3>
            <p>
              Nós somos orgulhosos da nossa capacidade de apresentar rapidamente
              4 candidatos altamente qualificados à empresa contratante em um
              prazo médio de 5 dias. Esse processo acelerado garante que nossos
              clientes tenham acesso imediato aos melhores talentos,
              economizando um tempo valioso em seus esforços de recrutamento.
            </p>
          </div>

          <div className="card">
            <h3>Confiança</h3>
            <p>
              Com um histórico comprovado de inúmeras colocações e parcerias
              bem-sucedidas com mais de 30 empresas, nossa experiência e extensa
              rede solidificam nossa posição como um parceiro de RH confiável.
              Ao escolher a nossa empresa, os clientes têm acesso a benefícios
              incomparáveis, processos simplificados e uma equipe dedicada e
              comprometida em entregar resultados excepcionais na área de
              recursos humanos.
            </p>
          </div>

          <div className="card">
            <h3>Cobrança</h3>
            <p>
              Nossa estrutura de pagamento reflete nosso compromisso com a
              satisfação do cliente. Acreditamos no princípio do pagamento por
              resultados, o que significa que nossos clientes só precisam nos
              pagar após a colocação bem-sucedida do candidato. Essa abordagem
              não apenas mostra nossa confiança em nossa seleção de candidatos,
              mas também fornece aos nossos clientes uma experiência sem riscos
              e resultados tangíveis antes de se comprometer financeiramente.
            </p>
          </div>

          <div className="card">
            <h3>Mediação</h3>
            <p>
              Desenvolvemos planos customizados para cada candidato,
              considerando suas necessidades e aspirações específicas. Nosso
              envolvimento vai além do fornecimento de candidatos, pois nos
              envolvemos ativamente em negociações sobre salários, datas de
              início e benefícios para garantir que nossos candidatos recebam as
              melhores ofertas possíveis. Facilitando um acordo mutuamente
              benéficos, promovemos relações de trabalho duradouras que
              beneficiam tanto nossos clientes quanto os candidatos que
              representamos.
            </p>
          </div>

          
        </div>
      </div> */}
    </AboutContainer>
  );
}

export default About;
