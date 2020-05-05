# CSS 部分

## 代码风格
- 统一使用"-"连字符
- 省略值为 0 时的单位
``` css
/* bad */
padding-bottom: 0px;
margin: 0em;

/* good */
padding-bottom: 0;
margin: 0;
```
- 如果 CSS 可以做到，就不要使用 JS
- 建议并适当缩写值，提高可读性，特殊情况除外
    - “建议并适当”是因为缩写总是会包含一系列的值，而有时候我们并不希望设置某一值，反而造成了麻烦，那么这时候你可以不缩写，而是分开写。
    - 当然，在一切可以缩写的情况下，请务必缩写，它最大的好处就是节省了字节，便于维护，并使阅读更加一目了然。
``` css
/* bad */
.box{
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
}

/* good */
.box{
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
}
```
## 属性顺序
- 声明应该按照下表的顺序
- 左到右，从上到下

| 显示属性	     | 自身属性       | 文本属性和其他修饰 | 
| ------------- |:------------- | :-----------------|
| display       | width         | font              |
| display	    | width	        | font              | 
| visibility	| height	    | text-align        | 
| position	    | margin	    | text-decoration   | 
| float	        | padding	    | vertical-align    | 
| clear	        | border	    | white-space       | 
| list-style	| overflow	    | color             | 
| top	        | min-width	    | background        | 

``` css
/* bad */
.box {
    font-family: 'Arial', sans-serif;
    border: 3px solid #ddd;
    left: 30%;
    position: absolute;
    text-transform: uppercase;
    background-color: #eee;
    right: 30%;
    isplay: block;
    font-size: 1.5rem;
    overflow: hidden;
    padding: 1em;
    margin: 1em;
}

/* good */
.box {
    display: block;
    position: absolute;
    left: 30%;
    right: 30%;
    overflow: hidden;
    margin: 1em;
    padding: 1em;
    background-color: #eee;
    border: 3px solid #ddd;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
}
```
## 选择器及命名

1. 元素选择器应该避免在 scoped 中出现
    - 官方文档说明：在 [scoped](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B7%E7%94%A8%E6%9C%AC%E5%9C%B0%E5%92%8C%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F) 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。
2. 分类的命名方法
    - 使用单个字母加上"-"为前缀
    - 布局（grid）（.g-）；
    - 模块（module）（.m-）；
    - 元件（unit）（.u-）；
    - 功能（function）（.f-）；
    - 皮肤（skin）（.s-）；
    - 状态（.z-）。
3. 统一语义理解和命名

### 布局（.g-）

| 语义	    | 命名       | 简写      | 
| --------- |:--------- | :-------- |
| 文档	    | doc	    | doc       |
| 头部	    | head      | hd        |
| 主体	    | body	    | bd        |
| 尾部      |	foot	| ft        |
| 主栏	    | main	    | mn        |
| 主栏子容器 | mainc     | mnc       |
| 侧栏	    | side	    | sd        |
| 侧栏子容器 |	sidec    | sdc       |
| 盒容器	| wrap/box  | wrap/box  |

### 模块（.m-）、元件（.u-）

| 语义	    | 命名       | 简写      | 
| --------- |:--------- | :-------- |
| 导航	    | nav	        | nav
| 子导航	| subnav	    | snav
| 面包屑	| crumb	        | crm
| 菜单	    | menu	        | menu
| 选项卡	| tab	        | tab
| 标题区	| head/title	| hd/tt
| 内容区	| body/content	| bd/ct
| 列表	| list	        | lst
| 表格	| table	        | tb
| 表单	| form	        | fm
| 热点	| hot	        | hot
| 排行	| top	        | top
| 登录	| login	        | log
| 标志	| logo	        | logo
| 广告	| advertise	    | ad
| 搜索	| search	    | sch
| 幻灯	| slide	        | sld
| 提示	| tips	        | tips
| 帮助	| help	        | help
| 新闻	| news	        | news
| 下载	| download	    | dld
| 注册	| regist	    | reg
| 投票	| vote  	    | vote
| 版权	| copyright	    | cprt
| 结果	| result	    | rst
| 标题	| title	        | tt
| 按钮	| button	    | btn
| 输入	| input	        | ipt

### 功能（.f-）

| 语义	     | 命名        | 简写      | 
| -----------|:-----------|:----------|
| 浮动清除	| clearboth	        | cb  |
| 向左浮动	| floatleft	        | fl  |
| 向右浮动	| floatright	    | fr  |
| 内联块级	| inlineblock	    | ib  |
| 文本居中	| textaligncenter	| tac |
| 文本居右	| textalignright	| tar |
| 文本居左	| textalignleft	    | tal |
| 垂直居中	| verticalalignmiddle	| vam |
| 溢出隐藏	| overflowhidden	| oh  |
| 完全消失	| displaynone	    | dn  |
| 字体大小	| fontsize	        | fs  |
| 字体粗细	| fontweight	    | fwx |

- 皮肤（.s-）

| 语义	     | 命名        | 简写      | 
| -----------|:-----------|:----------|
| 字体颜色	| fontcolor	        | fc    | 
| 背景	    | background	    | bg    | 
| 背景颜色	| backgroundcolor	| bgc   | 
| 背景图片	| backgroundimage	| bgi   | 
| 背景定位	| backgroundposition| bgp   | 
| 边框颜色	| bordercolor	    | bdc   | 

- 状态（.z-）

| 语义	    | 命名       | 简写  | 
| ----------|:----------|:------|
| 选中	    | selected	| sel   | 
| 当前	    | current	| crt   | 
| 显示	    | show	    | show  | 
| 隐藏	    | hide	    | hide  | 
| 打开	    | open	    | open  | 
| 关闭	    | close	    | close | 
| 出错	    | error	    | err   | 
| 不可用	| disabled	| dis   | 

## 特殊规范
- 对用页面级组件样式，应该是有作用域的
- 对于公用组件或者全局组件库，我们应该更倾向于选用基于 class 的 [BEM](https://www.w3cplus.com/css/bem-definitions.html) 策略
``` html
<style lang='less'></style>

<!-- 使用 scoped 作用域 -->
<!-- good -->
<style lang='less' scoped></style> 

<!-- 使用 BEM 约定 -->
<!-- good -->
<style> 
    .c-Button {
        border: none;
        border-radius: 2px;
    }

    .c-Button--close {
        background-color: red;
    }
</style>
``` 
