import styled from "styled-components";

const ReviewContainer = styled.div`
  background-color: #ec1c7b;

  h2 {
    padding-top: 2%;
    font-size: 30px;
    color: white;
    text-align: center;
    margin: 0;
  }

  .review {
    color: white;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .mainp{
    text-align: justify;
  }
  .name .position {
    font-weight: 900;
  }

  .profile{
    display: flex; 
    gap: 15px;
  }

  img{
    width: 50px;
    border-radius: 50%;
    border: solid black;
  }
  @media (max-width: 768px) {

h2{
  margin-top: 10%;
}

p{
  font-size: 16px;
}

}
`;

export default ReviewContainer;
