import { filter, map, reduce } from '.';

const products = [
  { name: '반팔티', price: 15000, quantity: 1 },
  { name: '긴팔티', price: 20000, quantity: 2 },
  { name: '핸드폰 케이스', price: 15000, quantity: 3 },
  { name: '후드티', price: 30000, quantity: 4 },
  { name: '바지', price: 25000, quantity: 5 },
];

// console.log(map(a => a.name, products));
// console.log(filter(a => a.price > 20000, products));
// console.log(reduce((acc, cur) => acc + cur, [1, 2, 3]));

// go(
//   0, // 내부적으로 reduce의 첫 acc가 됨.
//   a => a + 1, // reduce 다음부터 f를 전달하여 중첩하여 적용
//   a => a + 10,
//   console.log
// );

// go(
//   products, // 내부적으로 reduce의 첫 acc가 됨.
//   products => filter(p => p.price > 20000, products), // reduce 다음부터 f를 전달하여 중첩하여 적용
//   products => map(p => p.price, products),
//   products => reduce((acc, cur) => acc + cur, products),
//   console.log
// );

// const oldPipeFunc = oldPipe(
//   a => a + 1,
//   a => a + 10,
//   console.log
// )(0);

// const pipeFunc = pipe(
//   (a, b) => a + b,
//   a => a + 1,
//   a => a + 10,
//   console.log
// )(1, 2);

// const mult = currify((a, b) => a * b);
// console.log(mult(3)(5)); // 15

// map, filter, reduce를 currify함.
// go(
//   products,
//   filter(p => p.price > 20000),
//   map(p => p.price),
//   reduce((acc, cur) => acc + cur),
//   console.log
// );

// let list = L.range(10);
// reduce가 iterable을 받기 때문에 적용 가능한 것.
// console.log(reduce((acc, cur) => acc + cur, list));

// console.time('eager');
// console.log(take(3, range(100000)));
// console.timeEnd('eager');
// console.time('lazy');
// console.log(take(3, L.range(100000)));
// console.timeEnd('lazy');

// console.log(take(5, L.range(Infinity)));

// const iter = L.map(a => a + 1, [1, 2, 3]);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// const iter = L.filter(a => a > 2, [1, 2, 3, 4, 5]);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// go(
//   range(10),
//   map(a => a + 10),
//   filter(a => a % 2),
//   take(2),
//   console.log
// );

// go(
//   L.range(10),
//   L.map(a => a + 10),
//   L.filter(a => a % 2),
//   take(2),
//   console.log
// );

// const iter = L.entries({ limit: 10, offset: 10, type: 'notice' });
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// const queryStrMaker = obj =>
//   go(
//     obj,
//     L.entries,
//     L.map(([key, value]) => `${key}=${value}`),
//     reduce((acc, cur) => `${acc}&${cur}`)
//   );

// console.log(queryStrMaker({ limit: 10, offset: 10, type: 'notice' }));

// console.log(find(a => a.age < 30, users));

// go(list, L.flatMap(map(a => a * a)), take(Infinity), console.log);

// const list = [
//     [1, 2],
//     [3, 4],
//     [5, 6, [7, [8, 9]]],
//   ];

//   console.log([...L.deepFlatten(list)]);
