# vue3-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





# ES7
1. Array.prototype.includes()

``` javascript
[1].includes(1); // true

```
2. 指数操作符
``` javascript
2**10; // 1024

```

# ES8

1. async/await
2. Object.values()
3. Object.entries()
``` javascript
Object.entries({a: 1, b: 2, c: 3}); // [["a", 1], ["b", 2], ["c", 3]]

```
4. String padding
``` javascript
// padStart
'hello'.padStart(10); // "     hello"
// padEnd
'hello'.padEnd(10) // "hello     "

```
5. 函数参数列表结尾允许逗号
6. Object.getOwnPropertyDescriptors()
``` 
获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。
```
7. SharedArrayBuffer对象

```javascript
SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，
/**
 * 
 * @param {*} length 所创建的数组缓冲区的大小，以字节(byte)为单位。  
 * @returns {SharedArrayBuffer} 一个大小指定的新 SharedArrayBuffer 对象。其内容被初始化为 0。
 */
new SharedArrayBuffer(10)

```
8. Atomics
``` 
Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。

```

# ES9（2018）

1. 异步迭代
    await可以和for...of循环一起使用，以串行的方式运行异步操作

  ``` javascript
  async function process(array) {
    for await (let i of array) {
   // doSomething(i);
    }
  }
  ```

2. Promise.finally()

  ``` javascript
  Promise.resolve().then().catch(e => e).finally();
  ```

  

3. Rest/Spread 属性
``` javascript
  const values = [1, 2, 3, 5, 6];
  console.log( Math.max(...values) ); // 6
```

4. 正则表达式命名捕获组

``` javascript
  const reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
  const match = reg.exec('2021-02-23');
```

5. 正则表达式反向断言

``` javascript
  (?=p)、(?<=p)  p 前面(位置)、p 后面(位置)
  (?!p)、(?<!p>) 除了 p 前面(位置)、除了 p 后面(位置)
```

6. 正则表达式dotAll模式
    正则表达式中点.匹配除回车外的任何单字符，标记s改变这种行为，允许行终止符的出现

  ``` javascript
  /hello.world/.test('hello\nworld'); // false
  ```
  ES10（2019）

7. Array.flat()和Array.flatMap()

``` javascript
  flat()
  [1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
  flatMap()
  [1, 2, 3, 4].flatMap(a => [a**2]); // [1, 4, 9, 16]
```

8. String.trimStart()和String.trimEnd()
    去除字符串首尾空白字符
  ```

9. String.prototype.matchAll
  matchAll（）为所有匹配的匹配对象返回一个迭代器
  
  ``` javascript
  const raw_arr = 'test1  test2  test3'.matchAll((/t(e)(st(\d?))/g));
  const arr = [...raw_arr];
  ```

10. Symbol.prototype.description
    只读属性，回 Symbol 对象的可选描述的字符串。

  ``` javascript
  Symbol('description').description; // 'description'
  ```

11. Object.fromEntries()
      返回一个给定对象自身可枚举属性的键值对数组
      // 通过 Object.fromEntries， 可以将 Map 转化为 Object:

   ``` javascript
   const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
   console.log(Object.fromEntries(map)); // { foo: "bar", baz: 42 }
   ```

12. 可选 Catch
# ES11（2020）

1. Nullish coalescing Operator(空值处理)
   表达式在 ?? 的左侧 运算符求值为undefined或null，返回其右侧。
   
   ``` javascript

let user = {
    u1: 0,
    u2: false,
    u3: null,
    u4: undefined
    u5: '',
}
let u2 = user.u2 ?? '用户2'  // false
let u3 = user.u3 ?? '用户3'  // 用户3
let u4 = user.u4 ?? '用户4'  // 用户4
let u5 = user.u5 ?? '用户5'  // ''
```
2. Optional chaining（可选链）
?.用户检测不确定的中间节点
​``` javascript
let user = {}
let u1 = user.childer.name // TypeError: Cannot read property 'name' of undefined
let u1 = user.childer?.name // undefined
```
3. Promise.allSettled
返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果

``` javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
const promise4 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
const promiseList = [promise1,promise2,promise3, promise4]
Promise.allSettled(promiseList)
.then(values=>{
    console.log(values)
});
```
4. import()
按需导入
```
5. 新基本数据类型BigInt
任意精度的整数
```
6. globalThis
浏览器：window
worker：self
node：global

# ES12
1. String.prototype.replaceAll()
2. Promise.any
3. 带有 && 运算符的逻辑赋值运算符
``` javascript
var x = 1;
var y = 2;
x &&= y;
console.log(x); // 2

```
4. 带有||的运算符逻辑赋值运算符
``` javascript
let num1
let num2 = 10
num1 ||= num2
console.log(num1);

```
5. 带有?? 运算符的逻辑赋值运算符
``` javascript
let num1
let num2 = 10
num1 ??= num2
console.log(num1);

```
6. 数值分隔符

``` javascript
let x = 100_000; // 100000
// 数值分隔符也适用于BigInt数字
const trillion = 1000_000_000_000n;
console.log(trillion.toString()); // "1000000000000"
// 分隔符仅出于可读性目的。因此，它可以放置在数字中的任何位置
const amount = 178_00;
console.log(amount.toString()); // "17800"


```