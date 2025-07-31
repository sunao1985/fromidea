# centos基本操作命令大全

## 系统信息命令

-   `uname -a` - 显示系统内核信息
-   `cat /etc/centos-release` - 查看CentOS版本
-   `hostname` - 显示主机名
-   `hostnamectl set-hostname 新主机名` - 修改主机名(需重启)
-   `uptime` - 显示系统运行时间和负载
-   `date` - 显示或设置系统日期时间
-   `cal` - 显示日历
-   `w` - 显示登录用户及其活动
-   `whoami` - 显示当前用户名

## 文件和目录操作

-   `ls` - 列出目录内容
    -   `ls -l` - 长格式显示
    -   `ls -a` - 显示隐藏文件
    -   `ls -lh` - 人类可读大小
-   `cd` - 切换目录
    -   `cd ~` - 返回家目录
    -   `cd -` - 返回上一个目录
-   `pwd` - 显示当前目录路径
-   `mkdir` - 创建目录
    -   `mkdir -p dir1/dir2` - 创建多级目录
-   `rmdir` - 删除空目录
-   `touch` - 创建空文件或更新文件时间戳
-   `cp` - 复制文件/目录
    -   `cp -r dir1 dir2` - 递归复制目录
-   `mv` - 移动/重命名文件或目录
-   `rm` - 删除文件/目录
    -   `rm -r` - 递归删除
    -   `rm -f` - 强制删除
-   `ln` - 创建链接
    -   `ln -s target link_name` - 创建软链接
-   `find` - 查找文件
    -   `find / -name "filename"` - 全盘查找
    -   `find . -type f -mtime -7` - 查找7天内修改的文件
-   `locate` - 快速查找文件(需先运行`updatedb`)
-   `whereis` - 查找二进制、源码和man页
-   `which` - 显示命令的完整路径

## 文件查看和编辑

-   `cat` - 显示文件内容
    -   `cat -n` - 显示行号
-   `less` / `more` - 分页查看文件
-   `head` - 显示文件开头
    -   `head -n 10` - 显示前10行
-   `tail` - 显示文件结尾
    -   `tail -n 20` - 显示最后20行
    -   `tail -f` - 实时跟踪文件变化
-   `grep` - 文本搜索
    -   `grep "pattern" file` - 在文件中搜索模式
    -   `grep -r "pattern" dir` - 递归搜索目录
    -   `grep -i` - 忽略大小写
-   `vim` / `vi` - 文本编辑器
-   `nano` - 简单文本编辑器

## 权限管理

-   `chmod` - 修改文件权限
    -   `chmod 755 file` - 设置权限为rwxr-xr-x
    -   `chmod +x file` - 添加执行权限
-   `chown` - 修改文件所有者
    -   `chown user:group file` - 修改所有者和组
-   `chgrp` - 修改文件所属组
-   `umask` - 显示或设置默认权限掩码

## 用户和组管理

-   `useradd` - 添加用户
    -   `useradd -m username` - 创建用户并创建家目录
-   `usermod` - 修改用户属性
-   `userdel` - 删除用户
    -   `userdel -r username` - 同时删除家目录
-   `passwd` - 修改密码
    -   `passwd username` - 修改指定用户密码
-   `groupadd` - 添加组
-   `groupmod` - 修改组属性
-   `groupdel` - 删除组
-   `id` - 显示用户ID和组信息
-   `who` - 显示登录用户
-   `last` - 显示用户登录历史

## 进程管理

-   `ps` - 显示进程状态
    -   `ps aux` - 显示所有进程
    -   `ps -ef` - 全格式显示
-   `top` / `htop` - 动态显示进程信息
-   `kill` - 终止进程
    -   `kill -9 PID` - 强制终止进程
-   `killall` - 按名称终止进程
-   `pkill` - 按模式终止进程
-   `pgrep` - 查找进程ID
-   `nice` - 设置进程优先级
-   `renice` - 修改运行中进程的优先级
-   `nohup` - 运行不受挂起影响的命令
-   `jobs` - 显示后台任务
-   `bg` - 将任务放到后台运行
-   `fg` - 将任务带到前台运行

## 网络相关

-   `ifconfig` / `ip addr` - 显示网络接口信息
-   `ping` - 测试网络连通性
-   `traceroute` / `tracepath` - 跟踪路由
-   `netstat` - 显示网络状态
    -   `netstat -tulnp` - 显示监听端口
-   `ss` - 替代netstat的工具
-   `dig` / `nslookup` - DNS查询
-   `host` - DNS查询工具
-   `wget` - 下载文件
-   `curl` - 传输数据
-   `scp` - 安全复制文件
    -   `scp file user@host:/path` - 复制到远程
    -   `scp user@host:/path/file .` - 从远程复制
-   `rsync` - 远程同步文件
-   `ssh` - 远程登录
    -   `ssh user@host` - 登录远程主机
-   `firewall-cmd` - 防火墙管理(CentOS 7+)
    -   `firewall-cmd --state` - 查看状态
    -   `firewall-cmd --list-all` - 列出所有规则
    -   `firewall-cmd --add-port=80/tcp --permanent` - 开放端口
    -   `firewall-cmd --reload` - 重载配置

## 包管理

### yum (CentOS 7及以下)

-   `yum install package` - 安装软件包
-   `yum remove package` - 卸载软件包
-   `yum update` - 更新所有软件包
-   `yum search keyword` - 搜索软件包
-   `yum info package` - 显示软件包信息
-   `yum list` - 列出所有软件包
-   `yum clean all` - 清理缓存

