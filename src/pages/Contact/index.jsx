import React from 'react';
import { ContactContainer, ContactIntro, ContactWrapper, Intro, ContactLabel, ContactTitle, ContactP, ContactInfo, Info } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

function Contact(){
  return(
    <>  
      <ContactIntro id='contact'>
        <Intro>
          <ContactTitle>Contato</ContactTitle>
          <ContactP>Fale conosco, peça um orçamento e solicite uma proposta.</ContactP>
        </Intro>
      </ContactIntro>

      <ContactContainer >
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