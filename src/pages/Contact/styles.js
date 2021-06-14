import styled from 'styled-components';

export const ContactContainer = styled.section`
  background: var(--color-contact);
	padding-top: 50rem;
	padding-bottom: 70rem;
  display: flex;
  justify-content: space-between;
  
  
  @media(max-width: 887px){
    display: block;
  }
`;

export const ContactWrapper = styled.div`
  background: var(--color-contact);
  width: 100%;
  float: right;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 20rem;
  height: 50vh;

  @media(max-width: 887px){
    display: contents;
    width: auto;
		padding-left: 30px;
		padding-right: 30px;
  }
`;

export const ContactIntro = styled.div`
  background: var(--color-contact);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  margin-top: 50rem;
  
  @media(max-width: 887px){
    margin-top: 26vh;
  }
`;

export const Intro = styled.div`
  width: 100%;
  margin-top: 20rem;
`;

export const ContactTitle = styled.h5`
  color: var(--color-gold);
  font-size: 25px;
  font-style: regular;
	font-weight: 700;
  font-family: 'Cinzel', serif;
  
	line-height: 1.875;
  margin-bottom: 3rem;
	letter-spacing: .4rem;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
`;

export const ContactLabel = styled.h5`
  color: var(--color-gold);
  font-size: 15rem;
  font-style: normal;
	font-weight: 700;
  font-family: 'Cinzel', serif;
  
	line-height: 1.875;
  margin-top: 5rem;
	letter-spacing: .4rem;

  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  @media(max-width: 887px){
    font-size: 12rem;
  }
`;

export const ContactP = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
	font-weight: 700;
	font-size: 15rem;
  font-family: 'Cinzel', serif;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  @media(max-width: 1080px){
    font-size: 13rem;
  }

  @media(max-width: 887px){
    font-size: 13rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  margin: 100rem auto 0;
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
  font-family: 'Cinzel', serif;
	text-align: center;

  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  
  @media(max-width: 887px){
    display: block;
    width: auto;
    font-size: 30rem;
    padding-top: 5rem;
		padding-left: 30px;
		padding-right: 30px;
  }
`;

export const Info = styled.div`
  width: 33.33333%;
  margin-right: 15rem;
	color: #FFFFFF;

  @media(max-width: 887px){
    padding-bottom: 20rem;
    width: 100%;
  }
`;