import React from "react";
import LogoCastro from "../Logo";
import BurguerCastro from "../BurguerCastro";
import { HeaderCastro } from "./styles";

function HeaderOpen() {
  return (
    <HeaderCastro>
      <LogoCastro />
      <BurguerCastro />
    </HeaderCastro>
  );
}

export default HeaderOpen;
