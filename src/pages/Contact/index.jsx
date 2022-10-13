import React from 'react';
import { ContactContainer, ContactIntro, ContactWrapper, Intro, ContactLabel, ContactTitle, ContactP, ContactInfo, Info } from './styles';
import Footer from '../../components/Footer'
import { FooterRow, FooterSocial, FooterItem } from "../../components/Footer/styles.js";
import LinkCastro from "../../components/LinkCastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

function Contact(){

  return(
    <div id='contact'>  
      <ContactIntro>
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
          <FooterRow>
            <FooterSocial>
              <FooterItem>
                <LinkCastro
                  href="https://whats.link/7199107423"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-whatsapp' icon={faWhatsapp}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://www.linkedin.com/company/jcastrolicita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-linkedin' icon={faLinkedinIn}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://instagram.com/jcastrolicita/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-instagram' icon={faInstagram}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://www.facebook.com/people/JCastro-Consultoria/100071176555785/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-facebook' icon={faFacebook}/>
                </LinkCastro>
              </FooterItem>
              <FooterItem>
                <LinkCastro
                  href="https://twitter.com/jcastrolicita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className='fab fa-twitter' icon={faTwitter}/>
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