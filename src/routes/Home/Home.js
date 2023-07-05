import React from "react";
import Header from "../../components/Header/Header";
import HomeContainer from "./HomeStyles";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Partners from "../../components/Partners/Partners";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Diferenciais from "../../components/Diferenciais/Diferenciais";


function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero/>
      <About/>
      <Diferenciais/>
      <Partners/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </HomeContainer>
  );
}

export default Home;
