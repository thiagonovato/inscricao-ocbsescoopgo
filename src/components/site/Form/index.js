import React from "react";

import { Container, Botao } from "./styles";

import { Form, Input } from "@rocketseat/unform";

export default function FormComponent() {
  return (
    <Container>
      <Form>
        <span>COOPERATIVA ENVIE SUA AÇÃO</span>
        <div>
          <label>Nome da Cooperativa</label>
          <Input name="cooperativa" placeholder="Nome da cooperativa" />
        </div>
        <div>
          <label>Título/Ação</label>
          <Input name="titulo" placeholder="Título/ação" />
        </div>
        <div>
          <label>Mensagem</label>
          <Input name="mensagem" placeholder="Mensagem" multiline />
        </div>
        <Botao>
          <button type="submit">Enviar</button>
        </Botao>
      </Form>
    </Container>
  );
}
