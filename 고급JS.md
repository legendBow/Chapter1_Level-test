# JavaScript

---

### 문제 1 (중급)

**다음 중 DOM 요소를 선택하는 방법으로 가장 성능이 좋은 것은?**

a) `document.getElementsByTagName('div')[0]`  
b) `document.querySelector('div')`  
c) `document.getElementById('myDiv')`  
d) `document.querySelectorAll('div')[0]`

---

### 문제 2 (중급)

**이벤트 버블링을 중단시키는 메서드는?**

a) `event.preventDefault()`  
b) `event.stopPropagation()`  
c) `event.stopImmediatePropagation()`  
d) `event.cancelBubble = true`

---

### 문제 3 (중급)

**다음 코드의 출력 결과는?**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

a) 0, 1, 2  
b) 3, 3, 3  
c) 1, 2, 3  
d) undefined, undefined, undefined

---

### 문제 4 (중급)

**let과 var의 차이점으로 틀린 것은?**

a) let은 블록 스코프를 가진다  
b) let은 호이스팅되지 않는다  
c) let은 재선언이 불가능하다  
d) let은 temporal dead zone을 가진다

---

### 문제 5 (중급)

**다음 중 깊은 복사(deep copy)를 수행하는 방법은?**

a) `Object.assign({}, obj)`  
b) `{...obj}`  
c) `JSON.parse(JSON.stringify(obj))`  
d) `obj.slice()`

---

### 문제 6 (중급)

**Promise의 상태가 아닌 것은?**

a) pending  
b) fulfilled  
c) rejected  
d) resolved

---

### 문제 7 (중급)

**다음 중 falsy 값이 아닌 것은?**

a) `0`  
b) `""`  
c) `[]`  
d) `null`

---

### 문제 8 (중급)

**다음 코드의 결과는?**

```javascript
console.log(typeof null);
console.log(typeof undefined);
```

a) "null", "undefined"  
b) "object", "undefined"  
c) "null", "null"  
d) "object", "object"

---

### 문제 9 (중급)

**클로저(Closure)에 대한 설명으로 올바른 것은?**

a) 함수가 정의된 스코프의 변수에 접근할 수 있는 것  
b) 함수가 호출된 스코프의 변수에 접근할 수 있는 것  
c) 전역 변수에만 접근할 수 있는 것  
d) 지역 변수에만 접근할 수 있는 것

---

### 문제 10 (중급)

**다음 중 배열의 마지막 요소를 제거하고 반환하는 메서드는?**

a) `shift()`  
b) `pop()`  
c) `slice(-1)`  
d) `splice(-1, 1)`

---

### 문제 11 (중급)

**다음 코드의 출력은?**

```javascript
const obj = { a: 1 };
const arr = [obj];
const newArr = [...arr];
newArr[0].a = 2;
console.log(obj.a);
```

a) 1  
b) 2  
c) undefined  
d) 에러 발생

---

### 문제 12 (중급)

**async/await에 대한 설명으로 틀린 것은?**

a) async 함수는 항상 Promise를 반환한다  
b) await는 async 함수 내에서만 사용할 수 있다  
c) await는 Promise가 resolve될 때까지 기다린다  
d) async/await는 동기적으로 실행된다

---

### 문제 13 (중급)

**다음 중 원시 타입(primitive type)이 아닌 것은?**

a) `string`  
b) `number`  
c) `boolean`  
d) `array`

---

### 문제 14 (중급)

**이벤트 위임(Event Delegation)의 장점이 아닌 것은?**

a) 메모리 사용량 감소  
b) 동적으로 추가된 요소에도 이벤트 적용  
c) 이벤트 처리 속도 향상  
d) 코드 복잡성 감소

---

### 문제 15 (중급)

**다음 코드의 결과는?**

```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length);
```

a) 3  
b) 4  
c) undefined  
d) 에러 발생

---

### 문제 16 (고급)

**다음 코드의 출력은?**

```javascript
console.log(1 + "1");
console.log("1" + 1);
console.log(1 - "1");
console.log("1" - 1);
```

a) 2, 2, 0, 0  
b) "11", "11", 0, 0  
c) 2, "11", 0, 0  
d) "11", "11", NaN, NaN

---

### 문제 17 (고급)

**프로토타입 체인에 대한 설명으로 올바른 것은?**

