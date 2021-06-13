import React, { useState } from 'react';
import NavCastro from '../NavCastro';
import { Burguer, Bar } from './styles';

function BurguerCastro(){
  const [open, setOpen] = useState(false);

  return(
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <Bar open={open}/>
        <Bar open={open}/>
        <Bar open={open}/>
      </Burguer>
      <NavCastro open={open}/>
    </>
  );
}

export default BurguerCastro;