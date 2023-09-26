import { FilterType } from './const.js';

export const generateFilter = () => Object.entries(FilterType).map(
  ([index, filterName]) => ({
    key: index,
    name: filterName,
    count: 99
  }),
);
