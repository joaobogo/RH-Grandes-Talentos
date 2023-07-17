import styled from "styled-components";

const DiferenciaisContainer = styled.div`
  h2 {
    color: #ec1c7b;
    text-align: center;
    font-size: 30px;
    margin-bottom: 10vh;
  }

  h3 {
    color: #ec1c7b;
    text-align: center;
    font-size: 24px;
    margin-bottom: -5%;
  }

  p {
    font-size: 15px;
    text-align: center;
    padding: 5%;
  }

  .cards {
    display: flex;
    justify-content: center;
    margin-top: 5%;
gap: 5vh;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    border: solid gray 1px;
    border-radius: 5px;
    -webkit-box-shadow: 1px 1px 20px 0px pink;
    -moz-box-shadow: 1px 1px 20px 0px pink;
    box-shadow: 1px 1px 20px 0px pink;
  }

  .circle {
    border: solid 2px #ec1c7b;
    border-radius: 50%;
    width: 80px;
    height: 70px;
    margin-bottom: -5%;
    margin-top: -13%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    overflow: hidden;
  }

img{
  width: 100%;
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
