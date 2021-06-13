import React from 'react';
import {
  AboutWrapper,
  AboutTitle,
  AboutIntro,
  AboutP,
  AboutInfo,
  AboutPic,
  PicContainer,
  AboutLabel,
  AboutContainer,
} from './styles';
import pic1 from '../../assets/office-castro.jpg';
import pic2 from '../../assets/Castro.jpg';

function About() {
  return (
    <AboutWrapper id='about'>
      <AboutIntro>
        <AboutTitle>Quem Somos</AboutTitle>
        <AboutInfo>
          <PicContainer>
            <AboutPic src={pic1} alt='office-castro' />
          </PicContainer>
          <AboutContainer>
            <AboutLabel>
              JCastro Consultoria em Licitações e Assessoria Juridica
            </AboutLabel>
            <AboutP>
              Uma empresa que traz modernização no mercado de licitações e
              contratos administrativos. Conta como fundador profissional
              experiente a fim de oferecer novos padrões nos serviços de
              consultoria e assessoria jurídica, bem como trazer resoluções
              precisas à execução de contratos e eficiência em recursos
              administrativos junto aos órgãos públicos
            </AboutP>
          </AboutContainer>
        </AboutInfo>

        <AboutInfo>
          <PicContainer>
            <AboutPic src={pic2} alt='cards-castro' />
          </PicContainer>
          <AboutContainer>
            <AboutLabel>Jaheb Castro</AboutLabel>
            <AboutP>
              Formado em Direito pela Faculdade de Direito Santos Agostinho
              (Montes Claros/MG), especialista em Direito Processual, atua no
              ramo de Licitações e Compras Públicas desde o ano de 2014. O mesmo
              possui experiência como Assessor Jurídico Municipal, Coordenador
              de Compras e de Contratos Administrativos, bem como Pregoeiro e
              integrante de Comissão de Licitações.
            </AboutP>
          </AboutContainer>
        </AboutInfo>

      </AboutIntro>
    </AboutWrapper>
  );
}

export default About;
