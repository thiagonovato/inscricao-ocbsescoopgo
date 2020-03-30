import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import noticias from "./noticias/sagas";
import acoes from "./acoes/sagas";
import decretos from "./decretos/sagas";
import envios from "./envios/sagas";

export default function* rootSaga() {
  return yield all([auth, user, noticias, acoes, decretos, envios]);
}
