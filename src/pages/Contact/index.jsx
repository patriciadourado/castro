import React, { useState } from 'react';
import { ContactContainer, ContactForm, ContactInput, ContactMessage, ContactSubmit, ContactIntro, ContactWrapper, Intro, ContactLabel, ContactTitle, ContactP, ContactInfo, Info } from './styles';
import Footer from '../../components/Footer'
import { FooterRow, FooterSocial, FooterItem } from "../../components/Footer/styles.js";
import LinkCastro from "../../components/LinkCastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

function Contact(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  function validMail(){
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const result = pattern.test(email);
    
    return result;
  }

  function sentMail(e){

    if(!nome){
      alert('Forneça um nome!');  
    }
    else
    if(!email){
      alert('Forneça um endereço de E-mail!');
    }
    else
    if(!validMail()){
      alert('Forneça um endereço valido de e-mail!');
    }
    else
    if(!subject){
      alert('Forneça um Assunto a sua Mensagem!');
    }
    else
    if(!message){
      alert('Forneça uma Mensagem!');
    }
    
    if(message && email && validMail() && subject && nome){
      alert('Email Enviado com Sucesso!');
      // setNome('');
      // setEmail('');
      // setSubject('');
      // setMessage('');
    }
    else
      e.preventDefault();
  }

  const handleNameChange = (e) => {
    setNome(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return(
    <div id='contact'>  
      <ContactIntro>
        <Intro>
          <ContactTitle>Contato</ContactTitle>
          <ContactP>Fale conosco, peça um orçamento e solicite uma proposta.</ContactP>
        </Intro>
      </ContactIntro>

      <ContactContainer >
        <ContactForm action="https://api.staticforms.xyz/submit" method='post' onSubmit={sentMail} > 
          <input type='hidden' name='accessKey' value={API_KEY}/>
          <ContactInput type='text' name='name' placeholder='Nome' maxlenght='50' minlenght='3'onChange={handleNameChange} value={nome} required/>
          <ContactInput type='text' name='email' placeholder='Email' maxlenght='50' onChange={handleEmailChange} value={email} required />
          <ContactInput type='text' name='subject' placeholder='Assunto' onChange={handleSubjectChange} value={subject} required/>
          <ContactMessage type='text' name='message' placeholder='Mensagem' maxlenght='350' onChange={handleMessageChange} value={message} required/>
          <input type='hidden' name='redirectTo' value='https://jcastro.adv.br' />
          <ContactSubmit type='submit'>
            <FontAwesomeIcon className='fas fa-paper-plane fa-lg' icon={faPaperPlane}/> Enviar
          </ContactSubmit>
        </ContactForm>

        <ContactWrapper>
          <ContactInfo>
            <Info>
              <FontAwesomeIcon className='fas fa-map' icon={faMapMarker}/>
              <ContactLabel>Onde nos encontrar</ContactLabel>
              <ContactP>Irecê e Região, Bahia</ContactP>
            </Info>
            <Info>
              <FontAwesomeIcon className='fas fa-envelope' icon={faEnvelope}/>
              <ContactLabel>Nosso Email</ContactLabel>
              <ContactP>jaheb@jcastro.adv.br</ContactP>
            </Info>
            <Info>
              <FontAwesomeIcon className='fas fa-phone' icon={faPhone}/>
              <ContactLabel>Nosso Telefone</ContactLabel>
              <ContactP>(+55) 71 99910-7423</ContactP>
            </Info>
          </ContactInfo>
          <FooterRow>
            <FooterSocial>
              <FooterItem>
                <LinkCastro
                  href="https://jcastro.adv.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-facebook' icon={faFacebook}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://instagram.com/jcastroconsultoriaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-instagram' icon={faInstagram}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://whats.link/7199107423"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-whatsapp' icon={faWhatsapp}/>
                </LinkCastro>
              </FooterItem>
            </FooterSocial>
          </FooterRow>
        </ContactWrapper>
      </ContactContainer>
      <Footer />
    </div>
  );
}

export default Contact;