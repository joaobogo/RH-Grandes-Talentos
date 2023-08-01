import styled from "styled-components";

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: #ec1c7b;
    font-size: 30px;
    margin-bottom: 10vh;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    padding: -10%;
    margin: -10%;
    width: 80%;
  }

  p {
    margin-bottom: 10vh;
    font-weight: bolder;
    text-align: center;
    color: #535454;
  }

  @media (max-width: 768px) {

.card{
  width: 30vw;
}

p{
  font-size: 12px;
}

h2{
  margin-bottom: 5vh;
  margin-left: 4%;
  margin-right: 4%;
}
  }
`;

export default PartnersContainer;
