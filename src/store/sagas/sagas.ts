import { takeEvery, put } from 'redux-saga/effects';

import { initializeSuccess, startInitialize } from 'store/reducers';

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export function* workerSaga(): Generator {
  console.log('initialize');
  yield delay(2000);
  yield put(initializeSuccess());
}
export function* watchInitialiseAppSaga(): Generator {
  console.log('watchInitialiseAppSaga');
  yield takeEvery(startInitialize.type, workerSaga);
}

export default function* rootSaga(): Generator {
  console.log('rootSaga');
  yield watchInitialiseAppSaga();
}
