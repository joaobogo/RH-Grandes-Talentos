import React, { useState, useEffect } from "react";
import ResumeContainer from "./Resume.styles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { client } from "../../client";
import axios from "axios";

function Resume() {
  const { id } = useParams();
  const [oportunidade, setOportunidade] = useState(null);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    birthday: "",
    salary: "",
    country: "",
    neighborhood: "",
    linkedin: "",
    position: "",
    state: "",
    cep: "",
    portfolio: "",
    experience: "",
    phone: "",
    city: "",
    address: "",
    cv: "",
  });

  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const from_name = contact.name;
    const reply_to = contact.email;
    const birthday = contact.birthday;
    const salary = contact.salary;
    const country = contact.country;
    const neighborhood = contact.neighborhood;
    const linkedin = contact.linkedin;
    const position = contact.position;
    const state = contact.state;
    const cep = contact.cep;
    const portfolio = contact.portfolio;
    const experience = contact.experience;
    const phone = contact.phone;
    const city = contact.city;
    const address = contact.address;
    const cv = contact.cv;

    const data = {
      service_id: "service_i9f8uqm",
      template_id: "template_5dydxql",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        from_name,
        reply_to,
        birthday,
        salary,
        country,
        neighborhood,
        linkedin,
        position,
        state,
        cep,
        portfolio,
        experience,
        phone,
        city,
        address,
        cv,
      },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({
      name: "",
      email: "",
      birthday: "",
      salary: "",
      country: "",
      neighborhood: "",
      linkedin: "",
      position: "",
      state: "",
      cep: "",
      portfolio: "",
      experience: "",
      phone: "",
      city: "",
      address: "",
      cv: "",
    });
  }

  useEffect(() => {
    getById(id).then((oportunidade) => setOportunidade(oportunidade));
  }, []);

  return (
    <>
      <Header />
      <ResumeContainer>
        {oportunidade ? (
          <>
            <h1>Processo de Candidatação para {oportunidade.posicao}</h1>
            <h2>
              {oportunidade.cidade} - {oportunidade.estado} -{" "}
              {oportunidade.tipotrabalho}
            </h2>

            <div className="main">
              <h3>Dados de Cadastro Para a Vaga</h3>
              <form>
                <div className="row">
                  <div className="collumn">
                    <label>Nome Completo *</label>
                    <input
                      onChange={handleChange}
                      name="name"
                      value={contact.name}
                      type="text"
                      required
                      placeholder="Nome Completo"
                    />
                  </div>
                  <div className="collumn">
                    <label>Cargo Pretendido *</label>
                    <input
                      value={contact.position}
                      onChange={handleChange}
                      name="position"
                      type="text"
                      required
                      placeholder="Cargo Prentendido"
                    />
                  </div>
                  <div className="collumn">
                    <label>Nível de Experiência *</label>
                    <input
                      value={contact.experience}
                      onChange={handleChange}
                      name="experience"
                      type="text"
                      required
                      placeholder="Estagiário, Trainee, Junior, Pleno, Senior"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="collumn">
                    <label>Data de Nascimento *</label>
                    <input
                      value={contact.birthday}
                      onChange={handleChange}
                      name="birthday"
                      type="text"
                      required
                      placeholder="01/01/1999"
                    />
                  </div>
                  <div className="collumn">
                    <label>Pretensão salarial *</label>
                    <input
                      value={contact.salary}
                      onChange={handleChange}
                      name="salary"
                      type="text"
                      required
                      placeholder="Salário Mensal em Real"
                    />
                  </div>
                  <div className="collumn">
                    <label>E-mail *</label>
                    <input
                      value={contact.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="collumn">
                    <label>Telefone *</label>
                    <input
                      value={contact.phone}
                      onChange={handleChange}
                      name="phone"
                      type="text"
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="collumn">
                    <label>País *</label>
                    <input
                      value={contact.country}
                      onChange={handleChange}
                      name="country"
                      type="text"
                      required
                    />
                  </div>
                  <div className="collumn">
                    <label>Estado *</label>
                    <input
                      value={contact.state}
                      onChange={handleChange}
                      name="state"
                      type="text"
                      required
                      placeholder="SP"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="collumn">
                    <label>Cidade *</label>
                    <input
                      value={contact.city}
                      onChange={handleChange}
                      name="city"
                      type="text"
                      required
                    />
                  </div>
                  <div className="collumn">
                    <label>Bairro*</label>
                    <input
                      value={contact.neighborhood}
                      onChange={handleChange}
                      name="neighborhood"
                      type="text"
                      required
                    />
                  </div>
                  <div className="collumn">
                    <label>CEP*</label>
                    <input
                      value={contact.cep}
                      onChange={handleChange}
                      name="cep"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="collumn">
                    <label>Endereço*</label>
                    <input
                      value={contact.address}
                      onChange={handleChange}
                      name="address"
                      type="text"
                      required
                    />
                  </div>
                  <div className="collumn">
                    <label>LinkedIn</label>
                    <input
                      value={contact.linkedin}
                      onChange={handleChange}
                      name="linkedin"
                      type="text"
                    />
                  </div>
                  <div className="collumn">
                    <label>Portifólio</label>
                    <input
                      value={contact.portfolio}
                      onChange={handleChange}
                      name="portfolio"
                      type="text"
                    />
                  </div>
                </div>

                <div className="collumncurriculo ">
                  <label>Currículo</label>
                  <input
                    value={contact.cv}
                    onChange={handleChange}
                    name="cv"
                    type="text"
                    placeholder="Compartilhe link para seu currículo (Google Drive)"
                  />
                  <a className="linktutorial" href="/linktutorial"> Como criar link? </a> 
                </div>
                <button
                  className="formbtn"
                  type="submit"
                  name="submit"
                  onClick={handleClick}
                >
                  Enviar
                </button>
              </form>
            </div>
          </>
        ) : (
          <span> Carregando... </span>
        )}
      </ResumeContainer>
      <Footer />
    </>
  );
}

const getById = async (id) => {
  const oportunidade = await client.getDocument(id);
  return oportunidade;
};

export default Resume;
