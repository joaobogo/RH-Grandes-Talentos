import styled from "styled-components";

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: #ec1c7b;
  }

  h2 {
    font-size: 18px;
    text-align: justify;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 5%;
  }

  h3 {
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3:hover {
    cursor: pointer;
  }

  .card {
    border: solid #ec1c7b;
    border-radius: 10px;
    background-color: #ec1c7b;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2%;
  }

  .titlecard {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    width: 100%;
    height: 50px;
  }

  p {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    color: white;
    text-align: justify;
  }
`;

export default FaqContainer;