a) 객체는 자신의 프로퍼티만 접근할 수 있다  
b) 프로토타입 체인은 무한히 연결될 수 있다  
c) 모든 객체의 프로토타입 체인은 Object.prototype에서 끝난다  
d) 프로토타입 체인은 런타임에 변경할 수 없다

---

### 문제 18 (고급)

**다음 중 this 바인딩이 화살표 함수와 일반 함수에서 다르게 동작하는 상황은?**

a) 전역 스코프에서 호출  
b) 객체 메서드로 호출  
c) 생성자로 호출  
d) 모든 상황에서 다르다

---

### 문제 19 (고급)

**다음 코드의 출력은?**

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log(results.length)
);
```

a) 1  
b) 2  
c) 3  
d) 에러 발생

---

### 문제 20 (고급)

**WeakMap과 Map의 차이점으로 틀린 것은?**

a) WeakMap의 키는 반드시 객체여야 한다  
b) WeakMap은 iterable하지 않다  
c) WeakMap은 가비지 컬렉션에 영향을 주지 않는다  
d) WeakMap은 크기를 확인할 수 없다

---

### 문제 21 (고급)

**다음 코드에서 MyClass의 인스턴스를 생성하는 올바른 방법은?**

```javascript
class MyClass {
  #privateField = "private";

  getPrivate() {
    return this.#privateField;
  }
}
```

a) `const instance = MyClass()`  
b) `const instance = new MyClass()`  
c) `const instance = MyClass.create()`  
d) `const instance = Object.create(MyClass)`

---

### 문제 22 (고급)

**다음 코드의 출력은?**

```javascript
const obj = {
  name: "test",
  getName: function () {
    return this.name;
  },
};

const getName = obj.getName;
console.log(getName());
```

a) 'test'  
b) undefined  
c) null  
d) 에러 발생

---

### 문제 23 (고급)

**JavaScript 엔진의 이벤트 루프에서 다음 중 가장 높은 우선순위를 가지는 것은?**

a) setTimeout 콜백  
b) Promise.then() 콜백  
c) requestAnimationFrame 콜백  
d) setImmediate 콜백

---

### 문제 24 (고급)

**다음 중 모듈 시스템에 대한 설명으로 틀린 것은?**

a) ES6 모듈은 정적으로 분석된다  
b) CommonJS는 동적으로 모듈을 로드할 수 있다  
c) import문은 호이스팅된다  
d) export default는 여러 번 사용할 수 있다

---

### 문제 25 (고급)

**다음 코드의 출력은?**

```javascript
const sym1 = Symbol("test");
const sym2 = Symbol("test");
console.log(sym1 === sym2);
console.log(Symbol.for("test") === Symbol.for("test"));
```

a) true, true  
b) false, false  
c) true, false  
d) false, true

---

### 문제 26 (고급)

**Proxy 객체에 대한 설명으로 올바른 것은?**

a) 객체의 기본 동작을 가로채서 재정의할 수 있다  
b) 모든 JavaScript 값에 사용할 수 있다  
c) 성능 오버헤드가 없다  
d) IE에서 완전히 지원된다

---

### 문제 27 (고급)

**다음 코드에서 메모리 누수가 발생할 수 있는 이유는?**

```javascript
function createHandler() {
  const data = new Array(1000000).fill("data");

  return function () {
    console.log("handled");
  };
}

const handler = createHandler();
```

a) 배열이 너무 크다  
b) 클로저로 인해 data가 가비지 컬렉션되지 않는다  
c) 함수가 반환되지 않는다  
d) 메모리 누수가 발생하지 않는다

---

### 문제 28 (고급)

**다음 중 Generator 함수의 특징이 아닌 것은?**

a) function\* 문법을 사용한다  
b) yield 키워드로 값을 반환한다  
c) 이터레이터 프로토콜을 구현한다  
d) 한 번 실행되면 다시 실행할 수 없다

---

### 문제 29 (고급)

**다음 코드의 출력은?**

```javascript
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length);
console.log(arr[5]);
```

a) 4, undefined  
b) 11, undefined  
c) 4, null  
d) 11, null

---

### 문제 30 (고급)

**다음 중 Web API가 아닌 것은?**

a) `fetch()`  
b) `localStorage`  
c) `setTimeout()`  
d) `Object.assign()`

---

---
