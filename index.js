import { filter, map, reduce } from './_fxjs';

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
