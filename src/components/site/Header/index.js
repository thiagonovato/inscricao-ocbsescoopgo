import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logoOcb from "../../../assets/logo-ocb.png";
import logoSomosCoop from "../../../assets/somoscoop.png";
import logoCovid from "../../../assets/logo-covid.png";

import { Container, Content, Menu } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={logoOcb} alt="Logo OCB" />
          </Link>
        </div>
        <span>
          <img src={logoSomosCoop} alt="SomoCoop" />
        </span>
        <aside>
          <img src={logoCovid} alt="Covid" />
        </aside>
      </Content>
      <Menu>
        <div>
          <Link to="/comunicados">COMUNICADOS SISTEMA OCB-GO</Link>
        </div>
        <div>
          <Link to="/decretosfederais">DECRETOS FEDERAIS</Link>
        </div>
        <div>
          <Link to="/decretosestaduais">DECRETOS ESTADUAIS</Link>
        </div>
        <div>
          <Link to="/decretosmunicipais">DECRETOS MUNICIPAIS</Link>
        </div>
        <div>
          <Link to="/acoes">AÇÕES DAS COOPERATIVAS GOIANAS</Link>
        </div>
        <div>
          <Link to="/ultimasnoticias">ÚLTIMAS NOTÍCIAS</Link>
        </div>
      </Menu>
    </Container>
  );
}
