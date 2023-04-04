import { RootState } from 'store/store';

export const selectIsAppLoading = (state: RootState): boolean => state.app.isLoading;
