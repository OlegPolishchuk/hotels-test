import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Hotel } from 'types';

interface InitialState {
  hotels: Hotel[];
}

const initialState: InitialState = {
  hotels: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addHotel: (state, action: PayloadAction<Hotel>) => {
      state.hotels.push(action.payload);
    },
    removeHotel: (state, action: PayloadAction<number>) => {
      state.hotels = state.hotels.filter(hotel => hotel.hotelId !== action.payload);
    },
  },
});

export const { reducer: favoritesReducer, actions: favoritesActions } = favoritesSlice;
