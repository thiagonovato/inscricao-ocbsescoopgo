import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import gifLoading from "../../assets/loading.gif";
import { getAcoesRequest } from "../../store/modules/acoes/actions";

import Formulario from "../../components/site/Form";

export default function AcoessPage() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.acoes.loading);
  const acoes = useSelector(state => state.acoes.acoes);

  useEffect(() => {
    dispatch(getAcoesRequest());
  }, []);

  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="tituloPagina">AÇÕES DAS COOPERATIVAS GOIANAS</div>
        <div className="tituloSecundario">
          Veja aqui todas as ações do Sistema OCB/SESCOOP-GO e das cooperativas
          goianas frente à crise gerada pelo COVID-19 (coronavírus)
        </div>
        {loading && <img src={gifLoading} alt="loading..." />}
        {acoes &&
          acoes.length > 0 &&
          acoes.map(data => {
            return (
              <div className="row acaoPrincipal">
                <div className="col-sm-6" style={{ textAlign: "center" }}>
                  <img src={data.img} alt="Noticia" className="imgPrincipal" />
                </div>
                <div className="col-sm-6">
                  <div className="nomeAcao">{data.titulo}</div>
                  <div className="chamadaAcao">{data.chamada}</div>
                  <div className="urlAcao">
                    <a
                      className="urlNoticia"
                      href={`http://${data.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leia mais
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="col-sm-4">
        <Formulario />
      </div>
    </div>
  );
}
