import { isIterable, impMap, impFilter, find, join, filter, go, map, pipe, reduce, oldPipe, currify, range, take } from './_fxjs';
import { L } from './_fxjs';

const a = L.flatten([
  [1, 2, 3],
  [4, 5, [6, 7, 8]],
]);
const b = L.deepFlatten([
  [1, 2, 3],
  [4, 5, [6, 7, 8]],
]);
