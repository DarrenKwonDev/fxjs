# rxjs  

## 함수형 프로그래밍을 위한 코드들.  
custom funtion => 📁 _fxjs 폴더  
rambda => 📁 _rambda 폴더  
lodash => 📁 _lodash 폴더  

## 보통 함수형 프로그래밍에선...

1. flatten, flatMap 등으로 정제한 후, map, filter 등으로 조작한후 take, reduce로 결과를 내는 꼴로 작성합니다.  


```javascript
go(
    obj,
    L.flatten,
    L.filter(a => a > 1000),
    L.map(a => a * a),
    take(4),
    reduce((acc, cur) => acc + cur),
    console.log
)
```


## inspired by
함수형 자바스크립트 프로그래밍(https://github.com/indongyoo/functional-javascript-01/blob/master/fx.js)    
Do it! 타입스크립트 프로그래밍  

