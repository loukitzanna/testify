import { assignId } from './index';

test('will assign an id (optimally)', () => {
  const array = [
    { id: 0 },
    { id: 1 }
  ];
  const initialId = 2;
  expect(assignId(array, initialId)).toBe(2);
});
test('will assign an id (normally)', () => {
  const array = [
    { id: 0 },
    { id: 2 }
  ];
  const initialId = 2;
  expect(assignId(array, initialId)).toBe(3);
});

test('will assign an id (suboptimally)', () => {
  const array = [
    { id: 0 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  const initialId = 2;
  expect(assignId(array, initialId)).toBe(5);
});
