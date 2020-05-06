# typescript入门文档

## 环境配置
### 安装node
[node](https://nodejs.org/zh-cn/)官网下载，然后下一步下一步安装就可以。安装好后可以用一下命令检查版本
``` sh
node -v
npm -v
```
### 安装typescript
win
``` sh
npm install typescript -g
```
mac
``` sh
sudo npm install typescript -g
```

### Hello World - 开始表演
初始化项目： 
1. 进入你的编程文件，使用npm init -y来初始化你的项目
2. 创建 <code>tsconfig.json</code> 文件，在终端中输入 <code>tsc --init</code> ：这是一个TypeScript项目的配置文件，通过它来配置TypeScript编译器的编译参数。
3. 创建hello.ts来编写你的程序。
``` ts
var a:string = 'Hello TypeScript'

console.log(a)
```
vscode 点击终端 => 运行生成任务 => tsc: 构建 - tsconfig.json 来编译你的代码。
``` js
"use strict";
var a = 'Hello TypeScript';
console.log(a);
```

嗯，全是干的，不多BB，后面会直接贴出代码段，让大家体验到CV级快感。