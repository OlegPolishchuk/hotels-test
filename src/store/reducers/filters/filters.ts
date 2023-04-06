import { createSlice } from '@reduxjs/toolkit';

import { RequestParams } from 'types';

const initialState: RequestParams = {
  location: 'Москва',
  checkIn: '2023-04-06',
  checkOut: '2023-04-07',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { reducer: filterReducer, actions: filterActions } = filterSlice;
