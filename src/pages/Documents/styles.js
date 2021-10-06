import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: var(--color-contact);
`;

export const WrapDoc = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 80rem;
  padding: 66rem 10rem;
  /* width: 60%; */

  @media(min-width: 770px){
    padding: 66rem 20%; 
  }
`;

export const Line = styled.hr`
  margin-top: 140rem;
  width: 300rem;
  border-color: var(--color-gold);
  background: var(--color-gold);
`;

export const DocumentsTitle = styled.h5`
  color: var(--color-gold);
  justify-content: center;
  display: flex;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  font-family: 'Cinzel', serif;
  line-height: 1.875;
  margin-bottom: 3rem;
  letter-spacing: .4rem;
  padding-top: 15vh;

  @-moz-document url-prefix() {
      font-weight: lighter;
  }  
`;

export const DocumentButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: var(--color-gold-two);
  color: white;
  width: 100%;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20rem;
  margin-bottom: 10rem;
  font-family: 'Cinzel', serif;
  font-size: 15rem;
  font-weight: 700;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }

  &:hover{
    background-color: var(--color-gold);
  }
`;