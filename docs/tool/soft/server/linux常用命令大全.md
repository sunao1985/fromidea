# Linux常用命令大全



## 📁 文件和目录操作

### 基本导航

bash

```
pwd                     # 显示当前工作目录
ls                      # 列出当前目录内容
ls -l                   # 详细列表
ls -a                   # 显示所有文件（包括隐藏文件）
ls -lh                  # 人类可读的文件大小
cd /path/to/dir         # 切换目录
cd ~                    # 回家目录
cd -                    # 返回上一个目录
```

### 文件操作

bash

```
cp file1 file2          # 复制文件
cp -r dir1 dir2         # 递归复制目录
mv file1 file2          # 移动/重命名文件
mv dir1 dir2            # 移动/重命名目录
rm file                 # 删除文件
rm -r dir               # 递归删除目录
rm -rf dir              # 强制递归删除（危险！）
touch file              # 创建空文件
mkdir dir               # 创建目录
mkdir -p dir1/dir2      # 创建多级目录
```

### 文件查看和编辑

bash

```
cat file                # 显示文件内容
less file               # 分页查看文件
more file               # 分页查看文件
head -n 10 file         # 显示前10行
tail -n 10 file         # 显示后10行
tail -f file            # 实时跟踪文件变化
nano file               # 使用nano编辑
vim file                # 使用vim编辑
```

## 🔍 文件搜索和查找

bash

```
find /path -name "*.txt"        # 按名称查找
find /path -type f -size +1M    # 查找大于1MB的文件
grep "pattern" file             # 在文件中搜索文本
grep -r "pattern" /path         # 递归搜索
grep -i "pattern" file          # 忽略大小写
locate filename                 # 快速查找文件
which command                   # 查找命令位置
whereis command                 # 查找命令位置和手册
```

## 📊 系统信息监控

### 系统状态

bash

```
uname -a                # 显示系统信息
hostname                # 显示主机名
uptime                  # 显示系统运行时间
whoami                  # 显示当前用户
w                       # 显示登录用户
who                     # 显示登录用户
date                    # 显示日期时间
cal                     # 显示日历
```

### 资源监控

bash

```
top                     # 动态显示进程
htop                    # 增强版top
free -h                 # 显示内存使用
df -h                   # 显示磁盘空间
du -sh dir              # 显示目录大小
du -h --max-depth=1     # 显示目录一级子目录大小
```

## 🔧 进程管理

bash

```
ps aux                  # 显示所有进程
ps -ef                  # 显示完整格式进程
kill PID                # 终止进程
kill -9 PID             # 强制终止进程
pkill process_name      # 按名称终止进程
bg                      # 将进程放到后台
fg                      # 将进程拉到前台
jobs                    # 显示后台作业
nice -n 10 command      # 调整进程优先级
renice 10 PID           # 修改运行中进程优先级
```

## 👥 用户和权限管理

### 用户管理

bash

```
sudo command            # 以root权限执行
su                      # 切换用户
passwd                  # 修改密码
useradd username        # 添加用户
userdel username        # 删除用户
usermod options         # 修改用户属性
groupadd groupname      # 添加用户组
```

### 文件权限

bash

```
chmod 755 file          # 修改文件权限
chmod u+x file          # 给所有者添加执行权限
chown user:group file   # 修改文件所有者和组
chgrp group file        # 修改文件组
ls -l                   # 查看详细权限
umask                   # 显示默认权限掩码
```

## 🌐 网络相关

### 网络配置和诊断

bash

```
ifconfig                # 显示网络接口（旧）
ip addr                 # 显示IP地址
ip route                # 显示路由表
ping host               # 测试网络连通性
traceroute host         # 跟踪路由路径
netstat -tulnp          # 显示网络连接和端口
ss -tulnp               # 更快的netstat替代
```

### 网络工具

bash

```
wget URL                # 下载文件
curl URL                # 传输数据
scp file user@host:path # 安全复制
rsync -av source dest   # 同步文件
ssh user@host           # 远程登录
ftp host                # FTP连接
telnet host port        # Telnet连接
```

## 📦 包管理

### Ubuntu/Debian (apt)

bash

```
sudo apt update         # 更新包列表
sudo apt upgrade        # 升级所有包
sudo apt install package # 安装包
sudo apt remove package # 删除包
sudo apt search pattern # 搜索包
dpkg -i package.deb     # 安装deb包
```

### CentOS/RHEL (yum/dnf)

bash

```
sudo yum update         # 更新系统
sudo yum install package # 安装包
sudo yum remove package # 删除包
sudo dnf install package # dnf（yum的升级版）
rpm -i package.rpm      # 安装rpm包
```

## 📝 文本处理

bash

```
cat file1 file2 > combined   # 合并文件
sort file                   # 排序文件内容
uniq file                   # 去除重复行
wc file                     # 统计行数、单词数、字符数
cut -d',' -f1 file          # 按分隔符截取字段
awk '{print $1}' file       # 文本处理
sed 's/old/new/g' file      # 文本替换
diff file1 file2            # 比较文件差异
```

## 🗜️ 压缩和解压缩

bash

```
tar -czvf archive.tar.gz dir   # 创建gzip压缩包
tar -xzvf archive.tar.gz       # 解压gzip包
tar -cjvf archive.tar.bz2 dir  # 创建bz2压缩包
tar -xjvf archive.tar.bz2      # 解压bz2包
zip archive.zip file           # 创建zip压缩
unzip archive.zip              # 解压zip
gzip file                      # 压缩文件
gunzip file.gz                 # 解压文件
```

## 🛠️ 系统管理

### 服务管理 (systemd)

bash

```
sudo systemctl start service    # 启动服务
sudo systemctl stop service     # 停止服务
sudo systemctl restart service  # 重启服务
sudo systemctl status service   # 查看服务状态
sudo systemctl enable service   # 设置开机启动
sudo systemctl disable service  # 禁用开机启动
journalctl -u service           # 查看服务日志
```

### 磁盘管理

bash

```
fdisk -l                 # 列出磁盘分区
mount /dev/sdb1 /mnt     # 挂载磁盘
umount /mnt              # 卸载磁盘
blkid                    # 显示块设备UUID
lsblk                    # 以树状显示块设备
df -h                    # 显示磁盘使用情况
du -sh *                 # 显示当前目录各文件大小
```

## 📋 历史和执行记录

bash

```
history                  # 显示命令历史
!!                       # 执行上一条命令
!n                       # 执行历史中第n条命令
!string                  # 执行最近以string开头的命令
Ctrl + R                 # 搜索命令历史
alias                    # 显示所有别名
echo $PATH               # 显示PATH环境变量
```

## 🎯 实用技巧

bash

```
command > file           # 输出重定向到文件
command >> file          # 输出追加到文件
command1 | command2      # 管道，将第一个命令输出作为第二个命令输入
nohup command &          # 后台运行命令，退出终端不终止
ctrl + c                 # 终止当前命令
ctrl + z                 # 暂停当前命令
ctrl + d                 # 退出终端或结束输入
```

## 🔍 帮助文档

bash

```
man command              # 查看命令手册
command --help           # 查看命令帮助
info command             # 查看info文档
whatis command           # 显示命令简要说明
apropos keyword          # 搜索相关命令
```

这份清单涵盖了 Linux 日常使用中最常用的命令，建议收藏备用！