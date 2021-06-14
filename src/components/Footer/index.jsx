import React from "react";
import { FooterCastro, FooterInfo } from "./styles";
import LinkCastro from "../LinkCastro";

function FooterOpen() {
  return (
    <FooterCastro>
      <FooterInfo>
        <p>
          &copy; 2021 &nbsp;
          <LinkCastro
            href="https://patriciadourado.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patricia Dourado
          </LinkCastro>
        </p>
      </FooterInfo>
    </FooterCastro>
  );
}

export default FooterOpen;
