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

export const take = currify((l, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');

  let res = [];
  let cur;
  iter = iter[Symbol.iterator](); // iterable에서 iterator로

  // iter.next().done이 아닐때까지.  + cur 변수에 iter.next() 담기
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

export const join = currify((sep, iter) => {
  if (!isIterable(iter)) throw Error('not iterable');
  return reduce((acc, cur) => `${acc}${sep}${cur}`, iter);
});

export const takeAll = take(Infinity);

//** Lazy */
// map, filter와 같이 변환적인 함수는 지연 평가가 가능하다.
// 그러나 결과를 만드는 함수인 take나 reduce는 지연 평가가 불가능하다.
// map, filter를 반복하다가 reduce를 통해서 값을 도출하겠다.
// L을 썼다면 take나 reduce를 통해서 갯수를 제한해야 결과물을 냄.
// 이런 flow로 함수형 프로그래밍을 써야 한다고 머릿속에 있어야 함.
export const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

L.map = currify(function* (f, iter) {
  if (!isIterable(iter)) throw Error('not iterable');
  for (const value of iter) {
    yield f(value);
  }
});

L.filter = currify(function* (f, iter) {
  if (!isIterable(iter)) throw Error('not iterable');
  for (const value of iter) {
    if (f(value)) yield value;
  }
});

L.entries = function* (obj) {
  for (const key in obj) yield [key, obj[key]];
};

//** utils */
// ([a]) => a는 뭐냐면, 배열을 깨서 값만 전달하도록 함
// L.filter와 그냥 filter의 차이에 유의할 것.
export const find = (f, iter) => go(iter, L.filter(f), take(1), ([a]) => a);
export const impMap = currify(pipe(L.map, takeAll));
export const impFilter = currify(pipe(L.filter, takeAll));
