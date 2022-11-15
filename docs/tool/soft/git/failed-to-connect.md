# Failed to connect to github.com port 443 after 问题解决



当你进行 ```git push```的时候，是不是会报以下错误：

```shell
fatal: unable to access 'https://github.com/...': Failed to connect to github.com port 443 after...
```

如果你和我一样出现了这个问题。

![image-20221115125704824](./assets/image-20221115125704824.png)

那么，很简单。

你只需要将你的设备网络连接DNS修改为：```114.114.114.114```，即可解决。