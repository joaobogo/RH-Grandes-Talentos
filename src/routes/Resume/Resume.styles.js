import styled from "styled-components";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 0;
  }

  h3 {
    text-align: center;
    color: rgb(236, 28, 123);
    font-size: 24px;
  }

  .main {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .row {
    display: flex;
    justify-content: space-evenly;
    gap: 10%;
    width: 80%;
  }

  .collumn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    border: solid gray 2px;
  }

  .collumncurriculo {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
    margin-bottom: 15px;
  }

  label {
    font-weight: bolder;
  }

  .collumncurriculo input {
    text-align: center;
  }

  .formbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    width: 20%;
    font-size: 16px;
    color: white;
    background-color: #ec1c7b;
    border-radius: 10px;
  }

  .formbtn:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 768px) {

    .row{
      flex-direction: column;
      width: 95%;
    }

    .collumncurriculo{
      width: 95%;
    }

    .formbtn{
      width: 60%;
    }

    h1{
      font-size: 28px;
      padding-left: 5%;
      padding-right: 5%;
    }

    h2{
      font-size: 22px;
    }
  }
`;

export default ResumeContainer;
