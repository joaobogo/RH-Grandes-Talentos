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

function Diferenciais() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <DiferenciaisContainer data-aos="fade-in">
      <h2>Nossos Diferenciais</h2>

      <div className="desktop">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          speed={1200}
        >
          <SwiperSlide className="cards">
            <div className="card">
              <h3>Agilidade</h3>
              <p>
                Nós somos orgulhosos da nossa capacidade de apresentar
                rapidamente 4 candidatos altamente qualificados à empresa
                contratante em um prazo médio de 5 dias. Esse processo acelerado
                garante que nossos clientes tenham acesso imediato aos melhores
                talentos, economizando um tempo valioso em seus esforços de
                recrutamento.
              </p>
            </div>

            <div className="card">
              <h3>Confiança</h3>
              <p>
                Com um histórico comprovado de inúmeras colocações e parcerias
                bem-sucedidas com mais de 30 empresas, nossa experiência e
                extensa rede solidificam nossa posição como um parceiro de RH
                confiável. Ao escolher a nossa empresa, os clientes têm acesso a
                benefícios incomparáveis, processos simplificados e uma equipe
                dedicada e comprometida em entregar resultados excepcionais na
                área de recursos humanos.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cards">
            <div className="card">
              <h3>Cobrança</h3>
              <p>
                Nossa estrutura de pagamento reflete nosso compromisso com a
                satisfação do cliente. Acreditamos no princípio do pagamento por
                resultados, o que significa que nossos clientes só precisam nos
                pagar após a colocação bem-sucedida do candidato. Essa abordagem
                não apenas mostra nossa confiança em nossa seleção de
                candidatos, mas também fornece aos nossos clientes uma
                experiência sem riscos e resultados tangíveis antes de se
                comprometer financeiramente.
              </p>
            </div>

            <div className="card">
              <h3>Mediação</h3>
              <p>
                Desenvolvemos planos customizados para cada candidato,
                considerando suas necessidades e aspirações específicas. Nosso
                envolvimento vai além do fornecimento de candidatos, pois nos
                envolvemos ativamente em negociações sobre salários, datas de
                início e benefícios para garantir que nossos candidatos recebam
                as melhores ofertas possíveis. Facilitando um acordo mutuamente
                benéficos, promovemos relações de trabalho duradouras que
                beneficiam tanto nossos clientes quanto os candidatos que
                representamos.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mobile">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          speed={1200}
        >
          <SwiperSlide className="cards">
            <div className="card">
              <h3>Agilidade</h3>
              <p>
                Nós somos orgulhosos da nossa capacidade de apresentar
                rapidamente 4 candidatos altamente qualificados à empresa
                contratante em um prazo médio de 5 dias. Esse processo acelerado
                garante que nossos clientes tenham acesso imediato aos melhores
                talentos, economizando um tempo valioso em seus esforços de
                recrutamento.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cards">
            <div className="card">
              <h3>Confiança</h3>
              <p>
                Com um histórico comprovado de inúmeras colocações e parcerias
                bem-sucedidas com mais de 30 empresas, nossa experiência e
                extensa rede solidificam nossa posição como um parceiro de RH
                confiável. Ao escolher a nossa empresa, os clientes têm acesso a
                benefícios incomparáveis, processos simplificados e uma equipe
                dedicada e comprometida em entregar resultados excepcionais na
                área de recursos humanos.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cards">
            <div className="card">
              <h3>Cobrança</h3>
              <p>
                Nossa estrutura de pagamento reflete nosso compromisso com a
                satisfação do cliente. Acreditamos no princípio do pagamento por
                resultados, o que significa que nossos clientes só precisam nos
                pagar após a colocação bem-sucedida do candidato. Essa abordagem
                não apenas mostra nossa confiança em nossa seleção de
                candidatos, mas também fornece aos nossos clientes uma
                experiência sem riscos e resultados tangíveis antes de se
                comprometer financeiramente.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cards">
            <div className="card">
              <h3>Mediação</h3>
              <p>
                Desenvolvemos planos customizados para cada candidato,
                considerando suas necessidades e aspirações específicas. Nosso
                envolvimento vai além do fornecimento de candidatos, pois nos
                envolvemos ativamente em negociações sobre salários, datas de
                início e benefícios para garantir que nossos candidatos recebam
                as melhores ofertas possíveis. Facilitando um acordo mutuamente
                benéficos, promovemos relações de trabalho duradouras que
                beneficiam tanto nossos clientes quanto os candidatos que
                representamos.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </DiferenciaisContainer>
  );
}

export default Diferenciais;
