import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FavoriteHotel } from 'types';

interface InitialState {
  hotels: FavoriteHotel[];
}

const initialState: InitialState = {
  hotels: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addHotel: (state, action: PayloadAction<FavoriteHotel>) => {
      state.hotels.push(action.payload);
    },
    removeHotel: (state, action: PayloadAction<FavoriteHotel>) => {
      const comparable = action.payload;

      state.hotels = state.hotels.filter(
        ({ hotelId, checkIn, daysCount }: FavoriteHotel) =>
          hotelId !== comparable.hotelId &&
          checkIn === comparable.checkIn &&
          daysCount === comparable.daysCount,
      );
    },
  },
});

export const { reducer: favoritesReducer, actions: favoritesActions } = favoritesSlice;
