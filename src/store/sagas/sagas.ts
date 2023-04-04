import { takeEvery } from 'redux-saga/effects';

export function* workerSaga(): Generator {
  console.log('initialize');
  yield;
}
export function* watchInitialiseAppSaga(): Generator {
  console.log('watchInitialiseAppSaga');
  yield takeEvery('app/startInitialize', workerSaga);
}

export default function* rootSaga(): Generator {
  console.log('rootSaga');
  yield watchInitialiseAppSaga();
}
