import React from "react";
import { Switch } from "react-router";
import Route from "./Route";

// Importando as páginas
import Form from "../pages/Form";
import SignIn from "../pages/SignIn";
import Noticias from "../pages/AdminNoticias";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/signin" component={SignIn} auth />
      <Route path="/adm/noticias" component={Noticias} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
