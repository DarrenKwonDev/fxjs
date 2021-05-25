/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const isIterable = a => a && a[Symbol.iterator];

//** currify, multipleCurrify */
// add(1, 2)를 add(1)(2) 꼴로 변경 가능.
// 함수 내 인자가 2개 이상일 경우(_length > 0) 첫 인자를 함수에 넣고 재귀적으로 다시 평가 반복. 1개만 남을 때까지 재귀적으로 돌리기
export const currify = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

// add(1, 2, 3)을 add(1, 2)(3), add(1)(2)(3) 꼴로 변경 가능
export const multipleCurrify = f =>
  function curried(...args) {
    return args.length >= f.length ? f(...args) : (...args2) => curried(...args, ...args2);
  };

//** eager valuation functions */
export const map = currify((f, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');
  let arr = [];
  for (const value of iter) {
    arr.push(f(value));
  }
  return arr;
});

export const filter = currify((f, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');
  let arr = [];
  for (const value of iter) {
    if (f(value)) arr.push(value);
  }
  return arr;
});

export const reduce = currify((f, acc, iter) => {
  // 인자가 2개만 주어졌을 때, well-formed iterable을 일단 한 번 next로 소비한 후에 acc로 설정
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const value of iter) {
    acc = f(acc, value);
  }
  return acc;
});

//** go and pipe functions */
export const go = (...args) => reduce((a, f) => f(a), args);

// 함수 연속 실행. 이후 커링으로 전달된 변수만 적용
export const oldPipe = (...fs) => a => go(a, ...fs);

// 첫 함수에 커링으로 전달된 변수 적용한 후 순차적으로 함수 연속 실행
export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

//** util 함수 */
export const range = l => {
  let i = -1;
  let arr = [];
  while (++i < l) {
    arr.push(i);
  }
  return arr;
};

export const take = (l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) {
      return res;
    }
  }
};

//** Lazy */
export const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};
