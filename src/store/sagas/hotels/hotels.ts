import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, put, call } from 'redux-saga/effects';

import { API } from 'api/api';
import { hotelsActions, initAppActions } from 'store/reducers';
import { RequestParams } from 'types';

export const fetchHotels = createAction<RequestParams>('hotels/FETCH_HOTELS');

export function* watcherHotels(): Generator {
  yield takeEvery(fetchHotels, workerFetchHotels);
}

function* workerFetchHotels(action: PayloadAction<RequestParams>): Generator {
  try {
    const hotels = yield call(() => API.fetchHotels(action.payload));

    yield put(hotelsActions.setHotels(hotels));
  } catch (e) {
    yield put(initAppActions.setError(e));
  }
}
