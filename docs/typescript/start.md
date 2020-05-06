# 天才第一步
少年，我看你骨骼精奇，是万中无一的开发奇才，维护世界和平就靠你了，我这有本秘籍 --- 《Typescript - 秃顶路程》

## 变量类型
在js当中声明变量并不会直接标记处声明类型，这在后期的代码开发中很容易因为类型的错误导致代码无法运行，在合作开发的时候因为也不敢动前人的代码，为了让其正常运行多处都会使用隐式转换转变类型再使用。

### number
和js一样，所有数字都是number类型，无论是整数还是小数。
- 网络张三的信息：
- 年龄：18
- 身高：183
- 财力：10000000000000000
``` ts
let nowage: number = 18
let stature: number = 183
let money: number = 10000000000000000
console.log('age:number', age)
console.log('stature:number', stature) 
```

### string
用单引号，双引号引起来的都是字符串
- 张三女神菲菲
``` ts
let name: string = '菲菲'
console.log('name: string', name)
```

### boolean
常用于逻辑处理
``` ts
let loveMe: boolean = false
```

### enum
用于定义固定值
``` ts
enum animal {
    male = '雄性',
    female = '雌性'
}
```

### 混合类型
当这个值可能会有多种状况时你可以这样做, 当然，你可以后面跟着一大堆东西，number|string|boolean
``` ts
let e: number|string = 2
e = '2'
``` 

### any
在开发中可能会出现你个你未知或不确定的值，这时候你就会用到它了。
``` ts
let what: any = '100块也不给'
what = 100
what = false
```
### never
重来不会出现的值， 常用于报错抛出
``` ts
let err = () => {
    throw new Error('错误')
}
```

## 函数
- typescript有话说：
    - 函数声明以function开头
    - 函数名与变量名一样，命名规则按照标识符规则
    - 参数可有可无，逗号隔开
    - 返回信息可有可无，没有用void标识
    - 大括号中为函数体，要记住哈
- 注意-（大声BB）：
    - 在函数调用的时候，我们需要按照形参的规则传递实参
    - 有几个形参就要传递几个实参，并且每一个实参的类型要与对应的形参类型一致
### 函数定义
``` ts
/**
 * 查找小仙女
 * @param {number} arg - 当然是年龄啦
 * @returns {string} - 返回信息
 */
function serachXiaoXianNv(arg: number):string {
    return `那天阳光正好，洒在她的脸上，让我看的入迷。那年的她${age}岁。`
}
var age: number = 18
var result: string = serachXiaoXianNv(18)
console.log(result)
```
### 可选参数
来给你的女朋友添加喜好吧~
``` ts
function serachXiaoXianNv2(arg: number, stature?: string):string {
    return `你${stature}的女朋友今年已经${age}岁了，现在的你脑海满满都是她的样子，挥之不去。`
}
console.log(serachXiaoXianNv2(22, '爱吃大葱'))
```

### 默认参数
你的女朋友这次有了自带属性（胸超大），默认属性会帮助你在调用方法的时候减少传递参数，返回默认值
``` ts
function serachXiaoXianNv3(arg: number=26, stature: string='胸超大'):string {
    return `你${stature}的女朋友今年已经${age}岁了，往后余生一定要努力爱她鸭~`
}
console.log(serachXiaoXianNv3())
```

### 剩余参数
当你的函数需要支持传入更多的未知参数时可以使用剩余参数来简化你的代码
``` ts
function serachXiaoXianNv4(...xuqiu:string[]):string {
    return `好羡慕你${xuqiu.join('')}的女朋友啊，如今我爱的那个她却在别人怀里，余生就这样吧，一个人··也挺好的。`
}
console.log(serachXiaoXianNv4('26岁','大长腿','瓜子脸','A4腰'))
```

## 函数定义
这里我简单的说一下函数定义的方式吧。

### 函数声明
``` ts
function sum(n1: number, n2: number): number {
    return n1 + n2
}
```

### 函数表达式
``` ts
let sum2 = function(n1: number, n2: number): number {
    return n1 + n2
}
```
### 箭头函数
``` ts
let sum3 = (n1: number, n2: number): number => {
    return n1 + n2
}
```

