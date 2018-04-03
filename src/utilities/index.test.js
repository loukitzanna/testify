import test from 'ava';
import { assignId } from './index';

test('will assign an id (optimally)', (t) => {
  const array = [
    { id: 0 },
    { id: 1 }
  ];
  const initialId = 2;
  t.is(assignId(array, initialId), 2);
});
test('will assign an id (normally)', (t) => {
  const array = [
    { id: 0 },
    { id: 2 }
  ];
  const initialId = 2;
  t.is(assignId(array, initialId), 3);
});

test('will assign an id (suboptimally)', (t) => {
  const array = [
    { id: 0 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  const initialId = 2;
  t.is(assignId(array, initialId), 5);
});
