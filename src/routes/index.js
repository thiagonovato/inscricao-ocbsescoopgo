import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// Importando as páginas - Auth
import SignIn from "../pages/SignIn";
import Noticias from "../pages/AdminNoticias";

//Importando páginas - site
import Main from "../pages/Main";
import Comunicados from "../pages/Comunicados";
import DecretosFederais from "../pages/DecretosFederais";
import DecretosEstaduais from "../pages/DecretosEstaduais";
import DecretosMunicipais from "../pages/DecretosMunicipais";
import UltimasNoticias from "../pages/UltimasNoticias";
import Acoes from "../pages/Acoes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/comunicados" component={Comunicados} />
      <Route path="/decretosfederais" component={DecretosFederais} />
      <Route path="/decretosestaduais" component={DecretosEstaduais} />
      <Route path="/decretosmunicipais" component={DecretosMunicipais} />
      <Route path="/acoes" component={Acoes} />
      <Route path="/ultimasnoticias" component={UltimasNoticias} />
      <Route path="/signin" component={SignIn} auth />
      <Route path="/adm/noticias" component={Noticias} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
