import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import JobsDetailContainer from "./JobsDetail.styles";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import { PortableText } from "@portabletext/react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function JobsDetail() {
  const { id } = useParams();
  const [oportunidade, setOportunidade] = useState(null);

  useEffect(() => {
    getById(id).then((oportunidade) => setOportunidade(oportunidade));
  }, []);

  return (
    <>
      <Header />
      <JobsDetailContainer>
        {oportunidade ? (
          <div>
            <h1>{oportunidade.posicao}</h1>
            <div className="subtitle">
              <p>
                {oportunidade.salario} {oportunidade.pjclt} -{" "}
                {oportunidade.cidade} - {oportunidade.estado}
              </p>
            </div>

            <div className="main">
              <PortableText value={oportunidade.descricao} />
              <h3>Requisitos</h3>
              <PortableText value={oportunidade.requisitos} />
              <h3>Benefícios</h3>
              <PortableText value={oportunidade.beneficios} />
              <div className="buttonctn">
                <Link to={`resume/${oportunidade._id}`}>Entre em Contato</Link>
              </div>
            </div>
          </div>
        ) : (
          <span> Carregando... </span>
        )}
      </JobsDetailContainer>
      <Footer/>
    </>
  );
}

const getById = async (id) => {
  const oportunidade = await client.getDocument(id);
  return oportunidade;
};

export default JobsDetail;
