import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  .hamburger {
    display: none;
  }

  .slidingmenuoff {
    display: none;
  }

  .logo {
    margin-left: -4%;

  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    .desktopa {
      display: none;
    }

    .hamburger {
      display: flex;
      width: 3vw;
      height: 2vh;
      padding: 0;
      margin: 0;
    }

    .logo {
      width: 35vw;
      height: 8vh;
      margin-right: 50%;
      margin-left: -5%;
      padding: 0;
    }

    .slidingmenuon {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 200px;
      padding-top: 20px;
      background-color: rgb(236, 28, 123, 0.9);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 55%;
      z-index: 100;
      transition: 1s;
     
    }

    .closemenu {
      margin-left: 75%;
      font-size: 18px;
      border: none;
      background: none;
      font-weight: bolder;
      color: white;
    }

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 30%;
      gap: 5%;
    
    }

    .links {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15%;
      background-color: white;
      border-radius: 5px;
    }

   .icons{
    display: flex;
    justify-content: center;
    gap: 10px;
   }

   .icones2{
    color: white;

   }

  }


  @media (max-width: 768px) {
.logo{
  width: 40vw;
  margin-right: 40%;
}
  }

  @media (max-width: 370px) {

    .logo{
  width: 35vw;
  margin-right: 40%;
}

  }

`;

export default HeaderContainer;