## 对象
对象其实并没有很多扩展，我简单的描述一下
- 编译前
``` ts
let liuhaizhu = {
    name: '刘海柱',
    age: 32,
    saySometing: function() {
        console.log('给白傻子买瓜子去！')
    }
}
console.log(liuhaizhu.name)
liuhaizhu.saySometing()
```
- 编译后
``` js
var liuhaizhu = {
    name: '刘海柱',
    age: 32,
    saySometing: function () {
        console.log('给白傻子买瓜子去！');
    }
};
console.log(liuhaizhu.name);
liuhaizhu.saySometing();
```
是不是一模一样
## 数组
在typescript中，你可以对数组中每一位值的类型做限制
### 数字类型
``` ts
let arr: Array<number> = [1, 2, 3]
let arr1: number[] = new Array(1, 2, 3)
```
### 字符串类型
``` ts
let arr2: Array<string> = ['12', '16', '18']
```
### 布尔类型
``` ts
let arr3: Array<Boolean> = [true, false]
```
### 元组类型
``` ts
let arr4: [string, number] = ['哇哈哈哈', 32]
```
### 提前定义
``` ts
let arr5: Array<number>
arr5 = [500]
```

## 字符串
``` ts
let str: string = '刘海柱'
console.log(str, str.length)
```
## 日期对象
除了基础的js数据类型你还可以引用一些内置对象或自定义的对象作为继承类型
``` ts
let d: Date = new Date()
console.log(d)

let d2: Date = new Date(2000)
console.log(d2)

let d3: Date = new Date('2018-09-06T05:30:00')
console.log(d3)
```

## 修饰符
- 访问修饰符分为：public、private、protected。
- public - 可见的，可被修改和访问的(默认)
- private - 私有的，不能在声明类之外访问(会报错)
- protected - 与private类似，但是可以在字类中访问
- readonly - 这个家伙可以跟在修饰符后面，表示这个属性是只读的。当然也可以单独作战
### 类声明
在typescript类声明他会自动帮你赋值，这帮助了我一行就可以构建一个类，constructor是类的初始化阶段，可以理解为vue的created周期。
``` ts
class Girl {
    constructor(public readonly sex: string, protected name: string, private _age: number) {}
}
let myGril = new Girl('女', '...', 18)
```
### 继承
当你的类需要继承于另外一个类的时候你可以用super关键字去实现方法的继承
``` ts
class Girl2 extends Girl {
    constructor(public nature: string = '嘻嘻', sex: string, name: string, _age: number) {
        super(sex, name, _age)
    }

    public getElevatorPitch() {
        return `你好啊，我的名字叫 ${this.name} 我是一个 ${this.nature} 的人.`;
    }
}
```
### 存储器
当你需要去监听类中某个数值的变化或对数值进行限制的时候，你可以用get去监听数据的获取，用set去监听数值的变动
``` ts
class Girl3 {
    constructor(private _age: number) {}

    get age() {
        return this._age
    }
    set age(newAge: number) {
        if (newAge <= 18) {
            this._age = newAge
        }
        else {
            console.error('女朋友永远18岁！！！')
        }
    }
}
```
### 抽象类
- 抽象类中的方法不包括具体实现，并且需要在其派生类中去实现（继承）。
- 抽象类与接口相识，只是包括方法名不包括实现内容。
- 抽象方法必须包含abstract关键字，可以包含访问修饰符。
``` ts
abstract class Department {
    constructor(public name:string) {}

    printName(): void {
        console.log('Department name:', this.name)
    }

    // 必须在派生类中实现 - void表示没有返回值，再提一嘴
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        // 在派生类的构造函数中必须调用 super(), 毕竟是派生类嘛，要继承的
        super('斗士老八')
    }

    printMeeting(): void {
        console.log('The Accounting Department 巴拉巴拉...')
    }

    generateReports(): void {
        console.log('俺不能死')
    }
}
```

