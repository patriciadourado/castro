import styled from "styled-components";

const LinkCastro = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: var(--color-gold);
  cursor: pointer;
  
  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  &:hover{
    color: var(--color-gold-two);
  }
`;

export default LinkCastro;
