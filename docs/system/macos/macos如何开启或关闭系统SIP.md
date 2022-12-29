# 如何开启或关闭系统SIP



### 关闭 SIP

重启电脑，然后按住 Command + R 键不动，m1芯片的mac，按住电源键不放，电脑会进入到恢复模式，点击顶部菜单栏的【实用工具】，再点击【终端】。

在终端中输入命令：

```shell
csrutil disable 
```

然后按回车。重启电脑回到正常的Mac系统，这样就关闭了SIP保护。



### 打开 SIP

步骤和上面的方法一样，只需要在执行命令的时候输入：

```shell
csrutil enable
```



### 如何检查SIP状态？

打开终端，输入：

```shell
csrutil status
```



显示：System Integrity Protection status: enabled. 就是未关闭；

显示：System Integrity Protection status: disabled. 就是已关闭；

