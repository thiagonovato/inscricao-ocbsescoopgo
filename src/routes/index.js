import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Importando as páginas - Auth
import SignIn from '~/pages/SignIn';
import Noticias from '~/pages/AdminNoticias';

import Main from '~/pages/Main';
import Relatorio from '~/pages/Relatorio';
import Erro404 from '~/pages/Erro404';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/relatorio' exact component={Relatorio} />
      <Route path='/signin' component={SignIn} auth />
      <Route path='/adm/noticias' component={Noticias} isPrivate />

      <Route path='/' component={Erro404} />
    </Switch>
  );
}
