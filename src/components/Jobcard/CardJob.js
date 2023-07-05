import React from "react";
import CardContainer from "./CardJob.styles";
import { Link } from "react-router-dom";

function CardJob({ oportunidade }) {
  
  
  return (
    <CardContainer>

      <div className="left">

        <Link to={`oportunidade/${oportunidade._id}`}>
          <p className="position">
            {oportunidade.posicao} - {oportunidade.tipotrabalho}
          </p>
        </Link>
        
      </div>

      <div className="right">
        <p>
          {oportunidade.cidade} - {oportunidade.estado}
        </p>
      </div>
    </CardContainer>
  );
}

export default CardJob;
