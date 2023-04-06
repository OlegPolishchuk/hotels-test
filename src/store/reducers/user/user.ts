import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  userName: string;
}

const initialState: InitialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
