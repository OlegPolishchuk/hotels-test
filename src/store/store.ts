import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { userReducer, appReducer } from 'store/reducers';
import { rootSaga } from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  appReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
