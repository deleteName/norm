# JavaScript

## 引用
::: tip 使用 const 定义你的所有引用；避免使用 var。
这样能够确保你不能重新赋值你的引用，否则可能导致错误或者产生难以理解的代码。
:::
``` js
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```
::: tip 如果你必须重新赋值你的引用， 使用 let 代替 var。
let 是块级作用域，而不像 var 是函数作用域。
:::

``` js
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

## 对象
::: tip 在创建具有动态属性名称的对象时使用计算属性名。
它允许你在一个地方定义对象的所有属性。
:::

``` js
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

::: tip 使用属性值的缩写。
它的写法和描述较短。
:::

``` js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

::: tip 在对象声明的时候将简写的属性进行分组。
这样更容易的判断哪些属性使用的简写。
:::

``` js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

::: tip 只使用引号标注无效标识符的属性。
这样更容易阅读。 它提升了语法高亮显示，并且更容易通过许多 JS 引擎优化。
:::

``` js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```

::: tip 使用对象扩展操作符，而不是用 Object.assign 浅拷贝一个对象。
使用对象的 rest 操作符来获得一个具有某些属性的新对象。
:::

``` js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // 变异的 `original` ಠ_ಠ
delete copy.a; // 这....

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

## 数组

::: tip 数组拷贝。
使用数组展开方法 ... 来拷贝数组。
:::

``` js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

::: tip 伪数组转换。
将一个类数组对象转换成一个数组， 使用展开方法 ... 代替 Array.from。
:::

``` js
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

::: tip 对于对迭代器的映射，使用 Array.from 替代展开方法 ...。
因为它避免了创建中间数组。
:::

``` js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

::: tip 数组换行。
如果数组有多行，则在开始的时候换行，然后在结束的时候换行。
:::

``` js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

## 解构

::: tip 在访问和使用对象的多个属性的时候使用对象的解构。
解构可以避免为这些属性创建临时引用。
:::

``` js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
使用数组解构
``` js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
}
```

::: tip 对于多个返回值使用对象解构，而不是数组解构。
你可以随时添加新的属性或者改变属性的顺序，而不用修改调用方。
:::

``` js
// bad
function processInput(input) {
  // 处理代码...
  return [left, right, top, bottom];
}

// 调用者需要考虑返回数据的顺序。
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // 处理代码...
  return { left, right, top, bottom };
}

// 调用者只选择他们需要的数据。
const { left, top } = processInput(input);
```

## 字符

::: tip 定义字符。
使用单引号 '' 定义字符串。
:::

``` js
// bad
const name = "Capt. Janeway";

// bad - 模板文字应该包含插值或换行。
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```

::: tip 使行超过100个字符的字符串不应使用字符串连接跨多行写入。
断开的字符串更加难以工作，并且使代码搜索更加困难。
:::

``` js
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

::: tip 当以编程模式构建字符串时，使用字符串模板代替字符串拼接。
字符串模板为您提供了一种可读的、简洁的语法，具有正确的换行和字符串插值特性。
:::

``` js
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

## 方法
::: tip 使用命名的函数表达式代替函数声明。
函数声明是挂起的，这意味着在它在文件中定义之前，很容易引用函数。这会损害可读性和可维护性。如果您发现函数的定义是大的或复杂的，以至于它干扰了对文件的其余部分的理解，那么也许是时候将它提取到它自己的模块中了!不要忘记显式地命名这个表达式，不管它的名称是否从包含变量(在现代浏览器中经常是这样，或者在使用诸如Babel之类的编译器时)。这消除了对错误的调用堆栈的任何假设。
:::

``` js
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// 从变量引用调用中区分的词汇名称
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

::: tip Wrap立即调用函数表达式。
立即调用的函数表达式是单个单元 - 包装， 并且拥有括号调用, 在括号内, 清晰的表达式。 请注意，在一个到处都是模块的世界中，您几乎不需要一个 IIFE 。
:::

``` js
// immediately-invoked function expression (IIFE) 立即调用的函数表达式
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```

## 其他规范
[查看更多](https://github.com/BingKui/javascript-zh)


