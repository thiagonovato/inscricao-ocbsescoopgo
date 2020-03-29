import React from "react";

import Acoes from "../../components/site/Acoes";
import Formulario from "../../components/site/Form";
import UltimasNoticias from "../../components/site/UltimasNoticias";

import { Container } from "./styles";

export default function FormPage() {
  return (
    <>
      <Container>
        <div>
          <Acoes />
        </div>
        <div>
          <Formulario />
          <UltimasNoticias />
        </div>
      </Container>
    </>
  );
}
