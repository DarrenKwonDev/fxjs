import { filter, go, map, pipe, reduce, oldPipe, currify } from './_fxjs';

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
