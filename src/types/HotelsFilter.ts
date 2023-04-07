export interface HotelsFilter {
  order: FilterOrder;
  value: FilterValue;
}

export type FilterOrder = 'desc' | 'asc';
export type FilterValue = 'price' | 'rating' | null;
