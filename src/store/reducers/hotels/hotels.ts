import { createSlice } from '@reduxjs/toolkit';

import { Hotel } from 'types';

interface InitialState {
  hotels: Hotel[];
}

const initialState: InitialState = {
  hotels: [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export const { reducer: hotelsReducer, actions: hotelsActions } = hotelsSlice;
