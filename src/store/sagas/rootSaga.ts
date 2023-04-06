import { fork } from 'redux-saga/effects';

import { watcherHotels } from 'store/sagas/hotels';
import { initializeApp } from 'store/sagas/initialize';
import { watcherLoginUser } from 'store/sagas/user';

export function* rootSaga(): Generator {
  yield fork(initializeApp);
  yield fork(watcherLoginUser);
  yield fork(watcherHotels);
}
