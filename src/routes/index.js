import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

// Importando as páginas - Auth
import SignIn from "~/pages/SignIn";
import Noticias from "~/pages/AdminNoticias";

//Importando páginas - site
// Rotas do Dia C
import Main from "~/pages/Main";

// Rotas do Covid
import MainCovid from "~/pages/Covid/Main";
import Comunicados from "~/pages/Covid/Comunicados";
import DecretosFederais from "~/pages/Covid/DecretosFederais";
import DecretosEstaduais from "~/pages/Covid/DecretosEstaduais";
import DecretosMunicipais from "~/pages/Covid/DecretosMunicipais";
import UltimasNoticias from "~/pages/Covid/UltimasNoticias";
import Acoes from "~/pages/Covid/Acoes";

export default function Routes() {
  return (
    <Switch>
      {/* Rotas do Dia C */}
      <Route path="/" exact component={Main} />
      <Route path="/signin" component={SignIn} auth />
      <Route path="/adm/noticias" component={Noticias} isPrivate />

      {/* Rotas do Covid */}
      <Route path="/covid" exact component={MainCovid} />
      <Route path="/covid/comunicados" component={Comunicados} />
      <Route path="/covid/decretosfederais" component={DecretosFederais} />
      <Route path="/covid/decretosestaduais" component={DecretosEstaduais} />
      <Route path="/covid/decretosmunicipais" component={DecretosMunicipais} />
      <Route path="/covid/acoes" component={Acoes} />
      <Route path="/covid/ultimasnoticias" component={UltimasNoticias} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
