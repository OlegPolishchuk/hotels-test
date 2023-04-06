import React, { ReactElement } from 'react';

import { Star } from 'shared/components';

const MAX_RATING = 5;
const MIN_RATING = 0;

interface Props {
  rating: number;
}
export const Rating = ({ rating }: Props): ReactElement => {
  let updatedRating: number = rating;

  if (rating < MIN_RATING) updatedRating = MIN_RATING;
  if (rating > MAX_RATING) updatedRating = MIN_RATING;

  const activeClassName = (index: number): string =>
    index + 1 <= updatedRating ? 'active' : '';

  const stars = Array.from({ length: 5 }).map((star, index) => (
    <Star key={index} className={activeClassName(index)} />
  ));

  return <div>{stars}</div>;
};
