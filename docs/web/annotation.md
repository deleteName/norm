# 代码注释

代码注释的场景有很多，文件、函数、代码块、继承、module、行注释等等。
不管是自己开发开始团队开发项目都会涉及到代码可读性，优秀的代码注释可以提高代码可读性，当别人看到你的代码的时候就觉得你就可以无意中展示自己的B格，让别人觉得你的代码特牛批，一下知道你的代码是干嘛的。

## 文件注释
::: tip 在网上的开源项目或者在日常工作中可能会经常看到这样的文件注释代码。
这样的注释包括了描述、作者、创建时间、更新时间等。这样大家一眼就能知道这个文件大概实现了什么功能，开始是谁写的，最后维护的是谁。
:::
``` js
/*
 * @Description: 文件信息描述
 * @Author: CR
 * @Date: 2020-04-03 19:13:50
 * @LastEditTime: 2020-04-03 19:13:50
 * @LastEditors: CR
 */
```

## 代码块注释
::: tip 代码块注释，也可以说是方法注释。
代码块注释可以体现出方法的用处，已经所需参数，返回值等，大大提高代码的可读性。
:::
``` js
/**
 * 一本书.
 * @constructor
 * @param {string} title - 书名.
 * @param {string} author - 作者.
 */
function Book(title, author) {
  // ...
}
```

## class 的注释

``` js
/** 点类. */
class Point {
    /**
     * Create a point.
     * @param {number} x - x方向.
     * @param {number} y - y方向.
     */
    constructor(x, y) {
        // ...
    }
 
    /**
     * 获取x方向值.
     * @return {number} x方向值.
     */
    getX() {
        // ...
    }
 
    /**
     * 获取y方向值.
     * @return {number} y方向值.
     */
    getY() {
        // ...
    }
 
    /**
     * 将字符中坐标转换为一个点.
     * @param {string} str - 带坐标的字符.
     * @return {Point} 点的对象.
     */
    static fromString(str) {
        // ...
    }
}
```

## module 注释
``` js

/** @module 颜色混合 */
 
/** 模块名称. */
export const name = 'mixer';
 
/** 新混合颜色. */
export var lastColor = null;
 
/**
 * 混合两种颜色.
 * @param {string} color1 - 第一种颜色， 十六进制.
 * @param {string} color2 - 第二种颜色， 十六进制.
 * @return {string} 混合的颜色.
 */
export function blend(color1, color2) {}
 
// 将颜色转化为rgb值的数组 (0-255)
function rgbify(color) {}
 
export {
    /**
     * 获取颜色的红色、绿色和蓝色值.
     * @function
     * @param {string} color - 十六进制格式的颜色.
     * @returns {Array.<number>} 由红色、绿色和蓝色值组成的数组,
     * 每个从0到255.
     */
    rgbify as toRgb
}

```

## 常用注释标签
``` js
/**
 * @author  作者，方便定位    
 * @class（同义词：@constructor）标记类和构造函数    
 * @constant @const常量标记    
 * @description（同义词：@desc） 对内容进行描述    
 * @module 模块名称    
 * @enum 枚举类型标记    
 * @global 全局对象标记    
 * @param 函数参数标记    
 * @returns（同义词：@return）函数返回标记    
 * @this this指向标记    
 * @see 参考链接    
 * @memberof 标记模块间的从属关系    
 * @event 在模板中标记可以被触发的事件，与@fire配合使用
 * @alias 将成员视为具有不同的名称。
 * @Async 表示函数是异步的。
 * @augments（同义词：@extends）指示符号从父符号继承并添加到父符号。
 * @borrows 此对象使用来自另一个对象的内容。
 * @callback 回调函数。
 * @copyright 版权信息。
 * @default （同义词: @defaultvalue） 默认值。
 * @example 示例。
 */
```

