import React from "react";

import Acoes from "../../components/site/Acoes";
import Formulario from "../../components/site/Form";

import { Container } from "./styles";

export default function FormPage() {
  return (
    <Container>
      <div>
        <Acoes />
      </div>
      <div>
        <Formulario />
      </div>
    </Container>
  );
}
