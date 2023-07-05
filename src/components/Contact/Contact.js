import React, { useState, useEffect } from "react";
import ContactContainer from "./Contact.styles";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";


function Contact() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);


  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const from_name = contact.name;
    const message = contact.message;
    const subject = contact.subject;
    const reply_to = contact.email;

    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_q75mzv7",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { from_name, message, reply_to, subject },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <ContactContainer id="contact" data-aos="fade-in">
      <h2 >Fale Conosco</h2>
      
      <p className="subtitle" >Entre em contato para que possamos ajudar você</p>
      
      <div  className="main">
        <div className="left">
          <div className="icons">
            <FaHome className="icones" /> <p>São Paulo, SP</p>
          </div>
          <div className="icons">
            <FaPhone className="icones"/> <p>(11) 99126-0399</p>
          </div>
          <div className="icons">
            <FaMailBulk className="icones"/> <p>rhgrandestalentos@gmail.com</p>
          </div>
          <div className="quickicons">
            <a href="https://www.linkedin.com/company/rh-grandes-talentos/"><FaLinkedin className="icones2"/></a>
            <a href="https://www.instagram.com/rhgrandestalentos/"><FaInstagram className="icones2"/></a>
            <a href="https://www.facebook.com/people/Rh-Grandes-Talentos/100064795506313/"><FaFacebook className="icones2"/></a>
            <a href="https://web.whatsapp.com/send?phone=5511991260399&text=Ol%C3%A1,%20Tenho%20interesse%20nos%20servi%C3%A7os%20da%20RH%20Grandes%20Talentos,%20pode%20me%20ajudar?"><FaWhatsapp className="icones2"/></a>
          </div>
        </div>

        <div className="right">
          <form>
            <label>Nome:</label>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="text"
            ></input>
            <label>Email:</label>
            <input
              onChange={handleChange}
              name="email"
              value={contact.email}
              type="email"
            ></input>
            <label>Assunto:</label>
            <input
              onChange={handleChange}
              name="subject"
              value={contact.subject}
              type="text"
            ></input>
            <label>Mensagem:</label>
            <textarea
              onChange={handleChange}
              name="message"
              value={contact.message}
              rows="6"
            />
            <button onClick={handleClick} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;