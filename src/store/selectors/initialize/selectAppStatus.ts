import { RootState } from 'store/store';
import { AppStatus } from 'types';

export const selectAppStatus = (state: RootState): AppStatus => state.appReducer.status;