## 接口
接口通常情况下是为了规定你的数据规范，在后面开发就跟着之前定义的规范进行开发
### 参数定义
这里我简单把其有的接口支持选项列一下，后面介绍使用方法
``` ts
interface LabelledValue {
    label: string;
    // 可选
    color?: string;
    // 只读
    readonly name: string;
    // 定义其可以拥有任何其他属性
    [propName:string]: any;
}
```
### 接口继承
如果需要在你的方法传参中继承接口的类型只需要和其他类型声明一样，在后面：定义就可以了。
``` ts
function printLabel(labelleObject: LabelledValue) {
    console.log(labelleObject)
}
printLabel({ label: '你瞅啥', name: '魔乐王子' })
```

### 函数类型
``` ts
interface SearchFunc {
    (source:string, substring:string):boolean;
}
// 这里是继承的三种写法
function searchExtends (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
let mySearch: SearchFunc = searchExtends
let mySearch2 = <SearchFunc>searchExtends

let searchExtends2: SearchFunc = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
}
```
### 属性兼容
TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。比如：
``` ts
interface Named {
    name: string;
}

let x: Named;
let y = { name: 'Alice', location: 'Seattle' };
x = y;
```
y必须包含名字是name的string类型成员。y满足条件，因此赋值正确。

## 命名空间
命名空间（之前叫做“内部模块”），使用 module关键字来声明一个内部模块的地方都应该使用namespace关键字来替换。避免让新的使用者被相似的名称迷惑。
``` ts
namespace Person1 {
    export class Girl {
        public name: string = "王某人"
        talk() {
            console.log('嘻嘻')
        }
    }
}
namespace Person2 {
    export class Girl {
        public name: string = '史某人'
        talk() {
            console.log('走开')
        }
    }
}

let space1 = new Person1.Girl()
let space2 = new Person2.Girl()
```
## 声明文件
#### Validation.d.ts
在这个文件当中声明开头需要以declare开头，表示这个类的只读状态，它并不涉及逻辑校验，只是对参数及返回值进行校验
``` ts
declare namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
```
#### index.ts
- 声明文件命名需要以.d.ts结尾
- reference path="Validation.d.ts" - 这只是告诉了我们文件之间的依赖存在关系
``` ts
/// <reference path="Validation.d.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    // implements表示按照约定好的StringValidator进行实现
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
```
## 模块解析
相对导入是以/，./或../开头的。
``` ts
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
```
所有其它形式的导入被当作非相对的。 
``` ts
import * as $ from "jQuery";
import { Component } from "@angular/core";
```

## 路径映射
TypeScript编译器通过使用tsconfig.json文件里的"paths"来支持这样的声明映射。 下面是一个如何指定 jquery的"paths"的例子。
``` ts
{
    "compilerOptions": {
        "baseUrl": ".", // This must be specified if "paths" is.
        "paths": {
        "jquery": ["node_modules/jquery/dist/jquery"] // 此处映射是相对于"baseUrl"
        }
    }
}
```
工程结构如下如下：
``` md
projectRoot
├── folder1
│   ├── file1.ts (imports 'folder1/file2' and 'folder2/file3')
│   └── file2.ts
├── generated
│   ├── folder1
│   └── folder2
│       └── file3.ts
└── tsconfig.json
```

## 声明合并
同名的接口将会自动合并到一起
``` ts
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {height: 5, width: 6, scale: 10};
```

## 装饰器
1. @name 来使用装饰器，使用后该装饰器下方的函数将会集成指定装饰器的内容
2. 装饰器在使用上有两种
- 使用方法
单行使用
``` ts
@f @g x
```
- 多行使用
``` ts
@f
@g
x
```
3. 装饰器抛出函数参数分别为
 - target - 原型对象
 - propertyKey - 成员的名字
 - descriptor - 成员的属性描述符
    - configurable - 控制是否可以删除
    - writable - 控制是否可以修改(赋值)
    - enumerable - 控制是否可以枚举
### 属性装饰
```  ts
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}
```
将该属性设置不可删除
``` ts
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```
### 类装饰
``` ts
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```
使用函数定义装饰器，用[Object.seal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)方法对装饰数据进行密封防止添加新的信息
``` ts
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
```
### 方法装饰
``` ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
```
修改对象的enumerable将其变为不可迭代属性
``` ts
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
```