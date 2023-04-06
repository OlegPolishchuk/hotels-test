import { RootState } from 'store/store';

export const selectCheckOut = (state: RootState): string => state.filterReducer.checkOut;
