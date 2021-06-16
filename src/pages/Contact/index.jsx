import React, { useState } from 'react';
import { ContactContainer, ContactIntro, ContactWrapper, Intro, ContactLabel, ContactTitle, ContactP, ContactInfo, Info, ContactForm, ContactInput, ContactMessage, ContactSubmit } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

function Contact(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
    <>  
      <ContactIntro id='contact'>
        <Intro>
          <ContactTitle>Contato</ContactTitle>
          <ContactP>Fale conosco, peça um orçamento e solicite uma proposta.</ContactP>
        </Intro>
      </ContactIntro>

      <ContactContainer >
        <ContactForm> 
          <ContactInput type='text' name='name' placeholder='Nome' maxlenght='50' minlenght='3'onChange={handleNameChange} value={nome} required/>
          <ContactInput type='text' name='email' placeholder='Email' maxlenght='50' onChange={handleEmailChange} value={email} required />
          <ContactInput type='text' name='subject' placeholder='Assunto' onChange={handleSubjectChange} value={subject} required/>
          <ContactMessage type='text' name='message' placeholder='Mensagem' maxlenght='350' onChange={handleMessageChange} value={message} required/>
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
        </ContactWrapper>
      </ContactContainer>
      <Footer />
    </>
  );
}

export default Contact;