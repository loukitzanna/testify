import test from 'ava';
import { ADD_ITEM, DELETE_ITEM } from '../constants';
import { add, del } from './index';

const ITEM = {
  text: 'asdf',
  id: 1
};

test('dispatches ADD_ITEM', (t) => {
  t.deepEqual(add(ITEM), {
    type: ADD_ITEM,
    item: ITEM
  });
});
test('dispatches DELETE_ITEM', (t) => {
  t.deepEqual(del(ITEM), {
    type: DELETE_ITEM,
    item: ITEM
  });
});
