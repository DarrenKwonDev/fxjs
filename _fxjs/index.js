/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const isIterable = a => a && a[Symbol.iterator];

export const map = (f, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');
  let arr = [];
  for (const value of iter) {
    arr.push(f(value));
  }
  return arr;
};

export const filter = (f, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');
  let arr = [];
  for (const value of iter) {
    if (f(value)) arr.push(value);
  }
  return arr;
};

export const reduce = (f, acc, iter) => {
  // 인자가 2개만 주어졌을 때, well-formed iterable을 일단 한 번 next로 소비한 후에 acc로 설정
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const value of iter) {
    acc = f(acc, value);
  }
  return acc;
};

// lazy
