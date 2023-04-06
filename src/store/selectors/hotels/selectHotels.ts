import { RootState } from 'store/store';
import { Hotel } from 'types';

export const selectHotels = (state: RootState): Hotel[] => state.hotelsReducer.hotels;
