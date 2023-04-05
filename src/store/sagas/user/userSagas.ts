import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setUserToLocalStorage } from 'services';
import { userActions } from 'store';
import { LoginFormData } from 'types';

export function* watcherLoginUser(): Generator {
  yield takeEvery('user/LOGIN_USER', workerLoginUser);
}

function* workerLoginUser(action: PayloadAction<LoginFormData>): Generator {
  const { login } = action.payload;

  yield call(() => setUserToLocalStorage(login));
  yield put(userActions.setUser(login));
}
