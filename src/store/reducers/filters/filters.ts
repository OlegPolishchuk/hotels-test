import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { RequestParams } from 'types';

const initialState: RequestParams = {
  location: 'Москва',
  checkIn: dayjs().format('YYYY-MM-DD'),
  checkOut: '1',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<RequestParams>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
