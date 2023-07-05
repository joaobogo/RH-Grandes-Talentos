import styled from "styled-components";

const JobsContainer = styled.div`
margin-bottom: 10vh;


input{
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 5px;
  border: solid 1px gray;
  
}

  h1 {
    color: #ec1c7b;
    text-align: center;
    font-size: 40px;
  }


  @media (max-width: 768px) {

    input{
      width: 80%;
      margin-left: 10%;
  margin-right: 10%;
    }
}
`;

export default JobsContainer;
