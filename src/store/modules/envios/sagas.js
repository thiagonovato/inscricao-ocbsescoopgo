import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import { setEnviosSuccess } from "./actions";

import { rsf } from "../../../config/Firebase";

export function* setEnvios(data) {
  try {
    let { obj } = data.payload;

    yield call(rsf.firestore.addDocument, "envios", obj);

    yield put(setEnviosSuccess());
    toast.success("Enviado com sucesso. Obrigado!");
  } catch (e) {
    toast.error(`Erro...`);
  }
}

export default all([takeLatest("@envios/SET_ENVIOS_REQUEST", setEnvios)]);
