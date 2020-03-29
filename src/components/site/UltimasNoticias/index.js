import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import gifLoading from "../../../assets/loading.gif";
import { getNoticiasRequest } from "../../../store/modules/noticias/actions";

import { Container } from "./styles";

export default function UltimasNoticias() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.noticias.loading);
  const noticias = useSelector(state => state.noticias.noticias);

  useEffect(() => {
    dispatch(getNoticiasRequest());
  }, []);

  return (
    <div className="titulos">
      <div className="row">
        <div className="col-sm-12">
          <div className="tituloPagina">ÚLTIMAS NOTÍCIAS</div>
          {loading && <img src={gifLoading} alt="loading..." />}
          {noticias &&
            noticias.length > 0 &&
            noticias.map(data => {
              return (
                <div className="noticia">
                  <div className="tituloNoticia">{data.titulo}</div>
                  <div className="chamadaNoticia">{data.chamada}</div>
                  <a
                    href={`http://${data.url}`}
                    target="_blank"
                    className="urlNoticia"
                  >
                    {data.url}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
