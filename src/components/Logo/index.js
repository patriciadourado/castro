import styled from 'styled-components';
import logo from '../../assets/logo-castro.png';

const LogoCastro = styled.img.attrs({ src: logo, alt: "Logo da JCastro" })`
  max-width: 350rem;
  height: 350rem;
  margin-left: -10rem;
  margin-top: 35rem;
  padding-top: 10rem;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 887px) {
    padding-top: 5rem;
    max-width: 320rem;
    height: 320rem;
  }
`;

export default LogoCastro;
