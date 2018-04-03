import { ADD_ITEM, DELETE_ITEM } from '../constants';
import { add, del } from './index';

const ITEM = {
  text: 'asdf',
  id: 1
};

test('dispatches ADD_ITEM', () => {
  expect(add(ITEM)).toEqual({
    type: ADD_ITEM,
    item: ITEM
  });
});
test('dispatches DELETE_ITEM', () => {
  expect(del(ITEM)).toEqual({
    type: DELETE_ITEM,
    item: ITEM
  });
});
