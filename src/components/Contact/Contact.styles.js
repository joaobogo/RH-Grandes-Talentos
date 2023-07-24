import styled from "styled-components";

const ContactContainer = styled.div`
  border-top: 1px solid lightyellow;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    color: #ec1c7b;
    text-align: center;
  }

  .subtitle {
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    font-size: 24px;
  }
  .main {
    display: flex;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icones {
    color: #ec1c7b;
  }

  .icones2 {
    color: #ec1c7b;
    width: 20px;
    height: 20px;
  }

  .btn {
    margin-top: 5vh;
    text-align: center;
    text-decoration: none;
    color: black;
    border: solid #ec1c7b 1px;
    border-radius: 20px;
    background-color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
    box-shadow: 0 0 10px pink;
  }

  .btn:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.6);
  }

  .left {
    margin-top: -20vh;
    margin-left: 20vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40vw;
  }

  .right {
    width: 40vw;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }

  label {
    font-size: 16px;
    text-align: left;
    width: 35vw;
    font-weight: bold;
  }

  input {
    height: 4vh;
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid #ec1c7b 1px;
    box-shadow: 0 0 10px pink;
  }

  textarea {
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
    border: solid #ec1c7b 1px;
    box-shadow: 0 0 10px pink;
  }

  h2 {
    margin-top: 5vh;
    font-size: 40px;
    text-align: center;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .quickicons {
    display: flex;
    gap: 15px;
  }

  a:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 780px) {
    .main {
      flex-direction: column;
    }

    .left {
      margin-top: 0;
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 90vw;
    }

    .right {
      width: 90vw;
    }

    label {
      width: 100%;
    }

    input {
      width: 100%;
      height: 4vh;
    }

    textarea {
      width: 100%;
    }

    .btn {
      width: 40vw;
    }
  }

  @media screen and (max-width: 380px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default ContactContainer;
