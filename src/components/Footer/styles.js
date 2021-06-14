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
