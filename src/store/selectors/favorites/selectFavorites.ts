import { RootState } from 'store/store';
import { FavoriteHotel } from 'types';

export const selectFavorites = (state: RootState): FavoriteHotel[] =>
  state.favoritesReducer.hotels;
