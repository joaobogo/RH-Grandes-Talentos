import styled from "styled-components";

const DiferenciaisContainer = styled.div`
  h2 {
    color: #ec1c7b;
    text-align: center;
    font-size: 30px;
  }

  h3 {
    color: #ec1c7b;
    text-align: center;
    font-size: 24px;
  }

  p {
    font-size: 15px;
    text-align: justify;
    margin-bottom: 5%;
    padding: 2%;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 5vw;
    margin-bottom: 5%;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    border: solid gray 1px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.75);
  }

  .mobile{
      display: none;
    }

  @media (max-width: 768px) {

    .desktop{
      display: none;
    }

    .mobile{
      display: flex;
      justify-content: center;
    }

    .card{
      width: 90vw;
    }

   p{
    font-size: 14px;
    padding: 4%;
   }
  }
`;

export default DiferenciaisContainer;
