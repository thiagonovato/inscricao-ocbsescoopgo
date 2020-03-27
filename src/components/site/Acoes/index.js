import React from "react";

import logo from "../../../assets/logo-covid.png";

import { Container, Titulo, Noticia } from "./styles";

export default function Acoes() {
  return (
    <Container>
      <Titulo>
        <div>COOPERATIVISMO GOIANO CONTRA O CORONA-VÍRUS</div>
        <span>
          Veja aqui todas as ações do Sistema OCB/SESCOOP-GO e das cooperativas
          goianas frente à crise gerada pelo COVID-19 (coronavírus)
        </span>
      </Titulo>
      <Noticia>
        <img src={logo} alt="Noticia" />
        <div>
          <titulo>Aqui é o título</titulo>
          <chamada>Aqui é o copor da notícia</chamada>
        </div>
      </Noticia>
      <Noticia>
        <img src={logo} alt="Noticia" />
        <div>
          <titulo>Aqui é o título</titulo>
          <chamada>Aqui é o copor da notícia</chamada>
        </div>
      </Noticia>
      <Noticia>
        <img src={logo} alt="Noticia" />
        <div>
          <titulo>Aqui é o título</titulo>
          <chamada>Aqui é o copor da notícia</chamada>
        </div>
      </Noticia>
      <Noticia>
        <img src={logo} alt="Noticia" />
        <div>
          <titulo>Aqui é o título</titulo>
          <chamada>Aqui é o copor da notícia</chamada>
        </div>
      </Noticia>
    </Container>
  );
}
