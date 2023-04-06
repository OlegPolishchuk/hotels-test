import { RootState } from 'store/store';

export const selectLocation = (state: RootState): string => state.filterReducer.location;