## 有趣的代码注释
``` js

/**
 *                    _ooOoo_
 *                   o8888888o
 *                   88" . "88
 *                   (| -_- |)
 *                    O\ = /O
 *                ____/`---'\____
 *              .   ' \\| |// `.
 *               / \\||| : |||// \
 *             / _||||| -:- |||||- \
 *               | | \\\ - /// | |
 *             | \_| ''\---/'' | |
 *              \ .-\__ `-` ___/-. /
 *           ___`. .' /--.--\ `. . __
 *        ."" '< `.___\_<|>_/___.' >'"".
 *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *         \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 *                    `=---='
 *
 * .............................................
 *          佛祖保佑             永无BUG
 */
 
/**
 *  佛曰:
 *          写字楼里写字间，写字间里程序员；
 *          程序人员写程序，又拿程序换酒钱。
 *          酒醒只在网上坐，酒醉还来网下眠；
 *          酒醉酒醒日复日，网上网下年复年。
 *          但愿老死电脑间，不愿鞠躬老板前；
 *          奔驰宝马贵者趣，公交自行程序员。
 *          别人笑我忒疯癫，我笑自己命太贱；
 *          不见满街漂亮妹，哪个归得程序员？
 */
 
/**
 * _ooOoo_
 * o8888888o
 * 88" . "88
 * (| -_- |)
 *  O\ = /O
 * ___/`---'\____
 * .   ' \\| |// `.
 * / \\||| : |||// \
 * / _||||| -:- |||||- \
 * | | \\\ - /// | |
 * | \_| ''\---/'' | |
 * \ .-\__ `-` ___/-. /
 * ___`. .' /--.--\ `. . __
 * ."" '< `.___\_<|>_/___.' >'"".
 * | | : `- \`.;`\ _ /`;.`/ - ` : | |
 * \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 * `=---='
 *          .............................................
 *           佛曰：bug泛滥，我已瘫痪！
 */
 
/***
 *      ┌─┐       ┌─┐ + +
 *   ┌──┘ ┴───────┘ ┴──┐++
 *   │                 │
 *   │       ───       │++ + + +
 *   ███████───███████ │+
 *   │                 │+
 *   │       ─┴─       │
 *   │                 │
 *   └───┐         ┌───┘
 *       │         │
 *       │         │   + +
 *       │         │
 *       │         └──────────────┐
 *       │                        │
 *       │                        ├─┐
 *       │                        ┌─┘
 *       │                        │
 *       └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
 *         │ ─┤ ─┤       │ ─┤ ─┤
 *         └──┴──┘       └──┴──┘  + + + +
 *                神兽保佑
 *               代码无BUG!
 */
 
 
/***
 *                  ___====-_  _-====___
 *            _--^^^#####//      \\#####^^^--_
 *         _-^##########// (    ) \\##########^-_
 *        -############//  |\^^/|  \\############-
 *      _/############//   (@::@)   \\############\_
 *     /#############((     \\//     ))#############\
 *    -###############\\    (oo)    //###############-
 *   -#################\\  / VV \  //#################-
 *  -###################\\/      \//###################-
 * _#/|##########/\######(   /\   )######/\##########|\#_
 * |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 * `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *    `   `  `      `   / | |  | | \   '      '  '   '
 *                     (  | |  | |  )
 *                    __\ | |  | | /__
 *                   (vvv(VVV)(VVV)vvv)                
 *                        神兽保佑
 *                       代码无BUG!
 */
 
 
/***
 *
 *
 *                                                    __----~~~~~~~~~~~------___
 *                                   .  .   ~~//====......          __--~ ~~
 *                   -.            \_|//     |||\\  ~~~~~~::::... /~
 *                ___-==_       _-~o~  \/    |||  \\            _/~~-
 *        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *  .~       .~       |   \\ -_    /  /-   /   ||      \   /
 * /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 * |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *          '         ~-|      /|    |-~\~~       __--~~
 *                      |-~~-_/ |    |   ~\_   _-~            /\
 *                           /  \     \__   \/~                \__
 *                       _--~ _/ | .-~~____--~-/                  ~~==.
 *                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                 -_     ~\      ~~---l__i__i__i--~~_/
 *                                 _-~-__   ~)  \--______________--~~
 *                               //.-~~~-~_--~- |-------~~~~~~~~
 *                                      //.-~~~--\
 *                               神兽保佑
 *                              代码无BUG!
 */ 
``` 