import styled from 'styled-components';

export const AboutWrapper = styled.section`
  display: flex;
  width: 100%;
  background-color: var(--color-white-light);
  padding: 20rem;

  @media(max-width: 887px){
    display: block;
  }
`;

export const AboutIntro = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  margin-top: 20rem;
  
  @media(max-width: 887px){
    margin-top: 13vh;
  }
`;

export const AboutTitle = styled.h1`
  color: var(--color-gold);
  font-size: 25px;
  font-style: normal;
	font-weight: 700;
  font-family: 'Cinzel', serif;
  
	line-height: 1.875;
  margin-bottom: 3rem;
	letter-spacing: .4rem;

  @-moz-document url-prefix() {
    font-weight: lighter;
  }

`;

export const AboutP = styled.p`
  color: var(--color-black);
  font-style: regular;
	font-weight: 700;
	font-size: 15rem;
  font-family: 'Cinzel', serif;
  text-align: justify;
  line-height: 1.5;
  padding: 5rem 20rem 0;
  margin-left: 50rem;


  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  @media(max-width: 887px){
    font-size: 13rem;
    padding: 12rem 20rem 5rem;
    margin-left: 30rem;
  }

  
  @media(max-width: 580px){
    margin-left: 10rem;
  }
  
  @media(max-width: 505px){
    margin: auto;
  }
`;

export const AboutContainer = styled.div`
  display: block;
  
  @media(max-width: 887px){
    padding-top: 10rem;
  }
`;

export const AboutLabel = styled.h4`
  position: relative;
  font-style: normal;
	font-weight: 700;
	font-size: 20rem;
  font-family: 'Cinzel', serif;
  text-align: justify;
  line-height: 1.5;
  padding: 0 20rem 20rem;
  margin-left: 50rem;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  &::after{
    content: '';
    display: block;
    height: 3px;
    width: 50px;
    background: var(--color-gold);
    position: absolute;
  }
  
  @media(max-width: 887px){
    padding: 0 20rem 5rem;
    font-size: 16rem;
    margin-left: 30rem;
    height: auto;
  }

  @media(max-width: 580px){
    margin-left: 10rem;
  }

  @media(max-width: 505px){
    margin: auto;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  position: relative;
	margin-top: 35rem;
	margin-bottom: 6rem;
  padding: 20rem 80rem;

  @media(max-width: 781px){
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 20px;
		padding-right: 20px;
  }

  @media(max-width: 661px){
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 10rem;
		padding-right: 10rem;
  }

  @media(max-width: 505px){
    display: block;
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 20px;
		padding-right: 20px;
  }

`;

export const AboutPic = styled.img`
  width: 249px;
  height: 200px;
  object-fit: contain;

  @media(max-width: 505px){
    width: auto;
    padding-top: 5rem;
		padding-left: 30px;
		padding-right: 30px;
  }
`;

export const PicContainer = styled.div`
  display: block;
  background-color: var(--color-white-light);
  height: 100%;

  @media(max-width: 887px){
    padding-bottom: 5rem;
  }
`;
