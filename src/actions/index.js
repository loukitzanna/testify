import { ADD_ITEM, DELETE_ITEM } from '../constants';

export const add = (item) => ({
  type: ADD_ITEM,
  item,
});

export const del = (item) => ({
  type: DELETE_ITEM,
  item,
});


