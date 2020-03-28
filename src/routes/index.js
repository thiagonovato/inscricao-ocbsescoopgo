import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// Importando as páginas - Auth
import SignIn from "../pages/SignIn";
import Noticias from "../pages/AdminNoticias";

//Importando páginas - site
import Main from "../pages/Main";
import UltimasNoticias from "../pages/UltimasNoticias";
import Acoes from "../pages/Acoes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/comunicados" component={Main} />
      <Route path="/decretosfederais" component={Main} />
      <Route path="/decretosestaduais" component={Main} />
      <Route path="/decretosmunicipais" component={Main} />
      <Route path="/acoes" component={Acoes} />
      <Route path="/ultimasnoticias" component={UltimasNoticias} />
      <Route path="/signin" component={SignIn} auth />
      <Route path="/adm/noticias" component={Noticias} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
