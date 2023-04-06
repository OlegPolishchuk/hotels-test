import { RootState } from 'store/store';
import { Hotel } from 'types';

export const selectFavorites = (state: RootState): Hotel[] =>
  state.favoritesReducer.hotels;
