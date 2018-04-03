import test from 'ava';
import { assignId } from './index';

test('will assign an id (optimally)', (t) => {
  const array = [
    { id: 0 },
    { id: 1 }
  ];
  const initialId = 2;
  t(assignId(array, initialId), 2);
});
test.skip('will assign an id (normally)', () => {
  const array = [
    { id: 0 },
    { id: 2 }
  ];
  const initialId = 2;
  expect(assignId(array, initialId)).toBe(3);
});

test.skip('will assign an id (suboptimally)', () => {
  const array = [
    { id: 0 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  const initialId = 2;
  expect(assignId(array, initialId)).toBe(5);
});
