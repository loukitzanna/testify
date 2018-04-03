import test from 'ava';
import { listReducer } from './listReducer';
import { ADD_ITEM, DELETE_ITEM } from '../constants';

const ITEM = {
  id: 1,
  text: 'something'
};

test('add items to store', (t) => {
  const before = {
    items: [],
  };

  const action = {
    type: ADD_ITEM,
    item: ITEM,
  };

  const after = {
    items: [
      ITEM
    ]
  };

  t.deepEqual(listReducer(before, action), after);
});

test('remove items from store', (t) => {
  const before = {
    items: [
      ITEM
    ]
  };

  const action = {
    type: DELETE_ITEM,
    item: ITEM,
  };

  const after = {
    items: [],
  };
  t.deepEqual(listReducer(before, action), after);
});
