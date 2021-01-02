# Webdev course by Andrei

### Advanced JS
* Standard: Ecmascript
* ES6
  * New cool features like let, const, arrow functions etc

### Advanced Functions
* Closures
  * Function returning a function with something passed to the inner function
* Currying
  ```js
  const multiply = (a, b) => a * b;
  const curriedMultiply = (a) => (b) => a * b;
  const multiplyBy5 = curriedMultiply(5);

  multiplyBy5(5); // 25
  ```
* Compose
  ```js
  const compose = (f, g) => (a) => f(g(a));

  const sum = (num) => num + 1;
  compose(sum, sum)(5);
  // 7
  ```

### Thing to remember
* Avoid Side effects and maintain functional purity(Get input and return output without affecting the outside world)
* The below is a side effect
```js
var a = 1;
function b() {
  a = 2; // Affecting the outside world
}
```
* Input -> Function -> Return value

### Advanced Arrays
* map, filter and reduce
* These are pure functions
* map over forEach should be preferred
```js
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
  double.push(num*2);
})

console.log('forEach', double);

// map, filter and reduce
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

const filterArray = array.filter(num => {
  return num > 5;
});

// or 
const filterArray = array.filter(num => num > 5);

const reduceArray = array.reduce((acc, num) => {
  return acc + num;
}, 0);
```

### Advanced Objects
* Reference type, Context and Instantiation 
* Context is mainly with 'this'
  * For context of 'this', check the left of the called thing
  ```js
  const object4 = {
    a: function() {
      console.log(this);
    }
  }

  object4.a() // { a: f}
  ```

### Pass by Value and Pass by Reference
* Primitive types are immutable and are passed by value
* Objects are passed by reference
* Even arrays are objects
```js
var a = 5;
var b = 6;
b++;
a // 5
b // 6
```
```js
let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1); //{name: "Yao",password: "easypeasy"}
console.log(obj2); //{name: "Yao",password: "easypeasy"}
```
* Object.assign for cloning without affecting the original
* Another way is spread operator
```js
let obj1 = {name: 'Yao', password: '123'}
let clone = Object.assign({}, obj);
let clone2 = {...obj1}
```
* Shallow cloning, only cloning the first layer
```js
let obj = {
  a: 'a',
  b: 'b',
  d: {
    deep: 'try and copy me'
  }
}
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c.deep = 'hahaha'; // this affects even the clones due to shallow cloning
console.log(obj);
console.log(clone);
console.log(clone2);

let superClone = JSON.parse(JSON.stringify(obj)); // This is deep clone
console.log(superClone);
```

### Type Coercion
* Language converting one type to another type

### ES7
* includes in Arrays and Strings
* Exponential operator **

### ES8
* padStart() and padEnd()
* Function parameters can end with trailing comma(,)
* Object.entries and Object.values
```js
const obj = {
  'username0': "Santa",
  'username1': "canta",
  'username2': "danta"
}
Object.entries(obj).forEach(value => {
  console.log(value);
})
```
* Async and Await

### ES10
* Array flat and flatMap
* formEntries and trimStart and trimEnd
* try, catch

### Advanced loops
* for of works with arrays
```js
const basket = ['apples', 'bananas']

for (item of basket) {
  console.log(item);
}
```
* for in works with objects
  * properties
* Objects are not iterable but enumerable

### Debugger using debugger

### How JS works
* What is a Program?
  * Allocate memory
  * Parse and execute
* JS engine, Memory Heap and Call Stack
* Javascript Run-Time
  * Web APIs
    * DOM
    * AJAX
    * Timeout
  * Callback Queue
    * onClick
    * onLoad
    * onDone
    * etc
  * Event Loop
* One Call stack
* Synchronous: One after the other

### Modules
* Webpack: Module bundler for ES6