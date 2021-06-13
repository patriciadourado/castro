import styled from 'styled-components';

export const Bar = styled.div`
  width: 20rem;
  height: 1rem;
  background-color: ${({ open }) => open ? '#f5f5f5': '#cab56a'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

export const Burguer = styled.div`
  width: 20rem;
  height: 20rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 21;
  
  & ${Bar}:nth-child(1){
    transform: ${({ open }) => open ? 'rotate(45deg)': 'rotate(0deg)'};
  }

  & ${Bar}:nth-child(2){
    transform: ${({ open }) => open ? 'translateX(100%)': 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  & ${Bar}:nth-child(3){
    transform: ${({ open }) => open ? 'rotate(-45deg)': 'rotate(0deg)'};
  }

  @media(max-width: 887px){
    display: flex;
  }
`;