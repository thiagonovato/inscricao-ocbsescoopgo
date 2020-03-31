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
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col buttonMenu">
          <Link to="/">INÍCIO</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/comunicados">COMUNICADOS OCB e OCB-GO</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/decretosfederais">DECRETOS FEDERAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/decretosestaduais">DECRETOS ESTADUAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/decretosmunicipais">DECRETOS MUNICIPAIS</Link>
        </div>
        <div className="col buttonMenu">
          <Link to="/acoes">AÇÕES DAS COOPERATIVAS GOIANAS</Link>
        </div>
      </div>
    </div>
  );
}
