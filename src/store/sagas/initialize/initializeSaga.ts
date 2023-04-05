import { put, delay } from 'redux-saga/effects';

import { getUserFromLocalStorage } from 'services';
import { initAppActions, userActions } from 'store/reducers';

const DELAY = 1000;

export function* initializeAppSaga(): Generator {
  yield delay(DELAY);
  const user = (yield getUserFromLocalStorage()) as string;

  yield put(userActions.setUser(user));
  yield put(initAppActions.initializeSuccess());
}
