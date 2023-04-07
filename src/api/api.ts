import { RequestParams } from 'types';

const baseURL = 'https://engine.hotellook.com/api/v2/cache.json';
const defaultLimit = 20;

export const API = {
  async fetchHotels({
    location,
    checkOut,
    checkIn,
    limit = defaultLimit,
    currency = 'rub',
  }: RequestParams) {
    const response = await fetch(
      `${baseURL}?currency=${currency}&limit=${limit}&location=${location}&checkIn=${checkIn}&checkOut=${checkOut}`,
    );

    const hotels = await response.json();

    return hotels;
  },
};
