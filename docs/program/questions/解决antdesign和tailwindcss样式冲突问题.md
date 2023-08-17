# 解决antdesign和tailwindcss样式冲突问题

最近开撸一个新的项目，需要用到阿里的[antdesign(vue社区版)](https://antdv.com/components/overview-cn)。同时，[tailwindcss](https://www.tailwindcss.cn/)肯定也必不可少。

在引入tailwindcss和antdesign后，发现antd的某些component组件样式确发生了问题。

如下图：

![image-20230817125657246](./assets/image-20230817125657246.png)

**Primary Button 组件无法正常显示了！**

查了下tailwindcss引入的文件，发现 `@tailwind base;` 导入的base模块导致了某些元素样式与antd的冲突。

解决方法也很简单，如果你只用tailwindcss的基本功能类样式表。包括flex、float、颜色、定位等等功能类。

那么你只需要直接不导入 base 模块即可。

我是直接先注释掉的，目前来看没有任何问题，日后出现其它情况再进一步探究。

```css
/* @tailwind base;
@tailwind components; */
@tailwind utilities;
```

恢复正常后：

![image-20230817130358616](./assets/image-20230817130358616.png)