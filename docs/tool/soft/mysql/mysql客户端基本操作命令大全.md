# MySQL客户端基本操作命令大全



## 1. 连接MySQL服务器



```
# 基本连接
mysql -u 用户名 -p

# 指定主机和端口连接
mysql -h 主机名或IP -P 端口号 -u 用户名 -p

# 连接指定数据库
mysql -u 用户名 -p 数据库名
```

## 2. 数据库操作



```
-- 显示所有数据库
SHOW DATABASES;

-- 创建数据库
CREATE DATABASE 数据库名;

-- 删除数据库
DROP DATABASE 数据库名;

-- 选择/切换数据库
USE 数据库名;

-- 显示当前选择的数据库
SELECT DATABASE();
```

## 3. 表操作



```
-- 显示当前数据库中的所有表
SHOW TABLES;

-- 显示表结构
DESCRIBE 表名;
DESC 表名;  -- 简写
SHOW COLUMNS FROM 表名;

-- 创建表
CREATE TABLE 表名 (
    列名1 数据类型 [约束],
    列名2 数据类型 [约束],
    ...
    [PRIMARY KEY (列名)]
);

-- 删除表
DROP TABLE 表名;

-- 重命名表
RENAME TABLE 原表名 TO 新表名;

-- 修改表结构
ALTER TABLE 表名 ADD 列名 数据类型 [约束];
ALTER TABLE 表名 DROP COLUMN 列名;
ALTER TABLE 表名 MODIFY COLUMN 列名 新数据类型;
ALTER TABLE 表名 CHANGE COLUMN 原列名 新列名 数据类型;
```

## 4. 数据操作(CRUD)

### 插入数据



```
-- 插入单条数据
INSERT INTO 表名 (列1, 列2, ...) VALUES (值1, 值2, ...);

-- 插入多条数据
INSERT INTO 表名 (列1, 列2, ...) VALUES 
(值1, 值2, ...),
(值1, 值2, ...),
...;

-- 从其他表插入数据
INSERT INTO 表名 (列1, 列2, ...) 
SELECT 列1, 列2, ... FROM 源表 WHERE 条件;
```

### 查询数据



```
-- 基本查询
SELECT * FROM 表名;
SELECT 列1, 列2 FROM 表名;

-- 条件查询
SELECT * FROM 表名 WHERE 条件;

-- 排序
SELECT * FROM 表名 ORDER BY 列名 [ASC|DESC];

-- 分组
SELECT 列名, COUNT(*) FROM 表名 GROUP BY 列名;

-- 限制结果
SELECT * FROM 表名 LIMIT 数量;
SELECT * FROM 表名 LIMIT 偏移量, 数量;

-- 连接查询
SELECT * FROM 表1 JOIN 表2 ON 表1.列 = 表2.列;
```

### 更新数据



```
UPDATE 表名 SET 列1=值1, 列2=值2 WHERE 条件;
```

### 删除数据



```
DELETE FROM 表名 WHERE 条件;

-- 清空表(更高效)
TRUNCATE TABLE 表名;
```

## 5. 用户和权限管理



```
-- 创建用户
CREATE USER '用户名'@'主机' IDENTIFIED BY '密码';

-- 删除用户
DROP USER '用户名'@'主机';

-- 授予权限
GRANT 权限 ON 数据库.表 TO '用户名'@'主机';

-- 撤销权限
REVOKE 权限 ON 数据库.表 FROM '用户名'@'主机';

-- 刷新权限
FLUSH PRIVILEGES;

-- 查看用户权限
SHOW GRANTS FOR '用户名'@'主机';
```

## 6. 实用命令



```
-- 显示服务器状态
STATUS;

-- 显示服务器版本
SELECT VERSION();

-- 显示当前用户
SELECT USER();

-- 执行外部SQL文件
SOURCE /路径/文件名.sql;

-- 退出MySQL客户端
EXIT;
\q
```

## 7. 事务操作



```
-- 开始事务
START TRANSACTION;

-- 提交事务
COMMIT;

-- 回滚事务
ROLLBACK;

-- 设置自动提交
SET autocommit = 0;  -- 关闭自动提交
SET autocommit = 1;  -- 开启自动提交
```

## 8. 索引操作



```
-- 创建索引
CREATE INDEX 索引名 ON 表名 (列名);

-- 创建唯一索引
CREATE UNIQUE INDEX 索引名 ON 表名 (列名);

-- 删除索引
DROP INDEX 索引名 ON 表名;

-- 显示索引
SHOW INDEX FROM 表名;
```

## 9. 视图操作



```
-- 创建视图
CREATE VIEW 视图名 AS SELECT语句;

-- 使用视图
SELECT * FROM 视图名;

-- 删除视图
DROP VIEW 视图名;
```

## 10. 备份与恢复



```
# 导出整个数据库
mysqldump -u 用户名 -p 数据库名 > 备份文件.sql

# 导出特定表
mysqldump -u 用户名 -p 数据库名 表名 > 备份文件.sql

# 导入数据库
mysql -u 用户名 -p 数据库名 < 备份文件.sql
```

这些命令涵盖了MySQL客户端的基本操作，适合日常数据库管理和开发使用。