import { ADD_ITEM, DELETE_ITEM } from '../../src/constants';
import { add, del } from '../../src/actions/index';

const ITEM = {
  text: 'asdf',
  id: 1
};

describe('Actions', () => {
  describe('Add Item', () => {
    it('dispatches ADD_ITEM', () => {
      expect(add(ITEM)).toEqual({
        type: ADD_ITEM,
        item: ITEM
      });
    });
  });
  describe('Delete Item', () => {
    it('dispatches DELETE_ITEM', () => {
      expect(del(ITEM)).toEqual({
        type: DELETE_ITEM,
        item: ITEM
      });
    });
  });
});
