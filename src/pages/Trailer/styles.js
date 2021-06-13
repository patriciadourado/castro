import styled, { keyframes } from 'styled-components';

export const WrapperType = styled.div`
  height: 100vh;
  padding: 4em;
  color: var(--color-gold);
  font-size: 40rem;
  font-family: 'Cinzel', monospace;
  background-color: rgb(25,25,25);
  overflow: hidden;
  
  @media(max-width: 887px){
    font-size: 18rem;
    padding: 0;
  }
`;

export const Typewriter = keyframes`
  from{width: 0;}
  to{width: 19.5em;}
`;

export const BlinkTextCursor = keyframes`
  from{border-right-color: var(--color-gold);}
  to{border-right-color: transparent;}
`;

export const Line = styled.h1`
  position: relative;
  top: 50%;  
  width: 22em;
  margin: 0 auto;
  border-right: 2px solid var(--color-gold);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  animation: ${Typewriter} 5s steps(44) 1s normal both infinite,
             ${BlinkTextCursor} 500ms steps(44) 2s infinite normal;

  @media(max-width: 887px){
    font-size: 100%;
    width: 20em;
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
`;

export const DownArrow = styled.div`
	position: fixed;
	bottom: 40%;
	left: 50%;

  @media(max-width: 887px){
    bottom: 20%;
  }
`;

export const Bounce = styled.div`
	-moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
  height:100vh;
  animation: ${bounce} 3s infinite;
`;

export const Arrow = styled.img`
  width: 40px; 
  height: 40px;
  cursor: pointer;
  
  @media(max-width: 887px){
    width: 20px;
    height: 20px;
  } 
`;
