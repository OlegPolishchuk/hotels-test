import { RootState } from 'store/store';

export const selectCheckIn = (state: RootState): string => state.filterReducer.checkIn;
