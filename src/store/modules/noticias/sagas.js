import { takeLatest, call, put, all, take } from "redux-saga/effects";
import { toast } from "react-toastify";

import { getNoticiasSuccess } from "./actions";

import { rsf } from "../../../config/Firebase";

export function* getNoticias() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "noticias");

    let data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    yield put(getNoticiasSuccess(data));
  } catch (e) {
    toast.error(`Erro...`);
  }
}

export default all([takeLatest("@noticias/GET_NOTICIAS_REQUEST", getNoticias)]);
