# JavaScript学习笔记



## 基本知识

JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript 是一种基于原型、多范式、单线程的动态 (en-US)语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

>   该笔记从2022年12月28日开始持续更新

### 资源

[Javascript详细中文手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[JavaScript开发者应懂的33个概念](/program/javascript/JavaScript开发者应懂的33个概念.html)



### 开发工具

#### vscode

vscode是微软开发的一个ide代码编辑器。拥有极为强大且丰富的扩展库。

访问vscode[官网](https://code.visualstudio.com/)，下载安装。

安装完成后运行vscode。

##### 安装扩展

依次安装以下扩展

*   **live Server**，实时浏览器渲染





### HelloWorld

在html文件中，使用 `<script>` 标签元素编写javascript代码。

#### 内部 JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <div id="app"></div>
</body>
    <script>
        document.getElementById('app').innerHTML = 'Hello World';
    </script>
</html>
```

#### 外部 JavaScript

html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <div id="app"></div>
</body>
    <script src="2.js"></script>
</html>
```

js文件

```javascript
function load() {
    document.getElementById('app').innerHTML = 'Hello World';
}
load();
```

浏览器结果

![image-20221228172613232](./assets/image-20221228172613232.png)

#### 避免延迟

为了保证页面静态内容的正常加载，在没有特殊需求的情况下，应该将js代码或外部js引入写在 `<body>` 最末尾。



### 注释与执行符

| 符号       | 用途     |
| :----------- | ------------ |
| **//**       | 单行注释     |
| **/\*  \*/** | 多行注释     |
| **;**        | 语句结束符号 |

示例代码：

```js
//声明变量a，分号结束当前语句
let a = "fromidea";
/*
多行注释，
控制台输出变量a
*/
console.log(a);
```

控制台输出：

![image-20221228205336154](./assets/image-20221228205336154.png)

### 变量声明

#### var

**`var` 语句** 用于声明一个函数范围或全局范围的变量，并可将其初始化为一个值（可选）。

同时，JavaScript 是一种“**动态类型语言**”，这意味着无需指定变量将包含什么数据类型。

示例代码：

``` js
var a = 1;
console.log(typeof a);
//输出：number
var a = 'fromidea';
console.log(typeof a);
//输出：string
var a = {};
console.log(typeof a);
//输出：object
```

##### 变量提升

无论在何处使用 `var` 语句来声明变量，都会在执行任何代码之前进行预处理。这被称为变量提升。

>   因此，建议始终在作用域顶部声明变量（全局代码的顶部和函数代码的顶部），这可以清楚知道哪些变量是函数作用域（局部），哪些变量在作用域链上解决。

示例代码：

``` js
console.log(a);
console.log(b);
var a = 'fromidea';
```

控制台输出：

![image-20221228211705549](./assets/image-20221228211705549.png)

观察控制台输出结果，可以发现：

*   虽然变量 `a` 写在 `console` 之后，但程序并未报错，输出结果为undefined，表示该变量存在，但并没有值。

*   当输出变量`b`时，程序是报错的。因为代码中并未声明该变量。



##### 数据类型

| 类型                                                         | 结果                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined) | `"undefined"`                                                |
| [Null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null) | `"object"`（[原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)） |
| [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean) | `"boolean"`                                                  |
| [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number) | `"number"`                                                   |
| [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt) | `"bigint"`                                                   |
| [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String) | `"string"`                                                   |
| [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) | `"symbol"`                                                   |
| [Function](https://developer.mozilla.org/zh-CN/docs/Glossary/Function)（在 ECMA-262 中实现 [[Call]]；[classes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class)也是函数) | `"function"`                                                 |
| 其他任何对象                                                 | `"object"`                                                   |

##### typeof

使用 `typeof` 运算符可以获得当前变量的数据类型。

```javascript
var myInt = 5;
var myFloat = 6.667;

typeof myInt;   //number
typeof myFloat; //number
```

 

#### let

**`let`** 允许声明一个“**块**”作用域中的变量、语句或者表达式。与 `var` 关键字不同的是，`var` 声明的变量作用域是全局或者整个函数块的。 

示例代码：

```js
console.log(a);
let a = 'fromidea';
```

控制台输出：

<p class="demo">Uncaught ReferenceError: Cannot access 'a' before initialization at 6.html:11:21</p>

这段代码体现出了`var` 和 `let` 的另一个重要区别，`let` 声明的变量不会在作用域中被提升，它是在编译时才初始化（暂时性死区）。

>   就像  `const`  一样，`let` 不会在全局声明时（在最顶层的作用域）创建 `window` 对象的属性。



##### 暂时性死区

从一个代码块的开始直到代码执行到声明变量的行之前，`let` 或 `const` 声明的变量都处于“暂时性死区”（Temporal dead zone，TDZ）中。

当变量处于暂时性死区之中时，其尚未被初始化，尝试访问变量将抛出 ReferenceError。当代码执行到声明变量所在的行时，变量被初始化为一个值。如果声明中未指定初始值，则变量将被初始化为 undefined。



##### 块作用域

简单来说，即变量作用仅在 `{}` 内有效。

示例代码：

```js
var i = 999;
for(let i = 0;i < 3;i++){
  console.log(i);
}
console.log(i);
```

控制台输出：

<div class="demo">
		0<br>
		1<br>
		2<br>
		999
</div>


##### 全局污染

在函数内部使用的变量，一定要单独声明。除非该变量是全局的。

当函数内部变量没有进行 `var` 或 `let` 进行声明时。那么，这个变量会影响到函数外部的同名变量。

示例代码：

```javascript
function show(){
  web = '创意';
}
web = 'fromidea';
show();
console.log(web);
```

控制台输出：

<div class="demo">
  创意
</div>

观察输出结果，“创意”替代了值“fromidea”。



### 常量

#### const

常量是**块级范围**的，非常类似用 `let` 语句定义的变量。但常量的值是无法（通过重新赋值）改变的，也不能被重新声明。

**常量声明通常情况下全部用大写字母。**

示例代码：	

```js
const URL = 'fromidea.com';
if(URL){
  const URL = 'www.fromidea.com';
  console.log(URL);
}
console.log(URL);
```

控制台输出：

<div class="demo">
  www.fromidea.com<br>
  fromidea.com
</div>

观察可以发现，在不同的作用域，可以重复声明 `URL` 常量，不同作用域的常量并不相互影响。

在同一作用域重新声明或对其赋值，都是错误的。



##### const声明为对象类型时

当使用 `const` 声明对象时，对象的元素值是可以改变的。

示例代码：

```js
<script>
    const HOST = {
        url : 'http://www.fromidea.com',
        port : 80
    }
    HOST.port = 443;
    console.log(HOST);
</script>
```

控制台输出：

<div class="demo">
  {url: 'http://www.fromidea.com', port: 443}
</div>

那么，如果我们不想让常量对象的值被修改，可以使用 `Object.freeze()` 方法来实现。

示例代码：

```js
<script>
    "use strict";
    const HOST = {
        url : 'http://www.fromidea.com',
        port : 80
    }
    Object.freeze(HOST);
    HOST.port = 443;
    console.log(HOST);
</script>
```

控制台输出：

<div class="demo">
  Uncaught TypeError: Cannot assign to read only property 'port' of object...
</div>


##### 延伸：use strict（严格模式）

若要避免因函数内部变量未声明而导致全局污染的情况，也可以采用“严格模式”策略。

开启严格模式，需要在所有语句之前放一个特定语句 `"use strict";` 

1.   严格模式通过抛出错误来消除了一些原有静默错误。

2.   严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。

3.   严格模式禁用了在 ECMAScript 的未来版本中可能会定义的一些语法。



### window全局变量

`window` 作为全局变量，代表了脚本正在运行的窗口，暴露给 Javascript 代码。

在有标签页功能的浏览器中，每个标签都拥有自己的 `window` 对象；也就是说，同一个窗口的标签页之间不会共享一个 `window` 对象。

示例代码：

```js
<script>
    console.log(window.screenLeft);
</script>
```

此时，移动浏览器窗口，并刷新页面，观察控制台，可以看到数值在变化。

`screenLeft` 是 `window` 的一个属性，用于获得当前窗口相对于桌面的位置（左边距离）。

如果用 `var` 重新声明 `screenLeft` 这个变量，则会影响 `window.screenLeft` 的结果。

示例代码：

```js
<script>
    var screenLeft = 100;
    console.log(window.screenLeft);
</script>
```

此时，无论如何移动窗口并刷新页面，控制台输出：

<div class="demo">
  100
</div>

那么，也就是 `window.screenLeft` 已经被污染。

这时，如果我们使用 `let` 声明，则不会对 `window.screenLeft` 造成影响。

```javascript
<script>
    let screenLeft = 100;
    console.log(window.screenLeft);
    console.log(screenLeft);
</script>
```

控制台输出：

<div class="demo">
  1<br>
  100<br>
</div>

`screenLeft` 和 `window.screenLeft` 互不影响。



#### window对象的属性

| 属性/手册链接                                                | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`Window.closed`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/closed) | 这个属性指示当前窗口是否关闭。                               |
| [`Window.console`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/console) | 返回 console 对象的引用，该对象提供了对浏览器调试控制台的访问。 |
| [`Window.content`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/content) | 返回当前 window 的 content 元素的引用。通过带下划线的过时变种方法不再可以获得 Web content。 |
| [`Window.customElements`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/customElements) | 返回对CustomElementRegistry对象的引用，该对象可用于注册新的自定义元素并获取有关以前注册的自定义元素的信息。 |
| [`Window.crypto`](https://developer.mozilla.org/zh-CN/docs/Web/API/crypto_property) | 返回浏览器 crypto 对象。                                     |
| [`Window.defaultStatus`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/defaultStatus) | 获取或设置指定窗口的状态栏文本。                             |
| [`Window.document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/document) | 返回对当前窗口所包含文档的引用。                             |
| [`Window.devicePixelRatio`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio) | 返回当前显示器的物理像素和设备独立像素的比例。               |
| [`Window.event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/event) | 返回当前事件，即当前由JavaScript代码上下文处理的事件，如果当前未处理任何事件，则返回未定义的事件。应尽可能使用直接传递给事件处理程序的Event对象。 |
| [`Window.frameElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/frameElement) | 返回嵌入窗口的元素，如果未嵌入窗口，则返回 null。            |
| [`Window.frames`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/frames) | 返回当前窗口中所有子窗体的数组。                             |
| [`Window.fullScreen`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/fullScreen) | 此属性表示窗口是否以全屏显示。                               |
| [`Window.history`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history) | 返回一个对 history 对象的引用。                              |
| [`Window.innerHeight`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerHeight) | 获得浏览器窗口的内容区域的高度，包含水平滚动条 (如果有的话)。 |
| [`Window.innerWidth`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth) | 获得浏览器窗口的内容区域的宽度，包含垂直滚动条 (如果有的话)。 |
| [`Window.length`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/length) | 返回窗口中的 frames 数量。参见 [`window.frames`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/frames)。 |
| [`Window.location`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location) | 获取、设置 window 对象的 location，或者当前的 URL.           |
| [`Window.locationbar`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/locationbar) | 返回 locationbar 对象，其可视性可以在窗口中切换。            |
| [`Window.localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) | 返回用来存储只能在创建它的源下访问的数据的本地存储对象的引用 |
| [`Window.menubar`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/menubar) | 返回菜单条对象，它的可视性可以在窗口中切换                   |
| [`Window.mozAnimationStartTime`](https://developer.mozilla.org/zh-CN/docs/Web/API/Animation/startTime) | 返回当前动画循环开始经过的毫秒数                             |
| [`Window.mozInnerScreenX`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/mozInnerScreenX) | 返回窗口视口左上角的水平（X）坐标，以屏幕坐标表示。此值以CSS像素报告。如果需要，请参阅nsIDOMWindowUtils中的mozScreenPixelsPerCSSPixel，了解适应屏幕像素的转换因子。 |
| [`Window.mozInnerScreenY`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/mozInnerScreenY) | 返回窗口视口左上角的垂直（Y）坐标，以屏幕坐标表示。此值以CSS像素报告。如果需要，请参阅mozScreenPixelsPerCSSPixel以获取适应屏幕像素的转换因子。 |
| [`Window.mozPaintCount`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) | 返回当前文档在此窗口中呈现到屏幕的次数。这可用于计算渲染性能。 |
| [`Window.name`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/name) | 获取/设置窗口的名称。                                        |
| [`Window.navigator`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/navigator) | 返回对 navigator 对象的引用。                                |
| [`Window.opener`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/opener) | 返回对打开当前窗口的那个窗口的引用。                         |
| [`Window.orientation`](https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation) | 返回视口相对于设备自然方向的角度方向（以90度为增量）。       |
| [`Window.outerHeight`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/outerHeight) | 返回浏览器窗口的外部高度。                                   |
| [`Window.outerWidth`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/outerWidth) | 返回浏览器窗口的外部宽度。                                   |
| [`Window.pageXOffset`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollX) | [`window.scrollX`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollX)的别名。 |
| [`Window.pageYOffset`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY) | [`window.scrollY`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY)的别名。 |
| [`Window.parent`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/parent) | 返回当前窗口或子窗口的父窗口的引用。                         |
| [`Window.performance`](https://developer.mozilla.org/zh-CN/docs/Web/API/performance_property) | 返回Performance对象，该对象包括计时和导航属性，每个属性都是提供性能相关（en-US）数据的对象。有关更多信息和示例，请参见使用导航计时。 |
| [`Window.personalbar`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/personalbar) | 返回 personalbar 对象，它的可视性可以在窗口中切换。          |
| [`Window.screen`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screen) | 返回对与窗口关联的屏幕对象的引用。                           |
| [`Window.screenX`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screenX) & [`Window.screenLeft`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screenLeft) | 这两个属性都会返回从用户浏览器视口左边框到屏幕左侧的水平距离。 |
| [`Window.screenY`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screenY) & [`Window.screenTop`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/screenTop) | 这两个属性都会返回从用户浏览器视口的上边框到屏幕顶部的垂直距离。 |
| [`Window.scrollbars`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollbars) | 返回滚动条对象，其可见性可以在窗口中切换。                   |
| [`Window.scrollMaxX`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollMaxX) | 窗口可以水平滚动到的最大偏移量，即文档宽度减去视口宽度。     |
| [`Window.scrollMaxY`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollMaxY) | 窗口可以垂直滚动到的最大偏移量（即文档高度减去视口高度）。   |
| [`Window.scrollX`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollX) | 返回文档已水平滚动的像素数。                                 |
| [`Window.scrollY`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY) | 返回文档已垂直滚动的像素数。                                 |
| [`Window.self`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/self) | 返回对窗口对象本身的对象引用。                               |
| [`Window.sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) | 返回对会话存储对象的引用，该对象用于存储只能由创建它的源访问的数据。 |
| [`Window.sidebar`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sidebar) | 返回对侧边栏的窗口对象的引用。                               |
| [`Window.speechSynthesis`](https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis) | 返回SpeechSynthesis对象，该对象是使用Web SpeechAPI语音合成功能的入口点。 |
| [`Window.status`](https://developer.mozilla.org/en-US/docs/Web/API/Window/status) | 获取/设置浏览器底部状态栏中的文本。                          |
| [`Window.statusbar`](https://developer.mozilla.org/en-US/docs/Web/API/Window/statusbar) | 返回statusbar对象，其可见性可以在窗口中切换。                |
| [`Window.toolbar`](https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar) | 返回工具栏对象，其可见性可以在窗口中切换。                   |
| [`Window.top`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/top) | 返回对窗口层次结构中最顶层窗口的引用。此属性是只读的。       |
| [`Window.visualViewport`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/visualViewport) | 返回表示给定窗口的视觉视口的VisualViewport对象。             |
| [`Window.window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/window) | 返回对当前窗口的引用。                                       |



#### window对象的方法

| 方法/手册链接                                                | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`Window.alert()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/alert) | 显示警报对话框。                                             |
| [`Window.back()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/back) | 在窗口历史记录中向后移动一个。该方法已过时；您应该改用window.history.back（）。 |
| [`Window.blur()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/blur) | 将焦点设置为远离窗口。                                       |
| [`Window.cancelAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelAnimationFrame) | 允许您取消以前使用Window.requestAnimationFrame计划的回调。   |
| [`Window.cancelIdleCallback()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/cancelIdleCallback) | 允许您取消以前使用Window.requestIdleCallback计划的回调。     |
| [`Window.captureEvents()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents) | 注册窗口以捕获指定类型的所有事件。                           |
| [`Window.clearImmediate()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearImmediate) | 使用setImmediate取消重复执行集。                             |
| [`Window.clearImmediate()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearImmediate) | 使用setImmediate取消重复执行集。                             |
| [`Window.close()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/close) | 关闭当前窗口。                                               |
| [`Window.confirm()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/confirm) | 显示一个对话框，其中包含用户需要响应的消息。                 |
| [`Window.dump()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/dump) | 将消息写入控制台。                                           |
| [`Window.find()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/find) | 在窗口中搜索给定字符串。                                     |
| [`Window.focus()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/focus) | 设置当前窗口的焦点。                                         |
| [`Window.getComputedStyle()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle) | 获取指定元素的计算样式。计算样式指示元素的所有CSS属性的计算值。 |
| [`Window.getDefaultComputedStyle()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getDefaultComputedStyle) | 获取指定元素的默认计算样式，忽略作者样式表。                 |
| [`Window.getSelection()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection) | 返回表示所选项目的选择对象。                                 |
| [`Window.matchMedia()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia) | 返回表示指定媒体查询字符串的MediaQueryList对象。             |
| [`Window.minimize()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) | 最小化窗口。                                                 |
| [`Window.moveBy()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/moveBy) | 将当前窗口移动指定的量。                                     |
| [`Window.moveTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/moveTo) | 将窗口移动到指定的坐标。                                     |
| [`Window.open()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open) | 打开一个新窗口。                                             |
| [`Window.postMessage()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) | 为一个窗口向另一个窗口发送数据字符串提供了一种安全方法，该窗口不必与第一个窗口处于相同的域中。 |
| [`Window.print()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/print) | 打开打印对话框以打印当前文档。                               |
| [`Window.prompt()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt) | 返回用户在提示对话框中输入的文本。                           |
| [`Window.requestAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) | 告诉浏览器一个动画正在进行中，请求浏览器为下一个动画帧重新绘制窗口。 |
| [`Window.requestIdleCallback()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback) | 启用在浏览器空闲期间对任务进行调度。                         |
| [`Window.resizeBy()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resizeBy) | 将当前窗口调整到一定的大小。                                 |
| [`Window.resizeTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resizeTo) | 动态调整窗口。                                               |
| [`Window.scroll()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scroll) | 滚动窗口到文档中的特定位置。                                 |
| [`Window.scrollBy()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollBy) | 按给定的数量在窗口中滚动文档。                               |
| [`Window.scrollByLines()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollByLines) | 按给定行数滚动文档。                                         |
| [`Window.scrollByPages()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollByPages) | 按指定页数滚动当前文档。                                     |
| [`Window.scrollTo()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo) | 滚动到文档中的特定坐标集。                                   |
| [`Window.setImmediate()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate) | 在浏览器完成其他繁重任务后执行一个函数。                     |
| `Window.setResizable()`                                      | 切换用户调整窗口大小的能力。                                 |
| [`Window.sizeToContent()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sizeToContent) | 根据内容设置窗口大小。                                       |
| [`Window.stop()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/stop) | 这个方法停止窗口加载。                                       |
| [`Window.updateCommands()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/updateCommands) | 更新当前 chrome 窗口 (UI) 命令的状态。                       |



### 传值

可以理解为，一个变量复制另一个变量的值。

示例代码：

```js
<script>
    let a = 1;
		//b复制a
    let b = a;
    console.log(a,b);
    b = 3;
    console.log(a,b);
</script>
```

控制台输出：

![image-20221230212041272](./assets/image-20221230212041272.png)

可以发现，b复制了a的值，第一次打印时，b和a的值是一致的。当对b重新赋值后，b的值会更新，a不会发生变化。



### 传址

可以理解为，一个变量是另一个变量的分身。当分身的值变动时，主体也随之变动。

示例代码：

```js
<script>
    let a = {name : 'fromidea'};
    let b = a;
    console.log(a,b);
    b.name = 'fromidea.com';
    console.log(a,b);
</script>
```

控制台输出：

![image-20221230212602812](./assets/image-20221230212602812.png)



### null

`null` 是表示缺少的标识，指示变量未指向任何对象。

把 `null` 作为尚未创建的对象，也许更好理解。

`null` 用于在声明变量时，虽创建了它，但没有赋予类型或值。

示例代码：

```js
<script>
    // foo 不存在，它从来没有被定义过或者是初始化过：
    console.log(foo);
		// foo 现在已经是知存在的，但是它没有类型或者是值：
    let foo = null;
    console.log(foo);
</scirpt>
```

控制台输出：

![image-20221230214611514](./assets/image-20221230214611514.png)

当我们把第一次 `console` 注释掉。再次刷新：

![image-20221230214755638](./assets/image-20221230214755638.png)



### undefined

`undefined` 则表示**没有被赋值**。

示例代码：

```js
<script>
    function test(a){
        if(a === undefined){
            a = 'fromidea';
            console.log(a);
        }else{
            console.log(a);
        }
    }
    test(null);
    test();
    test(1);
</script>
```

控制台输出：

![image-20221230215649510](./assets/image-20221230215649510.png)



当检测 null 或 undefined 时，注意相等（==）与全等（===）两个操作符的区别，前者会执行类型转换：

```js
typeof null        // "object" (因为一些以前的原因而不是'null')
typeof undefined   // "undefined"
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```



## 运算符与流程控制

### 赋值运算符

赋值元素符会将右边的操作数的值分配给左边的操作数，并将其值修改为右边操作数相等的值。

| 运算符                                                       | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment) | 赋值运算符。                                                 |
| [`*=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment) | 赋值乘积。                                                   |
| [`**=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment) | 求幂赋值。                                                   |
| [`/=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Division_assignment) | 赋值商。                                                     |
| [`%=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder_assignment) | 赋值求余。                                                   |
| [`+=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition_assignment) | 赋值求和。                                                   |
| [`-=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) | 赋值求差。                                                   |
| [`<<=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment) | 左位移。                                                     |
| [`>>=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment) | 右位移。                                                     |
| [`>>>=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | 无符号右位移。                                               |
| [`&=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) | 赋值与。                                                     |
| [`^=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | 赋值按位异或。                                               |
| [`\|=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) | 赋值或。                                                     |
| [`&&=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment) | 逻辑和赋值运算符。                                           |
| [`\|\|=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment) | 逻辑或赋值运算符。                                           |
| [`??=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) | 逻辑空赋值运算符。                                           |
| [`[a, b] = arr`, `{ a, b } = obj`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) | 解构赋值允许您使用类似于数组或对象字面量的语法将数组或对象的属性赋值给变量。 |



### 算术运算符

算术运算符以二个数值（字面量或变量）作为操作数，并返回单个数值。

| 运算符                                                       | 说明         |
| ------------------------------------------------------------ | ------------ |
| [`+`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition) | 加法运算符。 |
| [`-`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction) | 减法运算符。 |
| [`/`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Division) | 除法运算符。 |
| [`*`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication) | 乘法运算符。 |
| [`%`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder) | 取余运算符。 |
| [`**`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation) | 求幂运算符。 |



### 自增和自减

前置/后置自增运算符和前置/后置自减运算符。

| 运算符                                                       | 说明             |
| ------------------------------------------------------------ | ---------------- |
| [`A++`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment) | 后置自增运算符。 |
| [`A--`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement) | 后置自减运算符。 |
| [`++A`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment) | 前置自增运算符。 |
| [`--A`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement) | 前置自减运算符。 |

示例代码：

```js
<script>
    let a = 1;
    a = a + 1;
    console.log(a); //2
    ++a;
    console.log(a); //3
    a++;
    console.log(a); //4

    let b = 5;
    let c = 1;
    let d = b + ++c;
    console.log(d); //7

    b = 5;
    c = 1;
    d = b + c++;
    console.log(d); //6
</script>
```



### 一元运算符

一元运算符只有一个操作数。

| 运算符                                                       | 说明                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [`+`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus) | 一元加运算符将操作转换为 Number 类型。       |
| [`-`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation) | 一元减运算符将操作转换为 Number 类型并取反。 |
| [`~`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) | 按位非运算符。                               |
| [`!`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_NOT) | 逻辑非运算符。                               |
| [`delete`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) | `delete` 运算符用来删除对象的属性。          |
| [`void`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void) | `void` 运算符表示表达式放弃返回值。          |
| [`typeof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) | `typeof` 运算符用来判断给定对象的类型。      |

示例代码：

```js
<script>
    let a = '1';
    a=+a
    console.log(a); //1
    console.log(typeof a); //number

    a = 1;
    console.log(-a); //-1

    a = 1;
    console.log(~a); //-2

    a = undefined;
    console.log(!a);//true

    a = {name : 'fromidea'};
    delete a.name;
    console.log(a); // {}

    a = 1;
    console.log(void a); //undefined
</script>
```





### 比较运算符

比较运算符比较两个操作数并返回基于比较结果的布尔值。	

| 运算符                                                       | 说明             |
| ------------------------------------------------------------ | ---------------- |
| [`<`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than) | 小于运算符。     |
| [`>`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than) | 大于运算符。     |
| [`<=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) | 小于等于运算符。 |
| [`>=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) | 大于等于运算符。 |
| [`==`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) | 相等运算符。     |
| [`!=`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality) | 不等运算符。     |
| [`===`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) | 全等运算符。     |
| [`!==`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality) | 非全等运算符。   |

示例代码：

```js
<script>
    let a = 1;
    let b = 2;

    console.log(a < b); // true
    console.log(a > b); // false
    console.log(a <= b); // true
    console.log(a >= b); // false
    console.log(a == b); // false
    console.log(a != b); // true
    console.log(a === b); //false
    console.log(a !== b); //true
</script>
```



### 逻辑运算符

逻辑运算符典型的用法是用于布尔（逻辑）值运算，它们返回布尔值。

| 运算符                                                       | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`&&`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND) | 逻辑与。                                                     |
| [`\|\|`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR) | 逻辑或。                                                     |
| [`??`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) | 空值合并运算符，如果 ?? 前面是 null 或 undefined，取后面的默认值。 |

示例代码：

```js
<script>
    let a = 1;
    let b = 2;
    let c = 3;

    if(a > b && b > c){
        console.log('yes');
    }else{
        console.log('err');
    }

    // err

    if(a > b || b < c){
        console.log('yes');
    }else{
        console.log('err');
    }

    // yes

    let d;
    d = d ?? 'fromidea.com';
    console.log(d);

    // fromidea.com

</script>
```



### if...else判断语句

当指定条件为真，if 语句会执行一段语句。如果条件为假，则执行另一段语句。

```js
<script>
    function validate(str){
        if(str.length >= 12){
            return '密码非常安全';
        }else if(str.length >= 6){
            return '密码比较安全';
        }else{
            return '密码不太安全';
        }
    }
    let valid = validate('123123');
    console.log(valid); //密码比较安全
</script>
```



### 三元表达式

一个条件后跟一个问号（?），如果条件为真值，则执行冒号（:）前的表达式；若条件为假值，则执行最后的表达式。该运算符经常当作 if...else 语句的简捷形式来使用。

```js
<script>
    let a = 0;
    let b = 1;

    let c = a ? a : b;
    console.log(c); // 1
</script>
```



### switch

将表达式的值与case子句匹配，并执行与该情况相关联的语句。

示例代码：

```js
<script>
    function age(num){

        let msg = '';

        switch(true){
            case num >= 60:
                msg = '老年';
                break;
            
            case num >= 40:
                msg = '中年';
                break;

            case num >= 20:
                msg = '青年';
                break;

            case num >= 10:
                msg = '少年';
                break;

            case num >= 0:
            default:
                msg = '婴幼儿';
            break;
        }

        return msg;
    }
    console.log(age()); //婴幼儿
</script>
```



### while

某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。

示例代码：

```js
<script>
    function table(options = {tr:5,td:10}){
        document.write(`<table border='1' style="width:100%">`);
        while (options.tr -- != 0){
            document.write(`<tr>`);
            let td = options.td;
            while (td-- != 0){
                document.write(`<td>${options.tr}:${td}</td>`);
            }       
            document.write('</tr>');
        }
        document.write(`</table>`);
    }

    table({tr:10,td:10});
</script>
```

浏览器效果：

<table border="1" style="width:100%"><tbody><tr><td>9:9</td><td>9:8</td><td>9:7</td><td>9:6</td><td>9:5</td><td>9:4</td><td>9:3</td><td>9:2</td><td>9:1</td><td>9:0</td></tr><tr><td>8:9</td><td>8:8</td><td>8:7</td><td>8:6</td><td>8:5</td><td>8:4</td><td>8:3</td><td>8:2</td><td>8:1</td><td>8:0</td></tr><tr><td>7:9</td><td>7:8</td><td>7:7</td><td>7:6</td><td>7:5</td><td>7:4</td><td>7:3</td><td>7:2</td><td>7:1</td><td>7:0</td></tr><tr><td>6:9</td><td>6:8</td><td>6:7</td><td>6:6</td><td>6:5</td><td>6:4</td><td>6:3</td><td>6:2</td><td>6:1</td><td>6:0</td></tr><tr><td>5:9</td><td>5:8</td><td>5:7</td><td>5:6</td><td>5:5</td><td>5:4</td><td>5:3</td><td>5:2</td><td>5:1</td><td>5:0</td></tr><tr><td>4:9</td><td>4:8</td><td>4:7</td><td>4:6</td><td>4:5</td><td>4:4</td><td>4:3</td><td>4:2</td><td>4:1</td><td>4:0</td></tr><tr><td>3:9</td><td>3:8</td><td>3:7</td><td>3:6</td><td>3:5</td><td>3:4</td><td>3:3</td><td>3:2</td><td>3:1</td><td>3:0</td></tr><tr><td>2:9</td><td>2:8</td><td>2:7</td><td>2:6</td><td>2:5</td><td>2:4</td><td>2:3</td><td>2:2</td><td>2:1</td><td>2:0</td></tr><tr><td>1:9</td><td>1:8</td><td>1:7</td><td>1:6</td><td>1:5</td><td>1:4</td><td>1:3</td><td>1:2</td><td>1:1</td><td>1:0</td></tr><tr><td>0:9</td><td>0:8</td><td>0:7</td><td>0:6</td><td>0:5</td><td>0:4</td><td>0:3</td><td>0:2</td><td>0:1</td><td>0:0</td></tr></tbody></table>



### do...while

创建一个执行指定语句的循环，直到条件为 false。在执行do语句后检测条件，所以do会至少执行一次。

示例代码：

```js
<script>
    function star(row = 5){
        let start = 1;
        do{
            let n = 1;
            do{
                document.write('*');
            }while(++n <= start);
            document.write('<br>');
        }while(++start <= row);
    }
    star(10);
</script>
```

浏览器效果：

![image-20230303113405831](./assets/image-20230303113405831.png)


### for

用于创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分隔，后跟一个用于在循环中执行的语句（通常是一个块语句）。

示例代码：

绘制一个“圣诞树”

```js
<script>
    let row = 10;
    let last = 0;
    for(let i = 1;i<=row;i++){
        for(let j = row - i;j > 0;j--){
            document.write('<i style="color:white">*</i>');
        }
        for(let n = 0;n < i * 2 - 1;n++){
            document.write('*');
            last = n;
        }
        document.write('<br>')
    }
    console.log(last);//最后一行*的数量
    for(let i = 1; i <= 3; i++){
        for(let j = last / 2 - 1; j > 0;j--){
            document.write('<i style="color:white">*</i>');
        }
        document.write('***');
        document.write('<br>');
    }
</script>
```

浏览器效果：

![image-20221231145846849](./assets/image-20221231145846849.png)



### continue

跳过本次循环，继续执行下次循环。

示例代码：

```js
<script>
    for(let i = 1; i <= 10; i++){
        if( i % 2 ) continue; 
        console.log(i);
    }
</script>
```

控制台输出：

<div class="demo">
  2<br>
  4<br>
  6<br>
  8<br>
  10<br>
</div>



### break

终止或跳出当前循环体。

#### 延伸：label标记

标记语句可以和 ```break``` 或 ```continue``` 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。

```js
<script>
    list1 : for(let i = 1; i <= 10; i++){
        list2: for(let n = 1; n <= 10; n++){
            if( n % 2 ) continue list2; 
            if( i + n >= 12 ) break list1;
            console.log(i,n);
        }
    }
</script>
```

控制器输出：

<div class="demo">
  1 2<br>
	1 4<br>
	1 6<br>
	1 8<br>
	1 10<br>
	2 2<br>
	2 4<br>
	2 6<br> 
</div>



### for...in

是为遍历对象属性而构建的。以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。

示例代码：

```js
<script>
    let obj = [
        {name:'fromidea',url:'fromidea.com'},
        {name:'pintecher',url:'pintecher.com'}
		];

    for (const key in obj){
        console.log(obj[key].name , obj[key].url);
    }
</script>
```

控制台输出：

<div class="demo">
  fromidea fromidea.com<br>
  pintecher pintecher.com
</div>





### for...of

在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。

示例代码：

```js
<script>
    let obj = [
        {name:'fromidea',url:'fromidea.com'},
        {name:'pintecher',url:'pintecher.com'}
		];

    for (const item of obj){
        console.log(item.name , item.url);
    }
</script>
```

控制台输出：

<div class="demo">
  fromidea fromidea.com<br>
  pintecher pintecher.com
</div>


## 数据类型



### 类型判断

通常，我们使用以下2种方式来进行类型判断：

*   [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)，返回一个字符串，表示[操作数的类型](#数据类型)。
*   [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)，用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

示例代码：

```js
<script>
  let a = {};
  let b = [];

  console.log(typeof a); //object
  console.log(typeof b); //object

  console.log(a instanceof Object); //true
  console.log(b instanceof Array);  //true
</script>
```



### 模版字面量及嵌套

模板字面量是允许嵌入表达式的字符串字面量。可以使用多行字符串和字符串插值功能。

>   它们在 ES2015 规范的先前版本中被称为“模板字符串”。

模板字符串使用反引号 (\`\`) 来代替普通字符串中的用双引号和单引号。

```js
<script>
    let list = [
        {name: 'fromidea',url:'fromidea.com'},
        {name: 'pintecher',url:'pintecher.com'},
    ];

    function ul(){
        return `
            <ul>
                ${list.map(item=>`
                    <li><a href="http://${item.url}">${item.name}</a></li>
                `).join("")}
            </ul>
        `;
    }

    document.body.innerHTML = ul();
</script>
```

浏览器输出：

<div class="demo">
<ul>          
  <li><a href="http://fromidea.com">fromidea</a></li>
  <li><a href="http://pintecher.com">pintecher</a></li>
</ul>
</div>





### 标签模版

标签使得可以用函数解析模板字符串。

标签函数的第一个参数包含一个字符串值的数组。其余的参数与表达式相关。最后，你的函数可以返回处理好的的字符串（或者它可以返回完全不同的东西 , 如下个例子所述）。用于该标签的函数的名称可以被命名为任何名字。

示例代码：

```js
<script>
    let list = [
        {title: 'fromidea',content:'站在科技与人文的交叉口，记录、共享、传播。'},
        {title: 'pintecher',content:'安徽品格网络科技有限公司'},
    ];

    function template(){
        return `
            <ul>
                ${list.map(item=> links `
                    <li>标题：${item.title}，内容：${item.content}</li>
                `).join("")}
            </ul>
        `;
    }

    function links(string, ...vars){
        return `
            ${string.map((str,key)=>{
                    return str + (vars[key] ? 
                        vars[key].replace('fromidea',`<a href="http://www.fromidea.com">fromidea</a>`)
                    : '');
                }                
            ).join("")}
        `;
    }

    document.body.innerHTML = template();
</script>
```

浏览器输出：

<div class="demo">
  <ul>
  <li>标题：<a href="http://www.fromidea.com">fromidea</a>，内容：站在科技与人文的交叉口，记录、共享、传播。</li>
	<li>标题：pintecher，内容：安徽品格网络科技有限公司</li>
	</ul>
</div>

​    

### 字符串属性与方法 

#### 属性                

| 属性                                                         | 说明                        |
| ------------------------------------------------------------ | --------------------------- |
| [`length`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length) | 反映字符串的 length。只读。 |

#### 方法

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`at()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at) | 返回指定索引处的字符（正好是一个 UTF-16 码元）。接受负整数，从最后一个字符串字符开始倒数。 |
| [`charAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | 返回指定 index 处的字符（正好是一个 UTF-16 码元）。          |
| [`charCodeAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | 返回一个数字，它是给定 index 处的 UTF-16 码元值。            |
| [`codePointAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) | 返回一个非负整数值，它是从指定位置（pos）开始的 UTF-16 编码码位的码位值。 |
| [`concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat) | 合并两个（或更多）字符串的文本并返回一个新字符串。           |
| [`includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes) | 确定调用字符串是否包含 searchString。                        |
| [`endsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) | 确定字符串是否以字符串 searchString 的字符结尾。             |
| [`indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) | 返回在调用 String 对象中第一次出现的 searchValue 的索引，如果未找到则返回 -1。 |
| [`lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) | 返回在调用 String 对象中最后一次出现的 searchValue 的索引，如果未找到则返回 -1。 |
| [`localeCompare()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) | 返回一个数字，用于指示一个参考字符串 compareString 是否在排序顺序前面或之后或与给定字符串相同。 |
| [`match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) | 用于将正则表达式 regexp 与字符串匹配。                       |
| [`matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | 返回所有 regexp 的匹配项的迭代器。                           |
| [`normalize()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) | 返回调用字符串值的 Unicode 规范化形式。                      |
| [`padEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) | 用给定字符串从末尾填充当前字符串并返回长度为 targetLength 的新字符串。 |
| [`padStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) | 用给定字符串从开头填充当前字符串并返回长度为 targetLength 的新字符串。 |
| [`repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) | 返回由对象的元素重复 count 次组成的字符串。                  |
| [`replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | 用于使用 replaceWith 替换出现的 searchFor。searchFor 可以是字符串或正则表达式，replaceWith 可以是字符串或函数。 |
| [`replaceAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | 用于使用 replaceWith 替换所有出现的 searchFor。searchFor 可以是字符串或正则表达式，replaceWith 可以是字符串或函数。 |
| [`search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) | 搜索正则表达式 regexp 和调用字符串之间的匹配项。             |
| [`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice) | 提取字符串的一部分并返回一个新字符串。                       |
| [`split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) | 返回一个由在出现子字符串 sep 时拆分调用的字符串然后填充的字符串数组。 |
| [`startsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) | 确定调用字符串是否以字符串 searchString 的字符开头。         |
| [`substring()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) | 返回一个新字符串，其中包含来自（或之间）指定索引（或多个索引）的调用字符串的字符。 |
| [`toLocaleLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) | 字符串中的字符将转换为小写，同时尊重当前语言环境。<br/>对于大多数语言，这将返回与 toLowerCase() 相同的结果。 |
| [`toLocaleUpperCase( [locale, ...locales\])`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase) | 字符串中的字符将转换为大写，同时尊重当前语言环境。<br/>对于大多数语言，这将返回与 toUpperCase() 相同的结果。 |
| [`toLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) | 返回转换为小写的调用字符串值。                               |
| [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString) | 返回表示指定对象的字符串。覆盖 Object.prototype.toString() 方法。 |
| [`toUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) | 返回转换为大写的调用字符串值。                               |
| [`trim()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) | 修剪字符串开头和结尾的空格。                                 |
| [`trimStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) | 修剪字符串开头的空格。                                       |
| [`trimEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) | 修剪字符串结尾的空格。                                       |
| [`valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf) | 返回指定对象的原始值。覆盖 Object.prototype.valueOf() 方法。 |
| [`[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) | 返回一个新的迭代器对象，该对象迭代 String 值的码位，将每个码位作为 String 值返回。 |

#### 示例

##### includes

执行区分大小写的搜索，以确定是否可以在另一个字符串中找到一个字符串，并根据情况返回 true 或 false

```js
<script>
  let keys = ['知识','共享','传播'];

  let text1 = 'fromidea网站是一个专注于知识共享与传播的平台';
  let text2 = 'fromdiea的定位是，站在科技与人文的交叉口';

  function search(text){
    let status = keys.some(word => {
      return text.includes(word);
    })
    return status;
  }

  let msg = '';

  if(search(text1)){
    msg += "第1行句子找到关键词；";
  }else{
    msg += "第1行句子没有找到关键词；";
  }
  if(search(text2)){
    msg += "第2行句子找到关键词；";
  }else{
    msg += "第2行句子没有找到关键词；";
  }

  document.body.innerHTML = msg;
</script>
```

浏览器输出：

<div class="demo">
  <text>第1行句子找到关键词；第2行句子没有找到关键词；</text>
</div>



##### slice，repeat

slice() 方法提取字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

repeat() 构造并返回一个新字符串，按指定数量克隆字符串。

```js
<script>
  function phone(number,start = 5,len = 4){
    number = String(number);
    return number.slice(0,start-1) + '*'.repeat(len) + number.slice(start+len-1);
  }
	console.log(phone(13812345678,5,4));
</script>
```

控制台输出：

<div class="demo">
  1381****678
</div>



### boolean类型

Boolean 类型表示一个逻辑实体并且包括两个值：true 和 false。

布尔值通常用于条件运算，包括三元运算符、if...else、while 等。

示例代码：

```js
<script>
  while( true ){
    const url = prompt('fromidea的网址是？').trim();
    if(!url) continue;
    let msg = url == 'fromidea.com' ? '回答正确' : '填写错误';
    document.write(msg);
    break;
  }
</script>
```

浏览器效果：

![image-20230102095231859](./assets/image-20230102095231859.png)

代码中判断是否填写内容，如果提交的内容为空，将会反复弹窗。直至填写内容。





### NaN

是一个表示非数字的值。

NaN 的初始值不是数字——与 Number.NaN 的值相同。在现代浏览器中，NaN 是一个不可配置、不可写的属性。即使不是这样，也要避免重写它。在程序中很少使用 NaN。

```js
<script>
  let arr = [1,2,3];
  console.log(Number(arr));
</script>
```

控制台输出：

NaN



### Math数学计算

Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。Math 不是一个函数对象。

Math 用于 Number 类型。

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`Math.abs(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) | 返回一个数的绝对值。                                         |
| [`Math.acos(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos) | 返回一个数的反余弦值。                                       |
| [`Math.acosh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh) | 返回一个数的反双曲余弦值。                                   |
| [`Math.asin(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asin) | 返回一个数的反正弦值。                                       |
| [`Math.asinh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh) | 返回一个数的反双曲正弦值。                                   |
| [`Math.atan(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) | 返回一个数的反正切值。                                       |
| [`Math.atanh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh) | 返回一个数的反双曲正切值。                                   |
| [`Math.atan2(y, x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2) | 返回 `y/x` 的反正切值。                                      |
| [`Math.cbrt(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt) | 返回一个数的立方根。                                         |
| [`Math.ceil(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) | 返回大于一个数的最小整数，即一个数向上取整后的值。           |
| [`Math.clz32(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32) | 返回一个 32 位整数的前导零的数量。                           |
| [`Math.cos(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) | 返回一个数的余弦值。                                         |
| [`Math.cosh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh) | 返回一个数的双曲余弦值。                                     |
| [`Math.exp(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/exp) | 返回欧拉常数的参数次方，`E^x`，其中 `x` 为参数，`E` 是欧拉常数（2.718...，自然对数的底数）。 |
| [`Math.expm1(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1) | 返回 `exp(x) - 1` 的值。                                     |
| [`Math.floor(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) | 返回小于一个数的最大整数，即一个数向下取整后的值。           |
| [`Math.fround(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) | 返回最接近一个数的单精度浮点型表示。                         |
| [`Math.hypot([x[, y[, …\]]])`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot) | 返回其所有参数平方和的平方根。                               |
| [`Math.imul(x, y)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) | 返回 32 位整数乘法的结果。                                   |
| [`Math.log(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log) | 返回一个数的自然对数（㏒e，即 ㏑）。                         |
| [`Math.log1p(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p) | 返回一个数加 1 的和的自然对数（㏒e，即 ㏑）。                |
| [`Math.log10(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log10) | 返回一个数以 10 为底数的对数。                               |
| [`Math.log2(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log2) | 返回一个数以 2 为底数的对数。                                |
| [`Math.max([x[, y[, …\]]])`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max) | 返回零到多个数值中最大值。                                   |
| [`Math.min([x[, y[, …\]]])`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min) | 返回零到多个数值中最小值。                                   |
| [`Math.pow(x, y)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) | 返回一个数的 y 次幂。                                        |
| [`Math.random()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random) | 返回一个 0 到 1 之间的伪随机数。                             |
| [`Math.round(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round) | 返回四舍五入后的整数。                                       |
| [`Math.sign(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) | 返回一个数的符号，得知一个数是正数、负数还是 0。             |
| [`Math.sin(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) | 返回一个数的正弦值。                                         |
| [`Math.sinh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh) | 返回一个数的双曲正弦值。                                     |
| [`Math.sqrt(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) | 返回一个数的平方根。                                         |
| [`Math.tan(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tan) | 返回一个数的正切值。                                         |
| [`Math.tanh(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh) | 返回一个数的双曲正切值。                                     |
| Math.toSource()                                              | 返回字符串 `"Math"`。                                        |
| [`Math.trunc(x)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) | 返回一个数的整数部分，直接去除其小数点及之后的部分。         |

#### 示例

##### ceil，floor，round

```js
<script>
  console.log(Math.ceil(1.01)); //向上取整 2
	console.log(Math.floor(1.6)); //向下取整 1
	console.log(Math.round(1.5)); //四舍五入 2
</script>
```



##### max，random

```js
<script>
  console.log(Math.max(50,55,33,85)); //取最大数 85

  const scores = [50,55,99,33,85,20,75];
  console.log(Math.max.apply(null,scores)); //从数组中取最大数 99

  console.log(Math.random()); //生成一个从0～1的随机数

  //随机从数组中选择一个名称
  const names = ['章三','里斯','旺起','粥吧'];

  function random(array,start=1,end){
    end = end ? end : array.length;
    start --;
    let index = start + Math.floor(Math.random() * (end - start));
    return array[index];
  }

  console.log(random(names,1,3));
</script>
```



### Date

javascript中处理时间的对象。

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`Date.now()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now) | 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。 |
| [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) | 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。 |
| [`Date.UTC()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC) | 接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。 |

#### Date 实例

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`getDate()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate) | 根据本地时间，返回一个指定的 Date 对象为一个月中的哪一日（1-31）。 |
| [`getDay()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) | 根据本地时间，返回一个指定的 Date 对象是在一周中的第几天（0-6），0 表示星期天。 |
| [`getFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的完整年份（四位数年份）。 |
| [`getHours()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的小时（`0`–`23`）。 |
| [`getMilliseconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的毫秒数（`0`–`999`）。 |
| [`getMinutes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的分钟数（`0`–`59`）。 |
| [`getMonth()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的月份（`0`–`11`），0 表示一年中的第一月。 |
| [`getSeconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的秒数（`0`–`59`）。 |
| [`getTime()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) | 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象所代表时间的毫秒数。（更早的时间会用负数表示） |
| [`getTimezoneOffset()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) | 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。  |
| [`getUTCDate()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象为一个月中的哪一日（`1`-`31`）。 |
| [`getUTCDay()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象是在一周中的第几天（`0`-`6`），0 表示星期天。 |
| [`getUTCFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的完整年份（四位数年份）。 |
| [`getUTCHours()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的小时（`0`–`23`）。 |
| [`getUTCMilliseconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的毫秒数（`0`–`999`）。 |
| [`getUTCMinutes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的分钟数（`0`–`59`）。 |
| [`getUTCMonth()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的月份（`0`–`11`），0 表示一年中的第一月。 |
| [`getUTCSeconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds) | 以协调世界时为标准，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的秒数（`0`–`59`）。 |
| [`getYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear) | 根据本地时间，返回一个指定的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 [`getFullYear`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) 。 |
| [`setDate()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象在所属月份中的天数。 |
| [`setFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的完整年份（四位数年份）。 |
| [`setHours()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的小时数。 |
| [`setMilliseconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的豪秒数。 |
| [`setMinutes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的分钟数。 |
| [`setMonth()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的月份。 |
| [`setSeconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的秒数。 |
| [`setTime()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime) | 用一个从 1970-1-1 00:00:00 UTC 计时的毫秒数来为一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象设置时间。用负数来设置更早的时间。 |
| [`setUTCDate()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象在所属月份中的天数。 |
| [`setUTCFullYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的完整年份（四位数年份）。 |
| [`setUTCHours()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的小时数。 |
| [`setUTCMilliseconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的豪秒数。 |
| [`setUTCMinutes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的分钟数。 |
| [`setUTCMonth()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的月份。 |
| [`setUTCSeconds()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds) | 以协调世界时为标准，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的秒数。 |
| [`setYear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear) | 根据本地时间，设置一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的相对年份（相对 1900 年，通常是 2 到 3 位数字）。请改用 [`setFullYear`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear) 。 |
| [`toDateString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) | 以美式英语和人类易读的表述形式返回一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象日期部分的字符串。 |
| [`toISOString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) | 将指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象转换成 ISO 格式表述的字符串并返回。 |
| [`toJSON()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON) | 返回指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象调用 [`toISOString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) 方法的返回值。在 [`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 中使用。 |
| [`toLocaleDateString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) | 返回一个表述指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的日期部分字符串。该字符串格式因不同语言而不同。 |
| [`toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) | 返回一个表述指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的字符串。该字符串格式因不同语言而不同。 |
| [`toLocaleTimeString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) | 返回一个表述指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象时间部分的的字符串。该字符串格式因不同语言而不同。 |
| [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) | 返回一个字符串，表示该 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象。覆盖了 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法。 |
| [`toTimeString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) | 以人类易读形式返回一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象时间部分的字符串，该字符串以美式英语格式化。 |
| [`toUTCString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) | 使用 UTC 时区，把一个 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象转换为一个字符串。 |
| [`valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf) | 返回一个 Date 对象的原始值。覆盖了 Object.prototype.valueOf() 方法。 |

示例代码：

```js
<script>
  const date = new Date();
  console.log(date.getFullYear()); //年
  console.log(date.getMonth()+1);  //月
  console.log(date.getDate()); //日
  console.log(date.getHours()); //时
  console.log(date.getMinutes()); //分
  console.log(date.getSeconds()); //秒

  //格式化时间函数
  function formatDate(date,format = 'YYYY年MM月DD日 HH点ii分ss秒'){
    const config = {
      YYYY : date.getFullYear(),
      MM : date.getMonth()+1,
      DD : date.getDate(),
      HH : date.getHours(),
      ii : date.getMinutes(),
      ss : date.getSeconds(),
    }
    for (const key in config) {
      format = format.replace(key,config[key]);
    }
    return format;
  }

  let newDate = formatDate(new Date());
  console.log(newDate); //2023年1月2日 11点28分1秒
</script>
```



#### MomentJS日期处理类库

```shell
npm install moment --save   # npm
```

[http://momentjs.cn/](http://momentjs.cn/)





## 数组

Array 对象支持在单个变量名下存储多个元素。



### 特征

*   JavaScript 数组是可调整大小的，并且可以包含不同的数据类型。（当不需要这些特征时，可以使用类型化数组。）
*   JavaScript 数组不是关联数组，因此，不能使用任意字符串作为索引访问数组元素，但必须使用非负整数（或它们各自的字符串形式）作为索引访问。
*   JavaScript 数组的索引从 0 开始：数组的第一个元素在索引 0 处，第二个在索引 1 处，以此类推，最后一个元素是数组的 length 属性减去 1 的值。
*   JavaScript 数组复制操作创建浅拷贝。（所有 JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是深拷贝）。



### 静态方法

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) | 从数组类对象或可迭代对象创建一个新的 `Array` 实例。          |
| [`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | 如果参数是数组则返回 `true` ，否则返回 `false` 。            |
| [`Array.of()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of) | 创建一个新的 Array 实例，具有可变数量的参数，而不管参数的数量或类型。 |

示例代码：

```html
<body>
    <div>fromidea.com</div>
    <div>pintecher.com</div>
    <script>
        //Array.isArray
        let arr = [1,2,3,4];
        let str = '1,2,3,4';
        console.log(Array.isArray(arr)); //true 
        console.log(Array.isArray(str)); //false

        //Array.of
        console.table(Array.of(3,5)); // [3,5]

        //Array.from
        let divs = document.querySelectorAll('div');
        Array.from(divs,item=>{
            item.style.backgroundColor = 'blue';
            item.style.color = '#fff';
        })
    </script>
</body>
```

浏览器效果：

<div class="demo">
  <div style="background-color: blue; color: rgb(255, 255, 255);">fromidea.com</div>
  <div style="background-color: blue; color: rgb(255, 255, 255);">pintecher.com</div>
</div>



### 实例方法

| 方法                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`at()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at) | 返回给定索引处的数组元素。接受从最后一项往回计算的负整数。   |
| [`concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | 返回一个新数组，该数组由被调用的数组与其它数组或值连接形成。 |
| [`copyWithin()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | 在数组内复制数组元素序列。                                   |
| [`entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries) | 返回一个新的[*数组迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)对象，其中包含数组中每个索引的键/值对。 |
| [`every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | 如果调用数组中的每个元素都满足测试函数，则返回 `true`。      |
| [`fill()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | 用静态值填充数组中从开始索引到结束索引的所有元素。           |
| [`filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | 返回一个新数组，其中包含调用所提供的筛选函数返回为 `true` 的所有数组元素。 |
| [`find()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | 返回数组中满足提供的测试函数的第一个元素的值，如果没有找到合适的元素，则返回 `undefined`。 |
| [`findIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | 返回数组中满足提供的测试函数的第一个元素的索引，如果没有找到合适的元素，则返回 `-1`。 |
| [`findLast()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) | 返回数组中满足提供的测试函数的最后一个元素的值，如果没有找到合适的元素，则返回 `undefined`。 |
| [`findLastIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) | 返回数组中满足所提供测试函数的最后一个元素的索引，如果没有找到合适的元素，则返回 `-1`。 |
| [`flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) | 返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。 |
| [`flatMap()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) | 对调用数组的每个元素调用给定的回调函数，然后将结果平展一层，返回一个新数组。 |
| [`forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | 对调用数组中的每个元素调用函数。                             |
| [`group()` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group) | 根据测试函数返回的字符串，将数组的元素分组到一个对象中。     |
| [`groupToMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap) | 根据测试函数返回的值，将数组的元素分组到 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 中。 |
| [`includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | 确定调用数组是否包含一个值，根据情况返回 `true` 或 `false`。 |
| [`indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | 返回在调用数组中可以找到给定元素的第一个（最小）索引。       |
| [`join()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | 将数组的所有元素连接为字符串。                               |
| [`keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) | 返回一个新的[*数组迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)，其中包含调用数组中每个索引的键。 |
| [`lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | 返回在调用数组中可以找到给定元素的最后一个（最大）索引，如果找不到则返回 `-1`。 |
| [`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | 返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。 |
| [`pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | 从数组中移除最后一个元素并返回该元素。                       |
| [`push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | 在数组末尾添加一个或多个元素，并返回数组新的 `length`。      |
| [`reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) | 对数组的每个元素（从左到右）执行用户提供的 “reducer” 回调函数，将其简化为单个值。 |
| [`reduceRight()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) | 对数组的每个元素（从右到左）执行用户提供的 “reducer” 回调函数，将其简化为单个值。 |
| [`reverse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) | 反转数组中元素的顺序。（前面变成后面，后面变成前面。）       |
| [`shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | 从数组中移除第一个元素并返回该元素。                         |
| [`slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | 提取调用数组的一部分并返回一个新数组。                       |
| [`some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | 如果调用数组中至少有一个元素满足提供的测试函数，则返回 `true`。 |
| [`sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | 对数组的元素进行排序并返回该数组。                           |
| [`splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | 从数组中添加和/或删除元素。                                  |
| [`toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) | 返回一个表示调用数组及其元素的本地化字符串。重写 [`Object.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) 方法。 |
| [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) | 返回一个表示调用数组及其元素的字符串。重写 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 方法。 |
| [`unshift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | 在数组的前面添加一个或多个元素，并返回数组新的 `length`。    |
| [`values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values) | 返回一个新的[*数组迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)对象，该对象包含数组中每个索引的值。 |
| [`[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) | 默认情况下，该方法为 values() 方法的别名。                   |

#### 示例代码

```js
<script>
  let ret;

  let array = [1,2,3,4,5];
  ret = array.unshift(0); // 在数组的前面添加一个或多个元素，并返回数组新的 `length`。
  console.log(ret); // 6
  console.log(array); // [0, 1, 2, 3, 4, 5]

  ret = array.shift(); // 从数组中移除第一个元素并返回该元素。
  console.log(ret); // 0
  console.log(array); // [1, 2, 3, 4, 5] 

  ret = array.push(6); // 在数组末尾添加一个或多个元素，并返回数组新的 `length`。
  console.log(ret); // 6
  console.log(array); // [1, 2, 3, 4, 5, 6]

  ret = array.pop(); // 从数组中移除最后一个元素并返回该元素。
  console.log(ret); // 6
  console.log(array); // [1, 2, 3, 4, 5]

  ret = array.slice(1,3); // 提取调用数组的一部分并返回一个新数组。原数组不变。
  console.log(ret); // [2, 3]
  console.log(array); // [1, 2, 3, 4, 5]

  ret = array.splice(1,3); // 从数组中添加和/或删除元素。
  console.log(ret); //  [2, 3, 4]
  console.log(array); //  [1, 5]

  ret = array.splice(1,0,...ret); // 第二个参数为0，表示不删除。第三个参数是向数组追加元素
  console.log(ret); // []
  console.log(array); // [1, 2, 3, 4, 5]
</script>
```



### 浅拷贝

示例代码：

```js
<script>
  let array = [1,2,3,4];
  let hd = array;
  hd[1] = 'fromidea.com';
  console.log(hd); // array (4) [1, 'fromidea.com', 3, 4]
  console.log('array',array); // array (4) [1, 'fromidea.com', 3, 4]
</script>
```

观察发现，虽然 `array` 赋值给了 `hd`，但是 `hd` 的值被修改，`array` 的值同样发生了变化。

这主要原因是，对象的浅拷贝是其属性与拷贝源对象的属性共享相同引用（指向相同的底层值）的副本。因此，当你更改源或副本时，也可能导致其他对象也发生更改——也就是说，你可能会无意中对源或副本造成意料之外的更改。这种行为与深拷贝的行为形成对比，在深拷贝中，源和副本是完全独立的。



### 展开语法

可以在函数调用/数组构造时，将数组表达式或者 string 在语法层面展开；还可以在构造字面量对象时，将对象表达式按 key-value 的方式展开。

示例代码：

```js
<script>
  let arr = ['fromidea','pintecher'];
  let hd = ['html','css','php','mysql','javascript'];

  //循环方式实现数组追加值
  for (const value of hd) {
    arr.push(value);
  }
  console.log(arr);

  //使用展开语法的实现，更为简便
  arr = ['fromidea','pintecher'];
  hd = ['html','css','php','mysql','javascript'];
  arr = [...arr,...hd];

  console.log(arr);
</script>
```



#### 数组拷贝

展开语法和 Object.assign() 行为一致，执行的都是浅拷贝 (只遍历一层)。如果想对多维数组进行深拷贝，下面的示例就有些问题了。

示例代码：

对获取到的dom元素进行批量绑定click事件。

```js
<body>
    <div>fromidea</div>
    <div>pintecher</div>

    <script>
        const divs = document.querySelectorAll('div');

        [...divs].map(item=>{
            item.addEventListener('click',function(){
                this.style.display = 'none';
            })
            console.log(item);
        })
    </script>
</body>
```



#### 解构赋值

解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。

示例代码：

```js
<script>
  let [name,...url] = ['fromidea','fromidea.com','pintecher.com'];
  console.log(name); // fromidea
  console.log(url);  // ['fromidea.com', 'pintecher.com']

  function show(){
    return ['1','2','3','4','5'];
  }

  let [a,b,...c] = show();
  console.log(c); // ['3', '4', '5']
</script>
```



#### 添加元素

可以使用展开语法向数组添加元素。

示例代码：

```js
<script>
  let array = ['fromidea','pintecher'];
  let names = ['neosun','neil'];

  array.push(...names);
  console.log(array); // ['fromidea', 'pintecher', 'neosun', 'neil']
</script>
```



### 数据出栈和入栈

pop,unshift,fill的用法。

示例代码：

```js
<script>
  let array = ["fromidea","pintecher"];
  let vars = array.pop(); //移出最后一个元素
  console.log(vars); //pintecher
  console.log(array); //['fromidea']

  let length = array.unshift('pintecher'); //在数组前面增加一个或多个元素，返回值是新的长度
  console.log(length); //2
  console.log(array); // ['pintecher', 'fromidea']

  //向数组填充所有元素
  console.log(Array(5).fill('fromidea')); //['fromidea', 'fromidea', 'fromidea', 'fromidea', 'fromidea']

  //填充到具体位置，参数：起始位置、结束位置
  console.log([1,2,3,4,5].fill('fromidea',1,3)); //[1, 'fromidea', 'fromidea', 4, 5]
</script>
```



### 清空数组

在js中，清空数组有多种方法。

示例代码：

```js
<script>
  let arr = [1,2,3,4,5];
  arr = []; // 方法1
  console.log(arr);

  arr = [1,2,3,4,5];
  arr.length = 0; // 方法2
  console.log(arr);

  arr = [1,2,3,4,5];
  arr.splice(0); // 方法3
  console.log(arr);

  arr = [1,2,3,4,5];
  while(arr.pop()){} // 方法4
  console.log(arr);
</script>
```



### 数组拆分与合并

split, join, concat, copyWithin的用法。

示例代码：

```js
<script>
  let str = 'fromidea,pintecher';

  let arr = str.split(','); // 拆分为数组
  console.log(arr); // ['fromidea', 'pintecher']

  str = arr.join(','); // 合并为字符串
  console.log(str); // fromidea,pintecher

  let arr1 = ['fromidea','pintecher'];
  let arr2 = ['fromidea.com','pintecher.com'];
  let arr3 = ['neosun','neil'];

  //合并数组
  arr = arr1.concat(arr2,arr3); // ['fromidea', 'pintecher', 'fromidea.com', 'pintecher.com', 'neosun', 'neil']
  console.log(arr);

  //使用展开语法合并数组
  let arr4 = [...arr1,...arr2,...arr3];
  console.log(arr4); // ['fromidea', 'pintecher', 'fromidea.com', 'pintecher.com', 'neosun', 'neil']

  //复制元素
  console.log(arr4.copyWithin(2,0,2)); // ['fromidea', 'pintecher', 'fromidea', 'pintecher', 'neosun', 'neil']
</script>
```



### 查找元素

indexOf, lastIndexOf, includes, find, findIndex的用法。

示例代码：

```js
<script>
  let arr = ['fromidea','pintecher','neil','neosun','pintecher'];

  //从左向右查找，找到返回key，找不到返回-1
  console.log(arr.indexOf('pintecher')); // 1

  //从右向左查找
  console.log(arr.lastIndexOf('pintecher')); // 4

  //查找元素，返回true 或 false
  console.log(arr.includes('neil')); //true

  //遍历数组元素，返回元素
  let persons = [{name:'neosin',com:'fromidea'},{name:'neil',com:"pintecher"}];
  let res = persons.find((item)=>{
    return item.name == 'neil'
  })
  console.log(res); // {name: 'neil', com: 'pintecher'}

  //遍历数组元素，返回元素key
  res = persons.findIndex((item)=>{
    return item.name == 'neil'
  })
  console.log(res); // 1
</script>
```



### 数组排序

sort的用法。

示例代码：

```js
<script>
  let pros = [
    {name:'iphone',price:9999},
    {name:'ipad',price:6500},
    {name:'macbook',price:12000},
    {name:'macmini',price:4800}
  ];

  let order = pros.sort(function(a,b){
    return a.price - b.price; //从小到大排序
    // return b.price - a.price; //从大到小排序
  })

  console.table(order);
</script>
```

控制台输出：

![image-20230104202901703](./assets/image-20230104202901703.png)



### 循环数组

forEach的用法。

示例代码：

```js
<script>
  let arr = ['fromdiea','pintecher','neo','neil'];

  //循环数组
  arr.forEach(function(item,index,arr){
    console.log(index); //元素key
    console.log(item); //元素value
    console.log(arr); //数组本身
  })
</script>
```



### 迭代器

iterator迭代器的使用。keys、values、entries的用法。

```js
<script>
    let array = ["fromidea","pintecher"];

    //调用数组中每个索引，生成一个迭代器
    let keys = array.keys();
    console.log(keys.next()); //{value: 0, done: false}

    //调用数组中每个数值，生成一个迭代器
    let values = array.values();
    console.log(values.next()); //{value: 'fromidea', done: false}

    //调用数组中键/值对，生成一个迭代器
    let entries = array.entries();
    console.log(entries.next());
    /*
    done:false,
    value: (2) [0, 'fromidea']
    */
</script>
```



### 测试函数

some、every的用法。

示例代码：

```js
<script>
  let content = document.getElementById('content');
  let keywords = ["js","vue","php"];

  //判断输入的内容是否包含keywords全部关键词
  content.addEventListener('keyup',function(){
  let content = this.value;
  let res = keywords.every(function(value,index,arr){
  return content.indexOf(value) !== -1;
  })
  document.querySelector('span').innerHTML = res ? '全部包含关健词' : '未完全包含关键词';
  })

  //判断输入的内容是否包含了keywords其中某个关健词
  content.addEventListener('keyup',function(){
  let content = this.value;
  let res = keywords.some(function(value,index,arr){
  return content.indexOf(value) !== -1;
  })
  document.querySelector('span').innerHTML = res ? '已包含关健词' : '未包含关键词';
  })

</script>
```

浏览器预览：

![image-20230304134857352](./assets/image-20230304134857352.png)

![image-20230304134911135](./assets/image-20230304134911135.png)



### 过滤操作

filter的用法。

示例代码：

```js
<script>
  let list = [
    {name:'fromidea',link:'fromidea.com',type:'company'},
    {name:'ikaowu',link:'ikaowu.com',type:'product'},
    {name:'pintecher',link:'pintehcer.com',type:'company'},
  ]; 

  //将数组中type为company的数据筛选出来
  let newList = list.filter(function(line){
  	return line['type'] == 'company';
  })

  console.log(newList);
  /*
  0: {name: 'fromidea', link: 'fromidea.com', type: 'company'}
  1: {name: 'pintecher', link: 'pintehcer.com', type: 'company'}
	*/
</script>
```



### 映射数组

map的用法。

示例代码：

```js
<script>
  let list = [
    {name:'fromidea',link:'fromidea.com',type:'company'},
    {name:'ikaowu',link:'ikaowu.com',type:'product'},
    {name:'pintecher',link:'pintehcer.com',type:'company'},
  ]; 

  //将list数据中每个link值前面都加上http://
  list.map(function(line){
  	line.link = 'http://'+line.link;
  })

  console.log(list);
  /*
  0: {name: 'fromidea', link: 'http://fromidea.com', type: 'company'}
  1: {name: 'ikaowu', link: 'http://ikaowu.com', type: 'product'}
  2: {name: 'pintecher', link: 'http://pintehcer.com', type: 'company'}
  */	
</script>
```



### reduce

示例代码：

```js
<script>
  let scores = [58,64,76,98,23,78,99];

  //得到scores中最大的数
  let max = scores.reduce(function(pre,cur){
  return pre > cur ? pre : cur;
  })

  console.log(max); //99
</script>
```



### 示例：制作文字特效动画

代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        body{
            width:100vh;
            height:100vh;
            display:flex;
            justify-content: center;
            align-items: center;
            background: #000;
        }
        div{
            font-size: 3em;
            color:#fff;
            font-weight: blod;
            text-transform: uppercase;
        }
        div>span{
            display: inline-block;
            position: relative;
        }
        .color{
            animation-name: color;
            animation-duration: 1s; /* 动画时间 */
            animation-iteration-count: 2; /* 重复次数 */
            animation-timing-function: linear; /* 动画类型 线性*/
            animation-direction: alternate; /* 来回切换 */
        }
        @keyframes color {
            50%{
                color:#f1c40f;
                transform: scale(2);
            }
            to{
                color:#e74c4c;
                transform: scale(0.5);
            }
        }
    </style>
</head>
<body>
    <div>fromidea.com</div>
    <script>
        let div = document.querySelector('div');

        [...div.textContent].reduce(function(pre,cur,index){
            pre == index && (div.innerHTML = '');
            let span = document.createElement('span');
            span.innerHTML = cur;
            div.appendChild(span);
            span.addEventListener('mouseover',function(){
                this.classList.add('color');
            })
            span.addEventListener('animationend',function(){
                this.classList.remove('color');
            })
        },0)

    </script>
</body>
</html>
```

预览效果：

![2023-03-04 14.45.24](./assets/2023-03-04_14.45.24.gif)



## 唯一标识符 Symbol

`Symbol` 是 JavaScript 中一种基本数据类型，用于创建独一无二的标识符。

`Symbol` 创建的每个值都是唯一且不可变的，因此可以用作对象属性的键，以确保不会与其他属性键冲突。例如：

```js
const obj = {};
const symbol1 = Symbol("key");
const symbol2 = Symbol("key");
obj[symbol1] = "value1";
obj[symbol2] = "value2";
console.log(obj[symbol1]); // 输出 "value1"
console.log(obj[symbol2]); // 输出 "value2"
```

在这个例子中，`symbol1` 和 `symbol2` 是两个不同的 `Symbol` 值，尽管它们都是使用相同的字符串参数创建的。因此，它们可以用作对象属性的键，而不必担心冲突。

`Symbol` 还可以用于创建一些 JavaScript 内置对象中的特殊属性，例如迭代器（`Symbol.iterator`）、异步迭代器（`Symbol.asyncIterator`）和原型（`Symbol.prototype`）等。这些属性可以让您自定义对象的行为并实现更复杂的功能。

总的来说，`Symbol` 是一种非常有用的 JavaScript 数据类型，可以用于创建独一无二的标识符，以及实现一些更高级的编程功能。



### 属性

| 属性                        | 描述                                                      |
| --------------------------- | --------------------------------------------------------- |
| `Symbol.asyncIterator`      | 一个表示默认异步迭代器的 `Symbol`。                       |
| `Symbol.hasInstance`        | 一个表示对象是否为构造函数的实例的 `Symbol`。             |
| `Symbol.isConcatSpreadable` | 一个表示对象是否可展开为数组的 `Symbol`。                 |
| `Symbol.iterator`           | 一个表示默认迭代器的 `Symbol`。                           |
| `Symbol.match`              | 一个表示用于字符串匹配的 `Symbol`。                       |
| `Symbol.matchAll`           | 一个表示用于返回所有匹配结果的 `Symbol`。                 |
| `Symbol.replace`            | 一个表示用于字符串替换的 `Symbol`。                       |
| `Symbol.search`             | 一个表示用于字符串搜索的 `Symbol`。                       |
| `Symbol.species`            | 一个表示对象构造函数的 `Symbol`。                         |
| `Symbol.split`              | 一个表示用于字符串拆分的 `Symbol`。                       |
| `Symbol.toPrimitive`        | 一个表示对象被转换为原始值时的 `Symbol`。                 |
| `Symbol.toStringTag`        | 一个表示对象默认的字符串标识的 `Symbol`。                 |
| `Symbol.unscopables`        | 一个表示对象中不应被包含在 with 语句中的属性的 `Symbol`。 |



### 方法

| 方法                 | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| `Symbol.for(key)`    | 如果存在带有给定 key 的 `Symbol`，则返回该 `Symbol`，否则创建一个新的 `Symbol`。 |
| `Symbol.keyFor(sym)` | 返回与给定 `Symbol` 关联的 key。                             |



## Set类型

`Set` 是 JavaScript 中一种基本数据类型，用于存储唯一的、不重复的值。它类似于数组，但与数组不同的是，`Set` 中的值不能重复，且没有顺序概念。

创建 `Set` 对象时，可以将一个可迭代对象作为参数传递给构造函数，该对象中的每个值都将添加到新的 `Set` 对象中。例如：

```js
const set1 = new Set([1, 2, 3, 4]);
console.log(set1); // 输出 Set(4) {1, 2, 3, 4}
```

在这个例子中，我们使用数组 `[1, 2, 3, 4]` 来创建一个新的 `Set` 对象 `set1`，该对象包含数组中的所有不同的值。

`Set` 对象有多个实用方法，包括 `add()`、`delete()`、`has()` 和 `clear()` 等。例如：

```js
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.delete(2);
console.log(set2.has(1)); // 输出 true
console.log(set2.has(2)); // 输出 false
console.log(set2); // 输出 Set(2) {1, 3}
```

在这个例子中，我们创建一个空的 `Set` 对象 `set2`，然后使用 `add()` 方法向其中添加三个值 `1`、`2` 和 `3`。接下来，我们使用 `delete()` 方法删除值 `2`，使用 `has()` 方法检查值 `1` 和 `2` 是否存在于 `Set` 对象中，并使用 `console.log()` 输出最终的 `Set` 对象。

总的来说，`Set` 对象是一种非常有用的数据结构，可以用于存储唯一的、不重复的值，并提供了多种实用方法来操作 `Set` 对象中的值。如果您需要处理大量的不同的值，并且需要确保它们不重复，那么 `Set` 对象可能是一个很好的选择。

### 属性

| 属性   | 描述                      |
| ------ | ------------------------- |
| `size` | 返回 `Set` 中的元素个数。 |

### 方法

| 方法                                         | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| `Set.prototype.add(value)`                   | 向 `Set` 中添加一个新元素。                                  |
| `Set.prototype.clear()`                      | 移除 `Set` 中的所有元素。                                    |
| `Set.prototype.delete(value)`                | 移除 `Set` 中指定的元素。                                    |
| `Set.prototype.entries()`                    | 返回一个包含 `Set` 中所有元素的键值对的迭代器对象。          |
| `Set.prototype.forEach(callback[, thisArg])` | 遍历 `Set` 中的每个元素，并执行指定的回调函数。              |
| `Set.prototype.has(value)`                   | 判断 `Set` 中是否存在指定元素，返回布尔值。                  |
| `Set.prototype.keys()`                     | 返回一个包含 `Set` 中所有元素索引的迭代器对象。                |
| `Set.prototype.values()`                     | 返回一个包含 `Set` 中所有元素值的迭代器对象。                |
| `Set.prototype[@@iterator]()`                | 返回一个包含 `Set` 中所有元素值的迭代器对象。                |



## WeakSet类型

`WeakSet` 是 `Set` 的一种特殊形式，其中只能存储对象。`WeakSet` 中存储的对象是弱引用，意味着在没有任何对该对象的引用时，它们将被自动垃圾回收。

与 `Set` 相比，`WeakSet` 具有以下几个区别：

-   `WeakSet` 中只能存储对象，而不能存储原始值。
-   `WeakSet` 中存储的对象是弱引用，这意味着当对象没有被其他引用时，会被垃圾回收掉。
-   `WeakSet` 没有迭代器（iterator）和 `size` 属性，因为无法获取 `WeakSet` 的大小和内容。

`WeakSet` 主要用于存储一组对象，且这些对象的生命周期受到其他代码的控制。例如，当一个对象被销毁时，如果它还存在于 `WeakSet` 中，那么它将自动从 `WeakSet` 中删除，避免了内存泄漏问题。因此，`WeakSet` 对于需要缓存对象，但不想阻止它们被垃圾回收的情况非常有用。



### 方法

| 方法                              | 描述                                          |
| --------------------------------- | --------------------------------------------- |
| `WeakSet.prototype.add(value)`    | 在 `WeakSet` 中添加一个对象 `value`。         |
| `WeakSet.prototype.delete(value)` | 从 `WeakSet` 中删除一个对象 `value`。         |
| `WeakSet.prototype.has(value)`    | 检查 `WeakSet` 中是否存在指定的对象 `value`。 |



### 示例代码

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li.remove,li.remove a{
            color:#eee;
        }
    </style>
</head>
<body>
    <ul>
        <li>fromidea.com <a href="javascript:;">×</a></li>
        <li>pintecher.com <a href="javascript:;">×</a></li>
        <li>ikaowu.com <a href="javascript:;">×</a></li>
    </ul>
    <script>
        class Todo{
            constructor(){
                this.li = document.querySelectorAll('ul>li');
                this.list = new WeakSet();
                this.li.forEach(item=>this.list.add(item));
                console.log(this.list);
            }
            run(){
                this.addEvent();
            }
            addEvent(){
                this.li.forEach(item=>{
                    let a = item.querySelector('a');
                    a.addEventListener('click',event=>{
                        const parent = event.target.parentElement;
                        if(this.list.has(parent)){
                            parent.classList.add('remove');
                            this.list.delete(parent);
                        }else{
                            parent.classList.remove('remove');
                            this.list.add(parent);
                        }
                        console.log(this.list);
                    })
                })
                
            }
        }

        new Todo().run();
    </script>
</body>
</html>
```

效果预览：

![2023-03-05 10.59.54](./assets/2023-03-05_10.59.54.gif)

​                          

`

## 函数

JavaScript中的函数是一种可重复使用的代码块，可以通过函数名调用它们并传递参数。JavaScript函数可以定义在函数表达式中，函数声明中，或者作为方法定义在对象上。

### 函数定义

1.  函数声明：

    使用 `function` 关键字来声明函数，例如：

    ```js
    function add(a, b) {
      return a + b;
    }
    ```

2.  函数表达式：

    使用 `var` 或 `let` 关键字定义函数表达式，例如：

    ```js
    var add = function(a, b) {
      return a + b;
    } 
    ```

     或者

    ```js
    let add = function(a, b) {
      return a + b;
    }
    ```



### 函数调用

可以通过函数名和参数列表来调用函数，例如：

```js
add(2, 3);
```

函数参数：

函数可以接受任意数量的参数，可以使用默认参数来指定默认值。例如：

```js
function greet(name = 'world') {
  console.log('Hello, ' + name + '!');
}

greet(); // 输出：Hello, world!
greet('John'); // 输出：Hello, John!
```

函数返回值：

函数可以使用 `return` 语句来返回值，例如：

```js
function add(a, b) {
  return a + b;
}

var sum = add(2, 3);
console.log(sum); // 输出：5
```

函数作用域：

在 JavaScript 中，函数可以访问它们所定义的作用域以及它们外部的作用域。这被称为词法作用域或静态作用域。例如：

```js
var x = 10;

function foo() {
  var y = 20;
  console.log(x); // 输出：10
  console.log(y); // 输出：20
}

foo();
```

在函数内部可以访问全局变量 x，以及函数内部定义的变量 y。



### this关键字

在JavaScript中，this是一个关键字，它的值根据函数的调用方式不同而不同。它通常用于引用当前执行上下文中的对象。在全局执行上下文中，this通常指向window对象（在浏览器中），而在函数执行上下文中，this的值取决于函数的调用方式。

在函数中，this的值可以通过三种方式来确定：

1.  默认绑定：如果函数作为独立函数调用，则this指向全局对象，或者undefined（在严格模式下）。
2.  隐式绑定：如果函数作为一个对象的方法调用，则this指向这个对象。
3.  显式绑定：使用call()和apply()方法，或者使用bind()方法绑定this的值。

除了以上三种绑定方式外，this还可以在事件处理程序中被设置为事件的目标元素，也可以在构造函数中使用new关键字创建新的实例时被设置为新实例的引用。

使用this时，需要注意一些潜在的陷阱。在嵌套函数中，this可能会指向错误的对象，需要使用bind()方法来显式地绑定正确的this值。此外，在回调函数中，this可能会指向不同的对象，需要使用箭头函数或者使用bind()方法来保持this的值不变。



### 函数方法

JavaScript 函数是对象，因此它们也有方法。其中一些常用的方法包括：

1.  `call()` 和 `apply()`：用于将函数作为对象的方法来调用，并将对象作为第一个参数传递。
2.  `bind()`：返回一个新的函数，其中 `this` 关键字被绑定到指定对象。
3.  `toString()`：将函数转换为字符串表示形式。

例如：

```js
var person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName + '!');
}

greet.call(person); // 输出：Hello, John Doe!
greet.apply(person); // 输出：Hello, John Doe!

var sayHello = greet.bind(person);
sayHello(); // 输出：Hello, John Doe!

console.log(greet.toString()); // 输出函数定义的字符串表示形式
```



apply、call和bind都是 JavaScript 函数的方法，它们的作用都是改变函数执行时的上下文（即this的指向）。

call 和 apply 的作用基本相同，只是传参方式不同。call() 方法接受参数列表，apply() 方法接受一个参数数组。

bind() 方法不会立即执行函数，而是返回一个新的函数，并且可以将传递给 bind() 方法的参数绑定到新函数中的参数。

下面详细讲解这三个方法的用法和区别。



#### call()

call() 方法调用一个函数，其具有一个指定的 this 值和一个参数列表。

语法：function.call(thisArg, arg1, arg2, ...)

参数：

-   thisArg：函数体内 this 对象的值。如果使用 call() 来调用函数，那么 this 就指向第一个参数。如果第一个参数为 null 或 undefined，则 this 指向全局对象（浏览器环境下为 window 对象）。
-   arg1, arg2, ...：被传递到函数中的参数列表。

返回值：函数的返回值。

示例：

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet.call(null, "Tom"); // 输出 "Hello, Tom!"
```



#### apply()

apply() 方法调用一个函数，其具有一个指定的 this 值和一个参数数组。

语法：function.apply(thisArg, [argsArray])

参数：

-   thisArg：函数体内 this 对象的值。如果使用 apply() 来调用函数，那么 this 就指向第一个参数。如果第一个参数为 null 或 undefined，则 this 指向全局对象（浏览器环境下为 window 对象）。
-   argsArray：一个数组或类数组对象，其中包含着被传递到函数中的参数。

返回值：函数的返回值。

示例：

```js
function greet(name, age) {
  console.log("Hello, " + name + "! You are " + age + " years old.");
}

greet.apply(null, ["Tom", 18]); // 输出 "Hello, Tom! You are 18 years old."
```



#### bind()

bind() 方法创建一个新的函数，当这个新函数被调用时，它的 this 值被指定为第一个参数，而其余参数将作为新函数的参数，供调用时使用。

语法：function.bind(thisArg, arg1, arg2, ...)

参数：

-   thisArg：函数体内 this 对象的值。如果使用 bind() 来调用函数，那么 this 就指向第一个参数。如果第一个参数为 null 或 undefined，则 this 指向全局对象（浏览器环境下为 window 对象）。
-   arg1, arg2, ...：新函数的参数。

返回值：一个新函数。

示例：

```js
function greet(name, age) {
  console.log("Hello, " + name + "! You are " + age + " years old.");
}

var greetTom = greet.bind(null, "Tom");
greetTom(18); // 输出 "Hello, Tom! You are 18 years old."
```



总的来说，apply、call、bind 这三个方法都可以用来改变函数的 this 指向。它们的区别在于传参的方式和返回值。

apply 和 call 都可以立即调用函数，区别在于传参的方式不同：apply 的第二个参数是一个数组，而 call 的第二个及后续参数是单个的参数。如果不传入第一个参数，那么 apply 和 call 都会将函数的 this 指向全局对象。

bind 方法会返回一个新的函数，它的 this 指向参数中传入的对象，且原函数的参数列表中的 this 被永久绑定到了这个对象，无法更改。新函数可以传入参数，这些参数会被原函数的参数列表所接收。

在实际开发中，我们通常会使用箭头函数来替代 apply、call、bind 方法，因为箭头函数内部的 this 指向是继承外部作用域的，无需通过特殊的方法改变 this 指向。

### 箭头函数

箭头函数是一种新的函数定义方式，它可以使用更简洁的语法来定义函数。箭头函数有以下特点：

-   箭头函数没有自己的this值，this值来自于父级作用域的this值。
-   箭头函数不能使用arguments对象，可以使用Rest参数代替。
-   箭头函数不能使用new操作符创建实例对象。
-   箭头函数没有原型对象，因此不能作为构造函数使用。

箭头函数的语法如下：

```js
// 常规函数
function add(a, b) {
  return a + b;
}

// 箭头函数
let add = (a, b) => a + b;
```

#### 箭头函数的 this

箭头函数不会创建新的 this 绑定，而是从外层作用域继承。

```js
const person = {
  name: 'Alice',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}.`);
    }, 1000);
  }
};

person.greet(); // Hello, my name is Alice.
```



### 默认参数

现在可以在函数声明中为参数提供默认值。

```js
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, World!
greet('Alice'); // Hello, Alice!
```



### 展开运算符

展开运算符可以将一个可迭代对象（如数组或字符串）展开为单个值或其他数据结构中的多个值。

```js
// 数组展开
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// 对象展开
const person = { name: 'Alice', age: 30 };
const { name, ...rest } = person;
console.log(name); // Alice
console.log(rest); // { age: 30 }
```



### Rest参数

Rest参数是一种用于定义可变数量参数的语法，它用于将不定数量的参数表示为一个数组。Rest参数在函数参数列表中以三个点（...）开头，它可以接收任意数量的参数，将它们转换为一个数组。

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5)); // 9
```



## 闭包

闭包（closure）是指一个函数可以访问并使用它的外部作用域中的变量，即使这些变量在函数执行时已经不在该作用域中。

一个闭包通常由一个函数和在该函数中创建的一个内部函数组成。内部函数可以访问外部函数的变量和参数，即使在外部函数已经返回并且执行上下文已经被销毁时仍然可以访问这些变量和参数。

闭包常常用于封装私有状态，即将变量隐藏在函数作用域内，防止外部代码访问和修改。例如，可以使用闭包实现 JavaScript 中的模块模式。

以下是一个示例代码，展示了如何使用闭包实现一个简单的计数器：

```js
function createCounter() {
  let count = 0;

  function counter() {
    count++;
    console.log(count);
  }

  return counter;
}

const counter = createCounter();
counter(); // 输出 1
counter(); // 输出 2
counter(); // 输出 3
```

在上面的代码中，`createCounter` 函数返回了一个内部函数 `counter`。由于 `counter` 函数可以访问外部作用域中的 `count` 变量，所以每次调用 `counter` 函数都会将 `count` 的值增加 1，并输出当前计数器的值。

闭包可以有效地帮助我们管理代码中的状态，并避免全局变量的滥用。但是，如果闭包被滥用，可能会导致内存泄漏等问题，因为闭包会持有外部函数中的变量和对象，这些变量和对象不会被垃圾回收器回收，直到闭包被释放为止。

### 闭包的内存泄漏问题

闭包内存泄漏通常是因为函数中的变量被引用而导致的，因为闭包会持有外部函数的变量引用，当外部函数执行完毕后，闭包仍然存在，导致变量无法被释放，造成内存泄漏。解决闭包内存泄漏有以下几种方法：

1.  在函数结束时手动释放被闭包引用的变量，可以将变量赋值为 null。
2.  将需要被释放的变量定义在局部作用域中，而不是在函数外部定义，这样当函数执行完毕时，这些变量会自动被释放。
3.  使用 IIFE (Immediately Invoked Function Expression) 函数，可以将闭包包裹在一个立即执行的函数中，使得闭包内的变量在函数执行完毕后立即被释放。
4.  使用 WeakMap 数据结构来保存被闭包引用的变量，WeakMap 对象中保存的键值对是弱引用，当键值对中的键没有被引用时，会自动被垃圾回收。这种方法需要注意，需要保证被引用的变量不被其他地方引用，否则仍然会出现内存泄漏。

需要注意的是，内存泄漏的出现不一定都是因为闭包引起的，可能还有其他原因，比如未释放的 DOM 引用等。因此，在编写 JavaScript 代码时，需要注意避免出现内存泄漏的情况。

例如，以下代码演示了如何使用匿名函数解决闭包内存泄漏问题：

```js
function outer() {
  var x = 'Hello';

  return function() {
    console.log(x);
  };
}

var inner = outer();

// 使用匿名函数解决闭包内存泄漏问题
(function() {
  var x = 'World';

  inner();
})();
```



### 闭包中的this

在闭包中使用`this`需要注意以下几点：

1.  闭包中的`this`和普通函数中的`this`一样，指向的是调用该函数的对象。如果该闭包被全局作用域调用，则`this`指向全局对象（在浏览器中通常是`window`对象）；如果该闭包被某个对象方法调用，则`this`指向该对象。
2.  由于闭包会保留对其所在函数的作用域链的引用，因此在闭包内部访问`this`时，有可能访问到的是外层函数中的`this`，而不是当前作用域的`this`。
3.  为了避免在闭包中出现`this`的指向问题，可以将外层函数的`this`存储在一个变量中，然后在闭包内部使用该变量。

以下是一个示例，用来演示闭包中`this`的问题：

```js
var person = {
  name: "John",
  age: 30,
  sayName: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

person.sayName(); // 输出 undefined
```

在这个示例中，当调用`person.sayName()`时，实际上是在全局作用域中调用了`setTimeout`函数。因此，在闭包中访问`this.name`时，`this`指向的是全局对象，而不是`person`对象。为了解决这个问题，我们可以使用箭头函数，箭头函数会继承外部函数的`this`：

```js
var person = {
  name: "John",
  age: 30,
  sayName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

person.sayName(); // 输出 John
```

在这个示例中，我们将闭包改为箭头函数，这样在箭头函数内部访问`this.name`时，`this`仍然指向`person`对象。



## 对象

Object 是一种基本数据类型，是一组无序的键值对（key-value pairs）的集合。在 Object 中，每个键（key）都是字符串类型，而值（value）则可以是任意类型的数据，包括基本类型和引用类型。

Object 对象是 JavaScript 中最常用的对象之一，所有的对象都可以通过 Object 构造函数来创建。Object 对象有一些内置的方法，例如：Object.keys()、Object.values()、Object.entries() 等等。

以下是一些常用的 Object 对象方法：

-   Object.keys(obj)：返回对象 obj 中所有可枚举属性的名称，以数组形式返回；
-   Object.values(obj)：返回对象 obj 中所有可枚举属性的值，以数组形式返回；
-   Object.entries(obj)：返回对象 obj 中所有可枚举属性的名称和值，以数组形式返回；
-   Object.create(proto[, propertiesObject])：创建一个新对象，并以第一个参数 proto 的原型作为新对象的原型；
-   Object.freeze(obj)：冻结对象 obj，防止对其进行修改，包括添加、删除和修改属性；
-   Object.seal(obj)：封闭对象 obj，防止添加和删除属性，但可以修改属性值；
-   Object.defineProperty(obj, prop, descriptor)：定义对象 obj 中的属性 prop，descriptor 是属性的描述符。

除了内置的 Object 对象方法，我们还可以使用对象字面量（Object Literal）来创建对象。例如：

```js
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};
```

在对象字面量中，我们可以使用对象属性的简写方式，例如：`name: name` 可以简写为 `name`，`age: age` 可以简写为 `age`。

我们也可以使用 Object.keys()、Object.values() 和 Object.entries() 等方法来获取对象中的属性名和属性值。例如：

```js
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

const keys = Object.keys(person); // ["name", "age", "address"]
const values = Object.values(person); // ["John", 30, {street: "123 Main St", city: "Anytown", state: "CA", zip: "12345"}]
const entries = Object.entries(person); // [["name", "John"], ["age", 30], ["address", {street: "123 Main St", city: "Anytown", state: "CA", zip: "12345"}]]
```

总之，Object 对象是 JavaScript 中非常重要的一个对象，它提供了很多有用的方法，可以帮助我们更方便地操作对象。

### **浅拷贝**

浅拷贝是指将一个对象复制到另一个对象中，复制后的两个对象的基本数据类型字段的值相同，但引用类型字段的值仍然是指向同一个内存地址的引用。也就是说，当源对象的引用类型字段的值发生变化时，目标对象对应的字段值也会发生变化。

实现浅拷贝的方法有：

-   Object.assign()
-   扩展运算符（...）

示例代码：

```js
// 浅拷贝示例
let sourceObj = {name: 'Tom', age: 20, hobby: ['reading', 'running']};

// 使用Object.assign()进行浅拷贝
let targetObj1 = Object.assign({}, sourceObj);

// 使用扩展运算符进行浅拷贝
let targetObj2 = {...sourceObj};

console.log(targetObj1);
console.log(targetObj2);

sourceObj.hobby.push('swimming');

console.log(targetObj1);
console.log(targetObj2);
```

上述代码中，我们使用了 `Object.assign()` 和扩展运算符来进行浅拷贝。拷贝后，我们在源对象的 `hobby` 属性上添加了一个新的元素，发现两个目标对象的 `hobby` 属性也都发生了变化。

### **深拷贝**

深拷贝是指将一个对象复制到另一个对象中，复制后的两个对象完全独立，它们的基本数据类型和引用类型的值都不相互影响。也就是说，当源对象的引用类型字段的值发生变化时，目标对象对应的字段值不会发生变化。

实现深拷贝的方法有：

-   JSON.parse(JSON.stringify())
-   递归遍历对象，逐个复制每个属性

示例代码：

```js
// 深拷贝示例
let sourceObj = {name: 'Tom', age: 20, hobby: ['reading', 'running']};

// 使用JSON.parse(JSON.stringify())进行深拷贝
let targetObj1 = JSON.parse(JSON.stringify(sourceObj));

// 使用递归遍历对象进行深拷贝
function deepCopy(sourceObj) {
  let targetObj = Array.isArray(sourceObj) ? [] : {};
  for (let key in sourceObj) {
    if (Object.prototype.hasOwnProperty.call(sourceObj, key)) {
      if (typeof sourceObj[key] === 'object' && sourceObj[key] !== null) {
        targetObj[key] = deepCopy(sourceObj[key]);
      } else {
        targetObj[key] = sourceObj[key];
      }
    }
  }
  return targetObj;
}

let targetObj2 = deepCopy(sourceObj);

console.log(targetObj1);
console.log(targetObj2);

sourceObj.hobby.push('swimming');

console.log(targetObj1);
console.log(targetObj2);
```

### 工厂函数创建对象

在JavaScript中，有多种方式可以创建对象，其中一种是使用工厂函数（factory function）。

工厂函数是一个函数，它返回一个新的对象。通常情况下，工厂函数会封装对象的创建过程，使其更加简洁和可读。

下面是一个示例，展示如何使用工厂函数创建对象：

```js
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

// 使用工厂函数创建对象
const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);

// 调用对象的方法
person1.sayHello(); // 输出 "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // 输出 "Hello, my name is Bob and I am 25 years old."
```

在上面的代码中，`createPerson` 是一个工厂函数，它接收两个参数 `name` 和 `age`，并返回一个对象。这个对象有两个属性 `name` 和 `age`，以及一个方法 `sayHello`，该方法可以输出对象的属性。

通过调用 `createPerson` 函数，我们可以创建多个具有相同属性和方法的对象。这种方式可以大大简化对象的创建过程，尤其是在需要创建大量对象的情况下。



## 面向对象

面向对象编程（Object-Oriented Programming，简称 OOP）是一种编程范式，它将现实世界中的概念和对象映射到计算机程序中，将程序看做由若干个对象组成的。在面向对象编程中，对象是程序的基本单元，它拥有属性和方法，并且可以被其他对象所调用。

面向对象编程的核心思想是封装、继承和多态：

-   封装（Encapsulation）：封装是将数据和方法组合成一个类，并对外部隐藏具体的实现细节，仅对外部提供必要的接口。
-   继承（Inheritance）：继承是一种对象间的关系，它允许在一个类的基础上定义出新的类，并且可以继承父类的属性和方法。
-   多态（Polymorphism）：多态是指同一种行为或方法具有不同的表现形式或实现方式，实现了同一接口或继承了同一父类的对象可以具有不同的状态和行为。

在面向对象编程中，类是一种模板或蓝图，它描述了对象具有的属性和方法。对象是类的实例，它拥有类定义的属性和方法。在 JavaScript 中，类的实现是通过构造函数和原型对象来实现的。

JavaScript 中通过使用 `class` 关键字定义类，使用 `new` 关键字实例化对象。一个简单的类的定义和使用示例如下：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John', 25);
john.sayHello(); // 输出：Hello, my name is John.
```

在上面的示例中，我们定义了一个 `Person` 类，它拥有 `name` 和 `age` 两个属性，以及 `sayHello` 方法。我们通过 `new` 关键字实例化了一个 `john` 对象，并且调用了它的 `sayHello` 方法。

总的来说，面向对象编程是一种将现实世界的问题映射到计算机程序中的编程思想，它提供了封装、继承和多态等核心特性，可以更好地组织和管理程序代码。



## proxy代理

`Proxy` 是 ES6 引入的新特性，它可以用来拦截并定制 JavaScript 中的基本操作，包括对象属性的读写、函数调用等等。可以用来增强对象的操作行为、实现数据绑定、拦截错误、实现远程方法调用等。

下面是 `Proxy` 的一些具体用法：

1.  **拦截对象属性的读写**

```js
const target = { name: 'Tom', age: 18 };
const proxy = new Proxy(target, {
  get(target, prop) {
    console.log(`getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`setting ${prop} to ${value}`);
    target[prop] = value;
  },
});
console.log(proxy.name); // getting name, Tom
proxy.age = 20; // setting age to 20
```

上面代码中，使用 `new Proxy()` 创建了一个代理对象 `proxy`，并使用 `get` 和 `set` 拦截了属性的读取和设置操作，当属性被读取或设置时，会触发对应的拦截器函数。

2.   **拦截对象的函数调用**

```js
const target = {
  sum(a, b) {
    return a + b;
  },
};
const proxy = new Proxy(target, {
  apply(target, thisArg, args) {
    console.log(`calling sum with args: ${args}`);
    return target.sum.apply(thisArg, args);
  },
});
console.log(proxy.sum(1, 2)); // calling sum with args: 1,2, 3
```

上面代码中，使用 `apply` 拦截了 `sum` 函数的调用，当调用 `sum` 函数时，会触发 `apply` 拦截器函数。

3.   **拦截对象的构造函数调用**

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
const ProxyPerson = new Proxy(Person, {
  construct(target, args) {
    console.log(`creating a new instance with name: ${args[0]}`);
    return new target(...args);
  },
});
const person = new ProxyPerson('Tom'); // creating a new instance with name: Tom
```

上面代码中，使用 `construct` 拦截了 `Person` 的构造函数调用，当使用 `new` 关键字创建 `Person` 实例时，会触发 `construct` 拦截器函数。

4.   **实现数据双向绑定**

```js
const data = { name: 'Tom', age: 18 };
const proxyData = new Proxy(data, {
  get(target, prop) {
    console.log(`getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`setting ${prop} to ${value}`);
    target[prop] = value;
    // 更新视图
    updateView();
  },
});
// 视图更新函数
function updateView() {
  console.log('视图已更新');
}
// 修改数据
proxyData.name = 'Jerry'; // setting name to Jerry, 视图已更新
```

上面代码中，使用 `get` 和 `set` 拦截了对象属性的读取和设置操作。

当Proxy对象作为函数调用时，可以通过重载 `apply` 方法拦截函数的调用。

示例代码：

```js
const target = function (message) {
  console.log(message);
};

const handler = {
  apply(target, thisArg, args) {
    console.log("Function called with arguments:", args);
    return target.apply(thisArg, args);
  },
};

const proxy = new Proxy(target, handler);

proxy("Hello, world!");
```

输出结果为：

```js
Function called with arguments: [ 'Hello, world!' ]
Hello, world!
```

在这个例子中，`apply` 方法被重载，拦截了对 `proxy` 的调用，并打印了调用时传入的参数。接着，`apply` 方法调用了 `target.apply(thisArg, args)`，实际上是调用了 `target` 函数本身，并返回其执行结果。

除了 `apply` 方法，Proxy 对象还可以重载其他方法，例如 `get`、`set`、`has`、`construct` 等等，可以满足各种不同的需求。



## JSON

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，常用于前后端数据传输。在 JavaScript 中，可以使用 JSON 来表示复杂的数据结构，例如对象、数组等。

JSON 数据格式基于 JavaScript 中的字面量语法，用于描述键值对集合。以下是一个简单的 JSON 对象示例：

```js
{
  "name": "John",
  "age": 30,
  "isMarried": true,
  "hobbies": ["reading", "coding", "traveling"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  }
}
```

该 JSON 对象包含了一个人的基本信息，包括姓名、年龄、婚姻状况、爱好和地址。其中，键名和字符串必须用双引号括起来，键值可以是字符串、数字、布尔值、数组、对象等数据类型。

JavaScript 提供了两个方法来实现 JSON 的解析和序列化：

-   JSON.parse()：用于将 JSON 字符串解析为 JavaScript 对象。
-   JSON.stringify()：用于将 JavaScript 对象序列化为 JSON 字符串。

`JSON.parse()` 和 `JSON.stringify()` 是 JavaScript 中用于解析和序列化 JSON 数据的两个核心方法。



### JSON.parse()

`JSON.parse()` 方法用于将一个符合 JSON 语法规范的字符串解析为一个 JavaScript 对象。语法如下：

```js
JSON.parse(text[, reviver])
```

其中，`text` 参数为要解析的 JSON 字符串，`reviver` 参数是一个可选的回调函数，用于在解析过程中对解析出来的结果进行修改。

举个例子，假设有一个符合 JSON 规范的字符串：

```js
const jsonString = '{"name":"John","age":30,"isMarried":true}';
```

我们可以使用 `JSON.parse()` 将其解析为一个 JavaScript 对象：

```js
const obj = JSON.parse(jsonString);
console.log(obj.name); // 输出 "John"
console.log(obj.age); // 输出 30
console.log(obj.isMarried); // 输出 true
```

注意，如果要解析的字符串不符合 JSON 语法规范，或者字符串中包含了 JavaScript 无法解析的特殊字符，`JSON.parse()` 方法将会抛出一个异常。

以下是一个使用 `reviver` 参数的示例：

```js
const json = '{"name": "John", "age": 30}';
const obj = JSON.parse(json, (key, value) => {
  if (key === 'age') {
    return value * 2;
  }
  return value;
});
console.log(obj); // 输出：{name: "John", age: 60}
```

在这个例子中，我们使用了 `reviver` 参数，将 `age` 属性的值乘以了 2。因此，输出的对象中，`age` 属性的值为 60，而不是原来的 30。



### JSON.stringify()

`JSON.stringify()` 方法用于将一个 JavaScript 对象序列化为一个符合 JSON 语法规范的字符串。语法如下：

```js
JSON.stringify(value[, replacer[, space]])
```

其中，`value` 参数是要序列化的 JavaScript 对象，`replacer` 参数是一个可选的转换函数或数组，用于控制序列化过程中哪些属性应该被包含在结果中，`space` 参数是一个可选的空格字符串或数字，用于控制输出结果的缩进和格式化。

举个例子，假设有一个 JavaScript 对象：

```js
const person = {
  name: 'John',
  age: 30,
  isMarried: true,
  hobbies: ['reading', 'coding', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};
```

我们可以使用 `JSON.stringify()` 将其序列化为一个符合 JSON 规范的字符串：

```js
const jsonString = JSON.stringify(person);
console.log(jsonString);
```

输出结果为：

```json
{"name":"John","age":30,"isMarried":true,"hobbies":["reading","coding","traveling"],"address":{"street":"123 Main St","city":"New York","state":"NY","zip":"10001"}}
```

注意，如果对象中包含了函数、undefined 和 symbol 类型的值，这些属性会在序列化过程中被忽略掉。如果需要自定义序列化过程，可以使用 `replacer` 参数来进行控制。

以下是一些例子来说明 `replacer` 和 `space` 参数的用法：

```js
// 使用 replacer 参数将所有值为 undefined 的属性转换为 null
const obj = { a: 1, b: undefined, c: "hello" };
const replacer = (key, value) => (value === undefined ? null : value);
console.log(JSON.stringify(obj, replacer)); // {"a":1,"b":null,"c":"hello"}

// 使用 space 参数使生成的 JSON 字符串有缩进
const obj2 = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(obj2, null, 2)); // 输出：{"a":1,"b":{"c":2}}
console.log(JSON.stringify(obj2, null, "--")); // 输出：{"a":1,"b":{"c":2}}
```

在实际开发中，`JSON.stringify()` 方法通常用于将 JavaScript 对象转换为 JSON 字符串，然后通过网络传输或存储到本地文件中。使用 `replacer` 和 `space` 参数可以更灵活地控制生成的 JSON 字符串的格式和内容。





## 原型

JavaScript的原型是一种机制，用于实现继承和属性共享。每个JavaScript对象都有一个原型对象，它包含可以被继承的属性和方法。

当你创建一个对象时，JavaScript会在对象和其原型之间创建一个链接。这个链接是通过一个名为`__proto__`的隐藏属性实现的。这个属性指向对象的原型对象。

可以通过`Object.create()`方法来显式地设置一个对象的原型，例如：

```js
var parent = {
  foo: function() {
    console.log('foo');
  }
};

var child = Object.create(parent);
```

在这个例子中，`child`对象的原型被设置为`parent`对象，因此它继承了`foo`方法。

你还可以使用构造函数来创建对象，并且在构造函数中定义原型。例如：

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name);
};

var john = new Person('John');
john.sayHello(); // 输出 "Hello, my name is John"
```

在这个例子中，`Person`函数定义了一个原型对象，并将其添加到`Person.prototype`中。当你使用`new`关键字来创建一个`Person`对象时，它会自动关联到`Person.prototype`，因此可以访问`sayHello`方法。

总的来说，原型是JavaScript中实现继承和属性共享的基础机制之一。它允许你创建具有相似属性和方法的对象，从而减少了代码的重复和冗余。



### 原型链

原型链是一种机制，用于实现JavaScript中对象之间的继承。它是基于JavaScript中每个对象都有一个原型对象的概念。每个对象的原型对象又有自己的原型对象，依此类推，最终形成一个链式结构，被称为原型链。

当你试图访问一个对象的属性或方法时，JavaScript引擎会首先查找对象本身是否具有该属性或方法。如果对象本身没有该属性或方法，则会继续查找对象的原型对象是否有该属性或方法，如果还是没有，则继续查找原型对象的原型对象，直到找到该属性或方法为止，或者原型链的顶端（即Object.prototype）被查找完毕。

举个例子，假设你有以下代码：

```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log('eating...');
}

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

var dog = new Dog();
dog.eat();
```

在这个例子中，`Animal`函数定义了一个原型对象，其中包含`eat`方法。`Dog`函数的原型对象被设置为`Animal`的原型对象。然后，我们创建一个`dog`对象，它继承了`Animal`原型对象中的`eat`方法。当你调用`dog.eat()`时，JavaScript引擎会首先查找`dog`对象本身是否具有`eat`方法。由于`dog`对象没有`eat`方法，它会继续查找`Dog`的原型对象，即`Animal`的原型对象，发现了`eat`方法，因此输出`"eating..."`。

这就是原型链的工作原理。它允许你在JavaScript中实现继承和属性共享，同时避免代码冗余和重复。



### 属性和方法

| 方法/属性               | 描述                                                         |
| ----------------------- | ------------------------------------------------------------ |
| constructor             | 每个原型对象都有一个 `constructor` 属性，它指向创建该对象的函数。 |
| hasOwnProperty()        | 该方法用于检查一个对象是否拥有指定的属性，而不是从原型链中继承来的属性。 |
| isPrototypeOf()         | 该方法用于检查一个对象是否是另一个对象的原型。               |
| Object.getPrototypeOf() | 该方法返回指定对象的原型对象。                               |
| Object.setPrototypeOf() | 该方法用于设置一个对象的原型对象。                           |
| Object.create()         | 该方法创建一个新对象，使用指定的原型对象和属性值来初始化该对象。 |
| Object.prototype        | 所有 JavaScript 对象都继承自 `Object.prototype` 对象，它包含一些通用的方法和属性，如 `toString()` 方法、`valueOf()` 方法等。 |



### 继承

JavaScript中的继承是通过原型链来实现的。每个JavaScript对象都有一个原型对象，通过原型链可以访问到父级对象的属性和方法。

JavaScript中的原型继承主要有以下几种方式：

#### 原型链继承

原型链继承是最基本的继承方式，其实现方式是将父类的实例作为子类的原型。通过这种方式，子类就可以访问到父类的属性和方法。

```js
function Parent() {
  this.name = 'parent';
}

Parent.prototype.sayHello = function() {
  console.log('Hello');
}

function Child() {
  this.name = 'child';
}

Child.prototype = new Parent();

var child = new Child();

child.sayHello(); // 输出 "Hello"
```



#### 构造函数继承

构造函数继承是通过在子类构造函数中调用父类构造函数来实现的。通过这种方式，子类可以继承父类的属性。

```js
function Parent() {
  this.name = 'parent';
}

function Child() {
  Parent.call(this);
  this.name = 'child';
}

var child = new Child();

console.log(child.name); // 输出 "child"
```



#### 组合继承

组合继承是原型链继承和构造函数继承的结合。它通过在子类构造函数中调用父类构造函数来继承父类的属性，并通过将父类实例作为子类原型来继承父类的方法。

```js
function Parent() {
  this.name = 'parent';
}

Parent.prototype.sayHello = function() {
  console.log('Hello');
}

function Child() {
  Parent.call(this);
  this.name = 'child';
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();

child.sayHello(); // 输出 "Hello"
console.log(child.name); // 输出 "child"
```



#### 原型式继承

原型式继承是通过创建一个临时构造函数，然后将一个对象作为这个构造函数的原型来实现继承。

```js
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var parent = {
  name: 'parent',
  sayHello: function() {
    console.log('Hello');
  }
};

var child = createObject(parent);

child.sayHello(); // 输出 "Hello"
console.log(child.name); // 输出 "parent"
```



#### 寄生式继承

寄生式继承是在原型式继承的基础上增加了一个包装函数，该函数用来封装继承过程中需要新增的属性和方法。

```js
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function createChild(parent) {
  var child = createObject(parent);
  child.sayHello = function() {
    console.log('Hello');
  };
  return child;
}

var parent = {
  name: 'parent'
};

var child = createChild(parent);

console.log(child.name); // 输出 "parent"
```





## 类

JavaScript的类（Class）是一种语法糖，它提供了更加简洁的方式来定义对象和构造函数。类可以包含属性和方法，并且可以通过`new`关键字创建实例。

下面是一个简单的类定义的示例：

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

在这个例子中，我们定义了一个名为`Person`的类，它有一个构造函数（`constructor`），该函数接收`name`和`age`两个参数，并使用它们来设置实例的属性。此外，我们还定义了一个名为`greet`的方法，它用于打印一条问候信息。

要创建`Person`类的实例，可以使用以下代码：

```js
const person = new Person("John Doe", 30);
person.greet(); // Hi, my name is John Doe and I'm 30 years old.
```

在类定义中，我们使用`constructor`方法来定义类的构造函数。除此之外，我们还可以定义其他的方法和属性。

在JavaScript中，静态属性和静态方法是定义在类上而不是类的实例上的属性和方法。这意味着它们只能通过类本身来访问，而不是通过类的实例。

### 静态属性

静态属性是定义在类上的属性，通常用于存储类级别的数据。它们可以通过类名来访问，而不需要创建类的实例。静态属性可以通过`static`关键字来定义。

下面是一个静态属性的示例：

```js
class Circle {
  static PI = 3.14159;
  
  constructor(radius) {
    this.radius = radius;
  }
  
  area() {
    return Circle.PI * this.radius * this.radius;
  }
}

console.log(Circle.PI); // 3.14159

const circle = new Circle(2);
console.log(circle.area()); // 12.56636
```

在这个例子中，我们定义了一个名为`Circle`的类，它有一个静态属性`PI`，用于存储圆的π值。在`area`方法中，我们使用了`Circle.PI`来计算圆的面积。

### 静态方法

静态方法是定义在类上的方法，通常用于提供类级别的操作或工具函数。它们可以通过类名来访问，而不需要创建类的实例。静态方法可以通过`static`关键字来定义。

下面是一个静态方法的示例：

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(1, 2)); // 3
```

在这个例子中，我们定义了一个名为`MathUtils`的类，它有一个静态方法`add`，用于将两个数字相加。

总之，静态属性和静态方法可以通过类名来访问，而不需要创建类的实例。它们通常用于存储类级别的数据或提供类级别的操作或工具函数。



### 类的继承

类继承机制使得我们可以通过创建一个新的类来扩展已有类的功能，从而实现代码的重用和组合。子类继承了父类的属性和方法，并且还可以添加自己的属性和方法。

下面是一个简单的类继承的示例：

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 调用父类的构造函数
  }
  
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rufus');
dog.speak(); // Rufus barks.
```

在这个例子中，我们定义了一个名为`Animal`的基类，它有一个名为`speak`的方法。然后我们定义了一个名为`Dog`的子类，它继承了`Animal`的属性和方法，并且添加了自己的`speak`方法。

在子类中，我们使用`extends`关键字来指定继承的父类。在子类的构造函数中，我们使用`super`关键字来调用父类的构造函数。然后我们可以通过子类的实例来调用继承的方法和自己添加的方法。

在继承中，子类可以覆盖父类的方法，也可以在子类中调用父类的方法。在子类中调用父类的方法需要使用`super`关键字。

下面是一个子类调用父类方法的示例：

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 调用父类的构造函数
  }
  
  speak() {
    super.speak(); // 调用父类的speak方法
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rufus');
dog.speak(); // Rufus makes a noise. Rufus barks.
```

在这个例子中，我们定义了一个名为`Animal`的基类和一个名为`Dog`的子类。在子类的`speak`方法中，我们首先调用了父类的`speak`方法，然后再添加自己的内容。

总之，类的继承机制使得我们可以通过创建一个新的类来扩展已有类的功能，从而实现代码的重用和组合。子类继承了父类的属性和方法，并且还可以添加自己的属性和方法。



## 模块

模块（Module）是一种封装了特定功能的代码单元，可以独立地编写、测试、维护和重复使用。

在 ES6（ECMAScript 2015）中，JavaScript 引入了模块的概念，使得开发者可以轻松地将代码分割成可维护、可复用的模块。ES6 模块定义了一个简单的语法来定义和导出模块，并提供了一种机制来将模块导入到其他模块中。

下面是一些常用的 ES6 模块语法：

### 导出变量或函数

使用 `export` 关键字导出变量或函数，例如：

```js
// 导出一个变量
export const name = 'John';

// 导出一个函数
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

### 导出类

使用 `export` 关键字导出类，例如：

```js
// 导出一个类
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

### 导入模块

使用 `import` 关键字导入一个或多个模块，例如：

```js
// 导入一个模块
import { name } from './myModule';

// 导入多个模块
import { name, greet } from './myModule';

// 导入默认导出的模块
import myModule from './myModule';
```

使用 `import` 关键字导入一个或多个模块，将模块的功能引入到当前模块中。ES6 模块支持以下导入语法：

1.   导入具名导出（Named Exports）

可以使用 `{ }` 将要导入的具名导出包围起来，并从指定的模块中导入它们。例如：

```js
// 导入具名导出
import { name, greet } from './myModule';
```

2.   导入默认导出（Default Exports）

可以使用任何名称来导入默认导出，例如：

```js
// 导入默认导出
import myModule from './myModule';
```

需要注意的是，在一个模块中只能有一个默认导出。如果模块中同时存在具名导出和默认导出，可以同时使用以下语法来导入它们：

```js
// 导入默认导出和具名导出
import myModule, { name, greet } from './myModule';
```

3.   导入全部导出（Export All）

可以使用 `*` 将一个模块的所有导出导入到当前模块中。例如：

```js
// 导入全部导出
import * as myModule from './myModule';
```

使用这种方式导入模块时，需要使用 `myModule.` 来访问模块的导出成员。

需要注意的是，在浏览器环境下，模块的导入需要使用模块加载器（例如 Webpack、RequireJS 等），或者在 `<script type="module">` 中使用模块语法。

### 默认导出

可以使用 `export default` 关键字导出一个默认值，例如：

```js
// 导出默认值
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

模块使得 JavaScript 开发变得更加模块化和组织化，并提高了代码的可重用性和可维护性。



## XMLHttpRequest

XMLHttpRequest (XHR) 是 JavaScript 中的一个 API，用于在浏览器和服务器之间发送 HTTP 请求并接收响应。XHR 可以使用异步或同步方式发送请求，并可以接收文本、JSON、XML 或二进制数据。

以下是 XHR 的基本使用方法：

1.  **创建 XMLHttpRequest 对象**

```js
var xhr = new XMLHttpRequest();
```

2.   **打开连接**

```js
xhr.open('GET', 'https://example.com/data.json', true);
```

该方法接受三个参数：

-   请求类型（GET、POST 等）
-   请求 URL
-   是否异步（true 或 false）

3.   **发送请求**

```js
xhr.send();
```

4.   **监听状态变化**

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
```

XMLHttpRequest 对象的 readyState 属性表示请求状态：

-   0: 请求未初始化
-   1: 服务器连接已建立
-   2: 请求已接收
-   3: 请求处理中
-   4: 请求已完成，且响应已就绪

status 属性表示响应状态码：

-   200: 请求成功
-   404: 请求的资源不存在
-   500: 服务器错误

5.   **取消请求**

```js
xhr.abort();
```

这个方法可以用于取消正在进行的请求。

总的来说，XMLHttpRequest 是一个非常强大的工具，它允许我们在 JavaScript 中与服务器进行交互，可以用于实现动态更新页面内容、提交表单、获取数据等操作。



### 属性

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| readyState         | 一个无符号短整型数字，表示请求的当前状态。可以取值 0 - 4。   |
| status             | 一个无符号短整型数字，表示服务器响应的状态码。               |
| statusText         | 一个字符串，表示服务器响应的状态消息。                       |
| response           | 返回的响应数据，可以是 ArrayBuffer、Blob、Document、JavaScript 对象、DOMString 等类型。 |
| responseText       | 作为字符串返回的响应数据。                                   |
| responseType       | 响应数据的类型。可以是空字符串（默认）、"arraybuffer"、"blob"、"document"、"json" 或 "text"。 |
| responseXML        | 作为 XMLDocument 对象返回的响应数据。                        |
| timeout            | 整数，表示在放弃请求之前等待响应的毫秒数。                   |
| withCredentials    | 布尔型，表示是否应该使用跨域 Access-Control 请求凭证。       |
| upload             | 返回一个 XMLHttpRequestUpload 对象，用于表示上传进度。       |
| onreadystatechange | 一个事件处理程序，每当 readyState 改变时被调用。             |
| onabort            | 一个事件处理程序，当请求被取消时调用。                       |
| onerror            | 一个事件处理程序，当请求出错时调用。                         |
| onload             | 一个事件处理程序，当请求成功完成时调用。                     |
| onloadend          | 一个事件处理程序，当请求完成（无论成功或失败）时调用。       |
| onloadstart        | 一个事件处理程序，当请求开始时调用。                         |
| onprogress         | 一个事件处理程序，当请求正在进行中，会多次被调用。           |
| ontimeout          | 一个事件处理程序，当请求超时时调用。                         |



### 方法

| abort()                                        | 取消当前请求。                 |
| ---------------------------------------------- | ------------------------------ |
| getAllResponseHeaders()                        | 返回所有响应头，格式为字符串。 |
| getResponseHeader()                            | 返回指定名称的响应头的值。     |
| open(method, url[, async[, user[, password]]]) | 初始化请求。                   |
| send([body])                                   | 发送 HTTP 请求。               |
| setRequestHeader(name, value)                  | 设置请求头。                   |





## Promise

Promise 是一种用于处理异步操作的对象。它表示一个异步操作的最终完成或失败，并且可以返回其结果。

Promise 有三种状态：等待态（pending）、完成态（fulfilled）和拒绝态（rejected）。当 Promise 对象处于等待态时，表示该异步操作尚未完成；当 Promise 对象处于完成态时，表示该异步操作已经成功完成，并返回相应的结果；当 Promise 对象处于拒绝态时，表示该异步操作已经失败，并返回相应的错误。

Promise 对象提供了一些方法，其中最重要的是 then() 方法。then() 方法用于注册 Promise 对象状态变化时的回调函数，该回调函数接收 Promise 对象的结果作为参数。then() 方法返回一个新的 Promise 对象，以便实现链式调用。

除了 then() 方法，Promise 还提供了一些其他方法，如 catch() 方法用于捕捉 Promise 对象的错误，finally() 方法用于在 Promise 对象完成或拒绝后执行的操作等等。

以下是 Promise 对象的基本语法：

```js
new Promise(function(resolve, reject) {
  // 异步操作
  if (/* 异步操作成功 */) {
    resolve(result); // 将异步操作的结果传递给 then() 方法
  } else {
    reject(error); // 将异步操作的错误传递给 catch() 方法
  }
})
.then(function(result) {
  // 异步操作成功时执行的回调函数
})
.catch(function(error) {
  // 异步操作失败时执行的回调函数
});
```



### 方法

| 方法                        | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| Promise.prototype.then()    | 返回一个 Promise 对象，代表着当前 Promise 对象的状态         |
| Promise.prototype.catch()   | 返回一个 Promise 对象，用于捕获 Promise 对象的错误           |
| Promise.prototype.finally() | 返回一个 Promise 对象，在 Promise 对象结束时无论结果如何都会执行 |
| Promise.all()               | 接收一个 Promise 对象数组作为参数，返回一个新的 Promise 对象，当数组中的所有 Promise 对象都变为 resolved 时，返回的 Promise 对象的状态变为 resolved |
| Promise.race()              | 接收一个 Promise 对象数组作为参数，返回一个新的 Promise 对象，它会在数组中的任何一个 Promise 对象变为 resolved 或 rejected 时立即返回 |
| Promise.resolve()           | 返回一个 Promise 对象，状态为 resolved                       |
| Promise.reject()            | 返回一个 Promise 对象，状态为 rejected                       |



### 队列

使用Promise实现队列可以让异步任务按照一定的顺序执行，确保它们在完成之前不会同时执行。下面是一个简单的例子，展示如何使用Promise来实现一个基本的队列：

```js
class Queue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  addTask(task) {
    this.queue.push(task);
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  processQueue() {
    if (this.queue.length > 0) {
      this.isProcessing = true;
      const task = this.queue.shift();
      task().then(() => {
        this.processQueue();
      });
    } else {
      this.isProcessing = false;
    }
  }
}
```

在这个例子中，我们创建了一个名为`Queue`的类，它包含了一个数组`queue`，用来存储任务。我们还有一个`isProcessing`变量，用来表示队列中是否有正在执行的任务。`addTask`方法用来添加新任务，并且会检查队列是否正在处理任务。如果队列没有正在处理的任务，它会立即开始处理队列。

`processQueue`方法是用来实际执行队列的。如果队列中还有任务，则从队列中取出第一个任务并执行它。在任务完成之后，递归调用`processQueue`方法，以便处理下一个任务。如果队列中没有任务，我们将`isProcessing`设置为false，表示队列已经处理完毕。

下面是一个例子，展示了如何使用`Queue`类来执行一系列异步任务：

```js
const queue = new Queue();

queue.addTask(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 1');
      resolve();
    }, 1000);
  });
});

queue.addTask(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 2');
      resolve();
    }, 500);
  });
});

queue.addTask(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 3');
      resolve();
    }, 2000);
  });
});
```

在这个例子中，我们首先创建了一个新的`Queue`对象。接着，我们添加了三个异步任务，分别等待1秒、0.5秒和2秒后输出它们的编号。由于我们使用了`Queue`类，这些任务会按照我们添加它们的顺序依次执行，因此它们的输出应该是按照编号递增的。



### async和await

语法糖可以使 Promise 的使用更加简便和易于理解。

async/await 是 ES2017 引入的新特性，它提供了一种更加简单、直观的方式来使用 Promise。使用 async/await，可以在函数前面加上 `async` 关键字，然后使用 `await` 来等待 Promise 对象的结果。例如：

```js
async function fetchData() {
  const result = await fetch('https://example.com/data.json');
  const data = await result.json();
  return data;
}
```

1.  **`async` 关键字**

在需要执行异步操作的函数前面加上 `async` 关键字，就可以将这个函数转换成一个返回 Promise 的函数。

```js
async function myAsyncFunction() {
  // 异步操作
  return result;
}
```

2.   **`await` 关键字**

在需要等待异步操作完成的代码前面加上 `await` 关键字，就可以暂停异步函数的执行，直到异步操作返回结果。

```js
async function myAsyncFunction() {
  const result = await myPromise;
  // 在这里处理结果
}
```

需要注意的是，使用 `await` 的代码必须放在 `async` 函数内部，否则会报错。

3.   **错误处理**

使用 `try/catch` 来处理 `await` 抛出的错误，就像处理同步代码中的异常一样。

```js
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    // 在这里处理结果
  } catch (error) {
    // 在这里处理错误
  }
}
```

4.   **`async/await` 和 Promise 链式调用的结合**

`async/await` 与 Promise 链式调用可以结合使用，使代码更加简洁清晰。

```js
async function myAsyncFunction() {
  try {
    const result1 = await fetch('https://example.com/data1.json');
    const data1 = await result1.json();

    const result2 = await fetch('https://example.com/data2.json');
    const data2 = await result2.json();

    // 在这里处理结果
  } catch (error) {
    // 在这里处理错误
  }
}
```

以上是 `async/await` 的基本用法，它可以让异步操作更加直观和易于理解。



### fetch

`fetch` 是一种用于发起网络请求的 JavaScript API，它基于 Promise，支持异步操作，用法如下：

1.  **发送 GET 请求**

```js
fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

2.   **发送 POST 请求**

```js
fetch('https://example.com/data.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

3.   **发送带有身份验证的请求**

```js
const token = 'my-auth-token';

fetch('https://example.com/data.json', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

4.   **处理错误**

```js
fetch('https://example.com/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

5.   **设置超时**

```js
const controller = new AbortController();
const timeout = setTimeout(() => {
  controller.abort();
}, 5000);

fetch('https://example.com/data.json', {
  signal: controller.signal
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => clearTimeout(timeout));
```

以上是 `fetch` 的基本用法，它是一种简单、强大、易用的 API，可以用于处理网络请求和响应。需要注意的是，`fetch` 返回的是一个 Promise 对象，因此可以使用 Promise 链式调用的方式来处理网络请求的结果。
