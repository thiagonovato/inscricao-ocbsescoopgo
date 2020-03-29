import React from "react";

import { Form, Input } from "@rocketseat/unform";

export default function FormComponent() {
  return (
    <div className="titulos">
      <div class="col tituloPagina">COOPERATIVA ENVIE SUA AÇÃO</div>
      <Form>
        <div className="itemForm">
          <label>Nome da cooperativa</label>
          <Input
            name="cooperativa"
            placeholder="Nome da cooperativa"
            className="textForm"
          />
        </div>
        <div className="itemForm">
          <label>Título/ação</label>
          <Input name="titulo" placeholder="Título/ação" className="textForm" />
        </div>
        <div className="itemForm">
          <label>Nome da cooperativa</label>
          <Input
            name="cooperativa"
            placeholder="Nome da cooperativa"
            className="textForm"
          />
        </div>
        <div className="itemForm">
          <label>Mensagem</label>
          <Input
            name="mensagem"
            placeholder="Mensagem"
            multiline
            className="textArea"
          />
        </div>

        <div className="buttonForm">
          <button type="submit" className="button">
            Enviar
          </button>
        </div>
      </Form>
    </div>
  );
}
