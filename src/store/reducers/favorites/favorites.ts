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

      const index = state.hotels.findIndex(
        ({ hotelId, checkIn, daysCount, priceAvg }: FavoriteHotel) => {
          return (
            hotelId === comparable.hotelId &&
            checkIn === comparable.checkIn &&
            daysCount === comparable.daysCount &&
            priceAvg === comparable.priceAvg
          );
        },
      );

      state.hotels.splice(index, 1);
    },
  },
});

export const { reducer: favoritesReducer, actions: favoritesActions } = favoritesSlice;
