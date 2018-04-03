import { listReducer } from '../../src/reducers/listReducer';
import { ADD_ITEM, DELETE_ITEM } from '../../src/constants';

const ITEM = {
  id: 1,
  text: 'something'
};

describe('listReducer', () => {
  it('add items to store', () => {
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

    expect(listReducer(before, action)).toEqual(after);
  });

  it('remove items from store', () => {
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
    expect(listReducer(before, action)).toEqual(after);
  });
});