import { assignId } from '../../src/utilities/index';

describe('assignId', () => {
  it('will assign an id (optimally)', () => {
    const array = [
      { id: 0 },
      { id: 1 }
    ];
    const initialId = 2;
    expect(assignId(array, initialId)).toEqual(2);
  });
  it('will assign an id (normally)', () => {
    const array = [
      { id: 0 },
      { id: 2 }
    ];
    const initialId = 2;
    expect(assignId(array, initialId)).toEqual(3);
  });

  it('will assign an id (suboptimally)', () => {
    const array = [
      { id: 0 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ];
    const initialId = 2;
    expect(assignId(array, initialId)).toEqual(5);
  });
});
