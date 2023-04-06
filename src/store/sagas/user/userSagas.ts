import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, call } from 'redux-saga/effects';

import { setUserToLocalStorage } from 'services';
import { userActions } from 'store/reducers';
import { LoginFormData } from 'types';

export function* watcherLoginUser(): Generator {
  yield takeEvery('user/LOGIN_USER', workerLoginUser);
}

export const loginUser = createAction<LoginFormData>('user/LOGIN_USER');
export const logoutUser = createAction('user/LOGOUT_USER');

function* workerLoginUser(action: PayloadAction<LoginFormData>): Generator {
  const { login } = action.payload;

  yield call(() => setUserToLocalStorage(login));
  yield put(userActions.setUser(login));
}
