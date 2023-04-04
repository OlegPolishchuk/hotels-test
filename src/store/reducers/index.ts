import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isUserAuth: boolean;
  isLoading: boolean;
  isInitialise: boolean;
}

const initialState: InitialState = {
  isInitialise: false,
  isLoading: true,
  isUserAuth: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startInitialize: state => {
      state.isLoading = true;
    },
    initializeSuccess: state => {
      state.isInitialise = true;
      state.isLoading = false;
    },

    initializeReject: state => {
      state.isInitialise = false;
      state.isLoading = false;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { initializeSuccess, initializeReject, startInitialize } = appSlice.actions;
