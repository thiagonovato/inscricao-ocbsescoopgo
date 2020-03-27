import { takeLatest, call, put, all, take } from "redux-saga/effects";
import { toast } from "react-toastify";

import { getNoticiasSuccess, getNoticiasFailure } from "./actions";

import { rsf } from "../../../config/Firebase";

export function* getNoticias() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "noticias");

    let noticias = [];
    snapshot.forEach(doc => {
      noticias.push({
        id: doc.id,
        ...doc.data()
      });
    });

    yield put(getNoticiasSuccess(noticias));
  } catch (e) {
    toast.error(`Erro...`);
  }
}

export default all([takeLatest("@noticias/GET_NOTICIAS_REQUEST", getNoticias)]);
