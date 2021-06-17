import styled from "styled-components";

export const FooterCastro = styled.footer`
	font-size: 14rem;
	font-family: 'Cinzel', serif;
	font-style: normal;
	font-weight:400;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  @media(max-width: 887px){
    font-size: 10rem;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  font-size: 12rem;
  width: 100%;
  font-family: 'Cinzel', serif;
  background: var(--color-contact);
  color: var(--color-white-light);
  padding-top: 30rem;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  
  @media(max-width: 887px){
    padding-top: 15rem;
  }
 
`;

export const FooterRow = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 90rem;

  @media(max-width: 887px){
    text-align: center;
    margin-top: 40rem;
  }

`;

export const FooterSocial = styled.ul`
  display: inline-block;
	font-size: 20px;
	padding: 0;
	position: relative;
  
  @media(max-width: 887px){
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const FooterItem = styled.li`
  display: inline-block;
  font-size: 25rem;
  color: var(--color-gold);
	margin: 0 15px;
	padding: 0;

  @media(max-width: 887px){
    font-size: 22rem;
  }
`;