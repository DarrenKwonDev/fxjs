import { isIterable, impMap, impFilter, find, join, filter, go, map, pipe, reduce, oldPipe, currify, range, take } from './_fxjs';
import { L } from './_fxjs';

const users = [{ age: 32 }, { age: 31 }, { age: 27 }, { age: 25 }, { age: 37 }, { age: 28 }, { age: 29 }];

console.log(impMap(a => a + 2, [1, 2, 3]));
console.log(impFilter(a => a > 1, [1, 2, 3]));

// go(
//   users,
//   filter(a => a.age > 28),
//   console.log
// );
