import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { storage } from "../../../config/Firebase";

import { setEnviosRequest } from "../../../store/modules/envios/actions";

export default function FormComponent() {
  const dispatch = useDispatch();
  // Declarando variáveis
  const [loadingSend, setLoadingSend] = useState(false);
  const [cooperativa, setCooperativa] = useState("");
  const [file, setFile] = useState({});
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoadingSend(true);

    // Enviando o arquivo
    const { name, type } = file;
    let codg = Math.floor(Math.random() * 1000000000000);
    const ref = storage.ref(`envios/${codg}/${name}`);
    let uploadTask = ref.put(file);

    await uploadTask.on(
      "state_changed",
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
      },
      function(error) {
        setLoadingSend(false);
      },
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const obj = {
            cooperativa,
            fileUrl: downloadURL,
            fileType: type,
            titulo,
            mensagem,
            diretorio: codg,
            createdAt: Date.now()
          };

          dispatch(setEnviosRequest(obj));
          document.getElementById("fileInput").value = null;
          setCooperativa("");
          setFile("");
          setTitulo("");
          setMensagem("");
          setLoadingSend(false);
        });
      }
    );
  }

  function onChangeFile(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <div className="titulos">
      <div className="col tituloPagina">COOPERATIVA ENVIE SUA AÇÃO</div>
      <form onSubmit={handleSubmit}>
        <div className="itemForm">
          <label>Nome da cooperativa</label>
          <input
            type="text"
            name="cooperativa"
            placeholder="Nome da cooperativa"
            className="textForm"
            value={cooperativa}
            onChange={e => setCooperativa(e.target.value)}
          />
        </div>
        <div className="itemForm">
          <label>Arquivo (Foto, vídeo etc)</label>
          <input
            type="file"
            id="fileInput"
            className="textForm"
            onChange={e => onChangeFile(e)}
          />
        </div>
        <div className="itemForm">
          <label>Título/ação</label>
          <input
            name="titulo"
            placeholder="Título/ação"
            className="textForm"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div className="itemForm">
          <label>Mensagem</label>
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            className="textArea"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
          />
        </div>

        <div className="buttonForm">
          <button type="submit" className="button" disabled={loadingSend}>
            {loadingSend ? "Aguarde..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
