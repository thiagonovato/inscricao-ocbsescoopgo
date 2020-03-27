import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Route from "./Route";

// Importando as páginas
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import Noticias from "../pages/AdminNoticias";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} auth />
        <Route path="/adm/noticias" component={Noticias} isPrivate />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}
