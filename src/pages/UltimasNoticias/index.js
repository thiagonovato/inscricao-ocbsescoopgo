import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import gifLoading from "../../assets/loading.gif";
import { getNoticiasRequest } from "../../store/modules/noticias/actions";

import Formulario from "../../components/site/Form";

import { Container, Noticias } from "./styles";

export default function UltimasNoticiasPage() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.noticias.loading);
  const noticias = useSelector(state => state.noticias.noticias);

  useEffect(() => {
    dispatch(getNoticiasRequest());
  }, []);

  return (
    <>
      <Container>
        <Noticias>
          <span>ÚLTIMAS NOTÍCIAS</span>
          {loading && <img src={gifLoading} alt="loading..." />}
          {noticias &&
            noticias.length > 0 &&
            noticias.map(noticia => {
              return (
                <div>
                  <titulo>{noticia.titulo}</titulo>
                  <chamada>{noticia.chamada}</chamada>
                  <a href={`http://${noticia.url}`} target="_blank">
                    {noticia.url}
                  </a>
                </div>
              );
            })}
        </Noticias>
        <div>
          <Formulario />
        </div>
      </Container>
    </>
  );
}
