import styled from "styled-components";

const CandidatesContainer = styled.div`
  h1 {
    text-align: center;
    color: #ec1c7b;
  }

  h4 {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: justify;
  }

  h3 {
    color: #ec1c7b;
  }

  .main {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 5%;
  }

  img {
    width: 15%;
  }

  p {
    text-align: justify;
  }

  @media screen and (max-width: 780px) {
    h1 {
      margin-left: 2%;
      margin-right: 2%;
    }

    .card {
      flex-direction: column;
    }

    h3 {
      text-align: center;
    }


    img{
      width: 40%;
      margin-top: 5%;
    }
  }
`;

export default CandidatesContainer;
