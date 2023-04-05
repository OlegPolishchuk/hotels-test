import { createSlice } from '@reduxjs/toolkit';

import { AppStatus } from 'types';

interface InitialState {
  // isUserAuth: boolean;
  status: AppStatus;
  isInitialise: boolean;
}

const initialState: InitialState = {
  isInitialise: false,
  status: 'loading',
  // isUserAuth: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeSuccess: state => {
      state.isInitialise = true;
      state.status = 'success';
    },
  },
});

export const { reducer: appReducer, actions: initAppActions } = appSlice;
