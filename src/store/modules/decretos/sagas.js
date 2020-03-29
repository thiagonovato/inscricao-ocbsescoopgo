import { takeLatest, call, put, all, take } from "redux-saga/effects";
import { toast } from "react-toastify";

import { getDecretosSuccess } from "./actions";

import { rsf } from "../../../config/Firebase";

export function* getDecretos() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "decretos");

    let data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    yield put(getDecretosSuccess(data));
  } catch (e) {
    toast.error(`Erro...`);
  }
}

export default all([takeLatest("@decretos/GET_DECRETOS_REQUEST", getDecretos)]);
