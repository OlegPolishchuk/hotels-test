import { Hotel } from 'types/Hotel';

export interface FavoriteHotel extends Hotel {
  checkIn: string;
  daysCount: string;
}
