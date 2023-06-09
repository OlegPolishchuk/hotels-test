import { RootState } from 'store/store';

export const selectIsUserAuth = (state: RootState): boolean =>
  !!state.userReducer.userName;
