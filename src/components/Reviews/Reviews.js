import React, {useEffect} from "react";
import ReviewContainer from "./Reviews.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Aos from "aos";
import "aos/dist/aos.css";

function Reviews() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);


  return (
    <ReviewContainer data-aos="fade-in">
      <h2>Opiniões dos nossos clientes</h2>
      <Swiper
        modules={[ Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        speed={1200}
      >
        <SwiperSlide>
          <div className="review">
            <p className="mainp">
              Todo o processo com a Ju, desde o primeiro contato até o dia do
              “sucesso”, como ela diz, foi surpreendente. Ela sempre querida,
              atenciosa, dedicada e boa ouvinte. Tem muito conhecimento da área
              e do que faz, além da sensibilidade ímpar, pega tudo nas
              “entrelinhas” durante os papos. Não consegui somente atingir meu
              objetivo e uma recolocação como eu queria… consegui a melhor das
              recolocações, muito além do que eu pedi e do que esperava. Sem
              dúvida indico a Ju para todos, é uma experiência especial e
              definitivamente um degrau importante na carreira.
            </p>
            <p className="name">Natália Monteiro</p>
            <p className="position">
              Digital Marketing | Content Production & Advertising | Product
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review">
            <p className="mainp">
              O primeiro atendimento da mentoria foi realmente um divisor de
              águas na maneira que eu me apresento. A RH Grandes Talentos me
              explicou exatamente os recrutadores precisam entender da minha
              carreira, me ajudando a extrair e estruturar essa informação.
              Depois das mentorias eu consegui enxergar o quanto eu contribui e
              realizei nas minhas posições anteriores, e o mais legal é que eu
              fiquei tão orgulhosa de mim mesma por tudo que eu já havia feito.
              Não foi apenas um “o que falar numa entrevista”. Ela me ajudou a
              criar um novo olhar sobre minha carreira me dando muito mais
              segurança e assertividade sobre quem eu sou profissionalmente.
            </p>
            <p className="name">Maria Gabriela Pires Gresta</p>
            <p className="position">Analista de Processos / Projetos</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review">
            <p className="mainp">
              Juliana ótima profissional, muito dedicada em pouco tempo
              conseguiu me recolocar no mercado dentro do valor desejado,
              começamos em janeiro praticamente e menos de 1 mês já estou
              trabalhando. Recomendo e terá retorno muito rápido! Parabéns pelo
              trabalho.
            </p>
            <p className="name">Rangel Prates dos Santos</p>
            <p className="position">Ecommerce | B2B | Desenvolvimento de Novos Parceiros</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="review">
            <p className="mainp">
              Eu tive uma experiência incrível com a RH Grandes Talentos como
              Desenvolvedor Full Stack. Seu profissionalismo e abordagem
              personalizada foram excelentes, fazendo-me sentir valorizado e
              confiante. Graças à sua extensa rede e conexões com o setor,
              consegui o emprego dos meus sonhos. Eu recomendo para qualquer
              pessoa que esteja em busca de oportunidades de carreira na
              indústria de tecnologia.
            </p>
            <p className="name">João Bogo</p>
            <p className="position">Desenvolvedor Fullstack (React.js, Node.js, SQL)</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </ReviewContainer>
  );
}

export default Reviews;
