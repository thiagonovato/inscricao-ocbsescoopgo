import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import gifLoading from "../../../assets/loading.gif";
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
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="tituloPrincipal">
            COOPERATIVISMO GOIANO CONTRA O CORONA-VÍRUS
          </div>
          <div className="tituloSecundario">
            Veja aqui todas as ações do Sistema OCB/SESCOOP-GO e das
            cooperativas goianas frente à crise gerada pelo COVID-19
            (coronavírus)
          </div>
        </div>
      </div>
      <div className="row">
        {loading && <img src={gifLoading} alt="loading..." />}
        {acoes &&
          acoes.length > 0 &&
          acoes.map(acao => {
            return (
              <div className="row acaoPrincipal">
                <div className="col-sm-6" style={{ textAlign: "center" }}>
                  <img src={acao.img} alt="Noticia" className="imgPrincipal" />
                </div>
                <div className="col-sm-6">
                  <div className="nomeAcao">{acao.titulo}</div>
                  <div className="chamadaAcao">{acao.chamada}</div>
                  <div className="urlAcao">
                    <a
                      className="urlNoticia"
                      href={`http://${acao.url}`}
                      target="_blank"
                    >
                      Leia mais
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
