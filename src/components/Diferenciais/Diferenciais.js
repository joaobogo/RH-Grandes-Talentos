import React, { useEffect } from "react";
import DiferenciaisContainer from "./Diferenciais.styles";
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
import speed from "../../assets/speed.png";
import trust from "../../assets/trust.png";
import pay from "../../assets/pay.png";
import talk from '../../assets/talk.png'


function Diferenciais() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <DiferenciaisContainer data-aos="fade-in">
      <div className="cards">
        <div className="card">
          <div className="circle">
            <img src={speed}></img>
          </div>
          <h3>Agilidade</h3>
          <div className>
            <p>
              Nós somos orgulhosos da nossa capacidade de apresentar rapidamente
              4 candidatos altamente qualificados à empresa contratante em um
              prazo médio de 5 dias. Esse processo acelerado garante que nossos
              clientes tenham acesso imediato aos melhores talentos,
              economizando um tempo valioso em seus esforços de recrutamento.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="circle">
            <img src={trust}></img>
          </div>
          <h3>Confiança</h3>
          <div className>
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
        </div>

        <div className="card">
          <div className="circle">
            <img src={pay}></img>
          </div>
          <h3>Cobrança</h3>
          <div className>
            <p>
              Acreditamos no princípio do pagamento por resultados, o que
              significa que nossos clientes só precisam nos pagar após a
              colocação bem-sucedida do candidato. Essa abordagem não apenas
              mostra nossa confiança em nossa seleção de candidatos, mas também
              fornece aos nossos clientes uma experiência sem riscos e
              resultados tangíveis antes de se comprometer financeiramente.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="circle">
            <img src={talk}></img>
          </div>
          <h3>Mediação</h3>
          <div className>
            <p>
              Desenvolvemos planos customizados para cada candidato,
              considerando suas necessidades e aspirações. Além de fornecer
              candidatos, também participamos ativamente de negociações
              salariais, datas de início e benefícios para garantir as melhores
              ofertas possíveis. Promovemos relações de trabalho duradouras e
              mutuamente benéficas para nossos clientes e candidatos
              representados.
            </p>
          </div>
        </div>
      </div>

      
    </DiferenciaisContainer>
  );
}

export default Diferenciais;
