import React from 'react';
import {WrapperType, Line, Bounce, Arrow, DownArrow } from './styles';
import arrow from '../../assets/down-arrow.svg';
import { Link } from 'react-scroll';

function Trailer(){
  
  return(
    <WrapperType id='home'>
      <Line>
          JCastro Consultoria em Licitações
      </Line>
      <Bounce>
      <DownArrow>
        <Link to='about' smooth={true}><Arrow alt="" src={arrow}/></Link>
      </DownArrow>
    </Bounce>
    </WrapperType>
  );
}

export default Trailer;