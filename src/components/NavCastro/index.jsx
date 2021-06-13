import React, { useState } from 'react';
import { NavBar, NavLink, Nav, NavW } from './styles';
import { Link } from 'react-scroll';

function NavCastro({ open }){
  const [colorChange, setColorchange] = useState(false);
  
  window.onscroll = () => {
    if (((document.body.scrollTop > 701) && (window.scrollY < 1355) ) || ((document.documentElement.scrollTop > 701) && (window.scrollY < 1355))){
      setColorchange(true);
    } else {
      setColorchange(false);
    }

    if (((document.body.scrollTop > 2040) && (window.scrollY < 2840)) || ((document.documentElement.scrollTop > 2040) && (window.scrollY < 2840)))
      setColorchange(true);
  }
  return(
    colorChange ?
      <NavBar open={open}>   
        <NavLink><Link to='home' smooth={true}><NavW name='nav'>Inicio</NavW></Link></NavLink>
        <NavLink><Link to='about' smooth={true}><NavW name='nav'>Quem Somos</NavW></Link></NavLink>
        <NavLink><Link to='services' smooth={true}><NavW name='nav'>Serviços</NavW></Link></NavLink>
        <NavLink><Link to='informations' smooth={true}><NavW name='nav'>Informações</NavW></Link></NavLink>
        <NavLink><Link to='contact' smooth={true}><NavW name='nav'>Contato</NavW></Link></NavLink>
      </NavBar>
      :
      <NavBar open={open}>   
        <NavLink><Link to='home' smooth={true}><Nav name='nav'>Inicio</Nav></Link></NavLink>
        <NavLink><Link to='about' smooth={true}><Nav name='nav'>Quem Somos</Nav></Link></NavLink>
        <NavLink><Link to='services' smooth={true}><Nav name='nav'>Serviços</Nav></Link></NavLink>
        <NavLink><Link to='informations' smooth={true}><Nav name='nav'>Informações</Nav></Link></NavLink>
        <NavLink><Link to='contact' smooth={true}><Nav name='nav'>Contato</Nav></Link></NavLink>
      </NavBar>
  );
}

export default NavCastro;