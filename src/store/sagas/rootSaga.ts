import { fork } from 'redux-saga/effects';

import { initializeAppSaga } from 'store/sagas/initialize';
import { watcherLoginUser } from 'store/sagas/user';

export function* rootSaga(): Generator {
  yield fork(initializeAppSaga);
  yield fork(watcherLoginUser);
}
