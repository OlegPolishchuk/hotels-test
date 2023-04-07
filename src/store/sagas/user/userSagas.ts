import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

import { removeUserFromLocalStorage, setUserToLocalStorage } from 'services';
import { userActions } from 'store/reducers';
import { LoginFormData } from 'types';

export function* watcherLoginUser(): Generator {
  yield takeEvery(loginUser.type, workerLoginUser);
  yield takeLatest(logoutUser.type, workerLogoutUser);
}

export const loginUser = createAction<LoginFormData>('user/LOGIN_USER');
export const logoutUser = createAction('user/LOGOUT_USER');

function* workerLoginUser(action: PayloadAction<LoginFormData>): Generator {
  const { login } = action.payload;

  yield call(() => setUserToLocalStorage(login));
  yield put(userActions.setUser(login));
}

function* workerLogoutUser(): Generator {
  yield call(() => removeUserFromLocalStorage());
  yield put(userActions.removeUser());
}
