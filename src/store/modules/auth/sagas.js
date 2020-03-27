import { eventChannel } from "redux-saga";
import { takeLatest, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import history from "../../../services/history";

import { signInSuccess, signFailure } from "./actions";

import { auth } from "../../../config/Firebase";

const errorMessages = {
  "auth/network-request-failed":
    "Erro de rede. Possivelmente você está sem acesso à internet.",
  "auth/email-already-in-use": "Email já existe.",
  "auth/user-not-found": "Usuário inexistente.",
  "auth/invalid-email": "E-mail inválido.",
  "auth/weak-password": "Senha muito fraca. Tente novamente",
  "auth/wrong-password": "Email/senha incorreto(s).",
  "auth/too-many-requests":
    "Muitas tentativas sem sucesso. Aguarde alguns instantes e tente novamente.",
  "auth/argument-error": "Campo(s) email e/ou senha vazios.",
  "auth/operation-not-allowed": "Operação não permitida."
};

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    yield auth.signInWithEmailAndPassword(email, password);

    let authCurrentUser = auth.currentUser;

    const token = yield auth.currentUser.getIdToken(true);
    const user = authCurrentUser;

    yield put(signInSuccess(token, user));

    history.push("/adm/noticias");
  } catch (e) {
    toast.error(`${errorMessages[e.code]}`);
    yield put(signFailure());
  }
}

/**
 * Função que retorna o observador do estado de autenticação do Firebase
 */
function getAuthChannel() {
  return eventChannel(emit => {
    return auth.onAuthStateChanged(user => emit({ user }));
  });
}

export function* signOut() {
  yield auth.signOut();
  // history.push("/");
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
