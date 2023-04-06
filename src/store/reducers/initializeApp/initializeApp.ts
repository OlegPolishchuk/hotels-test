import { createSlice } from '@reduxjs/toolkit';

import { AppStatus } from 'types';

interface InitialState {
  // isUserAuth: boolean;
  status: AppStatus;
  isInitialise: boolean;
  error: string;
}

const initialState: InitialState = {
  isInitialise: false,
  status: 'loading',
  error: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeSuccess: state => {
      state.isInitialise = true;
      state.status = 'success';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { reducer: appReducer, actions: initAppActions } = appSlice;
