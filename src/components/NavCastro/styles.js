import styled from 'styled-components';

export const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 20;

  @media(max-width: 887px){
    padding-top: 30rem;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)': 'translateX(112%)'};
    background: var(--color-gold);
    line-height: 2.5px;
    top: 10rem;
    right: 15rem;
    height: 30vh;
    width: 130px;
    padding-left: 10rem;
    justify-content: space-evenly;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavLink = styled.li`
  list-style: none;
  margin-left: 15px;
  color: var(--color-white-light);
  font-size: 15px;

  @media(max-width: 887px){
    margin-left: 3px;
  }
`;

export const Nav = styled.div`
  text-decoration: none;
  cursor: pointer;
  padding: 3px 11px;
  color: var(--color-white-light);
  border-radius: 20px;
  font-size: 15px;
  font-style: normal;
  font-family: 'Cinzel', serif;
  
  &:hover{
    color: var(--color-gold);
  }

  @-moz-document url-prefix() {
    font-weight: lighter;
  }
  
  @media(max-width: 887px){
    padding: 5px 1.5px;
    font-size: 13px;
    justify-content: center;
    align-items: center;

    &:hover{
      background: none;
      color: var(--color-strong-blue);
      margin-left: 5rem;
    }
  }
`;

export const NavW = styled(Nav)`
  color: var(--color-black);
`;