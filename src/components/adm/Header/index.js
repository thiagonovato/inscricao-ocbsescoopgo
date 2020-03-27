import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logoOcb from "../../../assets/logo-ocb-menor.png";
import logoCovid from "../../../assets/logo-covid-menor.png";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoOcb} alt="COVID-19" />
          <Link to="/adm">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <storng>{profile.email}</storng>
              <Link to="/adm/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Thiago Novato"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
