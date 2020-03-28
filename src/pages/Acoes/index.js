import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import gifLoading from "../../assets/loading.gif";
import { getAcoesRequest } from "../../store/modules/acoes/actions";

import Formulario from "../../components/site/Form";

import { Container, Acoes, Acao } from "./styles";

export default function AcoessPage() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.acoes.loading);
  const acoes = useSelector(state => state.acoes.acoes);

  useEffect(() => {
    dispatch(getAcoesRequest());
  }, []);

  return (
    <>
      <Container>
        <Acoes>
          <span>COOPERATIVISMO GOIANO CONTRA O CORONA-VÍRUS</span>
          {loading && (
            <div>
              <img src={gifLoading} alt="loading..." />
            </div>
          )}
          {acoes &&
            acoes.length > 0 &&
            acoes.map(acao => {
              return (
                <Acao>
                  <img src={acao.img} alt="Acao" />
                  <div>
                    <titulo>{acao.titulo}</titulo>
                    <chamada>{acao.chamada}</chamada>
                    <a href={`http://${acao.url}`} target="_blank">
                      Leia mais
                    </a>
                  </div>
                </Acao>
              );
            })}
        </Acoes>
        <div>
          <Formulario />
        </div>
      </Container>
    </>
  );
}
