import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import gifLoading from "~/assets/loading.gif";
import { getDecretosRequest } from "~/store/modules/decretos/actions";

import HeaderCovid from "~/pages/Covid/Header";
import Formulario from "~/components/site/Form";

export default function UltimasNoticiasPage() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.decretos.loading);
  const decretos = useSelector(state =>
    state.decretos.decretos.filter(decreto => {
      return decreto.type === "decretosmunicipais";
    })
  );

  useEffect(() => {
    dispatch(getDecretosRequest());
  }, []);

  return (
    <>
      <HeaderCovid />
      <div className="row">
        <div className="col-sm-8">
          <div className="tituloPagina">DECRETOS MUNICIPAIS</div>
          {loading && <img src={gifLoading} alt="loading..." />}
          {decretos &&
            decretos.length > 0 &&
            decretos.map(data => {
              return (
                <div className="noticia">
                  <div className="tituloNoticia">{data.titulo}</div>
                  <div className="chamadaNoticia">{data.chamada}</div>
                  <a
                    href={`${data.url}`}
                    target="_blank"
                    className="urlNoticia"
                  >
                    Visualizar
                  </a>
                </div>
              );
            })}
        </div>
        <div className="col-sm-4">
          <Formulario />
        </div>
      </div>
    </>
  );
}
