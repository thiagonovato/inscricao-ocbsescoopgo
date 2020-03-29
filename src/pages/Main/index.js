import React from "react";

import Acoes from "../../components/site/Acoes";
import Formulario from "../../components/site/Form";
import UltimasNoticias from "../../components/site/UltimasNoticias";

export default function FormPage() {
  return (
    <div className="row">
      <div className="col-sm-8">
        <Acoes />
      </div>
      <div className="col-sm-4">
        <div style={{ paddingBottom: "5px" }}>
          <Formulario />
        </div>
        <div>
          <UltimasNoticias />
        </div>
      </div>
    </div>
  );
}
