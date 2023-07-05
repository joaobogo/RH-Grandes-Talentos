import React, {useEffect} from "react";
import PartnersContainer from "./Partners.styles";
import adt from "../../assets/adtmonitoramentos.png";
import kmc from "../../assets/agenciakmc.png";
import pomar from "../../assets/agenciapomar.png";
import brasildental from "../../assets/brasildental.png";
import huntigton from "../../assets/huntigtonmedicina.png";
import intt from "../../assets/inttcosmeticos.png";
import lupeon from "../../assets/lupeon.png";
import misterliber from "../../assets/misterliber.png";
import nataliabeauty from "../../assets/nataliabeauty1.png";
import progood from "../../assets/progoodssaude.png";
import redemais from "../../assets/redemais saude.png";
import redetotal from "../../assets/redetotal.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Partners() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <PartnersContainer id="partners" data-aos="fade-in">
      <h2>Nossos Principais Parceiros</h2>

      <div className="list">
        <div className="card">
          <img src={kmc}></img>
          <p>Agência KMC</p>
        </div>

        <div className="card">
          <img src={adt}></img>
          <p>ADT Monitoramentos</p>
        </div>

        <div className="card">
          <img src={pomar}></img>
          <p>Agência Pomar</p>
        </div>

        <div className="card">
          <img src={misterliber}></img>
          <p>Mister Liber</p>
        </div>

        <div className="card">
          <img src={huntigton}></img>
          <p>Huntington Medicina</p>
        </div>

        <div className="card">
          <img src={brasildental}></img>
          <p>Brasil Dental</p>
        </div>

        <div className="card">
          <img src={intt}></img>
          <p>INTT Cosméticos</p>
        </div>

        <div className="card">
          <img src={lupeon}></img>
          <p>Lupeon</p>
        </div>

        <div className="card">
          <img src={nataliabeauty}></img>
          <p>Natalia Beauty</p>
        </div>

        <div className="card">
          <img src={progood}></img>
          <p>Pro Good Saúde</p>
        </div>

        <div className="card">
          <img src={redemais}></img>
          <p>Rede Mais</p>
        </div>

        <div className="card">
          <img src={redetotal}></img>
          <p>Rede Total</p>
        </div>

      </div>
    </PartnersContainer>
  );
}

export default Partners;
