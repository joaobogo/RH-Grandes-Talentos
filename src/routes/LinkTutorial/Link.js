import React from "react";
import LinkContainer from "./Link.styles";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import link1 from "../../assets/link1.png";
import link2 from "../../assets/link2.png";
import link3 from "../../assets/link3.png";

function Link() {
  return (
    <>
      <Header />
      <LinkContainer>
        <h1>Como criar link para o seu currículo usando Google Drive?</h1>

        <div className="card">
          <p>
            Aqui está uma explicação de como criar um link de URL para um
            documento PDF com o Google Drive.
          </p>
          <p>
            <strong>1º Etapa.</strong> Abra o Google Drive em seu navegador e
            faça login com sua conta, se necessário. Acesse o arquivo que
            precisa ser compartilhado. Toque no botão "Compartilhar" depois de
            selecionar o documento PDF.
          </p>
          <img src={link1}></img>
        </div>
        <div className="card">
          <p>
            <strong>Etapa 2.</strong>Primeiro, você deve alterar a opção
            "Restrito" para "Qualquer pessoa". Depois disso, toque na opção que
            exibe “Copiar link” e selecione “Concluído”.
          </p>
          <img src={link2}></img>
        </div>
        <div className="card">
          <p>
            <strong>Etapa 3.</strong>Agora você pode compartilhar
            facilmente o link PDF modificado do documento. Qualquer usuário que
            abrir o link compartilhado baixa facilmente o documento PDF em seu
            dispositivo.
          </p>
          <img src={link3}></img>
        </div>
      </LinkContainer>
      <Footer />
    </>
  );
}

export default Link;
