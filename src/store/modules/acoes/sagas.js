import { takeLatest, call, put, all, take } from "redux-saga/effects";
import { toast } from "react-toastify";

import { getAcoesSuccess } from "./actions";

import { rsf } from "../../../config/Firebase";

export function* getAcoes() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "acoes");

    let data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    yield put(getAcoesSuccess(data));
  } catch (e) {
    toast.error(`Erro...`);
  }
}

export default all([takeLatest("@acoes/GET_ACOES_REQUEST", getAcoes)]);