### dnf (CentOS 8+)

-   `dnf install package` - 安装软件包
-   `dnf remove package` - 卸载软件包
-   `dnf update` - 更新所有软件包
-   `dnf search keyword` - 搜索软件包
-   `dnf info package` - 显示软件包信息
-   `dnf list` - 列出所有软件包
-   `dnf clean all` - 清理缓存

### rpm

-   `rpm -ivh package.rpm` - 安装rpm包
-   `rpm -e package` - 卸载rpm包
-   `rpm -qa` - 列出所有已安装的rpm包
-   `rpm -qi package` - 显示软件包信息
-   `rpm -ql package` - 列出软件包文件

## 磁盘和存储

-   `df` - 显示磁盘空间使用情况
    -   `df -h` - 人类可读格式
-   `du` - 显示目录/文件大小
    -   `du -sh dir` - 显示目录总大小
-   `fdisk` - 磁盘分区工具
-   `parted` - 高级分区工具
-   `mkfs` - 创建文件系统
-   `mount` - 挂载文件系统
    -   `mount /dev/sdX /mnt` - 挂载设备
-   `umount` - 卸载文件系统
-   `lsblk` - 列出块设备
-   `blkid` - 显示块设备属性
-   `dd` - 转换和复制文件
    -   `dd if=/dev/sda of=backup.img` - 创建磁盘映像

## 系统服务管理

### systemd (CentOS 7+)

-   `systemctl start service` - 启动服务
-   `systemctl stop service` - 停止服务
-   `systemctl restart service` - 重启服务
-   `systemctl reload service` - 重载服务配置
-   `systemctl enable service` - 设置开机启动
-   `systemctl disable service` - 禁用开机启动
-   `systemctl status service` - 查看服务状态
-   `systemctl list-units --type=service` - 列出所有服务
-   `systemctl list-unit-files` - 列出所有服务及其状态
-   `journalctl` - 查看系统日志
    -   `journalctl -u service` - 查看指定服务日志

### service (旧版)

-   `service service_name start` - 启动服务
-   `service service_name stop` - 停止服务
-   `service service_name restart` - 重启服务
-   `service service_name status` - 查看服务状态
-   `chkconfig` - 管理服务启动项
    -   `chkconfig service_name on` - 设置开机启动
    -   `chkconfig service_name off` - 禁用开机启动

## 压缩和解压

-   `tar` - 打包和解包
    -   `tar -cvf archive.tar files` - 创建tar包
    -   `tar -xvf archive.tar` - 解压tar包
    -   `tar -czvf archive.tar.gz files` - 创建gzip压缩包
    -   `tar -xzvf archive.tar.gz` - 解压gzip包
    -   `tar -cjvf archive.tar.bz2 files` - 创建bzip2压缩包
    -   `tar -xjvf archive.tar.bz2` - 解压bzip2包
-   `gzip` / `gunzip` - gzip压缩/解压
-   `bzip2` / `bunzip2` - bzip2压缩/解压
-   `zip` / `unzip` - zip压缩/解压
-   `rar` / `unrar` - rar压缩/解压

## 系统监控和性能

-   `free` - 显示内存使用
    -   `free -h` - 人类可读格式
-   `vmstat` - 显示虚拟内存统计
-   `iostat` - 显示CPU和I/O统计
-   `sar` - 系统活动报告
-   `dmesg` - 显示内核消息
-   `lscpu` - 显示CPU信息
-   `lsusb` - 列出USB设备
-   `lspci` - 列出PCI设备
-   `dmidecode` - 显示硬件信息

## 其他实用命令

-   `alias` - 创建命令别名
-   `unalias` - 删除别名
-   `history` - 显示命令历史
-   `!!` - 重复上一条命令
-   `!$` - 上一条命令的最后一个参数
-   `clear` - 清屏
-   `echo` - 显示消息
-   `watch` - 定期执行命令
    -   `watch -n 1 command` - 每秒执行一次
-   `crontab` - 定时任务
    -   `crontab -e` - 编辑当前用户的cron任务
    -   `crontab -l` - 列出当前用户的cron任务
    -   `crontab -r` - 删除当前用户的cron任务
-   `at` - 一次性定时任务
-   `man` - 查看命令手册
-   `info` - 查看命令信息
-   `whatis` - 显示命令的简要描述
-   `apropos` - 搜索手册页
-   `shutdown` - 关机/重启
    -   `shutdown -h now` - 立即关机
    -   `shutdown -r now` - 立即重启
    -   `shutdown -h +10` - 10分钟后关机
-   `reboot` - 重启系统
-   `poweroff` - 关机
-   `exit` - 退出当前shell
-   `logout` - 注销登录

## SELinux相关

-   `sestatus` - 查看SELinux状态
-   `getenforce` - 查看SELinux执行模式
-   `setenforce 0` - 临时禁用SELinux(设为Permissive)
-   `setenforce 1` - 临时启用SELinux(设为Enforcing)
-   `restorecon` - 恢复文件的安全上下文
-   `chcon` - 修改文件的安全上下文
-   `semanage` - SELinux策略管理工具
-   `audit2allow` - 从审计日志生成SELinux策略模块

以上是CentOS系统常用的基本操作命令，适用于日常系统管理和维护工作。根据不同的CentOS版本，部分命令可能略有差异。