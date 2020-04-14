import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { setEnviosSuccess } from './actions';

import { rsf } from '../../../config/Firebase';

export function* subscription(data) {
  let { payload } = data;
  let toastId = null;

  try {
    toastId = toast('Aguarde...', { type: toast.TYPE.INFO, autoClose: false });

    yield call(rsf.firestore.addDocument, 'subscription', payload);

    // yield put(setEnviosSuccess());
    toast.update(toastId, {
      render: 'Inscrição efetuada com sucesso.',
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
    });
  } catch (e) {
    toast.update(toastId, {
      render: 'Ocorreu um erro. Tente novamente.',
      type: toast.TYPE.ERROR,
      autoClose: 5000,
    });
  }
}

export default all([
  takeLatest('@subscription/SUBSCRIPTION_REQUEST', subscription),
]);
