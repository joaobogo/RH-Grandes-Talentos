import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;

  video {
    display:flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -80;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: -50;
  }

  h1 {
    font-size: 44px;
    text-align: center;
  }

  p {
    width: 80%;
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 768px) {


    h1 {
    font-size: 40px;
  }

    p {
      text-align: justify;
      font-size: 20px;
    }
  }

  @media (max-width: 360px) {

    h1 {
    font-size: 30px;
    padding-left: 5%;
    padding-right: 5%;
  }

    p {
      text-align: justify;
      font-size: 16px;
    }
  }
}
`;

export default HeroContainer;
