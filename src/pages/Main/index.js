import React from "react";
import { Link } from "react-router-dom";

export default function FormPage() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <Link to="/covid">Acessar Covid</Link>
      </div>
    </div>
  );
}
