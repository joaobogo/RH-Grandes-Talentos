import styled from "styled-components";

const JobsDetailContainer = styled.div`
  h1 {
    font-size: 44px;
    text-align: center;
  }

  .subtitle {
    font-size: 30px;
    text-align: center;
    border-bottom: 1px solid grey;
    width: 60%;
    margin-right: 20%;
    margin-left: 20%;
  }

  .main {
    width: 60%;
    text-align: justify;
    margin-right: 20%;
    margin-left: 20%;
    margin-bottom: 10vh;
  }

  h3 {
    color: #ec1c7b;
    font-size: 24px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 50%;
    font-size: 22px;
    font-weight: bolder;
    color: white;
    background-color: #ec1c7b;
    border-radius: 5px;
    margin-top: 5vh;
    text-decoration: none;
  }

  .buttonctn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  a:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 768px) {

    .main{
      width: 90%;
   margin-left: 5%;
   margin-right: 5%;
    }

.subtitle{
  width: 80%;
  margin-right: 10%;
    margin-left: 10%;
}
  a{
    width: 80%;
  }
}
`;

export default JobsDetailContainer;
