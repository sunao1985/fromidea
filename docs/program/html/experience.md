# 经验




## https请求的页面含有http资源时，浏览器提示当前页SSL加密不安全？

解决方案，强制采用https加载http资源：

在页面 `<head>` 中加入：

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
```

tips：这样做，意味着页面中的http资源会自动转为https请求，因此要确保源站点支持https访问。

[参考：Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)

[参考：Upgrade-Insecure-Requests](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)