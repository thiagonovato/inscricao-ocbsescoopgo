import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAcoesRequest } from "../../../store/modules/acoes/actions";

import { Container, Titulo, Noticia } from "./styles";

export default function Acoes() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.acoes.loading);
  const acoes = useSelector(state => state.acoes.acoes);

  useEffect(() => {
    dispatch(getAcoesRequest());
  }, []);

  return (
    <Container>
      <Titulo>
        <div>COOPERATIVISMO GOIANO CONTRA O CORONA-VÍRUS</div>
        <span>
          Veja aqui todas as ações do Sistema OCB/SESCOOP-GO e das cooperativas
          goianas frente à crise gerada pelo COVID-19 (coronavírus)
        </span>
      </Titulo>
      {loading && (
        <div>
          <chamada>Carregando...</chamada>
        </div>
      )}
      {acoes &&
        acoes.length > 0 &&
        acoes.map(acao => {
          return (
            <Noticia>
              <img src={acao.img} alt="Noticia" />
              <div>
                <titulo>{acao.titulo}</titulo>
                <chamada>{acao.chamada}</chamada>
                <a href={`http://${acao.url}`} target="_blank">
                  Leia mais
                </a>
              </div>
            </Noticia>
          );
        })}
    </Container>
  );
}
