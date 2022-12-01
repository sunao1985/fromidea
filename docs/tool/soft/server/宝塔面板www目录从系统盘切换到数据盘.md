# 宝塔面板www目录，从系统盘切换到数据盘的操作方法



### 一：如果是纯净系统还没安装宝塔面板：

>   /mnt 更换成你的另一块磁盘分区名称

第一步：进入mnt目录(mnt是数据盘名称，有很多是home，你的数据盘名称是什么就用那么名称替换data就好)

```undefined
cd /mnt
```

第二步：创建宝塔面板安装需要用的www目录

```undefined
mkdir www
```

第三步：建立/mnt/www的软连接到/www(也就是给系统根目录建立一个www的“快捷方式”指向/mnt/www)

```undefined
ln -s /mnt/www /www
```

第四步：正常安装宝塔面板即可



### 二：如果已经安装了宝塔面板和WEB环境：

>   /mnt 更换成你的另一块磁盘分区名称

第一步：移动系统根目录下的www到mnt

```undefined
mv /www /mnt/www
```

第二步：建立/data/www的软连接到/www

```undefined
ln -s /mnt/www /www
```

第三步：重启服务器

```undefined
reboot
```

第四步：重启宝塔面板服务

```undefined
service bt restart
```

第五步：打开宝塔面板，CTRL+F5刷新浏览器缓存

>   PS：Linux下的软链接类似于windows下的快捷方式 ，如上面的示例，当我们执行命令 cd /www/的时候 实际上是进入了 /mnt/ ，操作前切记备份数据，防止因误操作引起数据丢失!!!