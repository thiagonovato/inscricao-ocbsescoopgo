import React from "react";
import { Link } from "react-router-dom";

import logoOcb from "../../../assets/logo-ocb.png";
import logoSomosCoop from "../../../assets/somoscoop.png";
import logoCovid from "../../../assets/logo-covid.png";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 imagemMenu">
          <Link to="/">
            <img src={logoOcb} alt="OCB-GO" style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="col-6 col-md-4 imagemMenu imagemMenuSomosCoop">
          <img src={logoSomosCoop} alt="OCB-GO" style={{ height: "50px" }} />
        </div>
        <div
          className="col-6 col-md-4 imagemMenu"
          style={{ justifyContent: "flex-end" }}
        >
          <img src={logoCovid} alt="OCB-GO" className="imagemCovid" />
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col buttonMenu">
          <Link to="/covid/">INÍCIO</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/covid/comunicados">COMUNICADOS OCB e OCB-GO</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/covid/decretosfederais">DECRETOS FEDERAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/covid/decretosestaduais">DECRETOS ESTADUAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/covid/decretosmunicipais">DECRETOS MUNICIPAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/covid/acoes">AÇÕES DAS COOPERATIVAS GOIANAS</Link>
        </div>
      </div>
    </div>
  );
}
